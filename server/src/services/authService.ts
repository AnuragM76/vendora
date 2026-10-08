import { z } from 'zod';
import { hash, verify, argon2id } from 'argon2';
import { prisma } from '../lib/prisma';
import { v4 as uuidv4 } from 'uuid';

export const PUBLIC_ROLES = ['CUSTOMER', 'VENDOR'] as const;
export const ALL_ROLES = ['CUSTOMER', 'VENDOR', 'ADMIN'] as const;
export type Role = (typeof ALL_ROLES)[number];

export const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters').max(200),
  role: z.enum(PUBLIC_ROLES).default('CUSTOMER'),
  phone: z.string().max(20).optional(),
  city: z.string().max(100).optional(),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

export class AuthService {
  async hashPassword(password: string): Promise<string> {
    return hash(password, { type: argon2id, memoryCost: 65536, timeCost: 3, parallelism: 4 });
  }

  async verifyPassword(hash: string, password: string): Promise<boolean> {
    try {
      return await verify(hash, password);
    } catch {
      return false;
    }
  }

  async signup(input: SignupInput): Promise<{ id: string } | { error: string; code?: string }> {
    const email = input.email.trim().toLowerCase();
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return { error: 'An account with this email already exists.', code: 'EMAIL_EXISTS' };
    }

    const passwordHash = await this.hashPassword(input.password);
    const user = await prisma.user.create({
      data: {
        id: uuidv4(),
        name: input.name.trim(),
        email,
        passwordHash,
        role: input.role,
        phone: input.phone?.trim() || undefined,
        city: input.city?.trim() || undefined,
      },
    });

    if (input.role === 'VENDOR') {
      const defaultCategory = await prisma.category.findFirst();
      await prisma.vendorProfile.create({
        data: {
          id: `v-${uuidv4().slice(0, 8)}`,
          userId: user.id,
          businessName: user.name,
          categoryId: defaultCategory ? defaultCategory.id : '',
          location: user.city || 'Pune',
          rating: 5.0,
          reviewCount: 0,
          experienceYears: 1,
          startingPrice: 25000,
          verified: false,
          availability: true,
          featured: false,
          shortDescription: `Professional event services by ${user.name}`,
          description: `Welcome to ${user.name}. We provide specialized event management and services.`,
          images: [],
          services: [],
          styles: ['Modern'],
          languages: ['English', 'Hindi'],
          serviceAreas: [user.city || 'Pune'],
          eventTypes: ['Wedding', 'Party'],
        },
      });
    }

    return { id: user.id };
  }

  async login(input: LoginInput): Promise<{ id: string; user?: any } | { error: string }> {
    const email = input.email.trim().toLowerCase();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return { error: 'Invalid email or password' };
    }
    const ok = await this.verifyPassword(user.passwordHash, input.password);
    if (!ok) {
      return { error: 'Invalid email or password' };
    }
    return { id: user.id, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
  }

  async getCurrentUser(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        vendorProfile: {
          select: { id: true, businessName: true, verified: true, categoryId: true },
        },
      },
    });
    if (!user) return null;
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role as Role,
      phone: user.phone ?? undefined,
      city: user.city ?? undefined,
      avatar: user.avatar ?? undefined,
      vendorProfile: user.vendorProfile ?? undefined,
    };
  }
}

export const authService = new AuthService();