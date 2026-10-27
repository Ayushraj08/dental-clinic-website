/**
 * Centralised Editable Clinic Configuration
 * 
 * Customise this file to rebrand the website for any dental practice.
 * All details, treatments, clinician credentials, contact info, FAQs,
 * and high-resolution demo images are centralised here.
 */

export interface TreatmentItem {
  id: string;
  title: string;
  summary: string;
  detailedDescription: string;
  duration: string;
  idealFor: string;
  preparation: string;
  iconType: 'general' | 'cleaning' | 'root-canal' | 'implants' | 'ortho' | 'cosmetic';
  image: string;
  keyBenefits: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  treatment: string;
  quote: string;
  date: string;
  isDemonstrationSample: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'treatments' | 'payment';
}

export interface ClinicConfig {
  name: string;
  tagline: string;
  accreditationBadge: string;
  images: {
    hero: string;
    dentist: string;
    clinicLounge: string;
  };
  phone: string;
  phoneRaw: string;
  email: string;
  whatsapp: string;
  whatsappMessage: string;
  address: {
    line1: string;
    area: string;
    city: string;
    postcode: string;
    country: string;
  };
  googleMapsUrl: string;
  openingHours: {
    days: string;
    hours: string;
    note?: string;
  }[];
  emergencyNotice: string;
  dentist: {
    name: string;
    title: string;
    credentials: string;
    experienceYears: string;
    gdcNumber: string;
    bio: string;
    philosophy: string;
    specialisations: string[];
    memberships: string[];
  };
  trustPoints: {
    title: string;
    description: string;
    detail: string;
  }[];
  treatments: TreatmentItem[];
  reviews: ReviewItem[];
  faqs: FaqItem[];
  bookingDisclaimer: string;
}

export const defaultClinicConfig: ClinicConfig = {
  name: "Aura Dental Studio",
  tagline: "Gentle, thoughtful dental care tailored to your comfort and long-term oral health.",
  accreditationBadge: "GDC Registered Practitioners · CQC Assessed Quality Standard",
  images: {
    // Real, high-resolution authentic dental clinic photography
    hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80",
    dentist: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    clinicLounge: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
  },
  phone: "+44 (0)20 7946 0192",
  phoneRaw: "+442079460192",
  email: "care@auradentalstudio.co.uk",
  whatsapp: "+447946019200",
  whatsappMessage: "Hello Aura Dental, I would like to enquire about an appointment.",
  address: {
    line1: "14 Cavendish Square",
    area: "Marylebone",
    city: "London",
    postcode: "W1G 9DN",
    country: "United Kingdom",
  },
  googleMapsUrl: "https://maps.google.com/?q=Cavendish+Square+Marylebone+London+W1G+9DN",
  openingHours: [
    { days: "Monday – Thursday", hours: "08:30 – 18:00" },
    { days: "Friday", hours: "08:30 – 17:00" },
    { days: "Saturday", hours: "09:00 – 14:00", note: "Reserved for booked procedures" },
    { days: "Sunday & Bank Holidays", hours: "Closed", note: "24/7 on-call triage for registered emergencies" },
  ],
  emergencyNotice: "If you are experiencing severe dental pain, bleeding, or dental trauma, call our clinical line directly for immediate triage advice.",
  dentist: {
    name: "Dr. Eleanor Vance",
    title: "Principal Dental Surgeon & Clinical Director",
    credentials: "BDS (Hons) King's College London, MSc Restorative Dentistry",
    experienceYears: "14 Years Clinical Practice",
    gdcNumber: "GDC Registration: 248912 [Editable Sample]",
    bio: "Dr. Eleanor Vance established Aura Dental Studio with a vision to replace hurried appointments with calm, evidence-based care. Having completed postgraduate training in restorative and minimally invasive aesthetic dentistry at the Eastman Dental Institute, she focuses on natural tooth preservation and pain-free treatment. Dr. Vance takes genuine time to listen to each patient, understanding dental anxiety and designing solutions built around long-term wellness.",
    philosophy: "We treat people, not just teeth. Dental visits should never be a source of stress, intimidation, or mystery. Our consultations are deliberate, unhurried, and completely transparent from day one.",
    specialisations: [
      "Minimally Invasive Restorative Dentistry",
      "Biomimetic Tooth Preservation",
      "Anxious & Phobic Patient Care",
      "Clear Aligner Therapy & Aesthetic Harmony"
    ],
    memberships: [
      "British Academy of Cosmetic Dentistry (BACD)",
      "Faculty of General Dental Practice (UK)",
      "Care Quality Commission (CQC) Registered Practice",
      "European Society of Cosmetic Dentistry (ESCD)"
    ]
  },
  trustPoints: [
    {
      title: "Experienced Dental Team",
      description: "Postgraduate qualified practitioners with ongoing clinical development in preventative, restorative, and aesthetic dental care.",
      detail: "All clinicians undergo annual verified CPD and adhere strictly to GDC ethical standards."
    },
    {
      title: "Modern Clinical Facilities",
      description: "Equipped with low-radiation digital radiography, 3D intraoral digital scanners, and quiet, ergonomic equipment designed for patient comfort.",
      detail: "Clean-air filtration, hospital-grade sterilization cycles, and latex-free biocompatible materials."
    },
    {
      title: "Personalised Care & Comfort",
      description: "We schedule generous appointment times so you never feel rushed. Every treatment plan is co-designed with clear options and zero pressure.",
      detail: "Dedicated consultations with noise-reducing acoustic design and tailored pain-management protocols."
    }
  ],
  treatments: [
    {
      id: "general-dentistry",
      title: "General Dentistry",
      summary: "Comprehensive clinical examinations, low-dose digital diagnostics, and durable tooth-coloured restorations.",
      detailedDescription: "General dentistry forms the cornerstone of lifelong dental health. We conduct thorough examinations inspecting enamel integrity, gum margins, bite alignment, and oral soft tissues. When restorations are required, we use composite biomaterials that seamlessly blend with your natural tooth shade while preserving as much healthy tooth structure as possible.",
      duration: "45 – 60 minutes",
      idealFor: "Routine health examinations, early cavity detection, tooth-coloured fillings, and preventative maintenance.",
      preparation: "No special preparation needed. Please bring an updated record of current medications or health changes.",
      iconType: "general",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
      keyBenefits: [
        "High-definition intraoral camera walkthrough so you see what we see",
        "Minimally invasive composite bonding and tooth-coloured fillings",
        "Gentle oral cancer screening as part of every comprehensive exam",
        "Custom bite-guards for nighttime grinding (bruxism) prevention"
      ]
    },
    {
      id: "teeth-cleaning",
      title: "Teeth Cleaning & Hygiene",
      summary: "Gentle ultrasonic scaling, air-flow polishing for surface stain removal, and proactive periodontal health care.",
      detailedDescription: "Our dedicated dental hygiene sessions focus on thorough plaque and tartar removal with maximum comfort. Utilizing gentle guided biofilm therapy and warm-water air-polishing, we remove stubborn tea, coffee, and nicotine stains while protecting delicate enamel. We also assess gum health indicators to prevent gingivitis and periodontal disease before they progress.",
      duration: "30 – 45 minutes",
      idealFor: "Removing stubborn exterior stains, maintaining fresh breath, and reversing early gum irritation.",
      preparation: "Continue regular morning brushing before your appointment.",
      iconType: "cleaning",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
      keyBenefits: [
        "Warm-water air-flow polish that gently lifts deep discoloration",
        "Ultrasonic technology that minimizes manual scraping and sensitivity",
        "Tailored interdental cleaning advice and product recommendations",
        "Full periodontal pocket depth charting and gum health tracking"
      ]
    },
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      summary: "Precision endodontic care using magnification to resolve acute toothache and preserve your natural tooth.",
      detailedDescription: "When tooth pulp becomes infected due to deep decay or an undetected fracture, a root canal allows you to save the tooth rather than extract it. Modern endodontics is completely manageable and virtually painless thanks to targeted local anesthesia and electronic apex locators. We carefully clean, sterilize, and seal the canals, restoring comfort and structural integrity.",
      duration: "60 – 90 minutes (1–2 visits depending on anatomy)",
      idealFor: "Persistent toothache, sensitivity to hot and cold temperatures, tenderness when biting, or localized gum swelling.",
      preparation: "Eat a normal nutritious meal prior to your visit. Anesthesia will keep the area numb for several hours.",
      iconType: "root-canal",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
      keyBenefits: [
        "Saves your natural tooth and maintains native jawbone density",
        "Performed under local anesthesia for complete clinical comfort",
        "Rotary nickel-titanium instrumentation for gentle, precise canal disinfection",
        "Protective custom ceramic crown restoration options post-treatment"
      ]
    },
    {
      id: "dental-implants",
      title: "Dental Implants",
      summary: "Permanent titanium and ceramic replacements engineered to replicate the strength and look of natural teeth.",
      detailedDescription: "Dental implants offer the most secure and permanent solution for missing teeth. A biocompatible titanium or ceramic post is gently anchored into the jawbone, fusing securely over time to act as a robust artificial tooth root. Topped with a custom-shaded ceramic crown, implants prevent surrounding teeth from shifting and preserve natural facial bone contours.",
      duration: "Consultation + 2-stage clinical protocol over 3–6 months",
      idealFor: "Single or multiple missing teeth, alternatives to loose dentures, and restoring confident biting power.",
      preparation: "A 3D CBCT bone scan and digital assessment are conducted during your initial implant consultation.",
      iconType: "implants",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80",
      keyBenefits: [
        "Does not require grinding down adjacent healthy teeth",
        "Restores up to 98% of natural chewing and biting efficiency",
        "Prevents jawbone resorption and preserves natural facial contours",
        "Lifelong durability with routine hygiene care and check-ups"
      ]
    },
    {
      id: "orthodontics",
      title: "Orthodontics & Clear Aligners",
      summary: "Virtually invisible, removable aligners designed to gently straighten crowded teeth and correct bite alignment.",
      detailedDescription: "Clear aligner therapy offers an understated, comfortable alternative to traditional metal braces for adults and teens. We begin with a precise 3D optical scan of your teeth, producing an accurate digital roadmap of every micro-movement. You receive a sequence of custom clear trays that gently guide your teeth into optimal cosmetic and functional alignment.",
      duration: "6 – 18 months average journey (case-dependent)",
      idealFor: "Mild to moderate crowding, irregular spacing, adult orthodontic relapse, and minor bite misalignments.",
      preparation: "3D digital intraoral scan is completed at your first assessment with zero messy impression putty.",
      iconType: "ortho",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80",
      keyBenefits: [
        "Clear, removable trays that allow you to eat, brush, and floss normally",
        "Digital 3D preview of your projected smile before treatment commences",
        "Smooth medical-grade polymer with zero metal brackets or wires to irritate gums",
        "Convenient follow-up cadence tailored to your work and travel schedule"
      ]
    },
    {
      id: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      summary: "Custom porcelain veneers, composite edge bonding, and clinical whitening for a balanced, natural smile.",
      detailedDescription: "Cosmetic dentistry at Aura Dental Studio is grounded in moderation, proportion, and biological harmony. We believe the finest aesthetic work is imperceptible — creating teeth that appear naturally healthy and vibrant rather than artificially uniform. Whether refreshing chipped edges with composite bonding or designing bespoke hand-layered porcelain veneers, we respect facial aesthetics.",
      duration: "Customized according to treatment plan (1–3 visits)",
      idealFor: "Worn or chipped tooth edges, persistent intrinsic discoloration, gaps, and minor contour irregularities.",
      preparation: "Pre-treatment clinical photography and shade matching during your consultation.",
      iconType: "cosmetic",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
      keyBenefits: [
        "Minimally invasive composite bonding preserves natural tooth enamel",
        "Safe, dentist-supervised take-home or in-chair whitening protocols",
        "Hand-crafted porcelain veneers matched to your skin tone and facial symmetry",
        "Comprehensive diagnostic smile evaluation before any permanent work"
      ]
    }
  ],
  reviews: [
    {
      id: "review-1",
      author: "Charlotte M., Marylebone",
      treatment: "Teeth Cleaning & Composite Filling",
      quote: "I have avoided dentists for almost four years due to extreme dental anxiety. Dr. Vance and her team were extraordinarily patient, explaining every single step before touching anything. The clinic has a calm, quiet atmosphere that feels more like a wellness retreat than a cold clinic.",
      date: "Demonstration review sample",
      isDemonstrationSample: true
    },
    {
      id: "review-2",
      author: "Marcus T., Fitzrovia",
      treatment: "Clear Aligner Consultation",
      quote: "The 3D digital scan was effortless — no unpleasant putty impressions. The treatment plan was presented clearly with timelines and realistic expectations. Transparent, polite, and very well run.",
      date: "Demonstration review sample",
      isDemonstrationSample: true
    },
    {
      id: "review-3",
      author: "Priya K., Westminster",
      treatment: "Root Canal Treatment",
      quote: "I arrived with severe pain and left with immense relief. The procedure was completely painless under Dr. Vance's gentle care. The follow-up phone call the next morning to check on my recovery was much appreciated.",
      date: "Demonstration review sample",
      isDemonstrationSample: true
    }
  ],
  faqs: [
    {
      question: "How do I book an initial consultation?",
      answer: "You can submit our online appointment enquiry form, call our clinic reception directly on +44 (0)20 7946 0192, or send a message via WhatsApp. Our reception team will get in touch within two business hours to confirm your preferred time and discuss any preliminary questions.",
      category: "booking"
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your initial appointment is an unhurried 45–60 minute consultation. We take the time to review your medical history, listen to any specific dental concerns, conduct a gentle comprehensive oral exam, capture low-dose digital radiographs if needed, and discuss all treatment options with transparent, itemized fees.",
      category: "general"
    },
    {
      question: "I experience severe dental anxiety. How can you support me?",
      answer: "Dental nervousness is very common and completely valid. Please let us know when booking so we can reserve extra time. We explain every procedure before starting, agree on a simple 'stop' hand signal so you retain full control at all times, and provide a quiet clinical environment with relaxing music.",
      category: "general"
    },
    {
      question: "Are your treatments suitable for emergency tooth pain?",
      answer: "Yes. We reserve dedicated emergency appointment slots each working day for severe toothache, broken teeth, or dental trauma. Please telephone us as early in the morning as possible so we can accommodate you on the same day.",
      category: "treatments"
    },
    {
      question: "How transparent are treatment fees and payment plans?",
      answer: "We believe in complete financial transparency. You will receive a written, itemized treatment estimate before any procedure begins, with no unexpected hidden charges. For longer treatments such as clear aligners and implants, flexible staged payment options are available upon discussion.",
      category: "payment"
    },
    {
      question: "Where is the clinic located and is there parking nearby?",
      answer: "We are centrally located at 14 Cavendish Square, Marylebone, London W1G 9DN — just a four-minute walk from Oxford Circus and Bond Street underground stations. Secure underground parking is available directly under Cavendish Square.",
      category: "general"
    }
  ],
  bookingDisclaimer: "Template Demonstration: This appointment enquiry form operates in client-side demonstration mode. In a live clinic deployment, submitted enquiries are sent securely to the practice management system or verified clinic email."
};
