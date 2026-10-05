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
  }
];
