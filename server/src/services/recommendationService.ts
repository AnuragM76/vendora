export interface RecommendationWeights {
  budget: number;
  location: number;
  rating: number;
  availability: number;
  style: number;
  experience: number;
  eventFit: number;
}

export const DEFAULT_WEIGHTS: RecommendationWeights = {
  budget: 0.25,
  location: 0.15,
  rating: 0.15,
  availability: 0.15,
  style: 0.15,
  experience: 0.10,
  eventFit: 0.05,
};

export interface RecommendationBreakdown {
  budget: number;
  location: number;
  rating: number;
  availability: number;
  style: number;
  experience: number;
  eventFit: number;
}

export interface RecommendationResult {
  vendorId: string;
  vendor: any;
  score: number;
  breakdown: RecommendationBreakdown;
  reason: string;
}

export interface OptimizedVendorCombination {
  totalPrice: number;
  averageRating: number;
  overallMatch: number;
  budgetRemaining: number;
  items: Array<{
    category: string;
    vendorId: string;
    vendorName: string;
    price: number;
    rating: number;
    matchScore: number;
    featuredImage?: string | null;
  }>;
}

export interface RecommendationEngine {
  recommend(event: any, vendors: any[]): Promise<RecommendationResult[]>;
  generateCombination(event: any, recommendations: RecommendationResult[]): OptimizedVendorCombination;
}

export class RuleBasedRecommendationEngine implements RecommendationEngine {
  private weights: RecommendationWeights;

  constructor(weights: RecommendationWeights = DEFAULT_WEIGHTS) {
    this.weights = weights;
  }

  calculateBreakdown(vendor: any, event: any): { score: number; breakdown: RecommendationBreakdown; reason: string } {
    // 1. Location Score (0 - 100)
    let locationScore = 65;
    const vendorLoc = (vendor.location || '').toLowerCase();
    const eventLoc = (event.location || '').toLowerCase();
    const areas = (vendor.serviceAreas || []).map((a: string) => a.toLowerCase());

    if (vendorLoc === eventLoc) {
      locationScore = 98;
    } else if (areas.includes(eventLoc)) {
      locationScore = 92;
    } else if (vendorLoc.includes(eventLoc) || eventLoc.includes(vendorLoc)) {
      locationScore = 85;
    }

    // 2. Budget Score (0 - 100)
    let budgetScore = 80;
    const categoryName = vendor.category?.name || vendor.category || '';
    const catKey = categoryName.toLowerCase();
    const allocations = (event.budgetAllocations as Record<string, number>) || {};
    const allocatedBudget = allocations[catKey] || Math.round((event.budget || 200000) * 0.22);
    const guestCount = event.guestCount || 200;

    if (catKey === 'catering') {
      const estimatedCateringCost = (vendor.startingPrice || 800) * guestCount;
      if (estimatedCateringCost <= allocatedBudget) {
        budgetScore = 96;
      } else if (estimatedCateringCost <= allocatedBudget * 1.25) {
        budgetScore = 84;
      } else {
        budgetScore = Math.max(50, Math.round(90 - ((estimatedCateringCost - allocatedBudget) / allocatedBudget) * 50));
      }
    } else {
      const vendorPrice = vendor.startingPrice || 35000;
      if (vendorPrice <= allocatedBudget) {
        budgetScore = 96;
      } else if (vendorPrice <= allocatedBudget * 1.25) {
        budgetScore = 85;
      } else {
        budgetScore = Math.max(50, Math.round(90 - ((vendorPrice - allocatedBudget) / allocatedBudget) * 50));
      }
    }

    // 3. Rating Score (0 - 100)
    const ratingScore = Math.min(100, Math.round(((vendor.rating || 4.5) / 5.0) * 100));

    // 4. Availability Score (0 - 100)
    const availabilityScore = vendor.availability ? 100 : 45;

    // 5. Style Score (0 - 100)
    const eventStyles: string[] = Array.isArray(event.style) ? event.style : [];
    const vendorStyles: string[] = Array.isArray(vendor.styles) ? vendor.styles : [];
    let styleMatches = 0;
    for (const s of vendorStyles) {
      if (eventStyles.some((es: string) => es.toLowerCase() === s.toLowerCase())) {
        styleMatches++;
      }
    }
    let styleScore = 70;
    if (styleMatches >= 2) {
      styleScore = 96;
    } else if (styleMatches === 1) {
      styleScore = 88;
    } else if (vendorStyles.length > 0) {
      styleScore = 78;
    }

    // 6. Experience Score (0 - 100)
    const exp = vendor.experienceYears || vendor.experience || 3;
    const experienceScore = Math.min(100, Math.max(60, Math.round(60 + exp * 4)));

    // 7. Event Fit Score (0 - 100)
    const eventType = (event.type || 'Wedding').toLowerCase();
    const vendorEventTypes = (vendor.eventTypes || []).map((t: string) => t.toLowerCase());
    let eventFitScore = 75;
    if (vendorEventTypes.includes(eventType) || vendorEventTypes.includes('all')) {
      eventFitScore = 98;
    } else if (vendorEventTypes.length > 0) {
      eventFitScore = 82;
    }

    // Overall Weighted Score
    const overallScore = Math.round(
      budgetScore * this.weights.budget +
      locationScore * this.weights.location +
      ratingScore * this.weights.rating +
      availabilityScore * this.weights.availability +
      styleScore * this.weights.style +
      experienceScore * this.weights.experience +
      eventFitScore * this.weights.eventFit
    );

    const score = Math.min(99, Math.max(60, overallScore));

    // Build humanized explanation reasons
    const reasons: string[] = [];
    if (budgetScore >= 85) reasons.push('Strong budget compatibility');
    if (locationScore >= 90) reasons.push(`Direct service in ${event.location}`);
    if (vendor.rating >= 4.7) reasons.push(`Outstanding ${vendor.rating}★ rating from past hosts`);
    if (styleMatches > 0) reasons.push('Aligns with your preferred celebration style');
    if (vendor.availability) reasons.push('Open for your target event timeframe');
    if (exp >= 7) reasons.push(`Over ${exp} years of verified industry expertise`);

    const reason = reasons.length > 0
      ? reasons.slice(0, 3).join(', ') + '.'
      : 'Good overall fit for your event parameters.';

    return {
      score,
      breakdown: {
        budget: budgetScore,
        location: locationScore,
        rating: ratingScore,
        availability: availabilityScore,
        style: styleScore,
        experience: experienceScore,
        eventFit: eventFitScore,
      },
      reason,
    };
  }

  async recommend(event: any, vendors: any[]): Promise<RecommendationResult[]> {
    const results = vendors.map((vendor) => {
      const { score, breakdown, reason } = this.calculateBreakdown(vendor, event);
      return {
        vendorId: vendor.id,
        vendor,
        score,
        breakdown,
        reason,
      };
    });

    results.sort((a, b) => b.score - a.score);
    return results;
  }

  generateCombination(event: any, recommendations: RecommendationResult[]): OptimizedVendorCombination {
    const requiredCategories: string[] = Array.isArray(event.requirements) && event.requirements.length > 0
      ? event.requirements
      : ['Photography', 'Catering', 'Decoration', 'Venue'];

    const items: OptimizedVendorCombination['items'] = [];
    const usedVendorIds = new Set<string>();

    for (const reqCat of requiredCategories) {
      const match = recommendations.find(
        (r) =>
          !usedVendorIds.has(r.vendorId) &&
          (r.vendor.category?.name || r.vendor.category || '').toLowerCase() === reqCat.toLowerCase()
      );

      if (match) {
        usedVendorIds.add(match.vendorId);
        const price = match.vendor.startingPrice || 40000;
        items.push({
          category: reqCat,
          vendorId: match.vendorId,
          vendorName: match.vendor.businessName || match.vendor.name,
          price,
          rating: match.vendor.rating || 4.8,
          matchScore: match.score,
          featuredImage: match.vendor.featuredImage,
        });
      }
    }

    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    const averageRating = items.length > 0
      ? Math.round((items.reduce((sum, item) => sum + item.rating, 0) / items.length) * 10) / 10
      : 4.8;
    const overallMatch = items.length > 0
      ? Math.round(items.reduce((sum, item) => sum + item.matchScore, 0) / items.length)
      : 92;
    const budget = event.budget || 250000;
    const budgetRemaining = Math.max(0, budget - totalPrice);

    return {
      totalPrice,
      averageRating,
      overallMatch,
      budgetRemaining,
      items,
    };
  }
}

export const recommendationService = new RuleBasedRecommendationEngine();
