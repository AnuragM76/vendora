import { Vendor } from '../types';

export const mockVendors: Vendor[] = [
  // 1. Photography - Pune
  {
    id: 'v-photo-1',
    name: 'Lens & Light Studio',
    category: 'Photography',
    location: 'Pune',
    rating: 4.9,
    reviewCount: 142,
    experience: 8,
    startingPrice: 45000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: 'Award-winning candid wedding & editorial photography masters based in Koregaon Park.',
    description: 'Lens & Light Studio specializes in timeless, emotive wedding stories. With a team trained at international photography institutes, we capture spontaneous moments, rich cultural nuances, and cinematic portraits without staged stiffness.',
    featuredImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Candid Wedding Photography', 'Traditional Photography', 'Pre-Wedding Shoot', 'Drone Cinematography', 'Handcrafted Flush Albums'],
    packages: [
      {
        id: 'p-1',
        name: 'Essential Day',
        price: 45000,
        description: 'Single day coverage with 1 Candid Photographer & 1 Traditional Photographer.',
        features: ['1 Candid + 1 Traditional Photographer', 'Full-day coverage (up to 10 hours)', '300 high-res edited digital photos', 'Online private gallery for 6 months']
      },
      {
        id: 'p-2',
        name: 'Signature 2-Day Wedding',
        price: 75000,
        popular: true,
        description: 'Comprehensive 2-day coverage including Sangeet, Haldi, & Wedding.',
        features: ['2 Candid Photographers + 2 Traditional Photographers', 'Pre-wedding outdoor couple shoot included', '600+ edited photographs', '1 Luxury Leather Embossed Album (40 sheets)', 'Same-day sneak peek edits']
      },
      {
        id: 'p-3',
        name: 'Royal Heritage Package',
        price: 120000,
        description: 'Complete royal wedding documentation with drone and luxury photo book set.',
        features: ['Senior Lead Photographer + 4 Crew Members', 'Cinematic 4K Drone photography', '2 Master Albums + 2 Mini Parent Albums', 'Unlimited photos with color-graded master catalog']
      }
    ],
    styles: ['Candid', 'Editorial', 'Traditional', 'Modern'],
    contact: {
      phone: '+91 98220 44102',
      email: 'hello@lensandlight.in',
      instagram: '@lensandlight_weddings',
      address: 'Lane 7, Koregaon Park, Pune, Maharashtra 411001'
    },
    languages: ['English', 'Hindi', 'Marathi'],
    serviceAreas: ['Pune', 'Mumbai', 'Lonavala', 'Mahabaleshwar', 'Goa'],
    eventTypes: ['Wedding', 'Engagement', 'Anniversary', 'Corporate'],
    reviews: [
      {
        id: 'r-1',
        userName: 'Tanvi & Rahul Kulkarni',
        rating: 5,
        date: '14 Jan 2026',
        comment: 'Lens & Light made our Pune wedding look like a movie! Their candid photographer caught all our secret smiles and emotional tears.',
        eventType: 'Wedding'
      },
      {
        id: 'r-2',
        userName: 'Priya Deshmukh',
        rating: 4.8,
        date: '02 Dec 2025',
        comment: 'Punctual, gentle crew, never intrusive. The album quality was beyond our expectations!',
        eventType: 'Engagement'
      }
    ],
    aiHighlights: ['Top Budget-to-Quality Score in Pune', '4.9 Star Rating over 140+ reviews', 'Available for Peak Weekend Dates']
  },

  // 2. Photography - Mumbai
  {
    id: 'v-photo-2',
    name: 'Pixel & Petals Storytellers',
    category: 'Photography',
    location: 'Mumbai',
    rating: 4.8,
    reviewCount: 96,
    experience: 7,
    startingPrice: 55000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: 'Cinematic visual storytellers crafted for luxury Bandra & South Bombay weddings.',
    description: 'We believe your wedding is a documentary of love. Pixel & Petals captures the raw glamour, tearful vidais, and joyous sangeet choreographies with bespoke color tones and timeless film-inspired grading.',
    featuredImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519225438848-038c116d9b4b?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Luxury Candid Photography', 'Fashion Editorial Pre-wedding', 'Live Streaming Setup', 'Signature Velvet Albums'],
    packages: [
      {
        id: 'p-4',
        name: 'Urban Chic',
        price: 55000,
        description: 'Single day reception or intimate wedding celebration.',
        features: ['1 Senior Candid Photographer + 1 Associate', '250 color-corrected images', 'Raw photo dump via USB', 'Delivery within 21 days']
      },
      {
        id: 'p-5',
        name: 'The Grand Mumbai Wedding',
        price: 95000,
        popular: true,
        description: 'Two full days covering Mehendi, Cocktail, & Wedding Ceremony.',
        features: ['Team of 4 visual artists', 'Drone footage included', '500 master edited shots', 'Hardcover Coffee Table Book', '1 minute Instagram teaser within 48h']
      }
    ],
    styles: ['Luxury', 'Candid', 'Modern'],
    contact: {
      phone: '+91 99201 88344',
      email: 'contact@pixelandpetals.com',
      instagram: '@pixelandpetals_in',
      address: 'Pali Hill, Bandra West, Mumbai, Maharashtra 400050'
    },
    languages: ['English', 'Hindi', 'Gujarati'],
    serviceAreas: ['Mumbai', 'Thane', 'Alibaug', 'Goa'],
    eventTypes: ['Wedding', 'Party', 'Corporate', 'Engagement'],
    reviews: [
      {
        id: 'r-3',
        userName: 'Aanya & Siddharth Mehta',
        rating: 5,
        date: '28 Feb 2026',
        comment: 'Every single photo looks straight out of Vogue Weddings! Super responsive and pleasant crew.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Specialized in Glamour & High-Society Events', 'Ultra-fast 48hr Social Teaser Delivery']
  },

  // 3. Catering - Pune
  {
    id: 'v-cat-1',
    name: 'Rasoi Royal Gourmet Caterers',
    category: 'Catering',
    location: 'Pune',
    rating: 4.9,
    reviewCount: 210,
    experience: 14,
    startingPrice: 750, // per plate
    verified: true,
    availability: true,
    featured: true,
    shortDescription: 'Regal Maharashtrian, North Indian, and global fusion wedding banquet experiences.',
    description: 'From authentic Peshwai delicacies to live dim sum counters, Italian woodfired stations, and artisanal desserts, Rasoi Royal delivers impeccable hospitality, pristine hygiene standards, and unforgettable culinary flair.',
    featuredImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Buffet & Plated Service', 'Live Cooking Stations', 'Artisanal Dessert Bars', 'Uniformed Waitstaff', 'Custom Crockery & Cutlery'],
    packages: [
      {
        id: 'p-cat-1',
        name: 'Silver Feast (Veg)',
        price: 750,
        description: 'Per plate (min 150 pax). 3 Starters, 2 Mains, Dal, Rice, 2 Desserts, Breads.',
        features: ['3 Welcome Drinks + 3 Starters', '2 Paneer & Veg Mains + Dal Tadka', 'Jeera Rice + Assorted Naans & Rotis', 'Gulab Jamun with Rabdi + Ice cream', 'Complete chinaware & cutlery']
      },
      {
        id: 'p-cat-2',
        name: 'Gold Royal Spread',
        price: 1100,
        popular: true,
        description: 'Per plate. Grand multi-cuisine spread with 2 Live Interactive Counters.',
        features: ['5 Starters (including Chaat counter)', 'Live Pasta & Dim Sum Bar', '4 Gourmet Curries + Biryani & Pulao', '3 Artisanal Desserts + Kulfi counter', 'Premium linen & floral buffet styling']
      },
      {
        id: 'p-cat-3',
        name: 'Imperial Platinum Banquet',
        price: 1650,
        description: 'Per plate. Luxury dining with bespoke chef tables and international grazing tables.',
        features: ['Gourmet Cheese & Mezze Grazing Table', '6 Starters + 3 Live Stations', 'Regional Royal Specialities (Awadhi/Maharashtrian)', 'Handcrafted French Patisserie Bar', 'Executive Butler Service']
      }
    ],
    styles: ['Traditional', 'Royal', 'Modern', 'Fusion'],
    contact: {
      phone: '+91 94230 19920',
      email: 'banquets@rasoiroyal.in',
      instagram: '@rasoiroyal_catering',
      address: 'Senapati Bapat Road, Shivaji Nagar, Pune, Maharashtra 411016'
    },
    languages: ['Marathi', 'Hindi', 'English'],
    serviceAreas: ['Pune', 'Satara', 'Pimpri-Chinchwad', 'Lonavala'],
    eventTypes: ['Wedding', 'Corporate', 'Anniversary', 'Birthday'],
    reviews: [
      {
        id: 'r-cat-1',
        userName: 'Suresh Patil',
        rating: 5,
        date: '10 Feb 2026',
        comment: 'Guests are still talking about the Puram Poli and the live pasta counter! Zero wastage, prompt refills, and clean uniform staff.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Consistent 4.9 Food Safety & Taste Rating', 'Extensive Pure-Veg & Multi-Cuisine Versatility']
  },

  // 4. Decoration - Pune
  {
    id: 'v-dec-1',
    name: 'Utsav Mandap & Floral Decor',
    category: 'Decoration',
    location: 'Pune',
    rating: 4.8,
    reviewCount: 168,
    experience: 11,
    startingPrice: 60000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: 'Grand floral mandaps, fairy light canopies, and bespoke eco-friendly stage designs.',
    description: 'Transforming ballrooms and lawns into magical wonderlands. We integrate fresh exotic florals, brass traditional urns, sustainable materials, and ambient architectural lighting.',
    featuredImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Mandap Architecture', 'Floral Backdrops', 'Entrance Walkways', 'Mood Lighting & Trussing', 'Table Centerpieces'],
    packages: [
      {
        id: 'p-dec-1',
        name: 'Vibrant Floral Charm',
        price: 60000,
        description: 'Perfect for intimate indoor weddings or engagement ceremonies.',
        features: ['Carved traditional mandap with marigold & tuberose', 'Bride-groom sofa stage setup', '40ft Entrance floral drape runner', 'Basic par-can warm mood lighting']
      },
      {
        id: 'p-dec-2',
        name: 'Bespoke Fairytale Lawn',
        price: 130000,
        popular: true,
        description: 'Open-air lawn decoration with fairy lights canopy & exotic floral mandap.',
        features: ['Exotic orchid & rose 4-pillar open dome mandap', '5,000 sq ft Fairy light starry night tunnel', '10 Guest table centerpieces with brass diyas', 'Photo-booth floral ring with neon typography']
      }
    ],
    styles: ['Traditional', 'Luxury', 'Minimalist'],
    contact: {
      phone: '+91 98902 33411',
      email: 'designs@utsavdecor.com',
      instagram: '@utsavmandap_pune',
      address: 'Karve Road, Kothrud, Pune, Maharashtra 411038'
    },
    languages: ['Marathi', 'Hindi', 'English'],
    serviceAreas: ['Pune', 'PCMC', 'Lonavala'],
    eventTypes: ['Wedding', 'Engagement', 'Party'],
    reviews: [
      {
        id: 'r-dec-1',
        userName: 'Deepa & Omkar Joshi',
        rating: 5,
        date: '20 Jan 2026',
        comment: 'The floral mandap was breathtaking. Everyone took selfies at the entrance tunnel!',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Eco-friendly fresh bloom guarantee', 'Fast 4-hour turnaround setup']
  },

  // 5. Venue - Pune
  {
    id: 'v-ven-1',
    name: 'The Royal Oxford Pavilion',
    category: 'Venue',
    location: 'Pune',
    rating: 4.9,
    reviewCount: 88,
    experience: 9,
    startingPrice: 150000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: 'Sprawling lush green resort lawn with luxury banquet hall & scenic hill backdrop.',
    description: 'Nestled near Bavdhan overlooking lush valley hills, The Royal Oxford Pavilion features a pillar-less 800-capacity banquet hall and a 25,000 sq ft manicured lawn for sunset weddings.',
    featuredImage: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['AC Banquet Hall (800 pax)', 'Open Air Lawn (1500 pax)', 'Bridal Suites (4 Luxury Rooms)', 'Valet Parking for 200 Cars', 'In-house Generator Backup'],
    packages: [
      {
        id: 'p-ven-1',
        name: 'Single Slot Lawn/Hall',
        price: 150000,
        description: 'Morning (8 AM - 4 PM) or Evening (5 PM - 11 PM) rental.',
        features: ['Air-conditioned banquet or main amphitheater lawn', '2 complimentary air-conditioned green rooms', 'Full power backup', 'Cleaning and sanitization staff']
      },
      {
        id: 'p-ven-2',
        name: 'Full Day Grand Sovereign',
        price: 260000,
        popular: true,
        description: '24-hour exclusive venue access including overnight setup.',
        features: ['Both Banquet + Lawn included', '4 Luxury stay rooms for bride/groom family', 'Dedicated venue manager on-site', 'Ample valet parking setup']
      }
    ],
    styles: ['Luxury', 'Royal', 'Modern'],
    contact: {
      phone: '+91 97660 55432',
      email: 'events@royaloxford.in',
      address: 'Bavdhan Valley Road, Pune, Maharashtra 411021'
    },
    languages: ['English', 'Hindi', 'Marathi'],
    serviceAreas: ['Pune'],
    eventTypes: ['Wedding', 'Corporate', 'Engagement', 'Party'],
    reviews: [
      {
        id: 'r-ven-1',
        userName: 'Gaurav Shinde',
        rating: 4.9,
        date: '04 Jan 2026',
        comment: 'Stunning sunsets, flawless staff support. Our 400 guests loved the parking convenience and open lawns.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Highest guest capacity satisfaction in Western Pune', 'Spectacular sunset photo vantage']
  },

  // 6. Makeup - Pune
  {
    id: 'v-mu-1',
    name: 'Shringar Bridal & HD Beauty Bar',
    category: 'Makeup',
    location: 'Pune',
    rating: 4.9,
    reviewCount: 115,
    experience: 6,
    startingPrice: 18000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: 'Airbrush & HD bridal beauty artists trained in London, creating radiant natural looks.',
    description: 'Every bride deserves to look like the most radiant version of herself. Shringar specializes in sweat-proof HD makeup, traditional nauvari bridal draping, and contemporary textured hair styling.',
    featuredImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Bridal HD Makeup', 'Airbrush Makeup', 'Saree & Dupatta Draping', 'Hair Styling & Extensions', 'Family Makeup Packages'],
    packages: [
      {
        id: 'p-mu-1',
        name: 'Bridal HD Signature',
        price: 18000,
        description: 'Flawless camera-ready makeup for main wedding or sangeet.',
        features: ['HD makeup with high-end brands (MAC, Huda, Charlotte Tilbury)', 'Hairstyling with hair extensions & accessories', 'Intricate saree or lehenga draping', 'Lashes and nail paint included']
      },
      {
        id: 'p-mu-2',
        name: 'Bridal Airbrush Radiance',
        price: 28000,
        popular: true,
        description: 'Silicon airbrush formulation lasting 18+ hours without touchup.',
        features: ['Temptu Pro Airbrush Application', 'Pre-bridal skin consultation & trial session', 'Includes 2 basic party makeups for mother/sister', 'Jewellery placement & floral hair insertion']
      }
    ],
    styles: ['Modern', 'Traditional', 'Minimalist'],
    contact: {
      phone: '+91 91750 99821',
      email: 'glam@shringarbeauty.com',
      instagram: '@shringar_bridal_pune',
      address: 'Aundh Harmony Suites, Pune, Maharashtra 411007'
    },
    languages: ['English', 'Hindi', 'Marathi'],
    serviceAreas: ['Pune', 'Mumbai', 'Nashik'],
    eventTypes: ['Wedding', 'Engagement', 'Party'],
    reviews: [
      {
        id: 'r-mu-1',
        userName: 'Radhika Rao',
        rating: 5,
        date: '18 Jan 2026',
        comment: 'She kept my skin glowing without looking cakey at all! The makeup stayed fresh from 9 AM to 11 PM.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Luxury cosmetics guarantee (No cheap fillers)', 'Specialized in South & West Indian bridal drape']
  },

  // 7. DJ & Entertainment - Mumbai
  {
    id: 'v-dj-1',
    name: 'BeatDrop Sound & Bollywood Live',
    category: 'DJ',
    location: 'Mumbai',
    rating: 4.8,
    reviewCount: 130,
    experience: 8,
    startingPrice: 35000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: 'Electrifying Bollywood, Punjabi Dhol, and international EDM fusion sets for Sangeet & Cocktails.',
    description: 'We turn every dance floor into an unforgettable festival. Complete with custom visual LED walls, CO2 jets, intelligent beam lighting, and interactive MCs who keep the energy pumping till the early hours.',
    featuredImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Celebrity DJ Sets', 'Live Dhol Players (Nashik/Punjabi)', 'Line Array Sound Systems', 'Intelligent Stage Lighting & Smoke', 'Bespoke Mashups'],
    packages: [
      {
        id: 'p-dj-1',
        name: 'Club Sound Standard',
        price: 35000,
        description: 'Ideal for 150-250 guest party or Sangeet night.',
        features: ['Pro DJ with Pioneer CDJ 3000 setup', 'JBL VRX Sound System (4 Tops + 2 Subs)', '4 Sharpy Moving Heads + Smoke Machine', 'Up to 5 hours continuous performance']
      },
      {
        id: 'p-dj-2',
        name: 'Sangeet Arena Experience',
        price: 65000,
        popular: true,
        description: 'High energy experience with Live Dhol and Cold Pyro sparks.',
        features: ['Headlining DJ + Professional Anchor/Emcee', '2 Live Punjabi / Nashik Dhol drummers for Baraat', 'RCF Line Array Sound with 4 dual 18" Subwoofers', 'Cold spark fountains (6 units for couple entry)', 'Custom LED visual DJ console']
      }
    ],
    styles: ['Modern', 'Fusion'],
    contact: {
      phone: '+91 98199 44321',
      email: 'bookings@beatdropindia.com',
      instagram: '@dj_beatdrop_mumbai',
      address: 'Andheri West, Mumbai, Maharashtra 400053'
    },
    languages: ['Hindi', 'English', 'Punjabi'],
    serviceAreas: ['Mumbai', 'Pune', 'Goa', 'Udaipur'],
    eventTypes: ['Party', 'Wedding', 'Corporate', 'College Event'],
    reviews: [
      {
        id: 'r-dj-1',
        userName: 'Karan Virani',
        rating: 5,
        date: '12 Jan 2026',
        comment: 'Nobody left the dance floor until 3 AM. The dhol coordination with Bollywood drops was epic!',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Zero Dead-Floor Guarantee', 'Bespoke Couple Entrance Soundtracks']
  },

  // 8. Videography - Pune
  {
    id: 'v-vid-1',
    name: 'CineStory 4K Wedding Films',
    category: 'Videography',
    location: 'Pune',
    rating: 4.9,
    reviewCount: 84,
    experience: 7,
    startingPrice: 40000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: 'Emotion-driven documentary wedding films, 4K teasers, and drone aerial cinematography.',
    description: 'We don’t just record video; we weave stories with sound design, vows audio, family interviews, and breathtaking color grading that feels like cinema.',
    featuredImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['4K Cinematic Wedding Highlights (3-5 min)', 'Full Documentary Ceremony Film (40-60 min)', 'Drone Aerial Video', 'Reels Package for Instagram (5 Reels within 72h)'],
    packages: [
      {
        id: 'p-vid-1',
        name: 'Cinematic Reel & Film',
        price: 40000,
        description: 'Single day wedding cinematography with teaser.',
        features: ['2 Cinematographers with Sony FX3 cinema cameras', '3-minute cinematic trailer', '30-minute documentary edit', 'Audio vow recording with lavalier mics']
      },
      {
        id: 'p-vid-2',
        name: 'The Feature Wedding Movie',
        price: 75000,
        popular: true,
        description: '2-Day cinematic coverage with drone and fast Instagram reels delivery.',
        features: ['3 Cinematographers + 1 Drone pilot', '5-minute 4K Cinema Trailer + 60-min Feature Film', '3 Trending Vertical Reels for Instagram', 'Delivered in custom wooden keepsake pendrive']
      }
    ],
    styles: ['Editorial', 'Modern', 'Candid'],
    contact: {
      phone: '+91 97633 11200',
      email: 'cinestoryfilms@gmail.com',
      address: 'Baner Road, Pune, Maharashtra 411045'
    },
    languages: ['English', 'Marathi', 'Hindi'],
    serviceAreas: ['Pune', 'Mumbai', 'Nashik', 'Goa'],
    eventTypes: ['Wedding', 'Engagement', 'Anniversary'],
    reviews: [
      {
        id: 'r-vid-1',
        userName: 'Sneha & Amit Chordia',
        rating: 5,
        date: '22 Jan 2026',
        comment: 'Cried happy tears watching our trailer! They captured my grandma laughing and our vows so crisply.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Specialized in fast Instagram Reels delivery', 'Cinema-grade Sony FX line optics']
  },

  // 9. Event Planning - Pune
  {
    id: 'v-plan-1',
    name: 'Vivah Sutra Luxury Planners',
    category: 'Event Planning',
    location: 'Pune',
    rating: 4.9,
    reviewCount: 72,
    experience: 10,
    startingPrice: 70000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: 'Turnkey wedding planning, vendor orchestration, guest hospitality & RS-VP management.',
    description: 'We shoulder all the stress so you can celebrate freely. From venue scouting, decor design, licensing, artist booking, to on-ground bridal shadows and hospitality desks.',
    featuredImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Complete End-to-End Planning', 'Partial Coordination (Day-of)', 'Hospitality & Logistics', 'Budget Optimization & Vendor Contracting', 'License & Permissions'],
    packages: [
      {
        id: 'p-plan-1',
        name: 'Day-Of Coordination',
        price: 70000,
        description: 'Flawless execution during event days for pre-booked vendors.',
        features: ['3 Dedicated on-site coordinators', 'Complete vendor itinerary management', 'Guest transport & check-in oversight', 'Emergency crisis kit on standby']
      },
      {
        id: 'p-plan-2',
        name: 'Full Turnkey Planning',
        price: 150000,
        popular: true,
        description: '6 months of proactive planning, design styling, vendor negotiations.',
        features: ['Dedicated Lead Planner from day 1', 'Negotiation with all vendors (save up to 15-20% on costs)', 'Custom 3D layout decor walkthroughs', 'Bridal shadow assistant for the couple']
      }
    ],
    styles: ['Luxury', 'Modern', 'Traditional'],
    contact: {
      phone: '+91 99224 88712',
      email: 'plan@vivahsutra.in',
      address: 'Kalyani Nagar, Pune, Maharashtra 411006'
    },
    languages: ['English', 'Hindi', 'Marathi', 'Gujarati'],
    serviceAreas: ['Pune', 'Mumbai', 'Lonavala', 'Mahabaleshwar'],
    eventTypes: ['Wedding', 'Corporate', 'Anniversary'],
    reviews: [
      {
        id: 'r-plan-1',
        userName: 'Vikramaditya & Niharika',
        rating: 5,
        date: '08 Feb 2026',
        comment: 'They saved us at least ₹1.5 Lakhs by renegotiating vendor quotes! The event flowed without a single hiccup.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Average 15% Client Budget Savings via Vendor Network', 'Dedicated Bride/Groom Personal Shadow']
  },

  // 10. Photography - Bengaluru
  {
    id: 'v-photo-3',
    name: 'The Garden City Frames',
    category: 'Photography',
    location: 'Bengaluru',
    rating: 4.8,
    reviewCount: 110,
    experience: 9,
    startingPrice: 50000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: 'Contemporary candid storytellers capturing South Indian & fusion cross-cultural weddings.',
    description: 'Based in Indiranagar, Bengaluru, we bring a warm, earthy aesthetic to every ceremony. Renowned for capturing emotional muhurtham moments, playful haldi bursts, and reception grandeur.',
    featuredImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Candid South Indian Weddings', 'Pre-Wedding in Karnataka Heritage Sites', 'High-res Coffee Table Books'],
    packages: [
      {
        id: 'p-6',
        name: 'Heritage Day',
        price: 50000,
        description: 'Full day coverage with candid and traditional photographers.',
        features: ['2 Photographers', '300 edited photos', 'Online gallery', 'Print-ready high res files']
      },
      {
        id: 'p-7',
        name: 'Grand Muhurtham & Reception',
        price: 85000,
        popular: true,
        description: '2-Day comprehensive documentation.',
        features: ['3 Photographers + 1 Drone operator', '500+ processed images', '2 Leatherette albums', 'Pre-wedding session in Cubbon Park/Heritage Resort']
      }
    ],
    styles: ['Traditional', 'Candid', 'Editorial'],
    contact: {
      phone: '+91 98450 12890',
      email: 'info@gardencityframes.com',
      address: '100ft Road, Indiranagar, Bengaluru, Karnataka 560038'
    },
    languages: ['Kannada', 'English', 'Tamil', 'Hindi'],
    serviceAreas: ['Bengaluru', 'Mysuru', 'Coorg', 'Chennai'],
    eventTypes: ['Wedding', 'Engagement', 'Anniversary'],
    reviews: [
      {
        id: 'r-4',
        userName: 'Ananya & Karthik',
        rating: 4.9,
        date: '15 Jan 2026',
        comment: 'Captured the beauty of our traditional Kannada wedding with so much grace.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Specialists in traditional South Indian rituals', 'Punctual with 14-day turnaround']
  },

  // 11. Catering - Mumbai
  {
    id: 'v-cat-2',
    name: 'Bombay Feast & Coastal Spices',
    category: 'Catering',
    location: 'Mumbai',
    rating: 4.8,
    reviewCount: 155,
    experience: 12,
    startingPrice: 900,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: 'Gourmet coastal seafood, Gujarati thalis, and international street food bars.',
    description: 'From mouth-watering Malvani and Mangalorean delicacies to authentic Gujarati Kathiyawadi spreads, Bombay Feast curates lavish food spreads with live interactive counters.',
    featuredImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Gourmet Live Counters', 'Regional Coastal Specialities', 'Vegan & Jain Catering', 'Designer Buffets'],
    packages: [
      {
        id: 'p-cat-4',
        name: 'Delight Spread',
        price: 900,
        description: 'Per plate. 4 Starters, 3 Mains, 2 Desserts.',
        features: ['Chaat Counter + 4 Starters', 'Veg & Non-Veg Multi-cuisine mains', 'Basmati Pulao & Breads', 'Gulab Jamun with Malai Kulfi']
      },
      {
        id: 'p-cat-5',
        name: 'Coastal & Global Symphony',
        price: 1400,
        popular: true,
        description: 'Per plate. Live sushi, coastal fish fry, tandoor, and dessert studio.',
        features: ['Live Tandoor & Chaat', 'Authentic Surmai/Prawn Rava Fry & Butter Chicken', 'Live Sushi & Dim Sum bar', 'Molten lava cakes & artisanal Jalebi Rabdi']
      }
    ],
    styles: ['Fusion', 'Modern', 'Traditional'],
    contact: {
      phone: '+91 98205 67123',
      email: 'taste@bombayfeast.com',
      address: 'Lower Parel, Mumbai, Maharashtra 400013'
    },
    languages: ['Hindi', 'English', 'Gujarati', 'Marathi'],
    serviceAreas: ['Mumbai', 'Thane', 'Navi Mumbai'],
    eventTypes: ['Wedding', 'Corporate', 'Party'],
    reviews: [
      {
        id: 'r-cat-2',
        userName: 'Rohan Salvi',
        rating: 5,
        date: '25 Jan 2026',
        comment: 'The seafood was phenomenally fresh and the live stations were the highlight of our party.',
        eventType: 'Party'
      }
    ],
    aiHighlights: ['Jain & Vegan Friendly specialized kitchens', 'Live Showmanship cooking']
  },

  // 12. Decoration - Mumbai
  {
    id: 'v-dec-2',
    name: 'Opulence Occasions & Decor',
    category: 'Decoration',
    location: 'Mumbai',
    rating: 4.7,
    reviewCount: 92,
    experience: 8,
    startingPrice: 85000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: 'Bollywood glamour, crystal chandeliers, mirrored stages & bespoke floral art.',
    description: 'Opulence Occasions transforms city venues into lavish settings. Specializing in illuminated tunnel entries, cascading white wisteria ceilings, and gold-leaf stages.',
    featuredImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Crystal Chandelier Rigging', 'Exotic Floral Mandaps', 'Custom Photo Walls', 'Cocktail Lounge Furniture'],
    packages: [
      {
        id: 'p-dec-3',
        name: 'Glamour Ballroom',
        price: 85000,
        description: 'Complete stage and entrance decor for hotel ballrooms.',
        features: ['Mirrored stage with floral pillars', 'Entrance glass photowall with monogram', 'Warm ambient lighting & pin spots', 'Lounge seating for immediate family']
      },
      {
        id: 'p-dec-4',
        name: 'Royal Sangeet Extravaganza',
        price: 180000,
        popular: true,
        description: 'Complete theme concept decor with LED ceiling integration.',
        features: ['Full stage backdrop with LED wall integration', 'Crystal chandeliers throughout main walkway', 'Bohemian cabanas for lawn seating', 'Signature couple entrance floral archway']
      }
    ],
    styles: ['Luxury', 'Modern'],
    contact: {
      phone: '+91 98330 91827',
      email: 'hello@opulenceoccasions.in',
      address: 'Juhu Tara Road, Juhu, Mumbai 400049'
    },
    languages: ['English', 'Hindi'],
    serviceAreas: ['Mumbai', 'Alibaug', 'Goa'],
    eventTypes: ['Wedding', 'Party', 'Corporate'],
    reviews: [
      {
        id: 'r-dec-2',
        userName: 'Natasha Kapoor',
        rating: 4.8,
        date: '02 Feb 2026',
        comment: 'The stage looked breathtaking! Truly gave our reception a 5-star hotel ambiance.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Luxury 3D Rendering Preview included for clients', 'Fast execution with 40-member crew']
  },

  // 13. Venue - Mumbai
  {
    id: 'v-ven-2',
    name: 'Bayview Seafront Banquets',
    category: 'Venue',
    location: 'Mumbai',
    rating: 4.8,
    reviewCount: 140,
    experience: 12,
    startingPrice: 200000,
    verified: true,
    availability: false,
    featured: false,
    shortDescription: 'Iconic Arabian Sea facing open deck and luxury air-conditioned banquet in South Mumbai.',
    description: 'Offering panoramic sea breezes and sunset horizons, Bayview Seafront Banquets is the premier choice for high-profile weddings, corporate galas, and milestone celebrations.',
    featuredImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Sea-facing Open Terrace', 'Grand Crystal Hall', 'Complimentary Honeymoon Suite', 'Valet Parking for 150 cars'],
    packages: [
      {
        id: 'p-ven-3',
        name: 'Sunset Deck & Hall',
        price: 200000,
        description: 'Access to both seaside deck and AC hall for 6 hours.',
        features: ['Accommodates up to 600 floating guests', '2 Green rooms for changing', 'Sea view terrace lighting', 'Full air-conditioning & soundproofing']
      }
    ],
    styles: ['Luxury', 'Modern'],
    contact: {
      phone: '+91 98200 11988',
      email: 'events@bayviewmumbai.com',
      address: 'Marine Drive, Nariman Point, Mumbai 400021'
    },
    languages: ['English', 'Hindi', 'Gujarati'],
    serviceAreas: ['Mumbai'],
    eventTypes: ['Wedding', 'Corporate', 'Party'],
    reviews: [
      {
        id: 'r-ven-2',
        userName: 'Zahir & Rhea Merchant',
        rating: 4.9,
        date: '10 Jan 2026',
        comment: 'Nothing beats an evening wedding as the sun sets over the Arabian Sea. Unmatched hospitality!',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Iconic Marine Drive view', 'Prime prime-time sunset wedding slot']
  },

  // 14. Makeup - Mumbai
  {
    id: 'v-mu-2',
    name: 'Glamour & Glow by Simran',
    category: 'Makeup',
    location: 'Mumbai',
    rating: 4.8,
    reviewCount: 88,
    experience: 5,
    startingPrice: 22000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: 'Celebrity makeup artist specializing in dewy, glass-skin Bollywood bridal glam.',
    description: 'Simran has worked with leading television and Bollywood stars, mastering the art of dewy, natural skin finishes that enhance natural features without overpowering them.',
    featuredImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Celebrity Bridal Glam', 'Glass Skin Makeup', 'Editorial Hair Updos', 'On-Location Bridal Touchups'],
    packages: [
      {
        id: 'p-mu-3',
        name: 'The Glass Skin Bride',
        price: 22000,
        description: 'Complete signature bridal look with pre-treatment.',
        features: ['Skin prep with luxury serums', 'HD foundation matching exact skin undertones', 'Lashes, custom hair styling with fresh flowers', 'Drape styling for lehenga/saree']
      }
    ],
    styles: ['Modern', 'Luxury'],
    contact: {
      phone: '+91 98211 44556',
      email: 'simran@glamourglow.com',
      address: 'Lokhandwala Complex, Andheri West, Mumbai 400053'
    },
    languages: ['English', 'Hindi', 'Punjabi'],
    serviceAreas: ['Mumbai', 'Pune', 'Goa'],
    eventTypes: ['Wedding', 'Engagement', 'Party'],
    reviews: [
      {
        id: 'r-mu-2',
        userName: 'Meera Sen',
        rating: 5,
        date: '14 Dec 2025',
        comment: 'Simran is magical. My skin looked like glass in all photos without looking heavy or layered.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Specialized in humid-proof long-stay makeup', 'Includes luxury skincare prep']
  },

  // 15. DJ - Pune
  {
    id: 'v-dj-2',
    name: 'DJ Saurabh & Neon Beats',
    category: 'DJ',
    location: 'Pune',
    rating: 4.7,
    reviewCount: 104,
    experience: 7,
    startingPrice: 28000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: 'Pune’s favorite college & wedding party DJ, spinning commercial Bollywood & retro remixes.',
    description: 'With over 400 successful shows across Pune, DJ Saurabh blends high-energy Bollywood tracks, Marathi zingaat beats, and international top 40 bangers with seamless transitions.',
    featuredImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Wedding Sangeet DJ', 'Corporate Gala Nights', 'Custom Couple Mashups', 'Laser Light Shows'],
    packages: [
      {
        id: 'p-dj-3',
        name: 'Party Starter',
        price: 28000,
        description: 'Complete sound & console for 100-200 guests.',
        features: ['DJ console + 2 top speakers + 1 sub', '4 LED stage lights + smoke', '4 hours performance', 'Song request flexibility']
      },
      {
        id: 'p-dj-4',
        name: 'The Mega Sangeet Mash',
        price: 48000,
        popular: true,
        description: 'Full concert sound with dhol synchronization.',
        features: ['Double sub bass system for floor shaking beats', 'Moving beam lasers + hazers', '1 Dhol player for Baraat/Couple entry', 'Custom choreographed mix for family dances']
      }
    ],
    styles: ['Modern', 'Fusion'],
    contact: {
      phone: '+91 98500 77123',
      email: 'saurabh@neonbeats.in',
      address: 'FC Road, Pune, Maharashtra 411004'
    },
    languages: ['Marathi', 'Hindi', 'English'],
    serviceAreas: ['Pune', 'Nashik', 'Kolhapur'],
    eventTypes: ['Party', 'Wedding', 'College Event', 'Birthday'],
    reviews: [
      {
        id: 'r-dj-2',
        userName: 'Aditya Ranade',
        rating: 5,
        date: '03 Feb 2026',
        comment: 'Played the best Marathi and Bollywood hits! The crowd literally did not stop jumping.',
        eventType: 'Sangeet'
      }
    ],
    aiHighlights: ['Unbeatable Budget Value for Pune Sangeets', 'Pre-mixes custom songs for family performances']
  },

  // 16. Photography - Nashik
  {
    id: 'v-photo-4',
    name: 'Vineyard Stories Photography',
    category: 'Photography',
    location: 'Nashik',
    rating: 4.8,
    reviewCount: 65,
    experience: 6,
    startingPrice: 38000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: 'Romantic vineyard pre-weddings & rustic winery wedding photography specialists.',
    description: 'Capturing golden hour light filtering through grapevines and tranquil rustic ceremonies. We create warm, sun-kissed memories for couples celebrating in Nashik’s scenic wine country.',
    featuredImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Vineyard Pre-wedding Shoot', 'Rustic Wedding Photography', 'Drone Landscape Portraits'],
    packages: [
      {
        id: 'p-8',
        name: 'Rustic Day',
        price: 38000,
        description: 'Single day wedding documentation with 2 photographers.',
        features: ['1 Candid + 1 Traditional Shooter', '250 color-graded photos', 'High-res digital download', 'Mini canvas print']
      }
    ],
    styles: ['Candid', 'Minimalist', 'Modern'],
    contact: {
      phone: '+91 94222 34567',
      email: 'info@vineyardstories.com',
      address: 'Gangapur Road, Nashik 422013'
    },
    languages: ['Marathi', 'Hindi', 'English'],
    serviceAreas: ['Nashik', 'Pune', 'Igatpuri'],
    eventTypes: ['Wedding', 'Engagement', 'Anniversary'],
    reviews: [
      {
        id: 'r-5',
        userName: 'Pooja & Sameer',
        rating: 5,
        date: '19 Jan 2026',
        comment: 'Our Sula vineyard pre-wedding shots look like a European romance novel!',
        eventType: 'Pre-Wedding'
      }
    ],
    aiHighlights: ['Prime permits for Nashik vineyard resorts', 'Warm earthy editing style']
  },

  // 17. Catering - Bengaluru
  {
    id: 'v-cat-3',
    name: 'Dakshin Heritage Catering',
    category: 'Catering',
    location: 'Bengaluru',
    rating: 4.9,
    reviewCount: 180,
    experience: 16,
    startingPrice: 650,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: 'Traditional banana leaf wedding feasts & authentic South Indian Brahmin banquets.',
    description: 'Preserving culinary traditions with authentic rasam, bisibelebath, live appam counters, ghee roast dosas, and filter coffee stalls served with authentic brassware and banana leaf hospitality.',
    featuredImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Authentic Plantain Leaf Service', 'Live Filter Coffee & Mysore Pak Stalls', 'Pure Vegetarian Heritage Kitchens'],
    packages: [
      {
        id: 'p-cat-6',
        name: 'Traditional Kalyana Seer Feast',
        price: 650,
        description: 'Per leaf (min 200 pax). Traditional 18-item festive feast.',
        features: ['18 items served on organic plantain leaf', 'Payasam + Obbattu (Holige) with pure ghee', 'Live Appam & Stew Counter', 'Traditional brass drum filter coffee stall']
      }
    ],
    styles: ['Traditional', 'Royal'],
    contact: {
      phone: '+91 98800 23119',
      email: 'dakshin@heritagecaterers.in',
      address: 'Malleshwaram, Bengaluru, Karnataka 560003'
    },
    languages: ['Kannada', 'Tamil', 'Telugu', 'English'],
    serviceAreas: ['Bengaluru', 'Mysuru'],
    eventTypes: ['Wedding', 'Engagement', 'Anniversary'],
    reviews: [
      {
        id: 'r-cat-3',
        userName: 'Venkatesh Murthy',
        rating: 5,
        date: '17 Jan 2026',
        comment: 'Authentic flavors, piping hot coffee, and courteous servers in traditional veshtis.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Pure South Indian heritage recipes', 'Fast service for 1,000+ guest banquets']
  },

  // 18. Decoration - Bengaluru
  {
    id: 'v-dec-3',
    name: 'Flora & Fern Botanical Styling',
    category: 'Decoration',
    location: 'Bengaluru',
    rating: 4.8,
    reviewCount: 78,
    experience: 7,
    startingPrice: 70000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: 'Modern botanical greenery, jasmine weaves, and sustainable rustic garden decor.',
    description: 'For couples who appreciate subtle minimalism, fresh local foliage, terracotta planters, and cascading jasmine bells. We blend contemporary clean lines with organic warmth.',
    featuredImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Botanical Greenery Mandaps', 'Terracotta & Brass Walkways', 'Eco-friendly Zero Plastic Decor'],
    packages: [
      {
        id: 'p-dec-5',
        name: 'Garden Meadow Decor',
        price: 70000,
        description: 'Chic organic greenery & floral setting for lawns and courtyards.',
        features: ['Bamboo & Jasmine canopy mandap', 'Terracotta pot fairy lights walkway', 'Natural wood couple stage furniture', 'Sustainable floral confetti cones']
      }
    ],
    styles: ['Minimalist', 'Modern', 'Traditional'],
    contact: {
      phone: '+91 98451 88902',
      email: 'botany@floraandfern.com',
      address: 'Koramangala 4th Block, Bengaluru 560034'
    },
    languages: ['English', 'Kannada', 'Hindi'],
    serviceAreas: ['Bengaluru'],
    eventTypes: ['Wedding', 'Engagement', 'Birthday'],
    reviews: [
      {
        id: 'r-dec-3',
        userName: 'Shilpa Nair',
        rating: 5,
        date: '06 Jan 2026',
        comment: 'Zero plastic, pure fresh flowers and stunning green aesthetic! All our guests complimented the setup.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['100% Zero-single-use-plastic certification', 'Unique botanical aesthetic']
  },

  // 19. Venue - Hyderabad
  {
    id: 'v-ven-3',
    name: 'Nizam Heritage Palace & Lawns',
    category: 'Venue',
    location: 'Hyderabad',
    rating: 4.9,
    reviewCount: 95,
    experience: 15,
    startingPrice: 220000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: 'Regal arches, fountain courtyards, and palatial banquet halls fit for royal weddings.',
    description: 'Immerse your guests in Hyderabadi royal opulence. Featuring grand stone pillars, central illuminated fountains, and a capacity of up to 2,000 guests in Jubilee Hills.',
    featuredImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Palatial Courtyard', 'Royal Darbar Banquet', 'Grand Fountain Illumination', 'Bridal Villa with Pool'],
    packages: [
      {
        id: 'p-ven-4',
        name: 'The Royal Sovereign Slot',
        price: 220000,
        description: 'Complete access to Palace Courtyard & Main Hall for full day.',
        features: ['Up to 1500 guest capacity', 'Royal entrance facade with torch lighting', 'Bridal villa for family prep', 'Dedicated operations director on-site']
      }
    ],
    styles: ['Royal', 'Luxury'],
    contact: {
      phone: '+91 98490 66543',
      email: 'royalty@nizampalace.in',
      address: 'Jubilee Hills Road No. 36, Hyderabad 500033'
    },
    languages: ['Telugu', 'Hindi', 'Urdu', 'English'],
    serviceAreas: ['Hyderabad'],
    eventTypes: ['Wedding', 'Corporate', 'Anniversary'],
    reviews: [
      {
        id: 'r-ven-3',
        userName: 'Mirza Faisal',
        rating: 5,
        date: '28 Jan 2026',
        comment: 'Grandeur at its peak. The illuminated fountains in the evening took our breath away.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Heritage royal backdrop for majestic photos', 'High-profile security & VIP parking']
  },

  // 20. Videography - Mumbai
  {
    id: 'v-vid-2',
    name: 'Bombay Cinema Guild',
    category: 'Videography',
    location: 'Mumbai',
    rating: 4.8,
    reviewCount: 68,
    experience: 8,
    startingPrice: 50000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: 'Bollywood assistant directors crafting cinematic, narrative-style wedding docu-dramas.',
    description: 'Founded by former Bollywood assistant directors, Bombay Cinema Guild treats each wedding like a festival film with voice-over narratives, high-speed slow-motion dancing, and dramatic grading.',
    featuredImage: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Cinema Film Highlights', 'Same-Night Sangeet Edit', 'Drone 4K 60fps Cinematography'],
    packages: [
      {
        id: 'p-vid-3',
        name: 'The Cinematic Docu',
        price: 50000,
        description: 'Single day high-end cinematic filming.',
        features: ['2 Senior cinematographers', '4-minute cinema trailer', 'Same-day wedding night sneak peek reel', 'Pro audio sync']
      }
    ],
    styles: ['Editorial', 'Luxury', 'Modern'],
    contact: {
      phone: '+91 99300 23419',
      email: 'shoot@bombaycinemaguild.com',
      address: 'Versova, Andheri West, Mumbai 400061'
    },
    languages: ['Hindi', 'English'],
    serviceAreas: ['Mumbai', 'Pune', 'Goa', 'Jaipur'],
    eventTypes: ['Wedding', 'Engagement', 'Party'],
    reviews: [
      {
        id: 'r-vid-2',
        userName: 'Aakash & Tina',
        rating: 4.8,
        date: '11 Jan 2026',
        comment: 'Felt like watching a Bollywood movie trailer starring us! Truly magical work.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Professional film-grade color grading', 'Audio vow documentary integration']
  },

  // 21. Event Planning - Mumbai
  {
    id: 'v-plan-2',
    name: 'Celebrations by Karishma',
    category: 'Event Planning',
    location: 'Mumbai',
    rating: 4.9,
    reviewCount: 102,
    experience: 12,
    startingPrice: 90000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: 'High-end celebrity & destination wedding planners from Mumbai to Rajasthan & Goa.',
    description: 'Karishma and her team manage end-to-end event production, guest concierge, artist management, and bespoke decor concepts with flawless execution and poise.',
    featuredImage: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Destination Wedding Coordination', 'Celebrity Artist Booking', 'RSVP & Guest Airport Concierge'],
    packages: [
      {
        id: 'p-plan-3',
        name: 'Signature Production',
        price: 90000,
        description: 'Complete 2-day coordination and vendor supervision.',
        features: ['4 Production managers on site', 'Vendor timeline management', 'Guest hospitality helpdesk', 'Stage queue control']
      }
    ],
    styles: ['Luxury', 'Modern'],
    contact: {
      phone: '+91 98201 99281',
      email: 'karishma@celebrations.in',
      address: 'Worli Seaface, Mumbai 400018'
    },
    languages: ['English', 'Hindi', 'Gujarati'],
    serviceAreas: ['Mumbai', 'Goa', 'Udaipur', 'Alibaug'],
    eventTypes: ['Wedding', 'Corporate', 'Anniversary'],
    reviews: [
      {
        id: 'r-plan-2',
        userName: 'Sanjay Ruia',
        rating: 5,
        date: '02 Feb 2026',
        comment: 'Karishma managed our 500-guest wedding seamlessly. We didn’t feel a second of stress.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Destination wedding expertise', 'Celebrity management network']
  },

  // 22. Photography - Hyderabad
  {
    id: 'v-photo-5',
    name: 'Charminar Wedding Chroniclers',
    category: 'Photography',
    location: 'Hyderabad',
    rating: 4.8,
    reviewCount: 89,
    experience: 7,
    startingPrice: 42000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: 'Timeless portraiture & documentary coverage for royal Nizam and Telugu weddings.',
    description: 'Specializing in the vibrant ceremonies of Telugu and Hyderabadi weddings. We celebrate rich Kanjeevarams, temple jewellery details, and lively baraat processions.',
    featuredImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80'
    ],
    services: ['Telugu Wedding Traditions', 'Pre-Wedding Heritage Shoots', 'Deluxe Silk Bound Albums'],
    packages: [
      {
        id: 'p-9',
        name: 'Kalyanam Package',
        price: 42000,
        description: 'Full day coverage with candid and traditional photographers.',
        features: ['2 Photographers', '300 edited photos', '1 Premium photobook (30 sheets)', 'Digital delivery in 15 days']
      }
    ],
    styles: ['Traditional', 'Candid'],
    contact: {
      phone: '+91 98480 77123',
      email: 'hello@charminarchroniclers.com',
      address: 'Banjara Hills Road No 12, Hyderabad 500034'
    },
    languages: ['Telugu', 'Hindi', 'English'],
    serviceAreas: ['Hyderabad', 'Secunderabad', 'Vijayawada'],
    eventTypes: ['Wedding', 'Engagement', 'Anniversary'],
    reviews: [
      {
        id: 'r-6',
        userName: 'Sowmya & Harsha',
        rating: 4.8,
        date: '19 Jan 2026',
        comment: 'Captured every single family elder and ritual with absolute perfection.',
        eventType: 'Wedding'
      }
    ],
    aiHighlights: ['Specialists in traditional Telugu wedding rituals', 'Fast photo album delivery']
  },

  // Shadow - Pune
  {
    id: "v-shadow-1",
    name: "Aura Bridal Shadows & Concierge",
    category: "Shadow",
    location: "Pune",
    rating: 4.9,
    reviewCount: 78,
    experience: 6,
    startingPrice: 15000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: "Dedicated luxury bridal and groom shadow management ensuring seamless attire, touchups, and schedule coordination.",
    description: "Aura Bridal Shadows provides bespoke personal assistance for brides and grooms on their wedding day. From managing heavy lehengas, bridal emergencies, quick refreshments, jewelry adjustments to liaising with the photographer and decor team, our trained shadows keep you calm, pristine, and perfectly on time throughout every ritual.",
    featuredImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"],
    services: ["Dedicated Bridal Shadow", "Groom Attendant & Stylist", "Bridal Touch-up & Emergency Kit", "Ritual Timeline Coordination", "Wardrobe Draping Assistance"],
    packages: [
      {
            "id": "v-sh-p-1",
            "name": "Single Ceremony Shadow",
            "price": 15000,
            "description": "Dedicated shadow attendant for main wedding ceremony (up to 6 hours).",
            "features": [
                  "1 Senior Shadow Attendant",
                  "Dupatta & Lehenga Management",
                  "Emergency kit with pins, mints, touchups",
                  "Photographer coordination"
            ],
            "popular": false
      },
      {
            "id": "v-sh-p-2",
            "name": "Full-Day Bridal & Groom Duo",
            "price": 28000,
            "description": "Two dedicated shadow professionals for both Bride and Groom across 2 ceremonies.",
            "features": [
                  "2 Dedicated Attendants (Bride + Groom)",
                  "12 hours coverage",
                  "Wardrobe ironing & jewelry styling",
                  "Hydration & snack management",
                  "VIP family coordinator"
            ],
            "popular": true
      }
],
    styles: ["Luxury", "Traditional", "Modern"],
    contact: {
      "phone": "+91 98224 88121",
      "email": "concierge@aurashadows.in",
      "instagram": "@aura_bridal_shadows",
      "address": "Kalyani Nagar, Pune, Maharashtra"
},
    languages: ["English", "Hindi", "Marathi"],
    serviceAreas: ["Pune", "Mumbai", "Lonavala", "Goa"],
    eventTypes: ["Wedding", "Engagement", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-sh-1",
            "userName": "Rhea & Kabir",
            "rating": 5.0,
            "date": "14 Nov 2026",
            "comment": "Our shadow attendant was an absolute godsend! She held my lehenga, kept me hydrated, and made sure my makeup stayed fresh through 4 hours of pheras.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Top-rated bridal attendant in Pune", "Emergency touch-up kit included", "High punctuality score"]
  },

  // Shadow - Mumbai
  {
    id: "v-shadow-2",
    name: "Royal Saathi Wedding Shadows",
    category: "Shadow",
    location: "Mumbai",
    rating: 4.8,
    reviewCount: 64,
    experience: 7,
    startingPrice: 18000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Discreet, high-end bridal assistants and personal runners for Mumbai elite weddings.",
    description: "Royal Saathi offers white-glove personal attendant services for couples and VIP family members. We ensure smooth transition between stage entries, wardrobe changes, ritual offerings, and guest photo sessions without any anxiety.",
    featuredImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"],
    services: ["VIP Shadow Service", "Sangeet Quick Change Coordinator", "Personal Valet & Belongings Guard", "Footwear & Comfort Management"],
    packages: [
      {
            "id": "v-sh-p-3",
            "name": "Classic Evening Shadow",
            "price": 18000,
            "description": "Personal assistance during Sangeet or Reception evening.",
            "features": [
                  "1 Attendant for 7 hours",
                  "Quick change assistance",
                  "Personal safe keeping",
                  "Stage cue coordination"
            ]
      }
],
    styles: ["Luxury", "Royal"],
    contact: {
      "phone": "+91 98201 44552",
      "email": "contact@royalsaathi.com",
      "instagram": "@royalsaathi_mumbai",
      "address": "Bandra West, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi", "Gujarati"],
    serviceAreas: ["Mumbai", "Thane", "Pune", "Udaipur"],
    eventTypes: ["Wedding", "Corporate", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-sh-2",
            "userName": "Aditi Mehta",
            "rating": 4.9,
            "date": "02 Oct 2026",
            "comment": "Super professional! Handled 3 wardrobe changes during our sangeet without missing a beat.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Expertise in fast bridal wardrobe changes", "Celebrity wedding trusted"]
  },

  // Shadow - Bengaluru
  {
    id: "v-shadow-3",
    name: "Elegance Event Chaperones & Shadows",
    category: "Shadow",
    location: "Bengaluru",
    rating: 4.9,
    reviewCount: 52,
    experience: 5,
    startingPrice: 14000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Hospitality-trained shadows for brides, grooms, and key dignitaries at milestone events.",
    description: "Trained by five-star luxury hotel professionals, Elegance Chaperones brings discreet hospitality directly to the wedding dais and banquet floor. We assist elderly VIPs, ensure the bride is comfortable, and manage personal schedules with grace.",
    featuredImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"],
    services: ["Bride & Groom Shadow", "Elderly Dignitary Chaperone", "Retirement Guest of Honor Care", "Stage Queue Management"],
    packages: [
      {
            "id": "v-sh-p-4",
            "name": "Personal Chaperone Service",
            "price": 14000,
            "description": "5 hours of attentive, dedicated shadow support.",
            "features": [
                  "1 Hospitality Specialist",
                  "Medication & hydration tracking",
                  "Comfort & seating assistance"
            ]
      }
],
    styles: ["Modern", "Minimalist"],
    contact: {
      "phone": "+91 98450 33219",
      "email": "care@elegancechaperones.com",
      "instagram": "@elegance_shadows",
      "address": "Indiranagar, Bengaluru, Karnataka"
},
    languages: ["English", "Kannada", "Hindi"],
    serviceAreas: ["Bengaluru", "Mysuru", "Hyderabad"],
    eventTypes: ["Retirement", "Wedding", "Corporate"],
    reviews: [
      {
            "id": "rev-sh-3",
            "userName": "Col. Nambiar (Retd.)",
            "rating": 5.0,
            "date": "20 Aug 2026",
            "comment": "Hired them for my father's retirement felicitation and golden jubilee. The dignity and respect they demonstrated was remarkable.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Hospitality degree certified personnel", "Exceptional eldercare at corporate events"]
  },

  // Shadow - Pune
  {
    id: "v-shadow-4",
    name: "Praneta Bridal Shadows",
    category: "Shadow",
    location: "Pune",
    rating: 4.7,
    reviewCount: 41,
    experience: 4,
    startingPrice: 12000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Friendly, attentive bridal assistants who take care of the micro-details so you can cherish the day.",
    description: "Praneta Bridal Shadows ensures that brides never feel rushed or disorganized. We pack your touch-up essentials, keep a warm drink ready, signal the DJ for entry tracks, and assist during lengthy photoshoot poses.",
    featuredImage: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=1000&q=80"],
    services: ["Bridal Shadow", "Bridal Entry Queue Assistant", "Emergency Hemming & Styling"],
    packages: [
      {
            "id": "v-sh-p-5",
            "name": "Muhurat Assistance",
            "price": 12000,
            "description": "Comprehensive assistance during the 4 hours around your auspicious muhurat.",
            "features": [
                  "1 Attendant",
                  "Pheras garland & ring management",
                  "Instant touchup supply"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 98223 99014",
      "email": "praneta.shadows@gmail.com",
      "address": "Kothrud, Pune, Maharashtra"
},
    languages: ["Marathi", "Hindi", "English"],
    serviceAreas: ["Pune", "Satara", "Kolhapur"],
    eventTypes: ["Wedding", "Engagement"],
    reviews: [
      {
            "id": "rev-sh-4",
            "userName": "Sneha Patwardhan",
            "rating": 4.8,
            "date": "18 Sep 2026",
            "comment": "Praneta was like having a thoughtful sister by my side through the whole wedding day.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Budget-friendly professional shadow", "Fluent in regional wedding customs"]
  },

  // Shadow - Hyderabad
  {
    id: "v-shadow-5",
    name: "Regal Shadow & Valet Management",
    category: "Shadow",
    location: "Hyderabad",
    rating: 4.9,
    reviewCount: 60,
    experience: 8,
    startingPrice: 22000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Nawabi hospitality shadows for high-profile weddings and distinguished retirement galas.",
    description: "Regal Shadow specializes in regal personal valet services for couples and high-ranking guests of honor. From grand entry processions to formal retirement salutes, our team delivers impeccable poise and efficiency.",
    featuredImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"],
    services: ["Royal Groom Shadow", "Guest of Honor Attendant", "Sherwani & Turban Valet", "Formal Stage Protocol Coordinator"],
    packages: [
      {
            "id": "v-sh-p-6",
            "name": "Nawabi Attendant Package",
            "price": 22000,
            "description": "Full day white-glove shadow support for groom or guest of honor.",
            "features": [
                  "1 Senior Butler & Shadow",
                  "Turban draping & footwear styling",
                  "Personal phone & gift custodian",
                  "Stage coordination"
            ]
      }
],
    styles: ["Royal", "Luxury"],
    contact: {
      "phone": "+91 98490 12890",
      "email": "concierge@regalshadow.in",
      "address": "Jubilee Hills, Hyderabad, Telangana"
},
    languages: ["Urdu", "Telugu", "Hindi", "English"],
    serviceAreas: ["Hyderabad", "Secunderabad", "Bengaluru"],
    eventTypes: ["Wedding", "Retirement", "Corporate"],
    reviews: [
      {
            "id": "rev-sh-5",
            "userName": "Mirza Family",
            "rating": 5.0,
            "date": "05 Nov 2026",
            "comment": "Exemplary decorum and attention to detail. Managed the groom's sherwani and entries perfectly.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Specialist in grand royal ceremonies", "Turban & ceremonial attire experts"]
  },

  // Shadow - Mumbai
  {
    id: "v-shadow-6",
    name: "Velvet Touch Bridal Companions",
    category: "Shadow",
    location: "Mumbai",
    rating: 4.8,
    reviewCount: 45,
    experience: 5,
    startingPrice: 16000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Modern styling shadows and on-site bridal fixers for contemporary celebrations.",
    description: "Velvet Touch provides dedicated companion shadows who understand modern social media photoshoots, intricate bridal gown flairs, and stress-free transitions between reception speeches and cocktail dance floors.",
    featuredImage: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=1000&q=80"],
    services: ["Social Media Reel Content Shadow", "Bridal Gown Draping", "Behind-The-Scenes Helper"],
    packages: [
      {
            "id": "v-sh-p-7",
            "name": "Contemporary Bride Package",
            "price": 16000,
            "description": "6 hours of continuous assistance and content capture support.",
            "features": [
                  "1 Styling Shadow",
                  "Phone photography assistance",
                  "Quick wardrobe adjust kit"
            ]
      }
],
    styles: ["Modern", "Candid"],
    contact: {
      "phone": "+91 98205 77112",
      "email": "hello@velvettouch.co",
      "address": "Juhu, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Goa", "Pune"],
    eventTypes: ["Wedding", "Party", "Retirement"],
    reviews: [
      {
            "id": "rev-sh-6",
            "userName": "Kiara D'Souza",
            "rating": 4.9,
            "date": "12 Oct 2026",
            "comment": "They kept my gown looking flawless in every video shot! Truly worth every rupee.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Content creation savvy shadows", "Quick gown repair trained"]
  },

  // Shadow - Nashik
  {
    id: "v-shadow-7",
    name: "Veda Personal Wedding Concierge",
    category: "Shadow",
    location: "Nashik",
    rating: 4.7,
    reviewCount: 38,
    experience: 6,
    startingPrice: 11000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Traditional Maharashtrian & North Indian ritual shadows and pooja coordinators.",
    description: "Veda Concierge bridges the gap between the family priest's instructions and the couple's readiness. We make sure samagri is at hand, garlands are fresh, and the bride is comfortable throughout lengthy rituals.",
    featuredImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1000&q=80"],
    services: ["Ritual Attendant", "Nauvari Saree Draping Shadow", "Pooja Items Management"],
    packages: [
      {
            "id": "v-sh-p-8",
            "name": "Vedic Ritual Shadow",
            "price": 11000,
            "description": "Dedicated ritual assistance for traditional ceremonies.",
            "features": [
                  "1 Ritual Specialist",
                  "Saree draping check",
                  "Pooja timing coordination"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 94220 88231",
      "email": "vedashadows@nashikweddings.in",
      "address": "Gangapur Road, Nashik, Maharashtra"
},
    languages: ["Marathi", "Hindi"],
    serviceAreas: ["Nashik", "Pune", "Shirdi", "Aurangabad"],
    eventTypes: ["Wedding", "Engagement", "Retirement"],
    reviews: [
      {
            "id": "rev-sh-7",
            "userName": "Gaurav & Rutuja",
            "rating": 4.8,
            "date": "15 Sep 2026",
            "comment": "Knowledgeable and respectful. Handled the traditional rituals without confusing the bride.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Vedic ritual ceremony specialist", "Nauvari saree expert"]
  },

  // Shadow - Pune
  {
    id: "v-shadow-8",
    name: "Apsara Bridal Care & Attendants",
    category: "Shadow",
    location: "Pune",
    rating: 4.9,
    reviewCount: 67,
    experience: 7,
    startingPrice: 17000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Premium full-service bridal shadows with cosmetology and styling expertise.",
    description: "Apsara Bridal Care combines styling, draping, and calming psychological support. Our shadows are certified cosmetologists capable of immediate hair and makeup touchups right beside the stage.",
    featuredImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=80"],
    services: ["Cosmetology-Trained Shadow", "On-Stage Makeup Touchups", "Saree & Lehenga Steam Ironing"],
    packages: [
      {
            "id": "v-sh-p-9",
            "name": "Bridal Glam Shadow",
            "price": 17000,
            "description": "Shadow attendant with professional touch-up makeup kit included.",
            "features": [
                  "1 Cosmetologist Shadow",
                  "Continuous makeup check",
                  "Airbrush touchups on stage",
                  "8 hours coverage"
            ]
      }
],
    styles: ["Luxury", "Modern"],
    contact: {
      "phone": "+91 98229 55001",
      "email": "care@apsarabridal.com",
      "address": "Aundh, Pune, Maharashtra"
},
    languages: ["English", "Hindi", "Marathi"],
    serviceAreas: ["Pune", "Mumbai", "Mahabaleshwar"],
    eventTypes: ["Wedding", "Engagement", "Anniversary"],
    reviews: [
      {
            "id": "rev-sh-8",
            "userName": "Radhika Kulkarni",
            "rating": 5.0,
            "date": "29 Oct 2026",
            "comment": "My makeup artist left after getting me ready, but my Apsara shadow kept me looking fresh all evening!",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Dual trained shadow & makeup artist", "High client satisfaction rate"]
  },

  // Shadow - Bengaluru
  {
    id: "v-shadow-9",
    name: "Elite Groom & Dignitary Valets",
    category: "Shadow",
    location: "Bengaluru",
    rating: 4.8,
    reviewCount: 49,
    experience: 6,
    startingPrice: 15000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Refined valet shadows tailored for grooms, corporate leaders, and retirement honorees.",
    description: "Tailored especially for gentlemen and corporate executives, Elite Valets ensures suits, sherwanis, wristwatches, speech notes, and personal items are expertly managed during high-stakes banquets and retirement ceremonies.",
    featuredImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80"],
    services: ["Groom Personal Shadow", "Retirement Honoree Assistant", "Speech & Memento Custodian", "Baraat Procession Coordinator"],
    packages: [
      {
            "id": "v-sh-p-10",
            "name": "Executive Valet Service",
            "price": 15000,
            "description": "Dedicated valet support for groom or retirement guest of honor.",
            "features": [
                  "1 Professional Male Valet",
                  "Attire & shoe care",
                  "Baraat or stage coordination",
                  "Gift tracking"
            ]
      }
],
    styles: ["Modern", "Minimalist"],
    contact: {
      "phone": "+91 98455 12099",
      "email": "services@elitegroomvalet.com",
      "address": "MG Road, Bengaluru, Karnataka"
},
    languages: ["English", "Hindi", "Kannada"],
    serviceAreas: ["Bengaluru", "Chennai", "Hyderabad"],
    eventTypes: ["Retirement", "Wedding", "Corporate"],
    reviews: [
      {
            "id": "rev-sh-9",
            "userName": "Ramesh Swaminathan",
            "rating": 4.9,
            "date": "11 Nov 2026",
            "comment": "Had them manage my farewell retirement banquet. They organized mementos, speech cards, and flowers impeccably.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Gentlemen's tailoring & valet expertise", "Corporate retirement specialist"]
  },

  // Shadow - Mumbai
  {
    id: "v-shadow-10",
    name: "Sanskaar Family Shadow Services",
    category: "Shadow",
    location: "Mumbai",
    rating: 4.7,
    reviewCount: 35,
    experience: 4,
    startingPrice: 13000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Warm, respectful personal assistants assisting elderly parents and hosts at celebrations.",
    description: "Sanskaar provides loving yet professional shadows dedicated to the parents of the bride and groom or retirees, taking the load of physical fatigue off their shoulders so they can enjoy their children's big milestone.",
    featuredImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80"],
    services: ["Host Parent Shadow", "Retirement Elder Attendant", "Guest Greeting Assistant"],
    packages: [
      {
            "id": "v-sh-p-11",
            "name": "Host Comfort Package",
            "price": 13000,
            "description": "6 hours of attentive assistance for family elders during functions.",
            "features": [
                  "1 Attentive Shadow",
                  "Wheelchair or walking support if needed",
                  "Beverage and meal tray service"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 98211 67890",
      "email": "support@sanskaarshadows.in",
      "address": "Dadar West, Mumbai, Maharashtra"
},
    languages: ["Hindi", "Marathi", "Gujarati", "English"],
    serviceAreas: ["Mumbai", "Thane", "Navi Mumbai", "Pune"],
    eventTypes: ["Retirement", "Wedding", "Anniversary"],
    reviews: [
      {
            "id": "rev-sh-10",
            "userName": "Ashok & Vandana Shah",
            "rating": 4.8,
            "date": "04 Oct 2026",
            "comment": "Our attendant was so patient with our grandmother. We were able to host our daughter's wedding completely carefree.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Elderly host care specialist", "Gentle empathetic professionals"]
  },

  // Live Painting - Pune
  {
    id: "v-paint-1",
    name: "Canvas & Couture Live Wedding Art",
    category: "Live Painting",
    location: "Pune",
    rating: 4.9,
    reviewCount: 62,
    experience: 7,
    startingPrice: 35000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: "Master fine artists painting your sacred pheras and stage moments live before your wedding guests.",
    description: "Canvas & Couture turns your wedding celebrations and milestone events into heirloom fine art. Our master painter sets up an elegant easel during the event, painting the emotional vows, varmala, or first dance in rich acrylics or oils on archival canvas. Guests are enthralled watching the masterpiece unfold live, and the couple takes home a framed masterpiece the same evening.",
    featuredImage: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1000&q=80"],
    services: ["Live Wedding Ceremony Painting", "Acrylic on Belgian Linen Canvas", "Live Guest Watercolor Portraits", "Studio Touchups & Custom Framing", "Retirement Milestone Portraiture"],
    packages: [
      {
            "id": "v-lp-p-1",
            "name": "Classic Canvas Masterpiece",
            "price": 35000,
            "description": "24x30 inch stretched canvas live painting of the central ceremony moment.",
            "features": [
                  "1 Principal Fine Artist",
                  "5-6 hours live painting during event",
                  "Focus on couple with ceremony background",
                  "Pre-primed Belgian linen canvas",
                  "Protective varnish coating"
            ],
            "popular": true
      },
      {
            "id": "v-lp-p-2",
            "name": "Grand Heirloom + Guest Vignettes",
            "price": 55000,
            "description": "30x40 inch grand canvas painting plus 25 mini watercolor favors for close family.",
            "features": [
                  "1 Lead Artist + 1 Assistant Painter",
                  "Full day coverage (Pheras + Reception)",
                  "Includes 25 live guest watercolor cards",
                  "Hand-carved gilt framing included"
            ],
            "popular": false
      }
],
    styles: ["Modern", "Traditional", "Luxury"],
    contact: {
      "phone": "+91 98220 54312",
      "email": "studio@canvasandcouture.com",
      "instagram": "@canvas_couture_liveart",
      "address": "Koregaon Park, Pune, Maharashtra"
},
    languages: ["English", "Hindi", "Marathi"],
    serviceAreas: ["Pune", "Mumbai", "Goa", "Lonavala"],
    eventTypes: ["Wedding", "Retirement", "Anniversary", "Engagement"],
    reviews: [
      {
            "id": "rev-lp-1",
            "userName": "Varun & Tanvi",
            "rating": 5.0,
            "date": "20 Oct 2026",
            "comment": "Watching our pheras come alive on canvas was the most talked-about highlight of our wedding! The painting now hangs in our living room.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Top-rated live wedding painter in Maharashtra", "Archival 100-year gallery canvas", "Same-evening unveiling"]
  },

  // Live Painting - Mumbai
  {
    id: "v-paint-2",
    name: "RangVirasat Live Event Painter",
    category: "Live Painting",
    location: "Mumbai",
    rating: 4.8,
    reviewCount: 54,
    experience: 9,
    startingPrice: 40000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Atmospheric oil & acrylic live paintings capturing grand royal setups and emotional celebrations.",
    description: "RangVirasat captures the royal pomp and grandeur of Indian celebrations with painterly impressionism. From glittering chandeliers of Mumbai ballrooms to heritage beachside lawns, our art freezes time in glowing color.",
    featuredImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80"],
    services: ["Live Stage Painting", "Oil on Canvas", "Guest Favor Mini-Sketches", "Corporate Milestone Painting"],
    packages: [
      {
            "id": "v-lp-p-3",
            "name": "Royal Varmala Canvas",
            "price": 40000,
            "description": "Live painting of the varmala garland exchange on a 24x36 canvas.",
            "features": [
                  "6 hours live on-site painting",
                  "Custom color palette matching bridal outfit",
                  "Gold leaf highlights applied live"
            ]
      }
],
    styles: ["Royal", "Traditional", "Luxury"],
    contact: {
      "phone": "+91 98200 91823",
      "email": "info@rangvirasat.art",
      "instagram": "@rangvirasat_art",
      "address": "Lower Parel, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi", "Gujarati"],
    serviceAreas: ["Mumbai", "Pune", "Udaipur", "Jaipur"],
    eventTypes: ["Wedding", "Retirement", "Anniversary", "Corporate"],
    reviews: [
      {
            "id": "rev-lp-2",
            "userName": "Devika Ambani",
            "rating": 4.9,
            "date": "11 Nov 2026",
            "comment": "The gold foil accents applied live on stage made the artwork shimmer magically under the ballroom lights.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Gold leaf embellishment live on canvas", "Over 150 luxury events painted"]
  },

  // Live Painting - Bengaluru
  {
    id: "v-paint-3",
    name: "Artisanal Strokes by Divya",
    category: "Live Painting",
    location: "Bengaluru",
    rating: 4.9,
    reviewCount: 47,
    experience: 6,
    startingPrice: 30000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Contemporary impressionist live paintings and fast watercolor guest portraits in Bengaluru.",
    description: "Divya brings a fresh, romantic aesthetic to live event art. Combining soft pastel hues and energetic impressionist brushwork, she paints weddings, corporate retirements, and silver jubilees with delicate grace.",
    featuredImage: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1000&q=80"],
    services: ["Impressionist Live Canvas", "Live Watercolor Guest Favors", "Retirement Tribute Paintings"],
    packages: [
      {
            "id": "v-lp-p-4",
            "name": "Contemporary Impression Canvas",
            "price": 30000,
            "description": "20x28 inch canvas painted during ceremony and reception.",
            "features": [
                  "1 Lead Artist",
                  "5 hours on-site painting",
                  "High-grade acrylic pigments",
                  "Easel display for guests"
            ]
      }
],
    styles: ["Modern", "Minimalist"],
    contact: {
      "phone": "+91 98450 67120",
      "email": "divya@artisanalstrokes.in",
      "address": "Koramangala, Bengaluru, Karnataka"
},
    languages: ["English", "Kannada", "Hindi"],
    serviceAreas: ["Bengaluru", "Hyderabad", "Chennai"],
    eventTypes: ["Wedding", "Retirement", "Party", "Anniversary"],
    reviews: [
      {
            "id": "rev-lp-3",
            "userName": "Akash & Meera",
            "rating": 5.0,
            "date": "18 Aug 2026",
            "comment": "Divya captured our garden ceremony so poetically. All our tech friends were mesmerized watching her paint.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Chic modern impressionist style", "Fast-drying premium non-toxic acrylics"]
  },

  // Live Painting - Nashik
  {
    id: "v-paint-4",
    name: "Kalakriti Live Moments",
    category: "Live Painting",
    location: "Nashik",
    rating: 4.7,
    reviewCount: 39,
    experience: 8,
    startingPrice: 25000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Traditional and vineyard celebration live painting with rich cultural depth.",
    description: "Based in wine-country Nashik, Kalakriti specializes in vineyard wedding live art and retirement milestone portraits. We capture the sunset hues over amphitheaters and mandaps with vibrant pigments.",
    featuredImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80"],
    services: ["Vineyard Wedding Live Art", "Retirement Felicitations Canvas", "Temple Wedding Painting"],
    packages: [
      {
            "id": "v-lp-p-5",
            "name": "Vineyard Sunset Canvas",
            "price": 25000,
            "description": "Live painting of pheras or reception under sunset skies.",
            "features": [
                  "1 Artist",
                  "4-5 hours live painting",
                  "Framing included",
                  "Varnish coat"
            ]
      }
],
    styles: ["Traditional", "Modern"],
    contact: {
      "phone": "+91 94220 55190",
      "email": "kalakriti.liveart@gmail.com",
      "address": "College Road, Nashik, Maharashtra"
},
    languages: ["Marathi", "Hindi", "English"],
    serviceAreas: ["Nashik", "Pune", "Igatpuri", "Shirdi"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-lp-4",
            "userName": "Sachin & Sayali",
            "rating": 4.8,
            "date": "14 Sep 2026",
            "comment": "Painted our Sula vineyard wedding live! It looks just like a dream on canvas.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Budget-friendly master painter", "Scenic outdoor & vineyard art specialist"]
  },

  // Live Painting - Hyderabad
  {
    id: "v-paint-5",
    name: "Nawabi Brushworks Live Art",
    category: "Live Painting",
    location: "Hyderabad",
    rating: 4.9,
    reviewCount: 51,
    experience: 10,
    startingPrice: 38000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Opulent Nizami palace wedding live art with classical Tanjore and Mughal inspired details.",
    description: "Nawabi Brushworks brings centuries of Deccan artistic heritage into live celebration art. Our artists paint ornate sherwanis, pearl necklaces, palace arches, and grand retirement honors with breathtaking fidelity.",
    featuredImage: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1000&q=80"],
    services: ["Palace Wedding Live Painting", "Retirement Dignitary Portrait Live", "24K Gold Dust Embellishments"],
    packages: [
      {
            "id": "v-lp-p-6",
            "name": "Nawabi Heirloom Art",
            "price": 38000,
            "description": "24x36 inch canvas with intricate architectural detailing painted live.",
            "features": [
                  "1 Master Artist",
                  "6 hours on-site execution",
                  "Intricate floral border detailing",
                  "Silk matte varnish"
            ]
      }
],
    styles: ["Royal", "Traditional"],
    contact: {
      "phone": "+91 98491 88301",
      "email": "inquiry@nawabibrushworks.com",
      "address": "Banjara Hills, Hyderabad, Telangana"
},
    languages: ["Urdu", "Telugu", "Hindi", "English"],
    serviceAreas: ["Hyderabad", "Bengaluru", "Chennai"],
    eventTypes: ["Wedding", "Retirement", "Corporate"],
    reviews: [
      {
            "id": "rev-lp-5",
            "userName": "Feroz Khan",
            "rating": 5.0,
            "date": "08 Nov 2026",
            "comment": "Painted at the Taj Falaknuma palace banquet. The level of architectural detail is astounding.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Trained in classical Deccan miniature technique", "Palace and heritage specialist"]
  },

  // Live Painting - Pune
  {
    id: "v-paint-6",
    name: "The Wedding Palette Studio",
    category: "Live Painting",
    location: "Pune",
    rating: 4.8,
    reviewCount: 43,
    experience: 5,
    startingPrice: 28000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Vibrant modern live painting celebrating warm candid laughter and dance floor energy.",
    description: "The Wedding Palette captures the candid energy of your celebrations. Whether it's an energetic Sangeet dance step, a touching retirement salute, or emotional wedding vows, we paint with fluid expressiveness.",
    featuredImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80"],
    services: ["Candid Live Moment Painting", "Sangeet Motion Art", "Speed Sketching for Guests"],
    packages: [
      {
            "id": "v-lp-p-7",
            "name": "Candid Celebration Canvas",
            "price": 28000,
            "description": "20x24 inch canvas capturing raw emotional celebration moments.",
            "features": [
                  "1 Artist",
                  "4 hours live coverage",
                  "Fast dry acrylics",
                  "Display easel"
            ]
      }
],
    styles: ["Modern", "Candid"],
    contact: {
      "phone": "+91 98221 44019",
      "email": "theweddingpalette@puneart.in",
      "address": "Baner, Pune, Maharashtra"
},
    languages: ["English", "Hindi", "Marathi"],
    serviceAreas: ["Pune", "Mumbai", "Lonavala"],
    eventTypes: ["Wedding", "Party", "Retirement", "Engagement"],
    reviews: [
      {
            "id": "rev-lp-6",
            "userName": "Aniket & Pooja",
            "rating": 4.8,
            "date": "24 Sep 2026",
            "comment": "Capturing our ring exchange live was such a unique touch. Our guests loved visiting the easel.",
            "eventType": "Engagement"
      }
],
    aiHighlights: ["Vibrant color palette", "Interactive easel setup for guests"]
  },

  // Live Painting - Mumbai
  {
    id: "v-paint-7",
    name: "Live Artistry by Ananya",
    category: "Live Painting",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 68,
    experience: 8,
    startingPrice: 45000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Celebrity-favorite live artist painting high-profile weddings and distinguished lifetime achievement galas.",
    description: "Ananya is one of India's pioneering live event painters. Her art has graced luxury hotel ballrooms, celebrity weddings, and prestigious corporate retirement honors across India and Dubai.",
    featuredImage: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1000&q=80"],
    services: ["Luxury Live Event Canvas", "VIP Guest Watercolor Vignettes", "Retirement Lifetime Art Piece"],
    packages: [
      {
            "id": "v-lp-p-8",
            "name": "Prestige Master Canvas",
            "price": 45000,
            "description": "30x36 inch grand exhibition canvas live painted across the entire event.",
            "features": [
                  "1 Lead Celebrity Artist",
                  "Full event coverage",
                  "Archival linen canvas",
                  "Italian wooden frame"
            ]
      }
],
    styles: ["Luxury", "Modern"],
    contact: {
      "phone": "+91 98204 11220",
      "email": "studio@ananyaliveart.com",
      "address": "Juhu Tara Road, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Goa", "Delhi", "Pune"],
    eventTypes: ["Wedding", "Retirement", "Corporate", "Anniversary"],
    reviews: [
      {
            "id": "rev-lp-7",
            "userName": "Rohit Parekh",
            "rating": 5.0,
            "date": "16 Nov 2026",
            "comment": "Commissioned Ananya for our Chairman's grand retirement gala. The painting captured his 40-year career essence with unbelievable emotion.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Celebrity wedding artist", "Exhibition grade museum quality finishing"]
  },

  // Live Painting - Bengaluru
  {
    id: "v-paint-8",
    name: "Chitrakala Live Wedding Paintings",
    category: "Live Painting",
    location: "Bengaluru",
    rating: 4.8,
    reviewCount: 36,
    experience: 5,
    startingPrice: 27000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Earthy, realistic wedding and retirement canvases with detailed floral landscapes.",
    description: "Chitrakala combines botanical illustration with realistic figurative painting. We pay deep attention to the mandap florals, wedding attire embroideries, and genuine facial expressions of the hosts.",
    featuredImage: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1000&q=80"],
    services: ["Realistic Live Canvas", "Botanical Floral Detailing", "Family Portrait Painting"],
    packages: [
      {
            "id": "v-lp-p-9",
            "name": "Botanical Floral Harmony",
            "price": 27000,
            "description": "20x28 inch painting highlighting the couple and floral mandap.",
            "features": [
                  "1 Artist",
                  "5 hours on-site work",
                  "Detailed floral decor painting"
            ]
      }
],
    styles: ["Traditional", "Modern"],
    contact: {
      "phone": "+91 98451 99014",
      "email": "chitrakala.events@gmail.com",
      "address": "Whitefield, Bengaluru, Karnataka"
},
    languages: ["English", "Kannada", "Hindi"],
    serviceAreas: ["Bengaluru", "Mysuru", "Coorg"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-lp-8",
            "userName": "Karthik & Sindhu",
            "rating": 4.9,
            "date": "05 Oct 2026",
            "comment": "The botanical touches of our marigold mandap turned out stunning on the canvas.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Botanical floral accuracy", "Fast drying archival pigments"]
  },

  // Live Painting - Pune
  {
    id: "v-paint-9",
    name: "Vivid Memoir Live Canvas",
    category: "Live Painting",
    location: "Pune",
    rating: 4.7,
    reviewCount: 31,
    experience: 4,
    startingPrice: 24000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Affordable fine art live painting for weddings, birthday jubilees, and retirements.",
    description: "Vivid Memoir believes every family deserves fine art memories of their milestone days. We offer flexible canvas sizes and live painting packages tailored for banquets and lawn receptions.",
    featuredImage: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80"],
    services: ["Budget-Friendly Live Painting", "Quick Couple Portraits", "Retirement Moment Capture"],
    packages: [
      {
            "id": "v-lp-p-10",
            "name": "Essential Milestone Art",
            "price": 24000,
            "description": "18x24 inch canvas live painted during the ceremony.",
            "features": [
                  "1 Artist",
                  "4 hours live painting",
                  "Varnish coat",
                  "Desk display easel"
            ]
      }
],
    styles: ["Modern", "Minimalist"],
    contact: {
      "phone": "+91 98223 11899",
      "email": "vividmemoir.art@gmail.com",
      "address": "Kothrud, Pune, Maharashtra"
},
    languages: ["Marathi", "Hindi", "English"],
    serviceAreas: ["Pune", "Satara", "Ahmednagar"],
    eventTypes: ["Wedding", "Retirement", "Birthday", "Anniversary"],
    reviews: [
      {
            "id": "rev-lp-9",
            "userName": "Manoj Deshmukh",
            "rating": 4.8,
            "date": "19 Sep 2026",
            "comment": "We surprised our father with this at his retirement banquet. He was moved to tears.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Accessible entry price", "Heartwarming emotional impact"]
  },

  // Live Painting - Mumbai
  {
    id: "v-paint-10",
    name: "Symphony in Colors Live Art",
    category: "Live Painting",
    location: "Mumbai",
    rating: 4.8,
    reviewCount: 40,
    experience: 7,
    startingPrice: 36000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Expressive live impressionist paintings paired with live musical performance ambiance.",
    description: "Symphony in Colors brings a performance art sensibility to live wedding painting. Our artist synchronizes expressive strokes with the event's live music and lighting transitions, creating a captivating visual spectacle.",
    featuredImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80"],
    services: ["Performance Live Art", "Sangeet Stage Painting", "Gala Milestone Art"],
    packages: [
      {
            "id": "v-lp-p-11",
            "name": "Live Performance Canvas",
            "price": 36000,
            "description": "24x32 inch canvas with dynamic impressionist brushwork.",
            "features": [
                  "1 Senior Artist",
                  "5 hours live execution",
                  "Framing included"
            ]
      }
],
    styles: ["Modern", "Luxury"],
    contact: {
      "phone": "+91 98203 44990",
      "email": "art@symphonyincolors.com",
      "address": "Andheri West, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Pune", "Goa"],
    eventTypes: ["Wedding", "Retirement", "Corporate", "Party"],
    reviews: [
      {
            "id": "rev-lp-10",
            "userName": "Karan & Simran",
            "rating": 4.9,
            "date": "14 Oct 2026",
            "comment": "The energy on the canvas captured our cocktail dance party so vibrantly!",
            "eventType": "Party"
      }
],
    aiHighlights: ["Dynamic musical rhythm painting", "Dramatic evening reveal"]
  },

  // Anchors - Pune
  {
    id: "v-anchor-1",
    name: "Anchor Siddharth Verma",
    category: "Anchors",
    location: "Pune",
    rating: 4.9,
    reviewCount: 115,
    experience: 9,
    startingPrice: 25000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: "Charismatic celebrity emcee & wedding anchor specializing in energetic sangeets and dignified corporate retirements.",
    description: "Siddharth Verma is one of Western India's most sought-after bilingual emcees with over 600 successful stage appearances. Known for witty humor, spotless crowd engagement, seamless multilingual transitions (English, Hindi, Marathi), and spot-on timing, Siddharth transforms dry schedules into electrifying celebrations without awkward silences or cheesy jokes.",
    featuredImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80"],
    services: ["Wedding Sangeet & Reception Hosting", "Retirement Ceremony & Felicitation Hosting", "Interactive Crowd Games & Icebreakers", "Multilingual Script Writing", "Baraat & Couple Grand Entry Hosting"],
    packages: [
      {
            "id": "v-anc-p-1",
            "name": "Single Evening Gala Emcee",
            "price": 25000,
            "description": "Complete stage anchoring for Sangeet, Reception, or Retirement ceremony (up to 5 hours).",
            "features": [
                  "Bespoke custom couple/retiree storyline script",
                  "DJ audio cue coordination",
                  "Interactive family trivia games",
                  "Stage protocol management"
            ],
            "popular": true
      },
      {
            "id": "v-anc-p-2",
            "name": "2-Day Sangeet + Wedding Mega Host",
            "price": 45000,
            "description": "Comprehensive hosting for both Sangeet evening and Wedding reception/dinner.",
            "features": [
                  "Full 2-day on-stage coverage",
                  "Family dance performance sequencing",
                  "Grand entry vocal hype",
                  "Rehearsal attendance with dance choreographer"
            ],
            "popular": false
      }
],
    styles: ["Modern", "Luxury", "Traditional"],
    contact: {
      "phone": "+91 98220 89898",
      "email": "bookings@siddharthverma.in",
      "instagram": "@anchorsiddharth",
      "address": "Koregaon Park, Pune, Maharashtra"
},
    languages: ["English", "Hindi", "Marathi"],
    serviceAreas: ["Pune", "Mumbai", "Goa", "Nashik", "Lonavala"],
    eventTypes: ["Wedding", "Retirement", "Corporate", "Anniversary", "Party"],
    reviews: [
      {
            "id": "rev-anc-1",
            "userName": "Sameer & Apoorva",
            "rating": 5.0,
            "date": "18 Nov 2026",
            "comment": "Siddharth made our sangeet unforgettable! He got every uncle, aunt, and college friend cheering and dancing effortlessly.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Over 600 stage shows conducted", "Fluent in 3 languages", "Zero awkward pauses guaranteed"]
  },

  // Anchors - Mumbai
  {
    id: "v-anchor-2",
    name: "Anchor Simran Kaur",
    category: "Anchors",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 98,
    experience: 8,
    startingPrice: 30000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "High-octane TV presenter, sangeet host, and corporate gala emcee in Mumbai.",
    description: "Former television anchor Simran Kaur brings glamorous stage presence and infectious energy to weddings, corporate awards, and retirement banquets. She excels in lively family roasts, emotional tribute moments, and keeping 500+ guests thoroughly entertained.",
    featuredImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"],
    services: ["Sangeet Emcee", "Corporate Retirement Felicitation Host", "Cocktail Party Host", "Celebrity Interview & Stage Management"],
    packages: [
      {
            "id": "v-anc-p-3",
            "name": "Glamour Sangeet Night",
            "price": 30000,
            "description": "High-energy hosting for 4-5 hours Sangeet ceremony.",
            "features": [
                  "Custom family quiz & roasts",
                  "Dance crew choreography sync",
                  "High-energy audience games",
                  "Professional wireless mic kit backup"
            ]
      }
],
    styles: ["Modern", "Luxury"],
    contact: {
      "phone": "+91 98202 33411",
      "email": "simran@simrankaurhost.com",
      "instagram": "@simrankaur_emcee",
      "address": "Andheri West, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi", "Punjabi"],
    serviceAreas: ["Mumbai", "Thane", "Pune", "Delhi", "Goa"],
    eventTypes: ["Wedding", "Party", "Retirement", "Corporate"],
    reviews: [
      {
            "id": "rev-anc-2",
            "userName": "Kunal & Neha Kapur",
            "rating": 5.0,
            "date": "04 Oct 2026",
            "comment": "Simran is pure electricity on stage! The Punjabi sangeet vibe was out of this world.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Television media background", "Exceptional crowd interaction skills"]
  },

  // Anchors - Bengaluru
  {
    id: "v-anchor-3",
    name: "Anchor Roshan & Team",
    category: "Anchors",
    location: "Bengaluru",
    rating: 4.8,
    reviewCount: 76,
    experience: 7,
    startingPrice: 22000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Versatile corporate emcee and multicultural wedding anchor in Bengaluru.",
    description: "Roshan specializes in contemporary cross-cultural weddings, tech industry celebrations, and formal retirement felicitations. His warm baritone voice, graceful stage humor, and smooth crowd management keep proceedings dignified yet joyful.",
    featuredImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"],
    services: ["Cross-Cultural Wedding Emcee", "Retirement Ceremony Protocol Host", "Corporate Gala Emcee", "Family Antakshari & Icebreakers"],
    packages: [
      {
            "id": "v-anc-p-4",
            "name": "Bespoke Evening Host",
            "price": 22000,
            "description": "Professional anchoring for 4 hours.",
            "features": [
                  "Personalized milestone script",
                  "Sound check & lighting cue coordination",
                  "Bilingual announcements"
            ]
      }
],
    styles: ["Modern", "Minimalist"],
    contact: {
      "phone": "+91 98451 22910",
      "email": "roshan@anchorroshan.in",
      "address": "Indiranagar, Bengaluru, Karnataka"
},
    languages: ["English", "Hindi", "Kannada", "Tamil"],
    serviceAreas: ["Bengaluru", "Hyderabad", "Mysuru"],
    eventTypes: ["Retirement", "Wedding", "Corporate"],
    reviews: [
      {
            "id": "rev-anc-3",
            "userName": "Dr. V. Narayanan",
            "rating": 4.9,
            "date": "15 Sep 2026",
            "comment": "Hosted my retirement farewell banquet from IISc. Dignified, warm, and wonderfully articulate.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Multilingual South-North wedding expert", "Flawless corporate retirement protocol"]
  },

  // Anchors - Pune
  {
    id: "v-anchor-4",
    name: "Anchor Meera Joshi",
    category: "Anchors",
    location: "Pune",
    rating: 4.8,
    reviewCount: 65,
    experience: 6,
    startingPrice: 18000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Traditional Marathi & Hindi wedding anchor, Sangeet host, and retirement tribute speaker.",
    description: "Meera Joshi weaves cultural warmth, regional poetic shlokas, and lively modern party games into her stage hosting. Perfect for Maharashtrian weddings, Sakharpuda, and heartfelt family retirement celebrations.",
    featuredImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80"],
    services: ["Traditional Wedding Emcee", "Retirement Tribute & Felicitation", "Ukhane & Mangalagaur Hosting", "Sangeet Games Anchor"],
    packages: [
      {
            "id": "v-anc-p-5",
            "name": "Cultural Celebration Host",
            "price": 18000,
            "description": "Stage hosting with traditional shlokas, ukhane, and interactive games.",
            "features": [
                  "1 Emcee",
                  "4 hours coverage",
                  "Personalized poetic verses for couple/retiree"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 98224 33100",
      "email": "meera.anchorpune@gmail.com",
      "address": "Shivajinagar, Pune, Maharashtra"
},
    languages: ["Marathi", "Hindi", "English"],
    serviceAreas: ["Pune", "Nashik", "Satara", "Kolhapur"],
    eventTypes: ["Wedding", "Retirement", "Engagement", "Anniversary"],
    reviews: [
      {
            "id": "rev-anc-4",
            "userName": "Abhay & Smita Gadgil",
            "rating": 4.9,
            "date": "29 Oct 2026",
            "comment": "Meera's Marathi shlokas and ukhane kept all the senior relatives beaming with joy.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Traditional Maharashtrian wedding expert", "Warm family-friendly demeanor"]
  },

  // Anchors - Mumbai
  {
    id: "v-anchor-5",
    name: "Anchor Kabir Merchant",
    category: "Anchors",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 85,
    experience: 11,
    startingPrice: 35000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Luxury destination wedding anchor and corporate summit host across India and UAE.",
    description: "Kabir Merchant brings stadium-grade confidence and sophisticated elegance to premier luxury destination celebrations. Having hosted over 400 destination weddings in Udaipur, Goa, and Mumbai, Kabir ensures smooth coordination between artists, DJs, and families.",
    featuredImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80"],
    services: ["Destination Wedding Host", "High-End Corporate Summit Emcee", "Retirement Gala Tribute Master", "Celebrity Artist Introductions"],
    packages: [
      {
            "id": "v-anc-p-6",
            "name": "Destination Grand Emcee",
            "price": 35000,
            "description": "Complete evening hosting with artist cue coordination and custom storytelling.",
            "features": [
                  "1 Lead Celebrity Host",
                  "5 hours coverage",
                  "Storyline script production",
                  "Technical AV team coordination"
            ]
      }
],
    styles: ["Luxury", "Royal", "Modern"],
    contact: {
      "phone": "+91 98201 99088",
      "email": "kabir@kabirmerchant.com",
      "address": "Bandra Kurla Complex, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Goa", "Udaipur", "Pune", "Jaipur"],
    eventTypes: ["Wedding", "Retirement", "Corporate", "Party"],
    reviews: [
      {
            "id": "rev-anc-5",
            "userName": "Rohan & Natasha Singhal",
            "rating": 5.0,
            "date": "12 Nov 2026",
            "comment": "Kabir anchored our 3-day Goa wedding. Simply top class! Not a single dull second.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Luxury destination wedding veteran", "Flawless technical audio cue management"]
  },

  // Anchors - Hyderabad
  {
    id: "v-anchor-6",
    name: "Anchor Pooja Reddy",
    category: "Anchors",
    location: "Hyderabad",
    rating: 4.8,
    reviewCount: 70,
    experience: 7,
    startingPrice: 24000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Lively Telugu & Hindi wedding host and high-energy Sangeet entertainer in Hyderabad.",
    description: "Pooja Reddy is beloved across Hyderabad for her sparkling smile, infectious spontaneity, and high-energy Telugu-Hindi-English hosting. She turns Sangeet stages into mini concerts and leads retirements with heartfelt warmth.",
    featuredImage: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=1000&q=80"],
    services: ["Telugu Wedding Sangeet Host", "Pelli Choopulu & Engagement Emcee", "Retirement Celebration Host"],
    packages: [
      {
            "id": "v-anc-p-7",
            "name": "Hyderabadi Sangeet Dhamaka",
            "price": 24000,
            "description": "High-octane hosting for Hyderabadi wedding events.",
            "features": [
                  "1 Lead Anchor",
                  "4-5 hours hosting",
                  "Dance faceoff facilitation",
                  "Telugu-Hindi jokes and games"
            ]
      }
],
    styles: ["Modern", "Traditional"],
    contact: {
      "phone": "+91 98492 44102",
      "email": "pooja.reddyhost@gmail.com",
      "address": "Jubilee Hills, Hyderabad, Telangana"
},
    languages: ["Telugu", "Hindi", "English"],
    serviceAreas: ["Hyderabad", "Secunderabad", "Vijayawada", "Bengaluru"],
    eventTypes: ["Wedding", "Retirement", "Party", "Anniversary"],
    reviews: [
      {
            "id": "rev-anc-6",
            "userName": "Chaitanya & Divya",
            "rating": 4.9,
            "date": "21 Oct 2026",
            "comment": "Pooja rocked our Sangeet night! Everyone from grandmother to cousins was on their feet.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Top Telugu wedding entertainer", "Exceptional dance faceoff hosting"]
  },

  // Anchors - Nashik
  {
    id: "v-anchor-7",
    name: "Anchor Aditya Dixit",
    category: "Anchors",
    location: "Nashik",
    rating: 4.7,
    reviewCount: 42,
    experience: 5,
    startingPrice: 16000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Dynamic youth emcee for musical sangeets, cocktail parties, and retirement functions.",
    description: "Aditya Dixit brings young, vibrant energy and crisp diction to events in Nashik and Pune. Known for engaging interactive games, clean family humor, and excellent coordination with the sound team.",
    featuredImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80"],
    services: ["Sangeet Emcee", "Retirement Felicitation Master", "Cocktail Party Host", "Stage Game Coordinator"],
    packages: [
      {
            "id": "v-anc-p-8",
            "name": "Youth Sangeet Host",
            "price": 16000,
            "description": "Engaging stage hosting for 4 hours.",
            "features": [
                  "1 Anchor",
                  "Crowd icebreaker games",
                  "Bride vs Groom trivia games"
            ]
      }
],
    styles: ["Modern", "Candid"],
    contact: {
      "phone": "+91 94221 77209",
      "email": "aditya.dixit@nashikanchors.in",
      "address": "Mahatma Nagar, Nashik, Maharashtra"
},
    languages: ["Marathi", "Hindi", "English"],
    serviceAreas: ["Nashik", "Pune", "Aurangabad"],
    eventTypes: ["Wedding", "Party", "Retirement", "Birthday"],
    reviews: [
      {
            "id": "rev-anc-7",
            "userName": "Pravin & Komal",
            "rating": 4.8,
            "date": "10 Sep 2026",
            "comment": "Aditya kept the party alive until 1 AM! Great communication before and during the event.",
            "eventType": "Party"
      }
],
    aiHighlights: ["Cost-effective energetic emcee", "Interactive audience participation expert"]
  },

  // Anchors - Mumbai
  {
    id: "v-anchor-8",
    name: "Anchor Zara Sheikh",
    category: "Anchors",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 82,
    experience: 9,
    startingPrice: 32000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Eloquent Urdu & English host for grand receptions, corporate awards, and retirement galas.",
    description: "Zara Sheikh is celebrated for her poetic Urdu shayari, articulate English diction, and royal stage composure. She has hosted state banquets, high-profile retirement felicitations, and Nikah receptions.",
    featuredImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"],
    services: ["Nikah & Walima Reception Emcee", "Retirement Lifetime Award Anchor", "Poetic Urdu Shayari Host"],
    packages: [
      {
            "id": "v-anc-p-9",
            "name": "Poetic Reception Emcee",
            "price": 32000,
            "description": "5 hours of elegant bilingual stage hosting.",
            "features": [
                  "1 Lead Emcee",
                  "Custom nazms & shayaris for couple or retiree",
                  "Formal stage protocol coordination"
            ]
      }
],
    styles: ["Royal", "Luxury"],
    contact: {
      "phone": "+91 98205 66014",
      "email": "zara@zarashaikhhost.com",
      "address": "Colaba, Mumbai, Maharashtra"
},
    languages: ["Urdu", "English", "Hindi"],
    serviceAreas: ["Mumbai", "Pune", "Hyderabad", "Delhi"],
    eventTypes: ["Wedding", "Retirement", "Corporate", "Anniversary"],
    reviews: [
      {
            "id": "rev-anc-8",
            "userName": "Tariq Mansoor",
            "rating": 5.0,
            "date": "06 Nov 2026",
            "comment": "Her shayari brought tears of joy during my father's retirement speech. Truly magnificent.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Master of Urdu poetry and shayari", "Diplomatic and state event host"]
  },

  // Anchors - Bengaluru
  {
    id: "v-anchor-9",
    name: "Anchor Nitin Rao",
    category: "Anchors",
    location: "Bengaluru",
    rating: 4.8,
    reviewCount: 59,
    experience: 6,
    startingPrice: 20000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Stand-up comedian turned event emcee delivering hilarious clean laughs at weddings and retirements.",
    description: "Nitin Rao combines clean stand-up comedy with professional event hosting. He ensures no boring moments on stage while strictly respecting family values and corporate dignitary boundaries.",
    featuredImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80"],
    services: ["Clean Standup & Emcee Combo", "Retirement Roast & Toast Host", "Sangeet Family Games"],
    packages: [
      {
            "id": "v-anc-p-10",
            "name": "Roast & Toast Host",
            "price": 20000,
            "description": "4 hours stage anchoring with 20 minutes clean customized standup set.",
            "features": [
                  "1 Comedian Emcee",
                  "Customized jokes on family members",
                  "Game facilitation"
            ]
      }
],
    styles: ["Modern", "Candid"],
    contact: {
      "phone": "+91 98453 88190",
      "email": "nitin@nitinraohost.com",
      "address": "HSR Layout, Bengaluru, Karnataka"
},
    languages: ["English", "Hindi", "Kannada"],
    serviceAreas: ["Bengaluru", "Chennai", "Hyderabad"],
    eventTypes: ["Retirement", "Wedding", "Corporate", "Party"],
    reviews: [
      {
            "id": "rev-anc-9",
            "userName": "Vinay & Deepika",
            "rating": 4.9,
            "date": "25 Oct 2026",
            "comment": "The clean comedy set had everyone in splits! It broke the ice between both families completely.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Standup comedian background", "Clean hilarious customized family roasts"]
  },

  // Anchors - Pune
  {
    id: "v-anchor-10",
    name: "Anchor Shruti Bhave",
    category: "Anchors",
    location: "Pune",
    rating: 4.8,
    reviewCount: 51,
    experience: 5,
    startingPrice: 17000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Sweet, vibrant Marathi & English host for family celebrations, birthdays, and retirement felicitations.",
    description: "Shruti Bhave brings a joyous, friendly aura to the stage. She connects effortlessly with children, couples, and grandparents alike, making every guest feel like an honored participant.",
    featuredImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"],
    services: ["Family Milestone Emcee", "Retirement Felicitation Anchor", "Sangeet Games & Antakshari"],
    packages: [
      {
            "id": "v-anc-p-11",
            "name": "Warm Celebration Host",
            "price": 17000,
            "description": "4 hours of family-centered hosting.",
            "features": [
                  "1 Emcee",
                  "Custom games & quizzes",
                  "Felicitation memento announcements"
            ]
      }
],
    styles: ["Modern", "Traditional"],
    contact: {
      "phone": "+91 98226 77012",
      "email": "shruti.bhave@gmail.com",
      "address": "Kothrud, Pune, Maharashtra"
},
    languages: ["Marathi", "English", "Hindi"],
    serviceAreas: ["Pune", "Mumbai", "Satara"],
    eventTypes: ["Retirement", "Wedding", "Birthday", "Anniversary"],
    reviews: [
      {
            "id": "rev-anc-10",
            "userName": "Suresh & Neelam Joshi",
            "rating": 4.8,
            "date": "02 Oct 2026",
            "comment": "Shruti anchored my retirement felicitation with such grace and genuine affection. Wonderful job!",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Warm family-centric hosting", "Punctual and highly organized"]
  },

  // Photography - Pune
  {
    id: "v-photo-6",
    name: "Deccan Shutterbug Co.",
    category: "Photography",
    location: "Pune",
    rating: 4.8,
    reviewCount: 74,
    experience: 6,
    startingPrice: 38000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Soulful storytelling and golden-hour bridal portraits across Maharashtra.",
    description: "Deccan Shutterbug Co. specializes in candid wedding coverage that highlights genuine emotion, vibrant cultural ceremonies, and unposed family moments.",
    featuredImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80"],
    services: ["Candid Wedding Photography", "Pre-Wedding Shoots", "Traditional Portraiture"],
    packages: [
      {
            "id": "p-ph-6-1",
            "name": "Single Day Candid",
            "price": 38000,
            "description": "1 Candid + 1 Traditional photographer for main ceremony.",
            "features": [
                  "8 Hours Coverage",
                  "250 Edited High-Res Photos",
                  "Online Private Gallery"
            ]
      }
],
    styles: ["Candid", "Modern"],
    contact: {
      "phone": "+91 98224 10022",
      "email": "hello@deccanshutterbug.in",
      "instagram": "@deccanshutterbug",
      "address": "Baner Road, Pune, Maharashtra"
},
    languages: ["English", "Hindi", "Marathi"],
    serviceAreas: ["Pune", "Mumbai", "Satara"],
    eventTypes: ["Wedding", "Engagement", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-ph-6-1",
            "userName": "Rohan & Snehal",
            "rating": 4.9,
            "date": "10 Oct 2026",
            "comment": "Incredible eye for detail. The candid shots during our haldi are pure gold.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Top candid photographer in Pune", "Express 10-day album delivery"]
  },

  // Photography - Mumbai
  {
    id: "v-photo-7",
    name: "Urban Vows Photography",
    category: "Photography",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 92,
    experience: 8,
    startingPrice: 52000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Editorial style wedding imagery and high-fashion couple portraiture in Mumbai.",
    description: "Urban Vows blends fashion magazine aesthetic with traditional Indian ceremony coverage, creating striking visual narratives for contemporary couples.",
    featuredImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=80"],
    services: ["Editorial Wedding Shoots", "Drone Coverage", "Custom Leather Flush Albums"],
    packages: [
      {
            "id": "p-ph-7-1",
            "name": "Editorial Wedding Collection",
            "price": 52000,
            "description": "Full day coverage by 2 Senior Photographers.",
            "features": [
                  "10 Hours on-site",
                  "Drone aerial portraits",
                  "400 Retouched Images",
                  "Coffee Table Book"
            ]
      }
],
    styles: ["Modern", "Luxury"],
    contact: {
      "phone": "+91 98205 88201",
      "email": "contact@urbanvows.com",
      "instagram": "@urbanvowsmumbai",
      "address": "Worli, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Goa", "Pune", "Udaipur"],
    eventTypes: ["Wedding", "Engagement", "Party"],
    reviews: [
      {
            "id": "rev-ph-7-1",
            "userName": "Armaan & Natasha",
            "rating": 5.0,
            "date": "02 Nov 2026",
            "comment": "Every picture looks straight out of Vogue! Truly worth every rupee.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["High-fashion editorial lighting", "Celebrity wedding portfolio"]
  },

  // Photography - Bengaluru
  {
    id: "v-photo-8",
    name: "Silicon Tales Wedding Studio",
    category: "Photography",
    location: "Bengaluru",
    rating: 4.8,
    reviewCount: 68,
    experience: 7,
    startingPrice: 46000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Contemporary documentary wedding photography for modern urban couples.",
    description: "Silicon Tales brings a documentary approach to weddings. No awkward posing\u2014just authentic laughter, emotional rituals, and vibrant festivities.",
    featuredImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80"],
    services: ["Documentary Wedding Stories", "Family Heirloom Portraits", "Live Cloud Photo Gallery"],
    packages: [
      {
            "id": "p-ph-8-1",
            "name": "Documentary Master",
            "price": 46000,
            "description": "Complete wedding day coverage by 2 photographers.",
            "features": [
                  "Full day coverage",
                  "Same-day photo preview for social media",
                  "Hardcover album"
            ]
      }
],
    styles: ["Modern", "Candid"],
    contact: {
      "phone": "+91 98450 77112",
      "email": "info@silicontales.in",
      "address": "Koramangala, Bengaluru, Karnataka"
},
    languages: ["English", "Kannada", "Hindi"],
    serviceAreas: ["Bengaluru", "Mysuru", "Chennai"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-ph-8-1",
            "userName": "Gautam & Pooja",
            "rating": 4.8,
            "date": "14 Sep 2026",
            "comment": "Unobtrusive and thoughtful. They captured tiny moments we completely missed.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Documentary style", "Fast cloud photo gallery delivery"]
  },

  // Photography - Nashik
  {
    id: "v-photo-9",
    name: "Godavari Visuals",
    category: "Photography",
    location: "Nashik",
    rating: 4.7,
    reviewCount: 46,
    experience: 5,
    startingPrice: 32000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Warm, authentic ceremony coverage for traditional and vineyard celebrations.",
    description: "Specializing in traditional Maharashtrian ceremonies and scenic vineyard pre-wedding shoots across Nashik and Trimbakeshwar.",
    featuredImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=80"],
    services: ["Traditional Wedding Photography", "Vineyard Pre-Wedding Shoots"],
    packages: [
      {
            "id": "p-ph-9-1",
            "name": "Godavari Traditional",
            "price": 32000,
            "description": "Ceremony & reception photography with 1 photographer.",
            "features": [
                  "8 Hours coverage",
                  "Digital photos on USB drive",
                  "1 Velvet photo album"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 94220 33490",
      "email": "godavari.visuals@gmail.com",
      "address": "College Road, Nashik, Maharashtra"
},
    languages: ["Marathi", "Hindi"],
    serviceAreas: ["Nashik", "Pune", "Shirdi"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-ph-9-1",
            "userName": "Nilesh & Madhavi",
            "rating": 4.8,
            "date": "19 Aug 2026",
            "comment": "Punctual, polite, and great quality photos. Loved the album print quality.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Traditional ritual specialist", "Cost-effective package options"]
  },

  // Photography - Hyderabad
  {
    id: "v-photo-10",
    name: "Nizam Royal Photographers",
    category: "Photography",
    location: "Hyderabad",
    rating: 4.9,
    reviewCount: 81,
    experience: 9,
    startingPrice: 48000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Regal portraiture and cinematic wedding chronicles for grand celebrations.",
    description: "With a rich heritage in palace weddings, Nizam Royal Photographers brings grand compositional framing, royal portraits, and cinematic lighting to every celebration.",
    featuredImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"],
    services: ["Grand Ceremony Coverage", "Royal Couple Portraits", "Gold-Trimmed Albums"],
    packages: [
      {
            "id": "p-ph-10-1",
            "name": "Royal Shahi Package",
            "price": 48000,
            "description": "Full day coverage by 2 senior photographers.",
            "features": [
                  "10 Hours on-site",
                  "Gold-foiled leather photobook",
                  "350 edited photos"
            ]
      }
],
    styles: ["Royal", "Traditional"],
    contact: {
      "phone": "+91 98490 22100",
      "email": "royal@nizamphoto.in",
      "address": "Banjara Hills, Hyderabad, Telangana"
},
    languages: ["Urdu", "Telugu", "Hindi", "English"],
    serviceAreas: ["Hyderabad", "Secunderabad", "Bengaluru"],
    eventTypes: ["Wedding", "Retirement", "Corporate"],
    reviews: [
      {
            "id": "rev-ph-10-1",
            "userName": "Mirza & Sana",
            "rating": 5.0,
            "date": "24 Oct 2026",
            "comment": "The portraits at Taj Falaknuma look majestic. Truly royal quality.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Palace wedding expertise", "Exquisite album printing craftsmanship"]
  },

  // Catering - Bengaluru
  {
    id: "v-cat-4",
    name: "Bhojanam Royal South Caterers",
    category: "Catering",
    location: "Bengaluru",
    rating: 4.9,
    reviewCount: 110,
    experience: 12,
    startingPrice: 65000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: "Authentic multi-course banana leaf feasts and royal Chettinad/Udupi wedding banquets.",
    description: "Bhojanam Caterers brings generational culinary mastery to wedding tables. From traditional South Indian banana leaf lunches with 24 delicacies to modern fusion dessert counters.",
    featuredImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"],
    services: ["Traditional Banana Leaf Sadya", "Live Dosa & Appam Counters", "Filter Coffee Bars", "Royal Dessert Counters"],
    packages: [
      {
            "id": "p-cat-4-1",
            "name": "Traditional 24-Item Sadya",
            "price": 65000,
            "description": "Grand South Indian feast for up to 250 guests (extendable).",
            "features": [
                  "24 Traditional Delicacies",
                  "Eco-friendly banana leaves",
                  "Live hot appam & stew bar",
                  "Payasam trio"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 98450 11990",
      "email": "catering@bhojanam.in",
      "address": "Jayanagar, Bengaluru, Karnataka"
},
    languages: ["Kannada", "Tamil", "English", "Hindi"],
    serviceAreas: ["Bengaluru", "Mysuru", "Chennai"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-cat-4-1",
            "userName": "Raghavan Family",
            "rating": 5.0,
            "date": "15 Sep 2026",
            "comment": "The payasam and rasam were talked about for weeks by our wedding guests!",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Generational traditional recipes", "Hygienic 5-star kitchen certified"]
  },

  // Catering - Hyderabad
  {
    id: "v-cat-5",
    name: "Dastarkhwan Heritage Mughlai Catering",
    category: "Catering",
    location: "Hyderabad",
    rating: 4.9,
    reviewCount: 98,
    experience: 14,
    startingPrice: 75000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Authentic Hyderabadi Dum Biryani, Shahi Tukda, and Nizami royal banquet spreads.",
    description: "Dastarkhwan brings the legendary culinary traditions of Hyderabad to life. Specializing in authentic slow-cooked dum biryanis, mirchi ka salan, haleem, and exquisite kebab stations.",
    featuredImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"],
    services: ["Authentic Dum Biryani", "Live Kebab Grills", "Shahi Dastarkhwan Table Service"],
    packages: [
      {
            "id": "p-cat-5-1",
            "name": "Nizami Shahi Dastarkhwan",
            "price": 75000,
            "description": "Royal banquet setup for 300 guests with live counters.",
            "features": [
                  "Mutton & Chicken Dum Biryani",
                  "Live Galouti & Seekh Kebab",
                  "Double ka Meetha & Khubani",
                  "Uniformed silver-service waitstaff"
            ]
      }
],
    styles: ["Royal", "Traditional"],
    contact: {
      "phone": "+91 98490 55431",
      "email": "order@dastarkhwanheritage.com",
      "address": "Mehdipatnam, Hyderabad, Telangana"
},
    languages: ["Urdu", "Telugu", "Hindi", "English"],
    serviceAreas: ["Hyderabad", "Secunderabad", "Bengaluru"],
    eventTypes: ["Wedding", "Retirement", "Corporate"],
    reviews: [
      {
            "id": "rev-cat-5-1",
            "userName": "Ahmed Siddiqui",
            "rating": 5.0,
            "date": "28 Oct 2026",
            "comment": "The authentic aroma of wood-fired dum biryani filled the banquet. Unbeatable taste.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Real coal dum cooking", "Renowned Hyderabadi chefs"]
  },

  // Catering - Pune
  {
    id: "v-cat-6",
    name: "Pangot Traditional Maharashtrian Caterers",
    category: "Catering",
    location: "Pune",
    rating: 4.8,
    reviewCount: 85,
    experience: 10,
    startingPrice: 50000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Pure Maharashtrian delicacies: Ukdiche Modak, Puran Poli, and Kothimbir Vadi.",
    description: "Pangot Caterers specializes in authentic Puneri and Kokanastha Brahmin feasts, wedding panktis, and festive celebratory menus cooked with pure ghee.",
    featuredImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80"],
    services: ["Traditional Wedding Pankti", "Fresh Steamed Modak Counters", "Solkadhi & Aamras Bars"],
    packages: [
      {
            "id": "p-cat-6-1",
            "name": "Puneri Shahi Pankti",
            "price": 50000,
            "description": "Authentic sit-down feast for up to 250 guests.",
            "features": [
                  "Ghee Puran Poli or Basundi",
                  "Fresh Ukdiche Modak live counter",
                  "Masale Bhaat & Matki Usal",
                  "Traditional service stewards"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 98220 89234",
      "email": "pangot.caterers@gmail.com",
      "address": "Sadashiv Peth, Pune, Maharashtra"
},
    languages: ["Marathi", "Hindi"],
    serviceAreas: ["Pune", "Satara", "Kolhapur", "Mumbai"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-cat-6-1",
            "userName": "Milind Joshi",
            "rating": 4.9,
            "date": "14 Sep 2026",
            "comment": "Hot ukdiche modaks served right at the table! All our elder relatives were thrilled.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Pure vegetarian specialty", "Authentic Puneri spices & pure ghee"]
  },

  // Catering - Mumbai
  {
    id: "v-cat-7",
    name: "Gourmet Guild Luxury Catering",
    category: "Catering",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 73,
    experience: 9,
    startingPrice: 85000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Global fine dining stations: European charcuterie, Pan-Asian dim sum & artisanal pizzas.",
    description: "Gourmet Guild redefines wedding catering with live culinary theatrics, artisanal grazing tables, and global gourmet courses curated by Michelin-trained executive chefs.",
    featuredImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"],
    services: ["Artisanal Grazing Tables", "Live Wood-Fired Pizza", "Molecular Cocktail Bar", "Pan-Asian Dim Sum Bar"],
    packages: [
      {
            "id": "p-cat-7-1",
            "name": "Global Gourmet Banquet",
            "price": 85000,
            "description": "Premium multi-cuisine luxury buffet for 200 guests.",
            "features": [
                  "4 Live Global Food Theatres",
                  "Exotic Salad & Charcuterie Bar",
                  "Nitrogen Ice Cream & Dessert Lounge",
                  "Butler pass-arounds"
            ]
      }
],
    styles: ["Modern", "Luxury"],
    contact: {
      "phone": "+91 98201 33412",
      "email": "contact@gourmetguild.in",
      "address": "Bandra Kurla Complex, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Goa", "Pune"],
    eventTypes: ["Wedding", "Corporate", "Party"],
    reviews: [
      {
            "id": "rev-cat-7-1",
            "userName": "Rhea Kapoor",
            "rating": 5.0,
            "date": "08 Nov 2026",
            "comment": "The live dim sum and truffle risotto stations blew everyone away. Five-star standard.",
            "eventType": "Party"
      }
],
    aiHighlights: ["Five-star hotel chefs", "Molecular gastronomy presentation"]
  },

  // Catering - Nashik
  {
    id: "v-cat-8",
    name: "Rasoi Seva Caterers",
    category: "Catering",
    location: "Nashik",
    rating: 4.7,
    reviewCount: 51,
    experience: 11,
    startingPrice: 45000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Wholesome North Indian & Gujarati wedding buffets and farm-to-table menus.",
    description: "Rasoi Seva provides generous, delicious wedding and retirement banquet catering focusing on fresh regional produce and warm hospitality.",
    featuredImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80"],
    services: ["Gujarati & Marwari Thali", "Live Chaat & Jalebi Counters", "Farm Fresh Salad Bars"],
    packages: [
      {
            "id": "p-cat-8-1",
            "name": "Complete Utsav Spread",
            "price": 45000,
            "description": "Buffet catering for 200 guests with live chaat and desserts.",
            "features": [
                  "3 Starters, 4 Mains, 3 Breads, Rice & Dal",
                  "Live Chaat & Hot Jalebi-Rabdi Counter",
                  "Professional cutlery and service staff"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 94221 66723",
      "email": "rasoiseva.nashik@gmail.com",
      "address": "Panchavati, Nashik, Maharashtra"
},
    languages: ["Hindi", "Marathi", "Gujarati"],
    serviceAreas: ["Nashik", "Pune", "Dhule"],
    eventTypes: ["Wedding", "Retirement", "Birthday"],
    reviews: [
      {
            "id": "rev-cat-8-1",
            "userName": "Ramesh Agarwal",
            "rating": 4.8,
            "date": "20 Oct 2026",
            "comment": "Abundant food, authentic taste, and very courteous staff. Highly recommended.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Generous portion guarantee", "Live dessert counters"]
  },

  // Catering - Mumbai
  {
    id: "v-cat-9",
    name: "Coastal Flavours Gourmet",
    category: "Catering",
    location: "Mumbai",
    rating: 4.8,
    reviewCount: 64,
    experience: 8,
    startingPrice: 70000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Malvani, Mangalorean & Goan coastal seafood and coconut curry feasts.",
    description: "Coastal Flavours brings coastal culinary mastery to Mumbai weddings and cocktail evenings. Fresh catch, aromatic coconut and kokum spices, and tender neer dosas.",
    featuredImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"],
    services: ["Coastal Seafood Counters", "Neer Dosa & Ghee Roast Stations", "Tender Coconut Dessert Bars"],
    packages: [
      {
            "id": "p-cat-9-1",
            "name": "Coastal Feast Buffet",
            "price": 70000,
            "description": "Seafood & veg coastal spread for up to 200 guests.",
            "features": [
                  "Prawn Ghee Roast & Fish Curry",
                  "Live Neer Dosa Counter",
                  "Solkadhi welcome drinks"
            ]
      }
],
    styles: ["Modern", "Traditional"],
    contact: {
      "phone": "+91 98204 77991",
      "email": "info@coastalflavours.in",
      "address": "Mahim, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi", "Konkani", "Marathi"],
    serviceAreas: ["Mumbai", "Thane", "Goa"],
    eventTypes: ["Wedding", "Party", "Anniversary"],
    reviews: [
      {
            "id": "rev-cat-9-1",
            "userName": "Siddharth & Shraddha",
            "rating": 4.9,
            "date": "11 Nov 2026",
            "comment": "The surmai fry and neer dosas at our reception were sensational!",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Authentic coastal spices", "Hygienic cold chain seafood sourcing"]
  },

  // Catering - Pune
  {
    id: "v-cat-10",
    name: "Utsav Sattvic Catering Services",
    category: "Catering",
    location: "Pune",
    rating: 4.9,
    reviewCount: 89,
    experience: 13,
    startingPrice: 55000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "100% pure vegetarian & Jain gourmet culinary excellence for auspicious occasions.",
    description: "Utsav Sattvic caters purely vegetarian and strictly Jain-compliant feasts without compromising on gourmet aesthetics, aroma, or exquisite presentation.",
    featuredImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80"],
    services: ["100% Jain Dedicated Kitchen", "Sattvic Ayurvedic Banquets", "Live Mithai Counters"],
    packages: [
      {
            "id": "p-cat-10-1",
            "name": "Pure Sattvic Wedding Buffet",
            "price": 55000,
            "description": "Comprehensive pure veg feast for 250 guests.",
            "features": [
                  "No onion/garlic gourmet options",
                  "Live Rabdi-Jalebi & Malpua",
                  "Mineral water & eco-crockery"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 98222 14320",
      "email": "utsav.sattvic@gmail.com",
      "address": "Camp, Pune, Maharashtra"
},
    languages: ["Hindi", "Marathi", "Gujarati"],
    serviceAreas: ["Pune", "Mumbai", "Nashik"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-cat-10-1",
            "userName": "Champalal Jain",
            "rating": 5.0,
            "date": "17 Oct 2026",
            "comment": "Strict adherence to Jain vidhi with unmatched gourmet flavor. Outstanding service.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Dedicated 100% Jain kitchen", "ISO certified food safety"]
  },

  // Decoration - Bengaluru
  {
    id: "v-dec-4",
    name: "Pushpam Exotic Floral Scapes",
    category: "Decoration",
    location: "Bengaluru",
    rating: 4.9,
    reviewCount: 94,
    experience: 9,
    startingPrice: 55000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: "Bespoke fresh floral mandaps, fragrant jasmine canopies, and sustainable green installations.",
    description: "Pushpam crafts breathtaking floral architectures using fresh temple blooms, exotic orchids, and locally sourced greens to create sensory wedding paradises.",
    featuredImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80"],
    services: ["Fresh Floral Mandap", "Jasmine Hanging Canopies", "Eco-Friendly Decor"],
    packages: [
      {
            "id": "p-dec-4-1",
            "name": "Fragrant Floral Symphony",
            "price": 55000,
            "description": "Complete floral mandap and stage backdrop setup.",
            "features": [
                  "Imported and local seasonal flowers",
                  "LED ambient warm lighting",
                  "Flower shower cones for 200 guests"
            ]
      }
],
    styles: ["Traditional", "Modern"],
    contact: {
      "phone": "+91 98451 44021",
      "email": "decor@pushpamfloral.in",
      "address": "Indiranagar, Bengaluru, Karnataka"
},
    languages: ["English", "Kannada", "Tamil", "Hindi"],
    serviceAreas: ["Bengaluru", "Mysuru", "Chennai"],
    eventTypes: ["Wedding", "Engagement", "Retirement"],
    reviews: [
      {
            "id": "rev-dec-4-1",
            "userName": "Ananya & Suraj",
            "rating": 5.0,
            "date": "19 Sep 2026",
            "comment": "The fresh tuberose and lotus floral mandap smelled like heaven all evening.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Fresh farm direct flowers", "Zero single-use plastic policy"]
  },

  // Decoration - Hyderabad
  {
    id: "v-dec-5",
    name: "Imperial Palace Decors",
    category: "Decoration",
    location: "Hyderabad",
    rating: 4.9,
    reviewCount: 82,
    experience: 11,
    startingPrice: 70000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Royal Nizami arches, crystal chandeliers, and opulent gold-draped ballroom aesthetics.",
    description: "Imperial Palace Decors transforms conventional venues into grand royal durbaars. Featuring towering architectural columns, cascading crystals, and velvety drapery.",
    featuredImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80"],
    services: ["Royal Stage Architecture", "Crystal Chandelier Setup", "Baraat Pathway Illumination"],
    packages: [
      {
            "id": "p-dec-5-1",
            "name": "Nawabi Grandeur Setup",
            "price": 70000,
            "description": "Grand ballroom transformation with custom stage backdrop.",
            "features": [
                  "40ft Ornate royal stage",
                  "6 Crystal chandeliers",
                  "VIP royal sofa lounge seating",
                  "Draped entrance tunnel"
            ]
      }
],
    styles: ["Royal", "Luxury"],
    contact: {
      "phone": "+91 98492 11092",
      "email": "contact@imperialpalacedecors.com",
      "address": "Banjara Hills, Hyderabad, Telangana"
},
    languages: ["Urdu", "Telugu", "Hindi", "English"],
    serviceAreas: ["Hyderabad", "Secunderabad", "Bengaluru"],
    eventTypes: ["Wedding", "Retirement", "Corporate"],
    reviews: [
      {
            "id": "rev-dec-5-1",
            "userName": "Bilal & Zoya",
            "rating": 5.0,
            "date": "04 Nov 2026",
            "comment": "Looked like a real palace set. Every guest took photos against the grand stage backdrop.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Custom 3D stage sets", "Architectural lighting design"]
  },

  // Decoration - Pune
  {
    id: "v-dec-6",
    name: "Rustic Bohemia Event Styling",
    category: "Decoration",
    location: "Pune",
    rating: 4.8,
    reviewCount: 61,
    experience: 6,
    startingPrice: 42000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Chic bohemian pampas grass, macram\u00e9 arches, fairy lights, and cozy wooden lounge setups.",
    description: "Rustic Bohemia brings whimsical earthy charm to sundowner sangeets, garden mehendi celebrations, and outdoor cocktail parties.",
    featuredImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80"],
    services: ["Boho Chic Lawn Styling", "Pampas & Macrame Backdrops", "Fairy Light Canopies"],
    packages: [
      {
            "id": "p-dec-6-1",
            "name": "Sundowner Boho Vibe",
            "price": 42000,
            "description": "Outdoor lawn styling with fairy lights and wooden accents.",
            "features": [
                  "Pampas grass triangle arch",
                  "Fairy light tunnel walkway",
                  "Vintage photo booth with props"
            ]
      }
],
    styles: ["Modern", "Minimalist"],
    contact: {
      "phone": "+91 98223 99881",
      "email": "hello@rusticbohemia.in",
      "address": "Koregaon Park, Pune, Maharashtra"
},
    languages: ["English", "Hindi", "Marathi"],
    serviceAreas: ["Pune", "Mumbai", "Lonavala", "Alibaug"],
    eventTypes: ["Wedding", "Party", "Engagement"],
    reviews: [
      {
            "id": "rev-dec-6-1",
            "userName": "Kabir & Tara",
            "rating": 4.9,
            "date": "12 Oct 2026",
            "comment": "The fairy lights canopy created such a romantic warm atmosphere for our cocktail night.",
            "eventType": "Party"
      }
],
    aiHighlights: ["Pinterest-worthy boho aesthetic", "Fast on-site assembly"]
  },

  // Decoration - Mumbai
  {
    id: "v-dec-7",
    name: "Velvet & Vines Event Design",
    category: "Decoration",
    location: "Mumbai",
    rating: 4.8,
    reviewCount: 78,
    experience: 8,
    startingPrice: 62000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Contemporary glamor, custom monogram dance floors, and cinematic lighting production.",
    description: "Velvet & Vines creates sleek, high-impact decor for luxury Mumbai ballrooms, rooftop receptions, and milestone anniversaries.",
    featuredImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80"],
    services: ["Dance Floor Monograms", "LED Wall Visual Mapping", "Mirror Aisle Walkways"],
    packages: [
      {
            "id": "p-dec-7-1",
            "name": "Glamour Reception Concept",
            "price": 62000,
            "description": "Full ballroom reception styling with customized lighting.",
            "features": [
                  "Seamless printed dance floor",
                  "Moving head smart lighting",
                  "Geometric metallic backdrop",
                  "Table centerpiece candelabras"
            ]
      }
],
    styles: ["Modern", "Luxury"],
    contact: {
      "phone": "+91 98205 11990",
      "email": "design@velvetvines.com",
      "address": "Juhu, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Goa", "Pune"],
    eventTypes: ["Wedding", "Corporate", "Party"],
    reviews: [
      {
            "id": "rev-dec-7-1",
            "userName": "Rishi & Mehak",
            "rating": 4.9,
            "date": "29 Oct 2026",
            "comment": "The mirror walkway and lighting setup looked unbelievable in our wedding teaser video.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Smart intelligent lighting", "Bespoke monogram dance floors"]
  },

  // Decoration - Nashik
  {
    id: "v-dec-8",
    name: "Godavari Mandap Decorators",
    category: "Decoration",
    location: "Nashik",
    rating: 4.7,
    reviewCount: 44,
    experience: 12,
    startingPrice: 35000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Authentic traditional wedding mandaps, brass lamps, and marigold canopy arrangements.",
    description: "Providing authentic, dependable traditional wedding mandap, shamiana, and floral decorations for religious ceremonies and family celebrations across Nashik.",
    featuredImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80"],
    services: ["Traditional Wedding Mandap", "Shamiana & Seating Setup", "Brass Samai Diya Decor"],
    packages: [
      {
            "id": "p-dec-8-1",
            "name": "Sampoorna Vivah Mandap",
            "price": 35000,
            "description": "Full traditional mandap with brass lamps and marigold garlands.",
            "features": [
                  "Carved wooden mandap pillar structure",
                  "Fresh yellow & orange marigold drapery",
                  "Havan kund setup",
                  "200 guest chairs with covers"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 94220 77123",
      "email": "godavaridecor.nashik@gmail.com",
      "address": "Gangapur Road, Nashik, Maharashtra"
},
    languages: ["Marathi", "Hindi"],
    serviceAreas: ["Nashik", "Pune", "Shirdi"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-dec-8-1",
            "userName": "Sachin Kulkarni",
            "rating": 4.8,
            "date": "15 Sep 2026",
            "comment": "Reliable and neat. Finished the mandap setup well before the muhurat time.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Punctual setup guarantee", "Traditional brass & floral expertise"]
  },

  // Decoration - Pune
  {
    id: "v-dec-9",
    name: "Lumi\u00e8re Event Illuminations & Decor",
    category: "Decoration",
    location: "Pune",
    rating: 4.8,
    reviewCount: 55,
    experience: 7,
    startingPrice: 48000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Specialist in warm ambient night lighting, neon signage, and modern geometric structures.",
    description: "Lumi\u00e8re transforms evening celebrations into luminous wonderland experiences with architectural pin spots, retro Edison bulbs, and custom acrylic backdrops.",
    featuredImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80"],
    services: ["Architectural Event Lighting", "Custom Neon Signs", "Geometric Metal Backdrops"],
    packages: [
      {
            "id": "p-dec-9-1",
            "name": "Luminous Evening Experience",
            "price": 48000,
            "description": "Illumination & contemporary decor setup for lawns or banquet halls.",
            "features": [
                  "100+ Edison bulb canopy",
                  "Custom couple neon sign",
                  "Uplighting around perimeter trees/walls"
            ]
      }
],
    styles: ["Modern", "Minimalist"],
    contact: {
      "phone": "+91 98224 55019",
      "email": "lumiere.decor@gmail.com",
      "address": "Viman Nagar, Pune, Maharashtra"
},
    languages: ["English", "Hindi", "Marathi"],
    serviceAreas: ["Pune", "Mumbai", "Lonavala"],
    eventTypes: ["Wedding", "Party", "Retirement"],
    reviews: [
      {
            "id": "rev-dec-9-1",
            "userName": "Anand & Shreya",
            "rating": 4.9,
            "date": "22 Oct 2026",
            "comment": "The custom neon sign and Edison bulb ceiling looked magical in our night photos.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Bespoke neon sign included", "Power backup lighting certified"]
  },

  // Decoration - Mumbai
  {
    id: "v-dec-10",
    name: "Elegance Jubilee & Milestone Decors",
    category: "Decoration",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 71,
    experience: 10,
    startingPrice: 50000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Dignified corporate retirements, silver/golden jubilees, and formal stage backdrops.",
    description: "Specializing in milestone lifecycle events, from retirement felicitations with memory walls and podium floral styling to grand 50th golden anniversary stages.",
    featuredImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80"],
    services: ["Retirement Stage Decor", "Career Memory Timeline Wall", "Podium & Dignitary Seating Styling"],
    packages: [
      {
            "id": "p-dec-10-1",
            "name": "Milestone Honor Stage",
            "price": 50000,
            "description": "Complete stage and hall decor for retirement or jubilee celebration.",
            "features": [
                  "Stage backdrop with customized title lettering",
                  "Backlit career photo gallery timeline",
                  "Floral podium arrangement",
                  "VIP guest sofa seating"
            ]
      }
],
    styles: ["Modern", "Royal"],
    contact: {
      "phone": "+91 98203 88122",
      "email": "elegancedecors.mumbai@gmail.com",
      "address": "Prabhadevi, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi", "Marathi"],
    serviceAreas: ["Mumbai", "Thane", "Navi Mumbai", "Pune"],
    eventTypes: ["Retirement", "Anniversary", "Corporate"],
    reviews: [
      {
            "id": "rev-dec-10-1",
            "userName": "R. K. Nair",
            "rating": 5.0,
            "date": "05 Nov 2026",
            "comment": "The career memory photo timeline was the emotional centerpiece of my farewell banquet.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Retirement & milestone specialist", "Backlit memory photo walls"]
  },

  // Venue - Pune
  {
    id: "v-ven-4",
    name: "Mayur Lawn & Banquet Resort",
    category: "Venue",
    location: "Pune",
    rating: 4.8,
    reviewCount: 112,
    experience: 11,
    startingPrice: 85000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: "Sprawling 2-acre manicured green lawn with grand AC banquet hall in Bavdhan.",
    description: "Featuring a lush open lawn accommodating up to 1,200 guests plus an indoor glass-front banquet hall for pre-wedding functions, bridal suites, and ample valet parking.",
    featuredImage: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80"],
    services: ["Open Wedding Lawn", "Air-Conditioned Banquet Hall", "2 Luxury Bridal Suites", "Valet Parking for 200 Cars"],
    packages: [
      {
            "id": "p-ven-4-1",
            "name": "Full Day Lawn + Hall Combo",
            "price": 85000,
            "description": "Full access to outdoor lawn, indoor banquet, and 2 changing suites.",
            "features": [
                  "Access from 7 AM to 11 PM",
                  "Electricity backup generator included",
                  "2 Air-conditioned green rooms",
                  "Basic ambient garden lighting"
            ]
      }
],
    styles: ["Modern", "Traditional"],
    contact: {
      "phone": "+91 98220 77890",
      "email": "bookings@mayurlawn.in",
      "address": "Bavdhan, Pune, Maharashtra"
},
    languages: ["Marathi", "Hindi", "English"],
    serviceAreas: ["Pune", "PCMC", "Lonavala"],
    eventTypes: ["Wedding", "Retirement", "Party"],
    reviews: [
      {
            "id": "rev-ven-4-1",
            "userName": "Aditya & Sayali",
            "rating": 4.9,
            "date": "18 Oct 2026",
            "comment": "Spacious, beautiful green lawns and hassle-free parking for our 600 guests.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Capacity up to 1,200 guests", "Huge valet parking facility"]
  },

  // Venue - Hyderabad
  {
    id: "v-ven-5",
    name: "Taj Deccan View Palace Banquets",
    category: "Venue",
    location: "Hyderabad",
    rating: 4.9,
    reviewCount: 135,
    experience: 15,
    startingPrice: 120000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Opulent pillarless ballroom overlooking the city skyline in Banjara Hills.",
    description: "The pinnacle of Deccan luxury hospitality. Offering crystal chandeliers, customizable sound & light rigs, dedicated banquet managers, and royal hospitality suites.",
    featuredImage: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80"],
    services: ["Pillarless Grand Ballroom", "City View Terrace", "Five-Star Executive Catering"],
    packages: [
      {
            "id": "p-ven-5-1",
            "name": "Grand Imperial Ballroom",
            "price": 120000,
            "description": "Full day ballroom rental with audio-visual equipment and suites.",
            "features": [
                  "Accommodates up to 800 guests",
                  "State of the art JBL audio setup",
                  "Complimentary suite for couple",
                  "Dedicated event concierge"
            ]
      }
],
    styles: ["Royal", "Luxury"],
    contact: {
      "phone": "+91 98490 88912",
      "email": "events@tajdeccanview.com",
      "address": "Road No 1, Banjara Hills, Hyderabad, Telangana"
},
    languages: ["English", "Urdu", "Telugu", "Hindi"],
    serviceAreas: ["Hyderabad", "Secunderabad"],
    eventTypes: ["Wedding", "Retirement", "Corporate"],
    reviews: [
      {
            "id": "rev-ven-5-1",
            "userName": "Farhan & Shazia",
            "rating": 5.0,
            "date": "29 Oct 2026",
            "comment": "Unmatched 5-star service. Everything ran like clockwork from morning till midnight.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["5-star hotel luxury standards", "Pillarless unobstructed stage views"]
  },

  // Venue - Bengaluru
  {
    id: "v-ven-6",
    name: "Gardenia Glasshouse & Lawns",
    category: "Venue",
    location: "Bengaluru",
    rating: 4.9,
    reviewCount: 88,
    experience: 8,
    startingPrice: 95000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Stunning Victorian glasshouse structure surrounded by tropical palm gardens.",
    description: "Gardenia provides a botanical fairytale setting for modern celebrations. The greenhouse pavilion lets in natural starlight while keeping guests in air-conditioned comfort.",
    featuredImage: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80"],
    services: ["Air-Conditioned Glasshouse", "Lush Botanical Lawns", "Bridal Cottage"],
    packages: [
      {
            "id": "p-ven-6-1",
            "name": "Botanical Glasshouse Day",
            "price": 95000,
            "description": "Exclusive hire of glasshouse and garden lawns for 12 hours.",
            "features": [
                  "Fits 450 guests comfortably",
                  "Air-conditioned glass pavilion",
                  "Lawn gazebo for rituals",
                  "Pre-installed fairy lights"
            ]
      }
],
    styles: ["Modern", "Minimalist"],
    contact: {
      "phone": "+91 98450 99014",
      "email": "events@gardeniaglasshouse.in",
      "address": "Yelahanka, Bengaluru, Karnataka"
},
    languages: ["English", "Kannada", "Hindi"],
    serviceAreas: ["Bengaluru"],
    eventTypes: ["Wedding", "Party", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-ven-6-1",
            "userName": "Rohan & Deepika",
            "rating": 5.0,
            "date": "14 Sep 2026",
            "comment": "Our guests couldn't stop taking selfies in the glasshouse! Surreal evening ambiance.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Unique Victorian glasshouse aesthetic", "All-weather indoor-outdoor balance"]
  },

  // Venue - Mumbai
  {
    id: "v-ven-7",
    name: "Seaside Palms Beachfront Resort",
    category: "Venue",
    location: "Mumbai",
    rating: 4.8,
    reviewCount: 97,
    experience: 10,
    startingPrice: 110000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Sunset beachfront lawn and banquet pavilion overlooking the Arabian Sea.",
    description: "Say your vows with gentle sea breeze and crashing waves. Accommodates up to 600 guests on sea-facing lawns with private beach access in Madh Island.",
    featuredImage: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80"],
    services: ["Beachfront Lawn", "Sunset Mandap Deck", "15 Guest Rooms Included"],
    packages: [
      {
            "id": "p-ven-7-1",
            "name": "Seaside Sunset Celebration",
            "price": 110000,
            "description": "Full access to beachfront lawn, indoor banquet, and 15 resort rooms.",
            "features": [
                  "Private beach lawn access",
                  "15 AC Deluxe rooms for close family",
                  "Sound permission till permissible hours",
                  "Generator backup"
            ]
      }
],
    styles: ["Modern", "Luxury"],
    contact: {
      "phone": "+91 98201 44890",
      "email": "weddings@seasidepalms.in",
      "address": "Madh Island, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Thane"],
    eventTypes: ["Wedding", "Party", "Engagement"],
    reviews: [
      {
            "id": "rev-ven-7-1",
            "userName": "Varun & Jacqueline",
            "rating": 4.9,
            "date": "08 Nov 2026",
            "comment": "The sunset pheras on the beach deck were breathtaking. Our dream destination wedding inside Mumbai.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Private beach access", "15 guest rooms included in package"]
  },

  // Venue - Nashik
  {
    id: "v-ven-8",
    name: "Sula Valley Vineyard Amphitheatre",
    category: "Venue",
    location: "Nashik",
    rating: 4.9,
    reviewCount: 76,
    experience: 9,
    startingPrice: 75000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Scenic amphitheatre nestled amidst lush rolling vineyards and mountain backdrops.",
    description: "Surrounded by vineyards, hills, and tranquil waters, Sula Valley Amphitheatre offers a unique rustic-luxe destination feel for weddings, retirement retreats, and concerts.",
    featuredImage: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80"],
    services: ["Vineyard Amphitheatre", "Wine Tasting Lounge", "Outdoor Stage"],
    packages: [
      {
            "id": "p-ven-8-1",
            "name": "Vineyard Destination Wedding",
            "price": 75000,
            "description": "Amphitheatre and lawn rental for full day wedding celebration.",
            "features": [
                  "Amphitheatre seating for 400",
                  "Scenic mountain backdrop",
                  "Wine tasting tour for wedding party",
                  "Bridal preparation suites"
            ]
      }
],
    styles: ["Modern", "Minimalist"],
    contact: {
      "phone": "+91 94220 11990",
      "email": "events@sulavalleyvenue.in",
      "address": "Gangapur-Savargaon Road, Nashik, Maharashtra"
},
    languages: ["Marathi", "Hindi", "English"],
    serviceAreas: ["Nashik", "Pune", "Mumbai"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-ven-8-1",
            "userName": "Pravin & Sonali",
            "rating": 5.0,
            "date": "21 Oct 2026",
            "comment": "Magical destination vibe right in Nashik. The evening sunset behind the hills was unforgettable.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Scenic vineyard backdrop", "Amphitheatre acoustics"]
  },

  // Venue - Pune
  {
    id: "v-ven-9",
    name: "Heritage Darbar Grand Hall",
    category: "Venue",
    location: "Pune",
    rating: 4.8,
    reviewCount: 84,
    experience: 13,
    startingPrice: 60000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Traditional Peshwa architectural hall with wooden carvings and AC banquet facilities.",
    description: "Richly appointed with traditional wada-style teakwood pillars and vintage chandeliers, Heritage Darbar is beloved for traditional Maharashtrian weddings and silver jubilees.",
    featuredImage: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80"],
    services: ["Wada Style Carved Hall", "Separate Dining Hall", "Temple Pooja Area"],
    packages: [
      {
            "id": "p-ven-9-1",
            "name": "Traditional Wada Wedding",
            "price": 60000,
            "description": "Main hall and dining hall booking for up to 500 guests.",
            "features": [
                  "Teakwood carved ceremony hall",
                  "Separate dining pankti hall",
                  "Priest pooja samagri room",
                  "Electricity backup"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 98221 44300",
      "email": "info@heritagedarbar.in",
      "address": "Kothrud, Pune, Maharashtra"
},
    languages: ["Marathi", "Hindi"],
    serviceAreas: ["Pune"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-ven-9-1",
            "userName": "Dhananjay Deshpande",
            "rating": 4.8,
            "date": "11 Sep 2026",
            "comment": "Authentic cultural feel that honored our family traditions. Great dining hall layout.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Traditional Peshwa wada decor", "Separate dedicated dining hall"]
  },

  // Venue - Bengaluru
  {
    id: "v-ven-10",
    name: "Apex Corporate & Banquet Convention Centre",
    category: "Venue",
    location: "Bengaluru",
    rating: 4.8,
    reviewCount: 92,
    experience: 10,
    startingPrice: 70000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "State-of-the-art auditorium and banquet suites for grand retirements & award galas.",
    description: "Designed for flawless presentations, felicitations, and banquet dinners. Featuring an acoustic 500-seat theatre auditorium attached to an open garden banquet terrace.",
    featuredImage: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80"],
    services: ["500-Seat Auditorium", "Banquet Dinner Terrace", "High-Definition Projection Screens", "Live Webcasting Infrastructure"],
    packages: [
      {
            "id": "p-ven-10-1",
            "name": "Milestone Felicitation & Banquet",
            "price": 70000,
            "description": "Auditorium hire with AV team plus banquet terrace for dinner.",
            "features": [
                  "500-seater tier auditorium",
                  "4K projection and wireless stage mics",
                  "Terrace banquet dining space",
                  "Podium and stage lighting"
            ]
      }
],
    styles: ["Modern"],
    contact: {
      "phone": "+91 98455 33012",
      "email": "bookings@apexconvention.com",
      "address": "Whitefield, Bengaluru, Karnataka"
},
    languages: ["English", "Hindi", "Kannada"],
    serviceAreas: ["Bengaluru"],
    eventTypes: ["Retirement", "Corporate"],
    reviews: [
      {
            "id": "rev-ven-10-1",
            "userName": "Sunil Nambiar",
            "rating": 4.9,
            "date": "03 Nov 2026",
            "comment": "Hosted our Director's retirement symposium and banquet. The AV clarity and terrace dinner were flawless.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Built-in 4K audio-visual infrastructure", "High-speed live streaming setup"]
  },

  // Makeup - Pune
  {
    id: "v-mu-3",
    name: "Kavya Glamour Artistry",
    category: "Makeup",
    location: "Pune",
    rating: 4.9,
    reviewCount: 75,
    experience: 7,
    startingPrice: 16000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: "Flawless HD & Airbrush bridal makeup and elegant saree draping in Pune.",
    description: "Kavya specializes in glowing, long-lasting bridal looks that look natural in person and stunning in 4K photography. Using premium international brands (Dior, MAC, Huda Beauty).",
    featuredImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80"],
    services: ["Airbrush Bridal Makeup", "Nauvari Saree Draping", "Hair Styling & Floral Extension", "Lashes & Lenses Application"],
    packages: [
      {
            "id": "p-mu-3-1",
            "name": "Bridal HD Signature",
            "price": 16000,
            "description": "Complete bridal makeup, hair styling, and saree draping.",
            "features": [
                  "Premium HD airbrush products",
                  "Hairstyling with real floral accessories",
                  "Eyelashes and lenses",
                  "Outfit and jewelry setting"
            ]
      }
],
    styles: ["Modern", "Traditional"],
    contact: {
      "phone": "+91 98224 88200",
      "email": "kavya.makeupartist@gmail.com",
      "instagram": "@kavyaglam_artistry",
      "address": "Kothrud, Pune, Maharashtra"
},
    languages: ["Marathi", "Hindi", "English"],
    serviceAreas: ["Pune", "Mumbai", "Satara"],
    eventTypes: ["Wedding", "Engagement", "Party"],
    reviews: [
      {
            "id": "rev-mu-3-1",
            "userName": "Rutuja Shinde",
            "rating": 5.0,
            "date": "14 Oct 2026",
            "comment": "My makeup stayed fresh for over 12 hours without a single touchup! Kavya is so calm and talented.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Premium Dior & MAC kit", "12-hour sweatproof durability"]
  },

  // Makeup - Mumbai
  {
    id: "v-mu-4",
    name: "Zoya Khan Celebrity Bridal Lounge",
    category: "Makeup",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 94,
    experience: 10,
    startingPrice: 25000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "High-glam Bollywood red carpet looks and editorial bridal transformations.",
    description: "Zoya Khan brings Bollywood red-carpet expertise to brides. Known for radiant skin, dramatic winged eyes, and precision contouring tailored for Indian skin tones.",
    featuredImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80"],
    services: ["Celebrity Airbrush Makeup", "Sangeet Glamour Look", "Bridal Skin Prep Facial"],
    packages: [
      {
            "id": "p-mu-4-1",
            "name": "Red Carpet Bride",
            "price": 25000,
            "description": "Luxury bridal package with pre-makeup hydration prep.",
            "features": [
                  "1 Lead Celebrity Artist + Assistant",
                  "Tom Ford & Charlotte Tilbury kit",
                  "Artistic hair extensions",
                  "Jewelry placement"
            ]
      }
],
    styles: ["Luxury", "Modern"],
    contact: {
      "phone": "+91 98205 33411",
      "email": "bookings@zoyakhanmua.com",
      "address": "Bandra West, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Goa", "Pune"],
    eventTypes: ["Wedding", "Party"],
    reviews: [
      {
            "id": "rev-mu-4-1",
            "userName": "Simran Ahuja",
            "rating": 5.0,
            "date": "02 Nov 2026",
            "comment": "I felt like a Bollywood princess on my sangeet. Flawless contouring!",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Charlotte Tilbury luxury kit", "Celebrity stylist background"]
  },

  // Makeup - Bengaluru
  {
    id: "v-mu-5",
    name: "Roopa South Bridal Studio",
    category: "Makeup",
    location: "Bengaluru",
    rating: 4.8,
    reviewCount: 68,
    experience: 8,
    startingPrice: 18000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Traditional South Indian Muhurtham makeup, temple jewelry styling & poolajada floral braids.",
    description: "Roopa specializes in traditional Kanjeevaram styling, long jasmine poolajada braids, and dewy, traditional makeup that honors heritage customs.",
    featuredImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80"],
    services: ["Muhurtham Traditional Makeup", "Poolajada Floral Braiding", "Kanjeevaram Saree Draping"],
    packages: [
      {
            "id": "p-mu-5-1",
            "name": "Muhurtham Bride Special",
            "price": 18000,
            "description": "Traditional South Indian wedding makeup and complete hair styling.",
            "features": [
                  "Waterproof sweat-resistant base",
                  "Authentic fresh poolajada flower braiding",
                  "Temple jewelry setting"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 98451 77123",
      "email": "roopa.bridal@gmail.com",
      "address": "Malleshwaram, Bengaluru, Karnataka"
},
    languages: ["Kannada", "Tamil", "English", "Hindi"],
    serviceAreas: ["Bengaluru", "Mysuru"],
    eventTypes: ["Wedding", "Engagement"],
    reviews: [
      {
            "id": "rev-mu-5-1",
            "userName": "Deepa Sundaram",
            "rating": 4.9,
            "date": "18 Sep 2026",
            "comment": "The poolajada flower braid was an absolute work of art. Loved my traditional look.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Traditional poolajada floral braiding expert", "Tearproof & sweatproof base"]
  },

  // Makeup - Hyderabad
  {
    id: "v-mu-6",
    name: "Nawabi Bridal Beauty by Farah",
    category: "Makeup",
    location: "Hyderabad",
    rating: 4.9,
    reviewCount: 79,
    experience: 9,
    startingPrice: 22000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Regal Hyderabadi Nikah and reception looks with exquisite eye makeup and jhoomar setting.",
    description: "Farah creates royal Hyderabadi bridal looks: smoky kohl-lined eyes, radiant glass skin, and perfect dupatta/jhoomar styling for Khada Dupattas and heavy lehengas.",
    featuredImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80"],
    services: ["Khada Dupatta Draping", "Smoky Kohl Eye Artistry", "Bridal Airbrush Glow"],
    packages: [
      {
            "id": "p-mu-6-1",
            "name": "Nizami Nikah Glam",
            "price": 22000,
            "description": "Complete Nikah bridal makeup with dupatta and jhoomar setting.",
            "features": [
                  "Airbrush HD makeup",
                  "Khada Dupatta pin-setting expert",
                  "Lashes and touch-up kit"
            ]
      }
],
    styles: ["Royal", "Traditional"],
    contact: {
      "phone": "+91 98490 33890",
      "email": "farah.makeup@gmail.com",
      "address": "Banjara Hills, Hyderabad, Telangana"
},
    languages: ["Urdu", "Hindi", "English", "Telugu"],
    serviceAreas: ["Hyderabad", "Secunderabad"],
    eventTypes: ["Wedding", "Engagement"],
    reviews: [
      {
            "id": "rev-mu-6-1",
            "userName": "Ayesha Begum",
            "rating": 5.0,
            "date": "25 Oct 2026",
            "comment": "Farah draped my Khada Dupatta with such ease and my eye makeup looked mesmerizing.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Khada Dupatta draping specialist", "Signature royal smoky eye technique"]
  },

  // Makeup - Nashik
  {
    id: "v-mu-7",
    name: "Tanvi Joshi Bridal Makeovers",
    category: "Makeup",
    location: "Nashik",
    rating: 4.7,
    reviewCount: 42,
    experience: 6,
    startingPrice: 14000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Subtle, natural Maharashtrian bridal look and elegant floral hairstyles.",
    description: "Tanvi specializes in radiant, fresh-faced makeup that enhances natural features without cakey heavy layers, complemented by traditional hair buns with gajras.",
    featuredImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80"],
    services: ["Natural Bridal Makeup", "Nauvari Draping", "Gajra Ambada Hairstyle"],
    packages: [
      {
            "id": "p-mu-7-1",
            "name": "Natural Bride Package",
            "price": 14000,
            "description": "Makeup and hair for wedding or reception.",
            "features": [
                  "Waterproof HD base",
                  "Traditional ambada hair styling with gajra",
                  "Saree draping included"
            ]
      }
],
    styles: ["Traditional", "Minimalist"],
    contact: {
      "phone": "+91 94220 88912",
      "email": "tanvi.makeovers@gmail.com",
      "address": "College Road, Nashik, Maharashtra"
},
    languages: ["Marathi", "Hindi"],
    serviceAreas: ["Nashik", "Pune"],
    eventTypes: ["Wedding", "Engagement", "Retirement"],
    reviews: [
      {
            "id": "rev-mu-7-1",
            "userName": "Gauri Patil",
            "rating": 4.8,
            "date": "10 Oct 2026",
            "comment": "Very natural look, just like I wanted! Not heavy or artificial at all.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Natural skin-finish technique", "Budget-friendly packages"]
  },

  // Makeup - Mumbai
  {
    id: "v-mu-8",
    name: "Glow by Natasha Hair & Makeup",
    category: "Makeup",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 83,
    experience: 8,
    startingPrice: 20000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Modern glass-skin finish, soft glam eyes, and trendy Hollywood wave hairstyles.",
    description: "Natasha delivers contemporary bridal aesthetics with glowing dewy skin, fluttery lashes, and sleek modern hairstyles for brides who love minimalist luxury.",
    featuredImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80"],
    services: ["Glass-Skin Bridal Makeup", "Hollywood Waves Hair", "Cocktail Party Glam"],
    packages: [
      {
            "id": "p-mu-8-1",
            "name": "Dewy Glass-Skin Bride",
            "price": 20000,
            "description": "Hydrated luminous bridal makeover.",
            "features": [
                  "Pre-makeup peptide serum prep",
                  "NARS & Rare Beauty makeup",
                  "Hollywood waves or textured updo"
            ]
      }
],
    styles: ["Modern", "Minimalist"],
    contact: {
      "phone": "+91 98202 77019",
      "email": "natasha@glowbymua.com",
      "address": "Andheri West, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Goa", "Pune"],
    eventTypes: ["Wedding", "Party", "Anniversary"],
    reviews: [
      {
            "id": "rev-mu-8-1",
            "userName": "Kareena D'Silva",
            "rating": 5.0,
            "date": "06 Nov 2026",
            "comment": "The dewy finish stayed glowing all through the night. Natasha is a master artist.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Dewy glass skin specialist", "Hollywood waves hairstyle expert"]
  },

  // Makeup - Pune
  {
    id: "v-mu-9",
    name: "Prerana Bridal Studio & Academy",
    category: "Makeup",
    location: "Pune",
    rating: 4.8,
    reviewCount: 63,
    experience: 9,
    startingPrice: 17000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Complete bridal beauty services including pre-bridal skin therapy and bridesmaid squad glam.",
    description: "Prerana offers turnkey bridal beauty with dedicated assistants who can get the bride, mother of the bride, and bridesmaids ready together smoothly without stress.",
    featuredImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80"],
    services: ["Bridal + Family Makeovers", "Pre-Bridal Glow Packages", "Airbrush Finish"],
    packages: [
      {
            "id": "p-mu-9-1",
            "name": "Bride + Mother Duo Package",
            "price": 24000,
            "description": "Complete makeover for bride and mother/sister.",
            "features": [
                  "1 Lead artist for bride + 1 assistant for mother",
                  "HD airbrush for bride",
                  "Hair and draping for both"
            ]
      }
],
    styles: ["Modern", "Traditional"],
    contact: {
      "phone": "+91 98223 11090",
      "email": "prerana.bridal@gmail.com",
      "address": "Aundh, Pune, Maharashtra"
},
    languages: ["Marathi", "Hindi", "English"],
    serviceAreas: ["Pune", "PCMC"],
    eventTypes: ["Wedding", "Engagement"],
    reviews: [
      {
            "id": "rev-mu-9-1",
            "userName": "Shweta & Sunita Gore",
            "rating": 4.9,
            "date": "24 Sep 2026",
            "comment": "Made both my mom and me look so elegant! Punctual and very sweet team.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Bride + family squad packages", "On-location mobile studio setup"]
  },

  // Makeup - Bengaluru
  {
    id: "v-mu-10",
    name: "Bella Donna Elegance Makeovers",
    category: "Makeup",
    location: "Bengaluru",
    rating: 4.8,
    reviewCount: 57,
    experience: 7,
    startingPrice: 15000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Subtle dignitary makeup for corporate retirements, milestone birthdays, and family jubilees.",
    description: "Bella Donna caters to both brides and mature clients attending formal retirement felicitations and silver jubilees, focusing on hydrating mature skin and understated grace.",
    featuredImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80"],
    services: ["Mature Skin Hydrating Makeup", "Retirement Gala Styling", "Soft Glam Reception Look"],
    packages: [
      {
            "id": "p-mu-10-1",
            "name": "Elegance Milestone Makeover",
            "price": 15000,
            "description": "Gentle, non-creasing makeup and elegant blowdry/hairdo.",
            "features": [
                  "Hydrating hyaluronic base",
                  "Understated elegant eye makeup",
                  "Hairstyling and saree pinup"
            ]
      }
],
    styles: ["Minimalist", "Modern"],
    contact: {
      "phone": "+91 98453 22019",
      "email": "belladonna.blr@gmail.com",
      "address": "Lavelle Road, Bengaluru, Karnataka"
},
    languages: ["English", "Kannada", "Hindi"],
    serviceAreas: ["Bengaluru"],
    eventTypes: ["Retirement", "Wedding", "Anniversary"],
    reviews: [
      {
            "id": "rev-mu-10-1",
            "userName": "Dr. Usha Menon",
            "rating": 4.9,
            "date": "16 Oct 2026",
            "comment": "Did my makeup for my superannuation felicitation ceremony. Very dignified and comfortable.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Mature skin specialist", "Lightweight crease-resistant formulas"]
  },

  // DJ - Pune
  {
    id: "v-dj-3",
    name: "DJ Sunny & Electro Dhol Crew",
    category: "DJ",
    location: "Pune",
    rating: 4.9,
    reviewCount: 110,
    experience: 9,
    startingPrice: 30000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: "High-voltage Bollywood, Punjabi, and EDM mixes paired with live acoustic Nashik dhol.",
    description: "DJ Sunny creates uninhibited dance-floor frenzies! Known for explosive transitions from classic 90s Bollywood anthems into modern Punjabi beats and live Punjabi/Nashik dhol accompaniment.",
    featuredImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80"],
    services: ["Bollywood & Punjabi DJ Set", "Live Electro Dhol Players", "Intelligent Truss Lighting", "CO2 Cold Pyro Jets"],
    packages: [
      {
            "id": "p-dj-3-1",
            "name": "Sangeet Dhamaka Night",
            "price": 30000,
            "description": "4-5 hours DJ performance with sound and lights.",
            "features": [
                  "JBL Line Array sound system (up to 400 guests)",
                  "DJ console + cordless mics",
                  "Sharpy intelligent moving lights",
                  "2 Live Dhol players for 45 mins"
            ]
      }
],
    styles: ["Modern", "Traditional"],
    contact: {
      "phone": "+91 98220 99401",
      "email": "djsunny.pune@gmail.com",
      "address": "Koregaon Park, Pune, Maharashtra"
},
    languages: ["Hindi", "English", "Marathi", "Punjabi"],
    serviceAreas: ["Pune", "Mumbai", "Goa"],
    eventTypes: ["Wedding", "Party"],
    reviews: [
      {
            "id": "rev-dj-3-1",
            "userName": "Aman & Neha",
            "rating": 5.0,
            "date": "18 Nov 2026",
            "comment": "Nobody left the dance floor until 2 AM! The dhol entrance was mindblowing.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Live dhol synchronization", "Zero dead air guarantee"]
  },

  // DJ - Mumbai
  {
    id: "v-dj-4",
    name: "DJ Shaan Mumbai Club Nights",
    category: "DJ",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 125,
    experience: 12,
    startingPrice: 45000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Celebrity favorite Bollywood-Commercial DJ for high-society sangeets and cocktail bashes.",
    description: "Resident DJ at top Mumbai clubs, DJ Shaan brings high-energy festival audio production directly to your wedding sangeet, cocktail party, or afterparty.",
    featuredImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80"],
    services: ["Bollywood Commercial & EDM", "Custom Couple Entry Tracks", "Festival Lighting Rig"],
    packages: [
      {
            "id": "p-dj-4-1",
            "name": "Club Afterparty Experience",
            "price": 45000,
            "description": "5 hours of non-stop dance music with pro audio.",
            "features": [
                  "RCF / JBL premium sound rig",
                  "Custom mashups created for couple",
                  "Haze & laser lighting show"
            ]
      }
],
    styles: ["Modern", "Luxury"],
    contact: {
      "phone": "+91 98201 55901",
      "email": "bookings@djshaanmumbai.com",
      "address": "Bandra West, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Goa", "Udaipur", "Pune"],
    eventTypes: ["Wedding", "Party"],
    reviews: [
      {
            "id": "rev-dj-4-1",
            "userName": "Karan Singhal",
            "rating": 5.0,
            "date": "10 Nov 2026",
            "comment": "Felt like being in Tomorrowland right at our sangeet! Insane energy.",
            "eventType": "Party"
      }
],
    aiHighlights: ["Top Mumbai club resident DJ", "Bespoke couple mashups included"]
  },

  // DJ - Bengaluru
  {
    id: "v-dj-5",
    name: "SoundCraft DJ & Retro Live",
    category: "DJ",
    location: "Bengaluru",
    rating: 4.8,
    reviewCount: 78,
    experience: 8,
    startingPrice: 28000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Eclectic mix of 70s-90s golden retro classics, Bollywood hits, and classic rock for all ages.",
    description: "SoundCraft specializes in diverse crowds where both elderly guests and college youth want to celebrate. Perfect for retirement banquets, golden jubilees, and cross-cultural sangeets.",
    featuredImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80"],
    services: ["Retro 70s-90s Classic DJ Sets", "Bilingual Song Selection", "Subtle Dinner Ambiance Music"],
    packages: [
      {
            "id": "p-dj-5-1",
            "name": "All-Generations Party Setup",
            "price": 28000,
            "description": "4 hours of curated music for family & corporate celebrations.",
            "features": [
                  "Crystal clear vocal and music sound system",
                  "Soft dinner jazz transitioning to dance classics",
                  "Cordless microphones for speeches and toasts"
            ]
      }
],
    styles: ["Modern", "Traditional"],
    contact: {
      "phone": "+91 98450 66102",
      "email": "soundcraft.blr@gmail.com",
      "address": "Indiranagar, Bengaluru, Karnataka"
},
    languages: ["English", "Hindi", "Kannada", "Tamil"],
    serviceAreas: ["Bengaluru", "Mysuru"],
    eventTypes: ["Retirement", "Wedding", "Corporate", "Anniversary"],
    reviews: [
      {
            "id": "rev-dj-5-1",
            "userName": "Suresh & Malini Rao",
            "rating": 4.9,
            "date": "20 Oct 2026",
            "comment": "Played all the classic Kishore Kumar and RD Burman songs at my retirement party. Everyone sang along!",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Retirement & retro music connoisseur", "Balanced volume control for family banquets"]
  },

  // DJ - Hyderabad
  {
    id: "v-dj-6",
    name: "DJ Tejas Deccan Beats",
    category: "DJ",
    location: "Hyderabad",
    rating: 4.8,
    reviewCount: 89,
    experience: 9,
    startingPrice: 32000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "South-Indian mass hits, Marfa beats, Bollywood, and viral wedding mashups in Hyderabad.",
    description: "Specializing in Hyderabadi Marfa beats and high-energy Telugu-Hindi party songs, DJ Tejas ensures non-stop celebration on the dance floor.",
    featuredImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80"],
    services: ["Hyderabadi Marfa Beats", "Telugu & Hindi Dance Hits", "LED DJ Booth"],
    packages: [
      {
            "id": "p-dj-6-1",
            "name": "Deccan Sangeet Blast",
            "price": 32000,
            "description": "4 hours performance with audio setup.",
            "features": [
                  "Bass-heavy Line Array sound",
                  "LED screen visuals sync",
                  "Hyderabadi Marfa live percussion track"
            ]
      }
],
    styles: ["Modern", "Traditional"],
    contact: {
      "phone": "+91 98491 77019",
      "email": "djtejas.hyd@gmail.com",
      "address": "Jubilee Hills, Hyderabad, Telangana"
},
    languages: ["Telugu", "Hindi", "English"],
    serviceAreas: ["Hyderabad", "Secunderabad"],
    eventTypes: ["Wedding", "Party"],
    reviews: [
      {
            "id": "rev-dj-6-1",
            "userName": "Chaitanya Varma",
            "rating": 4.9,
            "date": "14 Oct 2026",
            "comment": "The Telugu mass mix was explosive! Best DJ in Hyderabad for weddings.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Authentic Hyderabadi Marfa rhythms", "High-power bass setup"]
  },

  // DJ - Nashik
  {
    id: "v-dj-7",
    name: "GrooveNation Wedding DJs",
    category: "DJ",
    location: "Nashik",
    rating: 4.7,
    reviewCount: 49,
    experience: 6,
    startingPrice: 22000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Affordable, lively Bollywood & Marathi DJ setups for weddings and birthday bashes.",
    description: "GrooveNation brings vibrant sound and party lighting to venues across Nashik, Sula vineyards, and resort lawns.",
    featuredImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80"],
    services: ["Bollywood & Marathi DJ", "Party Stage Lighting", "Smoke & Bubble Machine"],
    packages: [
      {
            "id": "p-dj-7-1",
            "name": "Standard Party Rig",
            "price": 22000,
            "description": "Complete audio and basic lighting for 4 hours.",
            "features": [
                  "Dual 15-inch speakers + subwoofers",
                  "LED laser lights",
                  "Smoke machine effect"
            ]
      }
],
    styles: ["Modern"],
    contact: {
      "phone": "+91 94220 55102",
      "email": "groovenation.nsk@gmail.com",
      "address": "College Road, Nashik, Maharashtra"
},
    languages: ["Marathi", "Hindi"],
    serviceAreas: ["Nashik", "Pune", "Shirdi"],
    eventTypes: ["Wedding", "Party", "Birthday"],
    reviews: [
      {
            "id": "rev-dj-7-1",
            "userName": "Rupesh Jadhav",
            "rating": 4.8,
            "date": "29 Sep 2026",
            "comment": "Great music selection and very cooperative with guest song requests.",
            "eventType": "Party"
      }
],
    aiHighlights: ["Budget-friendly package", "Guest request friendly"]
  },

  // DJ - Pune
  {
    id: "v-dj-8",
    name: "Bassline Collective Audio & Visuals",
    category: "DJ",
    location: "Pune",
    rating: 4.9,
    reviewCount: 84,
    experience: 10,
    startingPrice: 38000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Audio-visual production masters with LED video walls, beam lights, and curated DJ acts.",
    description: "Bassline Collective handles the complete technical production: synchronizing custom visual animations on giant LED screens with the DJ's live beat drops.",
    featuredImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80"],
    services: ["Full AV Production", "LED Video Wall Visuals", "Live DJ Act"],
    packages: [
      {
            "id": "p-dj-8-1",
            "name": "AV Stage Spectacle",
            "price": 38000,
            "description": "DJ with 10x8 ft LED backdrop screen and beam lights.",
            "features": [
                  "10x8ft LED video backdrop",
                  "Live VJ visual animation",
                  "Line Array audio system",
                  "Cordless microphones"
            ]
      }
],
    styles: ["Modern", "Luxury"],
    contact: {
      "phone": "+91 98221 88402",
      "email": "info@basslinecollective.in",
      "address": "Viman Nagar, Pune, Maharashtra"
},
    languages: ["English", "Hindi", "Marathi"],
    serviceAreas: ["Pune", "Mumbai", "Goa"],
    eventTypes: ["Wedding", "Party", "Corporate"],
    reviews: [
      {
            "id": "rev-dj-8-1",
            "userName": "Vikram & Alisha",
            "rating": 5.0,
            "date": "07 Nov 2026",
            "comment": "The LED wall playing our pre-wedding film synced to the music looked incredible.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["LED screen visual synchronization", "Concert quality sound gear"]
  },

  // DJ - Mumbai
  {
    id: "v-dj-9",
    name: "Sufi & Sangeet Acoustic DJ Ensemble",
    category: "DJ",
    location: "Mumbai",
    rating: 4.8,
    reviewCount: 67,
    experience: 8,
    startingPrice: 35000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Soulful Sufi-Bollywood fusion DJ with live flute and percussion accompaniment.",
    description: "Blending live flute melodies and darbuka percussion with modern lounge and Bollywood music for an unforgettable, sophisticated evening ambiance.",
    featuredImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80"],
    services: ["Sufi-Bollywood Lounge DJ", "Live Flute & Percussion", "Sundowner Ambiance"],
    packages: [
      {
            "id": "p-dj-9-1",
            "name": "Sufi Sundowner Experience",
            "price": 35000,
            "description": "DJ paired with live flute and percussionists for 4 hours.",
            "features": [
                  "1 DJ + 1 Flutist + 1 Darbuka artist",
                  "Warm sound system",
                  "Soft mood lighting"
            ]
      }
],
    styles: ["Modern", "Traditional"],
    contact: {
      "phone": "+91 98203 11890",
      "email": "sufisangeet@gmail.com",
      "address": "Santacruz West, Mumbai, Maharashtra"
},
    languages: ["Hindi", "Urdu", "English"],
    serviceAreas: ["Mumbai", "Pune", "Goa"],
    eventTypes: ["Wedding", "Party", "Retirement"],
    reviews: [
      {
            "id": "rev-dj-9-1",
            "userName": "Tanya Merchant",
            "rating": 4.9,
            "date": "24 Oct 2026",
            "comment": "The live flute accompaniment during sunset cocktails gave everyone goosebumps.",
            "eventType": "Party"
      }
],
    aiHighlights: ["Live acoustic instruments paired with DJ", "Soulful Sufi atmosphere"]
  },

  // DJ - Pune
  {
    id: "v-dj-10",
    name: "Golden Era Melodies DJ & Sound",
    category: "DJ",
    location: "Pune",
    rating: 4.8,
    reviewCount: 58,
    experience: 11,
    startingPrice: 25000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Specialist in Hindi/Marathi golden classics, felicitation anthems & retirement background scores.",
    description: "Carefully tailored sound engineering and music curation for formal ceremonies, retirement honors, and senior citizen jubilees where vocal clarity and pleasant sound levels are paramount.",
    featuredImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80"],
    services: ["Retirement Felicitation Audio", "Golden Era Classic Songs", "Vocal Speech Clarity Setup"],
    packages: [
      {
            "id": "p-dj-10-1",
            "name": "Felicitation & Banquet Sound",
            "price": 25000,
            "description": "Professional acoustic setup with retro playlist curation.",
            "features": [
                  "Crystal clear speech podium mics",
                  "Curated nostalgic playlist",
                  "Audio recording of speeches",
                  "Balanced warm speakers"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 98224 00392",
      "email": "goldeneramelodies@gmail.com",
      "address": "Deccan Gymkhana, Pune, Maharashtra"
},
    languages: ["Marathi", "Hindi", "English"],
    serviceAreas: ["Pune", "Satara"],
    eventTypes: ["Retirement", "Anniversary", "Corporate"],
    reviews: [
      {
            "id": "rev-dj-10-1",
            "userName": "Prof. S. R. Bapat",
            "rating": 4.9,
            "date": "12 Oct 2026",
            "comment": "The sound level was perfect\u2014everyone could hear the retirement speeches clearly without any ear-piercing shrieks.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Vocal speech clarity guarantee", "Audio recording of stage speeches included"]
  },

  // Videography - Pune
  {
    id: "v-vid-3",
    name: "Cinematic Vows Wedding Films",
    category: "Videography",
    location: "Pune",
    rating: 4.9,
    reviewCount: 87,
    experience: 8,
    startingPrice: 48000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: "Netflix-quality 4K cinematic wedding teasers, gimbal tracking, and emotional storytelling.",
    description: "Cinematic Vows turns real love stories into festival-worthy films with cinema-grade Sony FX & RED cameras, cinema lenses, and dedicated audio capture for wedding vows and speeches.",
    featuredImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80"],
    services: ["4K Cinematic Teaser Film", "Full Length Traditional Video", "4K Drone Aerial Cinematography", "Same-Day Instagram Reel Edit"],
    packages: [
      {
            "id": "p-vid-3-1",
            "name": "Signature Cinema Package",
            "price": 48000,
            "description": "2 Cinema videographers + 1 Drone pilot for wedding day.",
            "features": [
                  "3-5 minute 4K cinematic highlight film",
                  "45-60 minute documentary edit",
                  "Drone aerial footage",
                  "Vow audio master recordings"
            ]
      }
],
    styles: ["Modern", "Luxury"],
    contact: {
      "phone": "+91 98220 77124",
      "email": "films@cinematicvows.in",
      "instagram": "@cinematicvowspune",
      "address": "Koregaon Park, Pune, Maharashtra"
},
    languages: ["English", "Hindi", "Marathi"],
    serviceAreas: ["Pune", "Mumbai", "Goa"],
    eventTypes: ["Wedding", "Engagement", "Party"],
    reviews: [
      {
            "id": "rev-vid-3-1",
            "userName": "Rohan & Rhea",
            "rating": 5.0,
            "date": "14 Nov 2026",
            "comment": "Our teaser film looks like a Bollywood movie! The audio clarity of our vows made everyone weep.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Cinema-grade RED & Sony FX cameras", "Same-day social media reel delivery"]
  },

  // Videography - Mumbai
  {
    id: "v-vid-4",
    name: "Mumbai Motion Picture Co.",
    category: "Videography",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 104,
    experience: 11,
    startingPrice: 65000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Feature-length wedding documentaries and high-octane sangeet musical films.",
    description: "Directed by commercial and indie filmmakers, Mumbai Motion Picture Co. captures celebrations with narrative depth, dynamic camera crane moves, and cinematic grading.",
    featuredImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80"],
    services: ["Feature Film Wedding Documentary", "Crane & Jimmy Jib Setup", "Drone Pilot Coverage"],
    packages: [
      {
            "id": "p-vid-4-1",
            "name": "Feature Documentary Film",
            "price": 65000,
            "description": "Full multi-camera coverage with crane and drone.",
            "features": [
                  "3 Cinematographers + 1 Crane operator",
                  "Colour graded by professional studio",
                  "Raw footage backup on SSD drive"
            ]
      }
],
    styles: ["Modern", "Luxury"],
    contact: {
      "phone": "+91 98201 66723",
      "email": "contact@mumbaimotion.com",
      "address": "Andheri West, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Goa", "Udaipur"],
    eventTypes: ["Wedding", "Corporate", "Party"],
    reviews: [
      {
            "id": "rev-vid-4-1",
            "userName": "Armaan & Natasha",
            "rating": 5.0,
            "date": "02 Nov 2026",
            "comment": "The Jimmy Jib shots during our sangeet dance made it look like the Filmfare awards!",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Cinema crane & Jimmy Jib capability", "Commercial film director leads"]
  },

  // Videography - Bengaluru
  {
    id: "v-vid-5",
    name: "Southern Lights Wedding Cinema",
    category: "Videography",
    location: "Bengaluru",
    rating: 4.8,
    reviewCount: 73,
    experience: 7,
    startingPrice: 42000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Gentle, emotive visual storytelling celebrating intimate rituals and candid smiles.",
    description: "Specializing in authentic South Indian rituals, temple ceremonies, and subtle candid video footage set to delicate acoustic soundscapes.",
    featuredImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80"],
    services: ["Candid Wedding Video", "Traditional Ceremony Video", "Drone Aerial Views"],
    packages: [
      {
            "id": "p-vid-5-1",
            "name": "Poetic Story Film",
            "price": 42000,
            "description": "2 Cinematographers covering morning ritual and evening reception.",
            "features": [
                  "4-minute teaser trailer",
                  "Full ceremony documentary video",
                  "Lapel mics for groom & priest"
            ]
      }
],
    styles: ["Candid", "Minimalist"],
    contact: {
      "phone": "+91 98451 88390",
      "email": "info@southernlightscinema.in",
      "address": "Koramangala, Bengaluru, Karnataka"
},
    languages: ["English", "Kannada", "Tamil", "Hindi"],
    serviceAreas: ["Bengaluru", "Mysuru", "Chennai"],
    eventTypes: ["Wedding", "Engagement", "Retirement"],
    reviews: [
      {
            "id": "rev-vid-5-1",
            "userName": "Karthik & Swathi",
            "rating": 4.9,
            "date": "19 Sep 2026",
            "comment": "So poetic and gentle. They captured my grandmother's blessings so touchingly.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Lapel microphone crystal audio", "Unobtrusive small-rig filming"]
  },

  // Videography - Hyderabad
  {
    id: "v-vid-6",
    name: "Deccan Chronicles Film Studio",
    category: "Videography",
    location: "Hyderabad",
    rating: 4.9,
    reviewCount: 81,
    experience: 9,
    startingPrice: 52000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Opulent Nizami palace wedding cinematography and royal celebration films.",
    description: "Capturing the pomp and royal spectacle of grand Telugu and Hyderabadi celebrations with dramatic slow-motion, warm grading, and sweeping drone perspectives.",
    featuredImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80"],
    services: ["Royal Ceremony Cinematography", "Palace Aerial Drone Filming", "High-Definition Video Booth"],
    packages: [
      {
            "id": "p-vid-6-1",
            "name": "Shahi Wedding Film",
            "price": 52000,
            "description": "2 Cinema shooters + Drone for royal ceremony.",
            "features": [
                  "Cinema 4K capture",
                  "Licensed royal instrumental soundtrack",
                  "4K pen-drive delivery box"
            ]
      }
],
    styles: ["Royal", "Luxury"],
    contact: {
      "phone": "+91 98492 55012",
      "email": "deccanchroniclesfilms@gmail.com",
      "address": "Banjara Hills, Hyderabad, Telangana"
},
    languages: ["Urdu", "Telugu", "Hindi", "English"],
    serviceAreas: ["Hyderabad", "Secunderabad"],
    eventTypes: ["Wedding", "Retirement", "Corporate"],
    reviews: [
      {
            "id": "rev-vid-6-1",
            "userName": "Irfan & Sumaiya",
            "rating": 5.0,
            "date": "29 Oct 2026",
            "comment": "The drone shots over the palace and the emotional speeches were edited to perfection.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Licensed cinematic soundtracks", "Royal palace aerial cinematography"]
  },

  // Videography - Nashik
  {
    id: "v-vid-7",
    name: "Godavari CineWorks",
    category: "Videography",
    location: "Nashik",
    rating: 4.7,
    reviewCount: 38,
    experience: 5,
    startingPrice: 30000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Affordable traditional & candid video recording for family celebrations and retirements.",
    description: "Providing clear, dependable multi-camera video recording and quick-turnaround edited highlights for ceremonies across Nashik and Trimbakeshwar.",
    featuredImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80"],
    services: ["Traditional Wedding Video", "Retirement Ceremony Recording", "Pre-Wedding Music Video"],
    packages: [
      {
            "id": "p-vid-7-1",
            "name": "Vivah Video Package",
            "price": 30000,
            "description": "Full day ceremony and reception video coverage.",
            "features": [
                  "2 Videographers",
                  "Full length documentary edit",
                  "Delivered on 64GB USB drive"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 94221 44021",
      "email": "godavaricineworks@gmail.com",
      "address": "Gangapur Road, Nashik, Maharashtra"
},
    languages: ["Marathi", "Hindi"],
    serviceAreas: ["Nashik", "Pune", "Shirdi"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-vid-7-1",
            "userName": "Sachin & Sayali",
            "rating": 4.8,
            "date": "14 Sep 2026",
            "comment": "Clear audio and great coverage of all the rituals. Delivered right on time.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Budget-friendly video package", "Prompt 14-day turnaround"]
  },

  // Videography - Mumbai
  {
    id: "v-vid-8",
    name: "ReelMagic Vertical Wedding Content",
    category: "Videography",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 91,
    experience: 6,
    startingPrice: 35000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Viral Instagram Reels and 24-hour social media wedding content creation.",
    description: "Designed for the social media generation: dedicated vertical content creators who deliver 10+ edited trending reels within 24 hours of each ceremony.",
    featuredImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80"],
    services: ["24-Hour Reel Delivery", "Behind-The-Scenes iPhone Filming", "Trending Audio Synchronization"],
    packages: [
      {
            "id": "p-vid-8-1",
            "name": "Viral Reel Creator Pack",
            "price": 35000,
            "description": "On-site mobile creator delivering reels within 24 hours.",
            "features": [
                  "1 Dedicated Social Media Creator",
                  "8-10 Curated viral reels",
                  "All unedited raw phone clips shared same night",
                  "Trending wedding audio sync"
            ]
      }
],
    styles: ["Modern", "Candid"],
    contact: {
      "phone": "+91 98204 88102",
      "email": "hello@reelmagic.co",
      "address": "Bandra, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Goa", "Pune"],
    eventTypes: ["Wedding", "Party"],
    reviews: [
      {
            "id": "rev-vid-8-1",
            "userName": "Kiara & Dhruv",
            "rating": 5.0,
            "date": "18 Oct 2026",
            "comment": "Our sangeet reel got 400K views on Instagram! Super fast same-night delivery.",
            "eventType": "Party"
      }
],
    aiHighlights: ["Under 24-hour reel turnaround", "Trending social media audio integration"]
  },

  // Videography - Bengaluru
  {
    id: "v-vid-9",
    name: "Legacy Lifetime Documentary Films",
    category: "Videography",
    location: "Bengaluru",
    rating: 4.9,
    reviewCount: 65,
    experience: 10,
    startingPrice: 40000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Heartfelt career retrospectives, biographical films & retirement celebration documentaries.",
    description: "Legacy Films interviews colleagues, friends, and family to craft a touching 15-minute biographical documentary honoring retirees or golden jubilee couples.",
    featuredImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80"],
    services: ["Biographical Tribute Film", "Colleague & Family Interviews", "Archival Photo Restoration in Video"],
    packages: [
      {
            "id": "p-vid-9-1",
            "name": "Lifetime Tribute Film",
            "price": 40000,
            "description": "15-minute documentary film screened at retirement or golden jubilee event.",
            "features": [
                  "Pre-event filmed interviews with 8 key people",
                  "Archival photo timeline integration",
                  "Live ceremony & speech recording",
                  "Custom wooden engraved box"
            ]
      }
],
    styles: ["Modern", "Minimalist"],
    contact: {
      "phone": "+91 98452 11990",
      "email": "tributes@legacyfilms.in",
      "address": "Indiranagar, Bengaluru, Karnataka"
},
    languages: ["English", "Hindi", "Kannada"],
    serviceAreas: ["Bengaluru", "Chennai", "Hyderabad"],
    eventTypes: ["Retirement", "Anniversary", "Corporate"],
    reviews: [
      {
            "id": "rev-vid-9-1",
            "userName": "Col. Nambiar (Retd.)",
            "rating": 5.0,
            "date": "20 Aug 2026",
            "comment": "Screened the 15-minute film during my retirement gala. There was not a dry eye in the hall.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Biographical interview expertise", "Archival photo restoration included"]
  },

  // Videography - Pune
  {
    id: "v-vid-10",
    name: "Artisan Reels Cinematography",
    category: "Videography",
    location: "Pune",
    rating: 4.8,
    reviewCount: 59,
    experience: 7,
    startingPrice: 36000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Artistic, warm color tones with emotional audio soundbites for weddings and anniversaries.",
    description: "Artisan Reels crafts warm, emotive films focusing on genuine family interactions, laughter, and tearful hugs rather than posed artificial setups.",
    featuredImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80"],
    services: ["Warm Tone Cinematography", "Full Ceremony Recording", "Audio Master Mix"],
    packages: [
      {
            "id": "p-vid-10-1",
            "name": "Artisan Highlight Film",
            "price": 36000,
            "description": "Ceremony and dinner videography with highlight film.",
            "features": [
                  "2 Videographers",
                  "5-minute teaser film",
                  "Full ceremony recording on pen drive"
            ]
      }
],
    styles: ["Candid", "Modern"],
    contact: {
      "phone": "+91 98225 33019",
      "email": "artisanreels@gmail.com",
      "address": "Baner, Pune, Maharashtra"
},
    languages: ["Marathi", "Hindi", "English"],
    serviceAreas: ["Pune", "Satara", "Nashik"],
    eventTypes: ["Wedding", "Anniversary", "Retirement"],
    reviews: [
      {
            "id": "rev-vid-10-1",
            "userName": "Aniket & Pooja",
            "rating": 4.9,
            "date": "24 Sep 2026",
            "comment": "The color grading was so warm and nostalgic. We rewatch our film every month!",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Warm analog-feel color grading", "Fast 15-day edit turnaround"]
  },

  // Event Planning - Pune
  {
    id: "v-ep-3",
    name: "VowCraft Turnkey Wedding Planners",
    category: "Event Planning",
    location: "Pune",
    rating: 4.9,
    reviewCount: 96,
    experience: 9,
    startingPrice: 50000,
    verified: true,
    availability: true,
    featured: true,
    shortDescription: "End-to-end wedding planners handling vendor coordination, budget optimization, and day-of execution.",
    description: "VowCraft takes 100% of the planning stress off couples and their families. From vendor contract negotiations and timeline scheduling to on-day hospitality management.",
    featuredImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"],
    services: ["Turnkey Event Management", "Budget Optimization", "Guest Hospitality & RSVP Management", "On-Day Stage Production"],
    packages: [
      {
            "id": "p-ep-3-1",
            "name": "Full Turnkey Wedding Planning",
            "price": 50000,
            "description": "Complete planning from vendor sourcing to day-of coordination.",
            "features": [
                  "Dedicated lead planner + 3 on-day coordinators",
                  "Vendor contract & pricing negotiations",
                  "Master timeline creation",
                  "Guest hospitality desk"
            ]
      }
],
    styles: ["Modern", "Traditional"],
    contact: {
      "phone": "+91 98220 12099",
      "email": "plan@vowcraft.in",
      "instagram": "@vowcraft_events",
      "address": "Kalyani Nagar, Pune, Maharashtra"
},
    languages: ["English", "Hindi", "Marathi"],
    serviceAreas: ["Pune", "Mumbai", "Lonavala", "Mahabaleshwar"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-ep-3-1",
            "userName": "Abhishek & Priyadarshini",
            "rating": 5.0,
            "date": "28 Oct 2026",
            "comment": "VowCraft saved us over 2 Lakhs through their vendor connections. Not a single hitch on the wedding day!",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Average 15% vendor discount savings", "3 dedicated on-ground coordinators"]
  },

  // Event Planning - Mumbai
  {
    id: "v-ep-4",
    name: "Regal Crest Destination Weddings",
    category: "Event Planning",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 115,
    experience: 13,
    startingPrice: 90000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Luxury destination wedding specialists for Rajasthan palaces, Goa beaches, and Mumbai five-stars.",
    description: "Regal Crest curates ultra-luxury celebrations with royal decorum, chartered travel logistics, celebrity artist coordination, and white-glove hospitality.",
    featuredImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"],
    services: ["Destination Wedding Logistics", "Celebrity Artist Management", "Bespoke Royal Decor"],
    packages: [
      {
            "id": "p-ep-4-1",
            "name": "Luxury Destination Suite",
            "price": 90000,
            "description": "Full end-to-end multi-day destination wedding management.",
            "features": [
                  "1 Lead Director + 6 event staff",
                  "Airport transfers & hotel room allocations",
                  "Artist rider management",
                  "24/7 client helpline"
            ]
      }
],
    styles: ["Royal", "Luxury"],
    contact: {
      "phone": "+91 98200 44901",
      "email": "director@regalcrestevents.com",
      "address": "Nariman Point, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi", "Gujarati"],
    serviceAreas: ["Mumbai", "Goa", "Udaipur", "Jaipur"],
    eventTypes: ["Wedding", "Corporate"],
    reviews: [
      {
            "id": "rev-ep-4-1",
            "userName": "Siddharth & Ananya Mittal",
            "rating": 5.0,
            "date": "14 Nov 2026",
            "comment": "Flawless execution in Udaipur. Managed 450 guests traveling from 8 countries effortlessly.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Destination wedding specialist", "High profile celebrity artist network"]
  },

  // Event Planning - Bengaluru
  {
    id: "v-ep-5",
    name: "Urban Vibe Milestone Planners",
    category: "Event Planning",
    location: "Bengaluru",
    rating: 4.8,
    reviewCount: 78,
    experience: 8,
    startingPrice: 45000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Contemporary wedding planners and distinguished corporate retirement gala specialists.",
    description: "Urban Vibe excels in structured, transparent event production. Using modern digital checklists, budget trackers, and professional protocol for weddings and retirements.",
    featuredImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"],
    services: ["Wedding Coordination", "Corporate Retirement Gala Planning", "Budget Tracking"],
    packages: [
      {
            "id": "p-ep-5-1",
            "name": "Turnkey Milestone Planning",
            "price": 45000,
            "description": "Complete planning for weddings or corporate retirement felicitations.",
            "features": [
                  "Timeline and vendor master schedule",
                  "On-site team of 3 coordinators",
                  "Stage speech & memento cues"
            ]
      }
],
    styles: ["Modern", "Minimalist"],
    contact: {
      "phone": "+91 98450 33812",
      "email": "hello@urbanvibe.in",
      "address": "Indiranagar, Bengaluru, Karnataka"
},
    languages: ["English", "Kannada", "Hindi"],
    serviceAreas: ["Bengaluru", "Mysuru", "Hyderabad"],
    eventTypes: ["Retirement", "Wedding", "Corporate"],
    reviews: [
      {
            "id": "rev-ep-5-1",
            "userName": "Dr. V. Narayanan",
            "rating": 4.9,
            "date": "15 Sep 2026",
            "comment": "Organized my retirement symposium and dinner with military precision. Highly recommended.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Corporate retirement planning veteran", "Transparent digital budget tracking"]
  },

  // Event Planning - Hyderabad
  {
    id: "v-ep-6",
    name: "Nizam Shahi Event Planners",
    category: "Event Planning",
    location: "Hyderabad",
    rating: 4.9,
    reviewCount: 91,
    experience: 11,
    startingPrice: 60000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Opulent Hyderabadi wedding planning: Nikah, Sangeet, and Royal Reception management.",
    description: "Masters of Hyderabadi wedding traditions, royal hospitality, and grand procession choreography. We coordinate decor, catering, invitations, and protocol with effortless grace.",
    featuredImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"],
    services: ["Royal Wedding Planning", "Baraat & Entry Choreography", "Nizami Protocol Coordination"],
    packages: [
      {
            "id": "p-ep-6-1",
            "name": "Shahi Vivah Suite",
            "price": 60000,
            "description": "Full wedding planning across 3 days of festivities.",
            "features": [
                  "Lead planner + 4 event coordinators",
                  "Vendor management & billing reconciliation",
                  "VIP seating & protocol"
            ]
      }
],
    styles: ["Royal", "Traditional"],
    contact: {
      "phone": "+91 98491 22001",
      "email": "shahi@nizamevents.com",
      "address": "Banjara Hills, Hyderabad, Telangana"
},
    languages: ["Urdu", "Telugu", "Hindi", "English"],
    serviceAreas: ["Hyderabad", "Secunderabad"],
    eventTypes: ["Wedding", "Retirement", "Corporate"],
    reviews: [
      {
            "id": "rev-ep-6-1",
            "userName": "Mirza Family",
            "rating": 5.0,
            "date": "05 Nov 2026",
            "comment": "Handled our 800-guest wedding at Taj Krishna without a single flaw. Outstanding team.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Hyderabadi cultural customs expert", "Large scale 500+ guest management"]
  },

  // Event Planning - Nashik
  {
    id: "v-ep-7",
    name: "Sanskriti Traditional Event Curators",
    category: "Event Planning",
    location: "Nashik",
    rating: 4.7,
    reviewCount: 45,
    experience: 7,
    startingPrice: 35000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Traditional wedding and milestone retirement planning with warm family care.",
    description: "Sanskriti coordinates authentic Vedic wedding rituals, catering logistics, shamiana decor, and hotel stays across Nashik and regional pilgrimage towns.",
    featuredImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"],
    services: ["Vedic Wedding Planning", "Priest & Samagri Coordination", "Retirement Ceremony Setup"],
    packages: [
      {
            "id": "p-ep-7-1",
            "name": "Sanskriti Traditional Package",
            "price": 35000,
            "description": "End-to-end coordination for traditional ceremonies.",
            "features": [
                  "1 Lead Planner + 2 Assistants",
                  "Pooja and muhurat timeline coordination",
                  "Vendor on-site supervision"
            ]
      }
],
    styles: ["Traditional"],
    contact: {
      "phone": "+91 94220 99014",
      "email": "sanskriti.nsk@gmail.com",
      "address": "College Road, Nashik, Maharashtra"
},
    languages: ["Marathi", "Hindi"],
    serviceAreas: ["Nashik", "Pune", "Shirdi"],
    eventTypes: ["Wedding", "Retirement", "Anniversary"],
    reviews: [
      {
            "id": "rev-ep-7-1",
            "userName": "Gaurav & Rutuja",
            "rating": 4.8,
            "date": "15 Sep 2026",
            "comment": "Took care of all the pandit requirements and guest transport seamlessly.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Vedic wedding custom expert", "Cost-effective planning packages"]
  },

  // Event Planning - Mumbai
  {
    id: "v-ep-8",
    name: "DayOf Wedding Day Coordinators",
    category: "Event Planning",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 86,
    experience: 8,
    startingPrice: 38000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Specialist 'Month-Of' & 'Day-Of' wedding coordinators for DIY couples.",
    description: "Planned everything yourself but need a professional team to manage the chaos on the wedding day? DayOf steps in 4 weeks before the event to take over vendor logistics, payments, and timelines.",
    featuredImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"],
    services: ["Day-Of Coordination", "Vendor Briefing & Rehearsals", "Emergency Problem Solving"],
    packages: [
      {
            "id": "p-ep-8-1",
            "name": "Day-Of Peace of Mind",
            "price": 38000,
            "description": "On-site management on the wedding day from morning to night.",
            "features": [
                  "Takeover 4 weeks before wedding",
                  "Master timeline distribution",
                  "2 On-ground stage & hospitality managers",
                  "Vendor cue management"
            ]
      }
],
    styles: ["Modern", "Candid"],
    contact: {
      "phone": "+91 98205 22019",
      "email": "hello@dayofcoordinators.com",
      "address": "Juhu, Mumbai, Maharashtra"
},
    languages: ["English", "Hindi"],
    serviceAreas: ["Mumbai", "Thane", "Pune", "Goa"],
    eventTypes: ["Wedding", "Party"],
    reviews: [
      {
            "id": "rev-ep-8-1",
            "userName": "Tanvi & Kunal",
            "rating": 5.0,
            "date": "22 Oct 2026",
            "comment": "Best money we spent! We enjoyed our wedding 100% while DayOf handled all vendor calls.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Dedicated Day-Of execution specialists", "Zero vendor phone calls to family"]
  },

  // Event Planning - Pune
  {
    id: "v-ep-9",
    name: "Aura Celebrations & Jubilees",
    category: "Event Planning",
    location: "Pune",
    rating: 4.8,
    reviewCount: 62,
    experience: 9,
    startingPrice: 40000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Turnkey planning for retirement felicitations, silver jubilees, and milestone birthdays.",
    description: "Aura specializes in adult lifecycle milestones: retirement galas with personalized video documentaries, golden anniversary celebrations, and corporate leadership farewells.",
    featuredImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"],
    services: ["Retirement Felicitation Planning", "Golden Jubilee Coordination", "Memento & Shawl Ceremony Protocol"],
    packages: [
      {
            "id": "p-ep-9-1",
            "name": "Milestone Gala Management",
            "price": 40000,
            "description": "Turnkey management for retirement or golden jubilee event.",
            "features": [
                  "Stage program and speech rundown",
                  "Memento and felicitation coordination",
                  "Catering & audio-visual supervision"
            ]
      }
],
    styles: ["Modern", "Traditional"],
    contact: {
      "phone": "+91 98224 66102",
      "email": "auracelebrations.pune@gmail.com",
      "address": "Aundh, Pune, Maharashtra"
},
    languages: ["Marathi", "Hindi", "English"],
    serviceAreas: ["Pune", "Mumbai", "Satara"],
    eventTypes: ["Retirement", "Anniversary", "Corporate"],
    reviews: [
      {
            "id": "rev-ep-9-1",
            "userName": "Ramesh Swaminathan",
            "rating": 4.9,
            "date": "11 Nov 2026",
            "comment": "Planned my father's retirement banquet impeccably. Every colleague was treated with great hospitality.",
            "eventType": "Retirement"
      }
],
    aiHighlights: ["Retirement celebration specialists", "Dignified stage protocol"]
  },

  // Event Planning - Bengaluru
  {
    id: "v-ep-10",
    name: "Emerald Grandeur Luxury Weddings",
    category: "Event Planning",
    location: "Bengaluru",
    rating: 4.9,
    reviewCount: 80,
    experience: 11,
    startingPrice: 75000,
    verified: true,
    availability: true,
    featured: false,
    shortDescription: "Bespoke high-end wedding curation, hospitality desks, and designer styling in Bengaluru.",
    description: "Emerald Grandeur creates bespoke luxury celebrations that balance tech-city modernity with timeless cultural traditions. Specialists in multi-day resort weddings and curated banquets.",
    featuredImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"],
    services: ["Luxury Turnkey Planning", "Design & Conceptualization", "VIP Hospitality Desks"],
    packages: [
      {
            "id": "p-ep-10-1",
            "name": "Bespoke Grandeur Package",
            "price": 75000,
            "description": "Full end-to-end luxury wedding planning for up to 500 guests.",
            "features": [
                  "Lead Director + 4 event coordinators",
                  "Curated vendor dream team selection",
                  "Day-of execution and schedule management"
            ]
      }
],
    styles: ["Luxury", "Modern"],
    contact: {
      "phone": "+91 98453 11099",
      "email": "concierge@emeraldgrandeur.com",
      "address": "Lavelle Road, Bengaluru, Karnataka"
},
    languages: ["English", "Kannada", "Hindi"],
    serviceAreas: ["Bengaluru", "Mysuru", "Hyderabad"],
    eventTypes: ["Wedding", "Retirement", "Corporate"],
    reviews: [
      {
            "id": "rev-ep-10-1",
            "userName": "Vikram & Sindhu",
            "rating": 5.0,
            "date": "05 Oct 2026",
            "comment": "Exquisite taste and tireless execution. Our wedding was praised by every single guest.",
            "eventType": "Wedding"
      }
],
    aiHighlights: ["Luxury resort wedding experts", "Turnkey VIP hospitality desk"]
  }
];
