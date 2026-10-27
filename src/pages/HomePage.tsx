import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Check, Shield } from 'lucide-react';
import { ClinicConfig } from '../config/clinicConfig';
import { HeroDentalVisual, DentistPortraitVisual, ClinicLoungeVisual, TreatmentIcon } from '../components/ClinicVisuals';

interface HomePageProps {
  config: ClinicConfig;
  onNavigate: (page: string, treatmentId?: string) => void;
  onOpenBooking: (treatmentId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ config, onNavigate, onOpenBooking }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      
      {/* ========================================================
          B. HERO SECTION
          ======================================================== */}
      <section className="pt-8 sm:pt-14 lg:pt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] font-normal tracking-tight text-[#222522] text-balance">
              Confident Smiles Start Here.
            </h1>
            
            <p className="text-base sm:text-lg text-[#4A524B] leading-relaxed max-w-xl text-balance">
              {config.tagline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 text-sm font-medium text-[#F8F7F2] bg-[#174A3A] hover:bg-[#123B2E] rounded-lg transition-colors cursor-pointer shadow-xs text-center"
              >
                Book an Appointment
              </button>

              <button
                type="button"
                onClick={() => onNavigate('treatments')}
                className="px-6 py-3.5 text-sm font-medium text-[#174A3A] bg-[#FFFFFF] border border-[#D9D6CB] hover:border-[#174A3A] hover:bg-[#F8F7F2] rounded-lg transition-colors cursor-pointer text-center"
              >
                Explore Treatments
              </button>
            </div>

            {/* Small trust line for verified credentials */}
            <div className="pt-4 border-t border-[#E6E4DC] flex items-center gap-2 text-xs text-[#5E655F]">
              <Shield className="w-4 h-4 text-[#174A3A] shrink-0" />
              <span>{config.accreditationBadge}</span>
            </div>
          </div>

          {/* Right Hero Column: Authentic Dental Clinic Photograph */}
          <div className="lg:col-span-5">
            <HeroDentalVisual 
              src={config.images?.hero} 
              alt={`${config.name} modern treatment suite`} 
            />
          </div>
        </div>
      </section>

      {/* ========================================================
          C. TRUST SECTION (Restrained typography, no oversized icons)
          ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-y border-[#E6E4DC] py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {config.trustPoints.map((point, index) => (
              <div key={index} className="space-y-2.5">
                <span className="text-xs font-mono font-medium text-[#174A3A] tabular-nums">
                  0{index + 1}.
                </span>
                <h3 className="text-lg font-semibold text-[#222522] tracking-tight">
                  {point.title}
                </h3>
                <p className="text-sm text-[#4E5650] leading-relaxed">
                  {point.description}
                </p>
                <p className="text-xs text-[#7A837C] pt-1">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          D. TREATMENTS (Six essential configurable services)
          ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold">
              Clinical Services
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#222522] mt-1">
              Essential Dental Treatments
            </h2>
          </div>
          <button
            onClick={() => onNavigate('treatments')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#174A3A] hover:text-[#123B2E] group cursor-pointer"
          >
            <span>View All Treatment Protocols</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Minimal text-led grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {config.treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-[#FFFFFF] border border-[#E6E4DC] hover:border-[#174A3A]/40 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-colors shadow-2xs group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#F3F1EA] flex items-center justify-center text-[#174A3A]">
                  <TreatmentIcon type={treatment.iconType} className="w-5 h-5 text-[#174A3A]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif-editorial text-2xl font-semibold text-[#222522] group-hover:text-[#174A3A] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-sm text-[#4E5650] leading-relaxed">
                    {treatment.summary}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#F0EEE6] flex items-center justify-between text-xs">
                <span className="text-[#7A837C] font-mono tabular-nums">{treatment.duration}</span>
                <button
                  type="button"
                  onClick={() => onNavigate('treatments', treatment.id)}
                  className="inline-flex items-center gap-1 font-medium text-[#174A3A] hover:underline cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          E. MEET THE DENTIST
          ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] border border-[#E6E4DC] rounded-2xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Portrait Column */}
            <div className="lg:col-span-5">
              <DentistPortraitVisual 
                src={config.images?.dentist} 
                alt={`${config.dentist.name}, Principal Dental Surgeon`} 
              />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold">
                  Meet Your Clinician
                </span>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#222522] mt-1">
                  {config.dentist.name}
                </h2>
                <p className="text-sm font-medium text-[#174A3A] mt-1">
                  {config.dentist.title}
                </p>
                <div className="text-xs text-[#7A837C] mt-0.5 space-y-0.5">
                  <p>{config.dentist.credentials}</p>
                  <p>{config.dentist.experienceYears} · {config.dentist.gdcNumber}</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed">
                {config.dentist.bio}
              </p>

              <blockquote className="border-l-2 border-[#174A3A] pl-4 italic text-sm text-[#373E38] leading-relaxed">
                "{config.dentist.philosophy}"
              </blockquote>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 text-sm font-medium text-[#174A3A] bg-[#F8F7F2] border border-[#D9D6CB] hover:border-[#174A3A] rounded-lg transition-colors cursor-pointer text-center"
                >
                  Read Full Clinical Background
                </button>
                <button
                  onClick={() => onOpenBooking()}
                  className="px-5 py-2.5 text-sm font-medium text-[#F8F7F2] bg-[#174A3A] hover:bg-[#123B2E] rounded-lg transition-colors cursor-pointer text-center"
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          F. PATIENT REVIEWS (Sample content clearly marked)
          ======================================================== */}
      <section id="patient-reviews" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold">
            Patient Experiences
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#222522]">
            Care Grounded in Patience & Comfort
          </h2>
          <p className="text-xs text-[#7A837C]">
            * Demonstrative sample patient comments for template evaluation. Client practices configure real verified feedback upon deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {config.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#FFFFFF] border border-[#E6E4DC] p-6 sm:p-7 rounded-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-xs text-[#174A3A] font-medium block">
                  {review.treatment}
                </span>
                <p className="text-sm text-[#4E5650] leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EEE6] flex items-center justify-between text-xs text-[#7A837C]">
                <span className="font-medium text-[#222522]">{review.author}</span>
                <span className="italic">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          G. CLINIC EXPERIENCE & MODERN ENVIRONMENT
          ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold">
                Clinic Atmosphere
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#222522] mt-1 text-balance">
                An Environment Designed for Calm
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed">
              We know dental appointments can carry unnecessary tension. Aura Dental Studio is engineered from the ground up to feel warm, acoustic-dampened, and uncluttered. From our quiet waiting lounge with natural daylight to modern digital scanning replacing traditional impression pastes, your peace of mind is prioritized.
            </p>

            <ul className="space-y-3 text-sm text-[#3E4640]">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#174A3A] shrink-0 mt-0.5" />
                <span>Hospital-grade medical autoclaves and air filtration cycles</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#174A3A] shrink-0 mt-0.5" />
                <span>Zero impression putty — comfortable 3D optical scanning</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#174A3A] shrink-0 mt-0.5" />
                <span>Full wheelchair accessibility and private consultation rooms</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <ClinicLoungeVisual 
              src={config.images?.clinicLounge} 
              alt={`${config.name} waiting lounge`} 
            />
          </div>
        </div>
      </section>

      {/* ========================================================
          H. FREQUENTLY ASKED QUESTIONS (Accessible Accordion)
          ======================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold">
            Common Inquiries
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#222522]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#5E655F]">
            Transparent answers regarding visits, booking, and patient care.
          </p>
        </div>

        <div className="space-y-3">
          {config.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FFFFFF] border border-[#E6E4DC] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#174A3A]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-sm sm:text-base font-medium text-[#222522]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#174A3A] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#4E5650] leading-relaxed border-t border-[#F0EEE6]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          I. APPOINTMENT CTA
          ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#174A3A] text-[#F8F7F2] rounded-2xl p-8 sm:p-12 lg:p-16 text-center space-y-6">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFFFFF] text-balance">
              Experience Dental Care Grounded in Respect.
            </h2>
            <p className="text-sm sm:text-base text-[#D7E4DC] leading-relaxed">
              Whether you require a routine check-up, emergency tooth pain relief, or aesthetic alignment, our clinical team is ready to welcome you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium text-[#174A3A] bg-[#F8F7F2] hover:bg-[#FFFFFF] rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              Book an Appointment
            </button>
            <a
              href={`tel:${config.phoneRaw}`}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium text-[#FFFFFF] border border-[#FFFFFF]/30 hover:border-[#FFFFFF] rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Call Clinic {config.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
