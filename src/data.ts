import { Service, Product, TeamMember, GalleryItem, BlogPost, Testimonial, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'pyramid-vaastu-consultation',
    title: 'Pyramid Vaastu Consultation',
    description: 'Comprehensive scientific energy evaluation of your property utilizing advanced diagnostic instruments and pyramid balancing methodologies.',
    icon: 'Sparkles',
    category: 'Consultation',
    details: 'Our flagship consultation service provides a holistic analysis of your space. We measure geopathic stress, electromagnetic radiation, and spatial energy orientations, then design a customized pyramid installation plan to harmonize the environment without physical alterations.'
  },
  {
    id: 'residential-vaastu-analysis',
    title: 'Residential Vaastu Analysis',
    description: 'Transform your home into a sanctuary of peace, health, and prosperity by aligning domestic spaces with natural energy currents.',
    icon: 'Home',
    category: 'Consultation',
    details: 'A detailed assessment of your home’s entrance, kitchen, bedrooms, and bathrooms. We pinpoint energy blockages that may affect health, relationships, or finance, and provide easy-to-implement pyramid placements to redirect the flow of positive life force.'
  },
  {
    id: 'commercial-building-consultation',
    title: 'Commercial Building Consultation',
    description: 'Optimize office layouts, retail spaces, and commercial hubs to stimulate business growth, employee productivity, and customer flow.',
    icon: 'Building2',
    category: 'Consultation',
    details: 'Our commercial analysis focuses on maximizing wealth attraction and operational synergy. We align executive offices, cash counters, and entrance areas with high-frequency pyramid fields to foster decision-making clarity and commercial success.'
  },
  {
    id: 'industrial-projects',
    title: 'Industrial Projects Planning',
    description: 'Large-scale energy balancing for factories, manufacturing units, and processing plants to optimize machinery performance and safety.',
    icon: 'Factory',
    category: 'Consultation',
    details: 'Industrial environments are highly susceptible to vibrational noise and heavy mechanical stress. We implement high-capacity industrial pyramid networks to stabilize the power grid, reduce downtime, and improve worker focus and safety.'
  },
  {
    id: 'architectural-design',
    title: 'Architectural Design Integration',
    description: 'Incorporate scientific Pyramid Vaastu principles at the blueprint stage of your custom-designed home or commercial project.',
    icon: 'Compass',
    category: 'Design',
    details: 'Led by Chairman Meril Peiris, our architectural design team combines aesthetic luxury with energy-efficient spatial structures. By planning the exact dimensions, entry points, and structural axes in harmony with the cosmos, we create residences of rare distinction.'
  },
  {
    id: 'interior-planning',
    title: 'Interior Planning & Decor',
    description: 'An elegant blend of luxury interior design and energy-balancing color schemes, furniture placement, and materials.',
    icon: 'Palette',
    category: 'Design',
    details: 'Our interior design specialists work in tandem with energy consultants to select textiles, metals, colors, and art pieces that amplify spatial vibes. Furniture layouts are calculated to keep pathways open and energetic streams circulating beautifully.'
  },
  {
    id: 'engineering-consultation',
    title: 'Engineering Consultation',
    description: 'Structural and civil engineering planning that respects both architectural integrity and sacred geometric ratios.',
    icon: 'Wrench',
    category: 'Management',
    details: 'We ensure that structural foundations, steel reinforcements, and load-bearing columns do not cut into vital energy meridians. Our team collaborates with structural engineers to design modern, safe, and vibration-balanced frameworks.'
  },
  {
    id: 'construction-management',
    title: 'Construction Management',
    description: 'Supervising key phases of the building cycle to ensure that positive energy rituals and geometric alignments are executed flawlessly.',
    icon: 'Briefcase',
    category: 'Management',
    details: 'From the initial ground-breaking ceremony to the placement of the final roof beam, our project managers supervise construction to guarantee that the geometry is accurate down to the millimeter.'
  },
  {
    id: 'energy-balancing',
    title: 'Spatial Energy Balancing',
    description: 'Neutralize negative vibrations from electromagnetic smog, underground water flows, or historical land trauma.',
    icon: 'Activity',
    category: 'Consultation',
    details: 'Using premium brass grids and copper energy rods, we map out lines of stress and neutralize them. The integration of pyramid power shifts the localized ambient energy field from chaotic to highly coherent.'
  },
  {
    id: 'land-selection',
    title: 'Land Selection & Analysis',
    description: 'Expert pre-purchase evaluations of residential plots, agricultural estates, or industrial properties.',
    icon: 'Map',
    category: 'Consultation',
    details: 'Avoid costly mistakes by evaluating land slope, soil vitality, surrounding landmarks, and historic usage. We measure the natural magnetic field of the property to determine if it can support your development goals.'
  },
  {
    id: 'factory-planning',
    title: 'Factory Layout Planning',
    description: 'Specialized scientific placements of heavy generators, raw materials, furnaces, and dispatch areas.',
    icon: 'Cpu',
    category: 'Design',
    details: 'We map raw material storages in the heavy Southwest, furnaces or boilers in the fire-oriented Southeast, and dispatch gates in the dynamic Northwest to keep your supply chain frictionless and highly profitable.'
  },
  {
    id: 'office-planning',
    title: 'Office Space Planning',
    description: 'Layout planning for staff seating, conference rooms, server locations, and executive cabins.',
    icon: 'Users',
    category: 'Design',
    details: 'Ensure that team leaders are seated in positions of authority while creative departments face direction of intellectual stimulation. This significantly lowers workplace attrition and elevates morale.'
  },
  {
    id: 'hotel-planning',
    title: 'Hotel & Resort Planning',
    description: 'Aesthetic, tranquil, and luxurious hospitality layouts designed to keep guests relaxed, satisfied, and returning.',
    icon: 'Utensils',
    category: 'Design',
    details: 'Luxury hospitality relies on creating an immediate feeling of relaxation and wealth. We structure lobbies, reception desks, wellness spas, and dining halls to emanate welcoming and nurturing warmth.'
  },
  {
    id: 'apartment-projects',
    title: 'Apartment & Condominium Projects',
    description: 'Strategic pyramid placements in multi-family structures to balance individual units and common facilities.',
    icon: 'Layers',
    category: 'Design',
    details: 'For high-rise buildings where land connection is limited, we establish virtual grounding systems. Each apartment is treated as an independent micro-cosmos, secured with strategic corner-pyramid alignments.'
  },
  {
    id: 'pyramid-installation',
    title: 'Pyramid Installation Service',
    description: 'Professional, custom placement and activation of specialized pyramid instruments by certified experts.',
    icon: 'ArrowDownCircle',
    category: 'Management',
    details: 'Our certified installers calculate precise solar-noon alignments to anchor instruments. Activated pyramids function as amplifiers, continuously projecting balanced energy throughout the living space.'
  },
  {
    id: 'scientific-energy-analysis',
    title: 'Scientific Energy Analysis',
    description: 'Advanced bio-resonance, aura photography, and dowsing instruments utilized to quantify energy fluctuations.',
    icon: 'Gauge',
    category: 'Consultation',
    details: 'We translate subtle energies into quantifiable reports. Clients receive a comprehensive PDF audit showing energy pre-assessments, stress zones, and projected improvements post-pyramid installation.'
  },
  {
    id: 'online-consultation',
    title: 'Online Remote Consultation',
    description: 'Virtual spatial audits conducted via high-resolution site plans, video walkthroughs, and Google Earth coordinates.',
    icon: 'Globe',
    category: 'Consultation',
    details: 'Designed for international clients, our virtual audit maps out spatial cardinal coordinates remotely. We analyze your blueprints and supply a guided installation layout for self-installation or local certified help.'
  },
  {
    id: 'professional-training',
    title: 'Professional Training Programs',
    description: 'Academically rigorous training for architects, engineers, and designers who wish to incorporate pyramid science.',
    icon: 'GraduationCap',
    category: 'Education',
    details: 'Expand your professional portfolio. Learn how sacred geometry, mathematical ratios, and copper/brass pyramid tools interact with environmental fields to create energy-efficient architecture.'
  },
  {
    id: 'certification-courses',
    title: 'Certification Courses',
    description: 'Become a registered Pyramid Vaastu Consultant under the prestigious IPVPA framework.',
    icon: 'FileCheck',
    category: 'Education',
    details: 'A multi-tier certification curriculum encompassing theory, laboratory experiments, and on-site practical assignments. Graduates are added to our globally accessed Member Directory.'
  },
  {
    id: 'site-inspection',
    title: 'Expert Site Inspection',
    description: 'On-demand urgent structural inspections and remedy evaluations for ongoing construction or purchase negotiations.',
    icon: 'Search',
    category: 'Management',
    details: 'A rapid on-site visual and energetic assessment. Our experts visit your site to verify compliance with architectural standards and propose immediate corrections for sudden structural blockages.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'copper-energy-pyramid',
    name: 'Copper Energy Pyramid',
    description: 'Mastercrafted 99.9% pure copper dual-chamber pyramid designed to amplify positive bio-magnetic fields.',
    benefits: [
      'Amplifies cosmic energy by 10x within a 50-meter radius',
      'Neutralizes intense electromagnetic waves (EMF)',
      'Improves sleep patterns and physical stamina',
      'Ideal for living rooms, master bedrooms, and home offices'
    ],
    price: 249,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWksCN4nKDMxaMbX_RODZMP-7uzNrXPSUhOuBOSvisO5i2e7YekT9_qk&s=10',
    category: 'Energy Instruments'
  },
  {
    id: 'brass-pyramid-grid',
    name: 'Brass Pyramid Grid',
    description: 'A mathematical matrix of 81 interconnected solid brass pyramids to secure property boundaries.',
    benefits: [
      'Creates an impenetrable energetic shield around your land',
      'Neutralizes severe geopathic stress and underground water line cuts',
      'Balances soil fertility and negative historical vibrations',
      'Installed at ground level during early construction or in gardens'
    ],
    price: 389,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBnP1xy6tDUP4qP1q8e8hIV3_6EL99ZkLLoWcssJNB15c2quQiqzRzCU&s=10',
    category: 'Boundary Tools'
  },
  {
    id: 'pyramid-energy-plate',
    name: 'Pyramid Energy Plate',
    description: 'An elegant copper-plated sacred geometry disk containing copper micro-pyramids for charging items.',
    benefits: [
      'Purifies and charges drinking water, food, and medicine',
      'Acts as a desktop focal point to reduce work exhaustion',
      'Revitalizes indoor plants and decorative flora',
      'Highly compact and portable, suitable for travel'
    ],
    price: 119,
    image: 'https://m.media-amazon.com/images/I/31Zg-btNH9L._AC_UF894,1000_QL80_.jpg',
    category: 'Personal Wellness'
  },
  {
    id: 'direction-correction-pyramid',
    name: 'Direction Correction Pyramid',
    description: 'Specialized optical brass instrument with dual-axis levels for resolving magnetic north-south misalignments.',
    benefits: [
      'Corrects diagonal land shapes or skewed building entries virtually',
      'Balances the missing corners of architectural layouts',
      'Restores the direct flow of solar-energy streams (Jaivik Urja)',
      'Easily mounted on walls without breaking masonry structures'
    ],
    price: 189,
    image: 'instrument-svg-3',
    category: 'Correction Tools'
  },
  {
    id: 'prosperity-pyramid',
    name: 'Prosperity Golden Pyramid',
    description: 'A 24K gold-plated sacred multichamber pyramid designed for attraction of abundance and domestic bliss.',
    benefits: [
      'Attracts active prosperity waves and commercial growth',
      'Harmonizes relationship issues and fosters family coordination',
      'Best placed in the Northeast direction or family shrines',
      'Comes with a dedicated wooden base and activation crystals'
    ],
    price: 299,
    image: 'instrument-svg-7',
    category: 'Prosperity'
  },
  {
    id: 'business-success-pyramid',
    name: 'Business Success Pyramid',
    description: 'High-density multi-tiered metallic pyramid optimized with a north-facing magnetic core for office spaces.',
    benefits: [
      'Spurs sales velocity, customer acquisition, and deal closing',
      'Clears operational and financial bottlenecks',
      'Maintains mental acuity for directors, CEOs, and managers',
      'Fits perfectly on executive desks, receptions, or boardroom tables'
    ],
    price: 329,
    image: 'instrument-svg-4',
    category: 'Prosperity'
  },
  {
    id: 'health-energy-pyramid',
    name: 'Health Energy Pyramid',
    description: 'A soothing silver-plated and jade-infused energy accumulator to support physical rejuvenation and immunity.',
    benefits: [
      'Accelerates cellular recovery and eases chronic aches',
      'Mitigates chronic sleeping disorders and reduces nightmare frequencies',
      'Emanates a highly therapeutic calm green-gold vibrational spectrum',
      'Perfect for placing next to the headrest or recovery rooms'
    ],
    price: 215,
    image: 'instrument-svg-2',
    category: 'Personal Wellness'
  },
  {
    id: 'meditation-pyramid',
    name: 'Meditation Canopy Pyramid',
    description: 'A light-weight, collapsible pure copper rod structure built strictly to the Giza golden ratio (51.8°).',
    benefits: [
      'Creates an immersive, deeply restorative field for spiritual practices',
      'Lowers heart rate and enhances brain wave synchronization (Alpha states)',
      'Fits around a sitting individual for daily meditation loops',
      'Extremely easy to set up, take down, and transport anywhere'
    ],
    price: 499,
    image: 'instrument-svg-6',
    category: 'Personal Wellness'
  },
  {
    id: 'multicone-booster-max',
    name: 'Multicone Booster Max',
    description: 'Ultra-power multi-layered energy grid combining high-potency pyramids with a gold-plated magnetic focal core.',
    benefits: [
      'Amplifies positive Vastu bio-magnetic energy by up to 25x',
      'Neutralizes severe geopathic stress and architectural defects virtually',
      'Perfect for large residential properties, main halls, and high-level corporate offices',
      'Optimizes spatial coordinates to attract abundance, focus, and clarity'
    ],
    price: 349,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXC6qamYzGVK1amjHPcRXTM1xgPdyFs2mSa0LQ2ADTw&s=10',
    category: 'Energy Instruments'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'meril-peiris',
    name: 'Meril Peiris',
    role: 'Chairman & Founder',
    designation: 'Architectural Designer, Pyramid Vaastu Science Specialist',
    qualifications: [
      'Chairman of Glorious Homes (Pvt) Ltd',
      'Founder and Chairman of International Pyramid Vaastu Professionals\' Association',
      'Over 25 years of pioneering work in energy-balancing spatial architecture'
    ],
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEP5Q6QnXg83w/profile-displayphoto-scale_400_400/B56Zsi8OrAJwAg-/0/1765817774342?e=2147483647&v=beta&t=uXMiLEeX04ocjmB0QFnI95rXvUFdrvi0mpbwqg0M_7k'
  },
  {
    id: 'nimal-perera',
    name: 'Dr. Nimal Perera',
    role: 'Senior Engineer',
    designation: 'Senior Structural & Civil Consultant',
    qualifications: [
      'Ph.D. in Structural Engineering, University of Moratuwa',
      'Fellow of the Institution of Engineers Sri Lanka (IESL)',
      'Expert in seismic protection and environmental architecture'
    ],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=500&q=80'
  },
  {
    id: 'sanduni-fernando',
    name: 'Ar. Sanduni Fernando',
    role: 'Chief Architect',
    designation: 'Principal Architectural Designer & Urbanist',
    qualifications: [
      'M.Arch (Hons), Royal Institute of British Architects (RIBA)',
      'Specialist in high-end luxury housing & sustainable commercial towers',
      'Pioneer in integrating sacred geometry into ultra-modern facades'
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80'
  },
  {
    id: 'kavin-silva',
    name: 'Eng. Kavin Silva',
    role: 'Structural Engineer',
    designation: 'Structural Analysis & Steel Framing Specialist',
    qualifications: [
      'B.Sc. Eng (Hons) in Civil Engineering',
      'Registered Consultant for industrial and high-rise structures',
      'Expert in magnetic shielding and geopathic stress isolation'
    ],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=500&q=80'
  },
  {
    id: 'isuru-jayasinghe',
    name: 'Dr. Isuru Jayasinghe',
    role: 'Energy Research Consultant',
    designation: 'Bio-Resonance Physicist & Energy Analyst',
    qualifications: [
      'Ph.D. in Applied Physics (Electromagnetism)',
      'Lead author of 15+ research papers on environmental bio-vibrations',
      'Chief of IPVPA Energy Diagnostic Laboratory'
    ],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&h=500&q=80'
  },
  {
    id: 'dilani-rodrigo',
    name: 'Dilani Rodrigo',
    role: 'Interior Designer',
    designation: 'Head of Luxury Interiors & Color Psychology',
    qualifications: [
      'B.Des in Spatial Design, Academy of Fine Arts',
      'Over 12 years creating award-winning five-star hospitality layouts',
      'Certified in environmental color resonance and flow layouts'
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=500&q=80'
  },
  {
    id: 'lakshan-fernando',
    name: 'Lakshan Fernando',
    role: 'Project Consultant',
    designation: 'Senior Construction & Site Operations Manager',
    qualifications: [
      'Master of Project Management (MPM)',
      'Supervised construction of over 200 high-end villa developments',
      'Certified Pyramid Alignment Inspector'
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g-res-1',
    title: 'The Golden Axis Villa',
    category: 'Residential',
    categoryLabel: 'Residential Projects',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'A 5-bedroom luxury estate in Colombo designed by Meril Peiris. Incorporates dual copper pyramid canopies.'
  },
  {
    id: 'g-res-2',
    title: 'Minimalist Sanctuary',
    category: 'Residential',
    categoryLabel: 'Residential Projects',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke coastal bungalow utilizing solid brass grids to neutralize sub-surface geopathic stress.'
  },
  {
    id: 'g-comm-1',
    title: 'Vanguard Headquarters',
    category: 'Commercial',
    categoryLabel: 'Commercial Buildings',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'A multi-story commercial corporate tower featuring embedded glass-ceramic pyramids in the main atrium.'
  },
  {
    id: 'g-fact-1',
    title: 'Apex Manufacturing Hub',
    category: 'Factories',
    categoryLabel: 'Factories',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    description: 'Industrial automation factory featuring high-voltage protection and copper grid grounding networks.'
  },
  {
    id: 'g-hotel-1',
    title: 'The Azure Palms Resort',
    category: 'Hotels',
    categoryLabel: 'Hotels',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    description: 'Luxury five-star spa resort designed to maximize guests relaxation waves using North-East facing lobbies.'
  },
  {
    id: 'g-int-1',
    title: 'The Meridian Lounge',
    category: 'Interior',
    categoryLabel: 'Interior Designs',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Elegantly proportioned living area implementing strategic brass corner grids and gold color accents.'
  },
  {
    id: 'g-inst-1',
    title: 'Pre-slab Foundation Grid',
    category: 'Installations',
    categoryLabel: 'Pyramid Installations',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80',
    description: 'Precision physical installation of 81 brass pyramids under a master floor slab prior to pouring concrete.'
  },
  {
    id: 'g-edu-1',
    title: 'Advanced Sacred Geometry',
    category: 'Education',
    categoryLabel: 'Training Programs',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    description: 'Chairman Meril Peiris instructing a batch of architects and structural engineers during the 2026 Summit.'
  },
  {
    id: 'g-event-1',
    title: 'International Vaastu Summit',
    category: 'Events',
    categoryLabel: 'Seminars & Conferences',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    description: 'Annual gathering of professionals, engineers, and international consultants celebrating scientific Vaastu.'
  },
  {
    id: 'g-const-1',
    title: 'Symmetry Heights Site',
    category: 'Construction',
    categoryLabel: 'Construction Sites',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    description: 'Site inspection of structural columns and energy flow-points on a major apartment construction project.'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'scientific-pyramid-vaastu',
    title: 'What is Scientific Pyramid Vaastu?',
    excerpt: 'Explore how ancient sacred geometry meets modern bio-magnetic physics to balance environmental energy fields.',
    content: `For centuries, traditional Vaastu Shastra relied heavily on demolition and physical structural alterations to correct spatial defects. However, **Scientific Pyramid Vaastu** offers a completely non-destructive breakthrough. Developed through meticulous research, this modern science employs mathematically optimized pyramids to balance cosmic, telluric, and magnetic fields within any building.

By utilizing the golden ratio structure (equivalent to the Great Pyramid of Giza), these pyramid instruments act as cosmic energy accumulators. They gather vital primordial force and project it as a highly structured, coherent frequency that counteracts geopathic stress, structural misalignments, and electromagnetic radiation. Under the stewardship of **Chairman Meril Peiris** and inspired by **Prof. Dr. Jiten Bhatt**, IPVPA advocates this scientific methodology worldwide, helping modern architects build spaces that are in complete resonance with nature.`,
    date: 'June 25, 2026',
    author: 'Meril Peiris',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80',
    category: 'Scientific Vaastu'
  },
  {
    id: 'benefits-of-pyramid-energy',
    title: 'The Physiological and Mental Benefits of Pyramid Energy Fields',
    excerpt: 'How living inside balanced geometric proportions impacts heart-rate variability, sleep, and executive focus.',
    content: `Did you know that geometric shapes have a direct biological resonance? Research conducted at the IPVPA energy laboratory has shown that solid, golden-ratio pyramids constructed from copper or brass emit a sub-audible electromagnetic frequency that calms the human nervous system.

Using bio-resonance scanners, researchers measured a **34% reduction in stress-related cortisol markers** and a significant increase in deep-sleep delta cycles for participants sleeping in rooms stabilized by a Copper Energy Pyramid. For professionals and remote workers, placing a prosperity pyramid on their work desk has been shown to improve focus times and mitigate the mental fatigue associated with modern display usage.`,
    date: 'June 18, 2026',
    author: 'Dr. Isuru Jayasinghe',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    category: 'Energy Research'
  },
  {
    id: 'common-vaastu-mistakes',
    title: '3 Common Spatial Mistakes in Modern Luxury Homes (And How to Fix Them)',
    excerpt: 'An architectural breakdown of skewed entries, wrong toilet placements, and how to remedy them virtually.',
    content: `Modern architecture excels in aesthetic expression and structural boldness. However, it often neglects subtle energy circuits. In our inspections, we continuously observe three recurring mistakes in premium homes:
    
1. **The South-West Main Entrance**: Known to invite financial instabilities and chaotic relationships.
2. **The North-East Toilet**: Highly disruptive to the magnetic brain currents, often manifesting as persistent health and clarity problems.
3. **Clogged North-East Corners**: Placing heavy storage, closets, or stairs in the Northeast, which blocks the incoming streams of high-frequency solar rays (Jaivik Urja).

Fortunately, you do not need to bring down walls. Mounting a professional Direction Correction Pyramid virtually shifts skewed entry coordinates, while strategic copper energy rods under the floor isolate the toilet drainage energies, keeping the surrounding rooms pure and balanced.`,
    date: 'June 12, 2026',
    author: 'Ar. Sanduni Fernando',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    category: 'Residential Tips'
  },
  {
    id: 'energy-balancing-explained',
    title: 'Demystifying Energy Balancing: Geopathic Stress vs EMF Pollution',
    excerpt: 'Understand how underground fault lines and 5G routers distort spatial energy, and the instruments that correct them.',
    content: `Environmental stress comes from two main directions: the earth below (telluric) and the sky above (atmospheric/man-made).
    
**Geopathic Stress** occurs when earth's natural magnetic field is distorted by underground mineral deposits, running water, or tectonic faults. Spending hours over a geopathic stress line is a known trigger for chronic fatigue and insomnia.
**EMF Pollution** stems from our ubiquitous 5G routers, smart devices, and wiring. 

Energy balancing is the art of placing specific brass and copper resonant instruments on these points of disturbance. The high-density copper acts as a Faraday-like reflector, scattering the chaotic spikes of geopathic fields and shifting them back into a healthy sinusoidal wave.`,
    date: 'May 28, 2026',
    author: 'Eng. Kavin Silva',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    category: 'Engineering & Science'
  },
  {
    id: 'architecture-meets-pyramid',
    title: 'Modern Luxury Architecture Meets Sacred Geometric Pyramids',
    excerpt: 'Designing high-end homes that look spectacular on the outside and resonate harmoniously on the inside.',
    content: `A truly luxury home should not only look stunning—it should feel like an oasis. When architectural design merges with the ancient rules of sacred geometry and modern pyramid science, we achieve an unparalleled level of domestic luxury.

At **Glorious Homes**, we coordinate the design draft from the ground up. The foundation is mapped on a sacred grid of nine zones. We ensure major heavy components sit on the south-west anchors, and construct high-vaulted ceilings with hidden pyramid slopes. This results in an organic temperature regulation, superb acoustic resonance, and a tangible sense of grandeur and deep-seated tranquility that residents notice the second they step through the door.`,
    date: 'May 14, 2026',
    author: 'Meril Peiris',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    category: 'Design Trends'
  },
  {
    id: 'commercial-vaastu-principles',
    title: 'The Blueprint of Corporate Success: Commercial Vaastu Principles',
    excerpt: 'Optimize your corporate offices to enhance board decisions, cash collections, and employee collaboration.',
    content: `In a corporate setup, profitability and synergy are paramount. Commercial Vaastu focuses on configuring offices to support these outcomes. 

The Chairman or CEO should ideally sit in the south-west cabin, facing East or North, symbolizing heavy earth stability and visionary foresight. The Sales team belongs in the active Northwest, where quick decision currents blow. Financial books and primary vaults belong in the sacred North, ruled by magnetic expansion. Integrating a solid Business Success Pyramid in the center of the executive conference room aligns team energies, dramatically cutting down boardroom friction and boosting contract closing ratios.`,
    date: 'April 30, 2026',
    author: 'Dr. Nimal Perera',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    category: 'Business Success'
  },
  {
    id: 'home-planning-tips',
    title: 'A Quick Guide to Planning a Harmonious Domestic Floor Plan',
    excerpt: 'Essential geometric and directional steps to implement when building your next residential space.',
    content: `Planning a new home is an exciting milestone. Ensure your efforts are supported by cosmic orientation with this quick guide:
    
- **Northeast (Water)**: Reserve this light corner for meditation, study, and clean entries. Ensure no toilets, kitchens, or heavy stairs are located here.
- **Southeast (Fire)**: The ideal quadrant for kitchens, generators, and electric panels. A fire placed in this corner stimulates physical vitality and financial health.
- **Northwest (Air)**: Perfect for guest rooms, garages, and sales storage.
- **Southwest (Earth)**: The master bedroom and heavy collections must reside here. It provides grounding support for the breadwinner of the family.

By placing a simple Brass Pyramid Grid near your south-west foundations, you anchor these positive coordinates, cementing a strong structural and energetic foundation.`,
    date: 'April 15, 2026',
    author: 'Dilani Rodrigo',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    category: 'Residential Tips'
  },
  {
    id: 'office-energy-improvement',
    title: 'Boosting Office Morale and Productivity with Subtle Energy Audits',
    excerpt: 'Simple workplace changes you can make today to clear brain fog, boost stamina, and lower absenteeism.',
    content: `High workplace stress and mental exhaustion are often caused by poor spatial layout and dense electro-smog. To quickly improve your workspace energy flow:
    
1. **Declutter the Center (Brahmasthan)**: Keep the middle of the office entirely open and well-lit.
2. **Introduce Gold and Jade Accents**: Yellow, beige, and light green hues relax eyes and align mental focus.
3. **Desk Pyramid Amplifiers**: Equipping critical staff desks with personal Jade-Energy or Copper Pyramids helps clean local EMF currents and maintains a clear, positive working morale.`,
    date: 'March 28, 2026',
    author: 'Dr. Isuru Jayasinghe',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&q=80',
    category: 'Business Success'
  },
  {
    id: 'factory-planning-guide',
    title: 'Factory Layout Guide: Industrial Pyramids and Machinery Alignments',
    excerpt: 'Protect expensive assembly lines and secure physical operations using heavy-duty industrial instruments.',
    content: `Factories deal with massive amounts of kinetic, thermal, and electrical energies. If these force fields are in conflict, it manifests as frequent machine breakdowns, employee accidents, and labor strikes.
    
Industrial Vaastu demands that the heaviest raw materials sit in the West/Southwest, and active smelting or boiler plants operate in the Southeast. To safeguard delicate automated assembly lines, we install heavy-duty steel and copper hybrid **Industrial Energy Pyramids**. These specialized accumulators act as thermal and magnetic absorbers, distributing mechanical vibrations safely and creating a cohesive, protective blanket.`,
    date: 'March 10, 2026',
    author: 'Lakshan Fernando',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
    category: 'Engineering & Science'
  },
  {
    id: 'latest-research-geometry',
    title: 'Latest Research: Mathematical Proportions of Pyramid Structures',
    excerpt: 'A summary of the recent geometric and vibrational tests done at the 2026 Scientific Summit.',
    content: `At the recent IPVPA international summit, we published breakthrough data regarding the resonance effects of different pyramid angles. 

Using precise spectrum analyzers, we discovered that pyramids crafted exactly to the Giza golden angle of **51.8 degrees** create a unique torsional field. This field alters the hydrogen bonds in water, accelerating crystallization and purifying organic compounds. Standard square enclosures, on the other hand, show zero resonant spikes. This research confirms that the structural angle of the pyramid is critical to its performance—furthering our commitment to handcrafting every single instrument sold in our store with perfect mathematical precision.`,
    date: 'February 20, 2026',
    author: 'Dr. Isuru Jayasinghe',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    category: 'Energy Research'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'John Perera',
    role: 'Managing Director',
    company: 'Capital Holdings Group',
    rating: 5,
    text: 'The scientific Vaastu consultation completely transformed both our home and commercial offices. Within three months of installing the copper grids and the business success pyramids, we saw a noticeable increase in team alignment, and our quarterly sales hit an all-time record. Highly professional service.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
  },
  {
    id: 't-2',
    name: 'Amanda Silva',
    role: 'Principal Homeowner',
    company: 'Colombo Residencies',
    rating: 5,
    text: 'Excellent guidance from highly experienced professionals. Meril Peiris and his team designed our luxury custom home blueprint to match perfect geometric alignments. The atmosphere inside the villa is so incredibly relaxing, and guest comments are always about how serene the spaces feel.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80'
  },
  {
    id: 't-3',
    name: 'Ravi Fernando',
    role: 'Factory Operations Director',
    company: 'Prime Apparels (Pvt) Ltd',
    rating: 5,
    text: 'We were suffering from frequent generator issues and high worker fatigue. The IPVPA industrial audit mapped our stress fields and set up localized heavy-duty steel and copper pyramids. The operational environment has since become exceptionally safe, and machinery downtime dropped by 45%.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How is Pyramid Vaastu different from traditional Vaastu?',
    answer: 'Traditional Vaastu often suggests heavy structural demolition or changing walls, kitchens, or rooms, which can be highly expensive or impossible in rented flats and modern apartments. Scientific Pyramid Vaastu corrects spatial energy defects "virtually" using specialized mathematical instruments (made of copper or brass) that balance and redirect cosmic and telluric energy streams without physical demolition.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Are these pyramids scientifically tested?',
    answer: 'Yes. Every instrument offered by the IPVPA is tested in our laboratories. We use bio-resonance scanners, geopathic stress meters, and electromagnetic frequency detectors to ensure that each copper and brass pyramid resonates perfectly at the 51.8-degree Giza angle to accumulate and project environmental energy.',
    category: 'Science'
  },
  {
    id: 'faq-3',
    question: 'Can you consult on an existing property remotely?',
    answer: 'Absolutely. We provide high-fidelity Online Remote Consultations. By analyzing your construction blueprints, site photographs, and Google Earth cardinal coordinates, our team maps out environmental stress lines and provides a complete digital layout showing precise pyramid remedies.',
    category: 'Consultation'
  },
  {
    id: 'faq-4',
    question: 'What materials are used in the pyramids?',
    answer: 'We strictly use 99.9% pure electrolytic copper, solid architectural-grade brass, and specific semi-precious quartz or jade crystals in our instruments. Pure copper is the highest thermal and electrical conductor, making it the most potent amplifier of sub-atomic bio-energy waves.',
    category: 'Store'
  },
  {
    id: 'faq-5',
    question: 'How long does it take to experience spatial changes?',
    answer: 'While electromagnetic and bio-resonance changes occur instantly upon correct alignment, human physiological and environmental changes typically stabilize within 21 to 90 days as the spatial energy cells fully integrate and harmonize.',
    category: 'General'
  },
  {
    id: 'faq-6',
    question: 'What benefits do IPVPA members receive?',
    answer: 'Members receive professional accreditation, access to our globally accessed registered directory, exclusive invites to international summits, research journals, specialized tools at partner discounts, and certified training courses instructed directly by Meril Peiris and senior engineers.',
    category: 'Membership'
  },
  {
    id: 'faq-7',
    question: 'How are geopathic stress lines detected?',
    answer: 'Our experts use highly sensitive electronic dowsing rods, geo-magnetometers, and earth-vibration meters to physically map the underground telluric currents. In virtual audits, these lines are calculated using tectonic overlays and environmental land slope models.',
    category: 'Science'
  },
  {
    id: 'faq-8',
    question: 'Do you design custom homes from scratch?',
    answer: 'Yes. Through our close alliance with Glorious Homes, our Chairman Meril Peiris along with our team of chief architects and structural engineers can design, plan, and manage the full construction of your high-end custom-built home to ensure absolute Vaastu perfection.',
    category: 'Consultation'
  }
];
