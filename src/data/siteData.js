export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "DC Motors",
    legalName: "DC Motors Car Sale",
    tagline: "Drive Class. Drive Confidence.",
    description:
      "DC Motors Car Sale is a trusted Harare car dealership offering quality pre-owned vehicles, transparent pricing, and exceptional after-sale service. Every vehicle is thoroughly inspected before it reaches our showroom floor.",
    phone: "+263 77 184 4703",
    phoneRaw: "+263771844703",
    whatsappNumber: "263771844703",
    email: "sales@dcmotors.co.zw",
    address: "53H7+C5X, Crn Enterprice rd &, Selous Ave, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 5,
    established: "2016",
    yearsExperience: "8+",
    projectsCompleted: "3,000+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "dc-motors-car-sale-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "DC",
    logoLine2: "Motors",
  },

  hero: {
    badge: "Harare's Trusted Pre-Owned Vehicle Dealership",
    titleParts: [
      { text: "DRIVE " },
      { text: "CLASS", highlight: true },
      { text: " DRIVE CONFIDENCE." },
    ],
    subtitle:
      "Over 3,000 vehicles sold. Every car inspected, every deal transparent, every customer satisfied. DC Motors is where Harare finds its next ride.",
    ctaPrimary: "View Stock",
    ctaSecondary: "Book Test Drive",
    trustBadge: "3,000+ Vehicles Sold",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85", alt: "DC Motors professional image 1" },
      { url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=85", alt: "DC Motors professional image 2" },
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85", alt: "DC Motors showcase" },
    ],
  },

  stats: [
    { number: "3000+", label: "Vehicles Sold" },
    { number: "8+", label: "Years in Business" },
    { number: "50+", label: "Cars in Stock" },
    { number: "98%", label: "Client Satisfaction" },
  ],

  servicesPreview: [
    {
      title: "Quality Pre-Owned Cars",
      desc: "Hand-selected sedans, SUVs, and hatchbacks from Japanese, German, and American manufacturers, all thoroughly inspected.",
      icon: "Car",
    },
    {
      title: "Vehicle Financing",
      desc: "Flexible financing partnerships with major banks. We help you find the payment plan that works for your budget.",
      icon: "Briefcase",
    },
    {
      title: "Trade-In Programme",
      desc: "Get a fair valuation on your current vehicle and apply it directly to your upgrade. Quick appraisals, honest pricing.",
      icon: "Star",
    },
    {
      title: "Vehicle Inspection",
      desc: "Every vehicle undergoes a comprehensive multi-point inspection covering engine, transmission, suspension, and bodywork.",
      icon: "Lightbulb",
    },
    {
      title: "After-Sale Service",
      desc: "Our relationship does not end at the sale. We provide ongoing support, warranty guidance, and maintenance referrals.",
      icon: "Buildings",
    },
    {
      title: "Import Services",
      desc: "Custom import orders from Japan and South Africa. We handle shipping, duty, and clearing for your dream vehicle.",
      icon: "Rocket",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Quality Pre-Owned Cars",
        slug: "quality-pre-owned-cars",
        desc: "Hand-selected sedans, SUVs, and hatchbacks from Japanese, German, and American manufacturers, all thoroughly inspected.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      },
      {
        title: "Vehicle Financing",
        slug: "vehicle-financing",
        desc: "Flexible financing partnerships with major banks. We help you find the payment plan that works for your budget.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
      },
      {
        title: "Trade-In Programme",
        slug: "trade-in-programme",
        desc: "Get a fair valuation on your current vehicle and apply it directly to your upgrade. Quick appraisals, honest pricing.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      },
      {
        title: "Vehicle Inspection",
        slug: "vehicle-inspection",
        desc: "Every vehicle undergoes a comprehensive multi-point inspection covering engine, transmission, suspension, and bodywork.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
      },
      {
        title: "After-Sale Service",
        slug: "after-sale-service",
        desc: "Our relationship does not end at the sale. We provide ongoing support, warranty guidance, and maintenance referrals.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      },
      {
        title: "Import Services",
        slug: "import-services",
        desc: "Custom import orders from Japan and South Africa. We handle shipping, duty, and clearing for your dream vehicle.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial DC",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in quality pre-owned cars.",
        client: "Commercial Client",
        services: ["Quality Pre-Owned Cars", "Vehicle Financing"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
          "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential DC",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in vehicle financing.",
        client: "Residential Client",
        services: ["Vehicle Financing", "Trade-In Programme"],
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial DC",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in trade-in programme.",
        client: "Industrial Client",
        services: ["Trade-In Programme", "Vehicle Inspection"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
          "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional DC",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in vehicle inspection.",
        client: "Institutional Client",
        services: ["Vehicle Inspection", "After-Sale Service"],
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial DC",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in after-sale service.",
        client: "Commercial Client",
        services: ["After-Sale Service", "Import Services"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
          "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential DC",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in import services.",
        client: "Residential Client",
        services: ["Import Services", "Quality Pre-Owned Cars"],
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Bought my Toyota Fortuner from DC Motors and the entire process was smooth. Fair price, honest about the vehicle's history, and great after-sale support.",
      name: "Tatenda Musariri",
      role: "Toyota Fortuner Owner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "DC Motors helped me find the perfect family car within my budget. The financing process was quick and the team kept me informed at every step.",
      name: "Patience Mwale",
      role: "Honda Fit Owner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "I have bought three cars from DC Motors over the years. Their consistency and honesty is why I keep coming back and referring friends.",
      name: "Moses Chipanga",
      role: "Repeat Customer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "The trade-in offer was fair and the new vehicle was exactly as described. No surprises, no regrets. This is how car buying should be.",
      name: "Grace Mutasa",
      role: "Mazda CX-5 Owner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "DC Motors was founded with a commitment to changing how Harare buys cars. No hidden costs, no pressure tactics, and no shortcuts on quality. Every vehicle on our lot has been hand-selected and inspected to ensure it meets our standards.",
      "Since 2016, we have sold over 3,000 vehicles to satisfied customers across Zimbabwe. Our Enterprise Road showroom is known for honest dealings, competitive pricing, and vehicles you can trust.",
    ],
    values: [
      { title: "100% Inspected", desc: "Every vehicle undergoes a rigorous multi-point inspection before reaching our showroom floor." },
      { title: "Transparent Pricing", desc: "The price you see is the price you pay. No hidden fees, no surprise charges, no pressure." },
      { title: "Financing Made Easy", desc: "Bank partnerships for flexible payment plans. We handle the paperwork so you drive away faster." },
      { title: "After-Sale Support", desc: "Warranty guidance, maintenance referrals, and ongoing support long after you drive off the lot." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Bought my Toyota Fortuner from DC Motors and the entire process was smooth. Fair price, honest about the vehicle's history, and great after-sale support.", name: "Tatenda Musariri", role: "Toyota Fortuner Owner", rating: 5 },
      { text: "DC Motors helped me find the perfect family car within my budget. The financing process was quick and the team kept me informed at every step.", name: "Patience Mwale", role: "Honda Fit Owner", rating: 5 },
      { text: "I have bought three cars from DC Motors over the years. Their consistency and honesty is why I keep coming back and referring friends.", name: "Moses Chipanga", role: "Repeat Customer", rating: 5 },
      { text: "The trade-in offer was fair and the new vehicle was exactly as described. No surprises, no regrets. This is how car buying should be.", name: "Grace Mutasa", role: "Mazda CX-5 Owner", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "DC Motors",
        address: "53H7+C5X, Crn Enterprice rd &, Selous Ave, Harare, Zimbabwe",
        phone: "+263 77 184 4703",
        email: "sales@dcmotors.co.zw",
      },
    ],
  },

  homeCta: {
    title: "FIND YOUR NEXT RIDE",
    subtitle: "Quality vehicles, transparent deals, and ongoing support. Visit our Enterprise Road showroom or browse our stock online.",
    ctaPrimary: "View Stock",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello DC Motors! I am interested in viewing vehicles.",
    backgroundImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85",
  },

  footer: {
    description: "DC Motors Car Sale is a trusted Harare car dealership offering quality pre-owned vehicles, transparent pricing, and exceptional after-sale service. Ev...",
    copyright: "DC Motors",
  },
};

export default siteData;
