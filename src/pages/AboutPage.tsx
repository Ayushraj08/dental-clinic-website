import React from 'react';
import { ArrowLeft, Award, CheckCircle, Shield, Sparkles } from 'lucide-react';
import { ClinicConfig } from '../config/clinicConfig';
import { DentistPortraitVisual, ClinicLoungeVisual } from '../components/ClinicVisuals';

interface AboutPageProps {
  config: ClinicConfig;
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ config, onOpenBooking, onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      
      {/* Page Header */}
      <div className="max-w-2xl space-y-3">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs text-[#5E655F] hover:text-[#174A3A] transition-colors mb-2 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
        <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold block">
          About the Clinician & Practice
        </span>
        <h1 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#222522]">
          Gentle Dentistry, Rooted in Precision
        </h1>
        <p className="text-base text-[#4E5650] leading-relaxed">
          Founded on the conviction that patient trust and comfort are as vital as clinical excellence. Learn about our philosophy, credentials, and practice standards.
        </p>
      </div>

      {/* Meet the Principal Clinician */}
      <section className="bg-[#FFFFFF] border border-[#E6E4DC] rounded-2xl p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-5">
            <DentistPortraitVisual
              src={config.images?.dentist}
              alt={`${config.dentist.name}, Principal Dental Surgeon`}
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold">
                Principal Dental Surgeon
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#222522] mt-1">
                {config.dentist.name}
              </h2>
              <p className="text-sm font-medium text-[#174A3A] mt-1">
                {config.dentist.title}
              </p>
              <div className="text-xs text-[#7A837C] mt-1 space-y-0.5">
                <p>{config.dentist.credentials}</p>
                <p>{config.dentist.experienceYears} · {config.dentist.gdcNumber}</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed">
              {config.dentist.bio}
            </p>

            {/* Specialisations */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs uppercase tracking-wider text-[#222522] font-semibold">
                Clinical Specialisations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {config.dentist.specialisations.map((spec, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-[#4A524B]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#174A3A] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Memberships */}
            <div className="space-y-2 pt-2 border-t border-[#F0EEE6]">
              <h3 className="text-xs uppercase tracking-wider text-[#222522] font-semibold">
                Professional Accreditations & Memberships
              </h3>
              <ul className="space-y-1.5 text-xs text-[#5E655F]">
                {config.dentist.memberships.map((membership, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#174A3A] shrink-0" />
                    <span>{membership}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 text-sm font-medium text-[#F8F7F2] bg-[#174A3A] hover:bg-[#123B2E] rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Schedule Consultation with {config.dentist.name}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Clinical Ethos / Why Unhurried Care Matters */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold">
            Our Foundation
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#222522]">
            Why We Believe in Unhurried Dentistry
          </h2>
          <p className="text-sm text-[#4E5650] leading-relaxed">
            In many modern dental settings, clinicians are forced into rigid 15-minute appointment slots. We deliberately rejected this model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-[#FFFFFF] border border-[#E6E4DC] p-6 rounded-xl space-y-3">
            <span className="text-xs font-mono font-medium text-[#174A3A]">01. Active Listening</span>
            <h3 className="text-base font-semibold text-[#222522]">No Assumptions</h3>
            <p className="text-xs sm:text-sm text-[#4E5650] leading-relaxed">
              We never touch a dental instrument until we understand your dental history, what causes you anxiety, and what outcomes you hope to achieve.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E6E4DC] p-6 rounded-xl space-y-3">
            <span className="text-xs font-mono font-medium text-[#174A3A]">02. Biomimetic Preservation</span>
            <h3 className="text-base font-semibold text-[#222522]">Saving Natural Enamel</h3>
            <p className="text-xs sm:text-sm text-[#4E5650] leading-relaxed">
              We practice conservative, tissue-preserving dentistry. Restoring teeth using biocompatible materials that emulate natural tooth flex and optical translucency.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E6E4DC] p-6 rounded-xl space-y-3">
            <span className="text-xs font-mono font-medium text-[#174A3A]">03. Patient Autonomy</span>
            <h3 className="text-base font-semibold text-[#222522]">Co-Designed Plans</h3>
            <p className="text-xs sm:text-sm text-[#4E5650] leading-relaxed">
              You are presented with multiple evidence-based options, complete risks, and exact timelines. You make the final decision with zero sales pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Facility & Infection Control */}
      <section className="bg-[#FFFFFF] border border-[#E6E4DC] rounded-2xl p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <ClinicLoungeVisual
              src={config.images?.clinicLounge}
              alt={`${config.name} reception lounge and sterilization suite`}
            />
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold">
              Clinical Hygiene Standards
            </span>
            <h2 className="font-serif-editorial text-3xl font-normal text-[#222522]">
              Hospital-Grade Infection Control & Digital Technology
            </h2>
            <p className="text-sm text-[#4E5650] leading-relaxed">
              Our clinic operates with dedicated decontamination suites complying with HTM 01-05 best practice standards. We invest continuously in modern equipment that eliminates discomfort:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3E453F]">
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#174A3A] shrink-0 mt-0.5" />
                <span>Class-B vacuum autoclaves with digital cycle logging for every surgical pack</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#174A3A] shrink-0 mt-0.5" />
                <span>Ultra-quiet electric dental handpieces reducing mechanical vibration and noise</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#174A3A] shrink-0 mt-0.5" />
                <span>HEPA air purification cycles exchanging treatment room air after every patient</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};
