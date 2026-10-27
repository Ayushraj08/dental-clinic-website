import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Sparkles, CheckCircle2, Calendar, Phone } from 'lucide-react';
import { ClinicConfig, TreatmentItem } from '../config/clinicConfig';
import { TreatmentIcon, TreatmentThumbnailVisual } from '../components/ClinicVisuals';

interface TreatmentsPageProps {
  config: ClinicConfig;
  selectedTreatmentId?: string;
  onOpenBooking: (treatmentId?: string) => void;
  onNavigate: (page: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  config,
  selectedTreatmentId,
  onOpenBooking,
  onNavigate,
}) => {
  const [activeId, setActiveId] = useState<string>(
    selectedTreatmentId || config.treatments[0]?.id || ''
  );

  useEffect(() => {
    if (selectedTreatmentId) {
      setActiveId(selectedTreatmentId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedTreatmentId]);

  const activeTreatment: TreatmentItem =
    config.treatments.find((t) => t.id === activeId) || config.treatments[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header Banner */}
      <div className="max-w-2xl space-y-3">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs text-[#5E655F] hover:text-[#174A3A] transition-colors mb-2 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
        <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold block">
          Comprehensive Care Protocols
        </span>
        <h1 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#222522]">
          Dental Treatments & Services
        </h1>
        <p className="text-base text-[#4E5650] leading-relaxed">
          From preventative hygiene visits to advanced biomimetic restorations and discreet clear aligners, every procedure is performed with modern diagnostics and gentle care.
        </p>
      </div>

      {/* Two-column layout: Treatment Selector Tabs on left, Comprehensive Detail on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Menu / Selector (4 cols on lg) */}
        <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#E6E4DC] rounded-xl p-3 sm:p-4 space-y-1 sticky lg:top-28">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7A837C] px-3 py-2 block">
            Select a Treatment
          </span>
          {config.treatments.map((treatment) => {
            const isSelected = treatment.id === activeTreatment.id;
            return (
              <button
                key={treatment.id}
                type="button"
                onClick={() => setActiveId(treatment.id)}
                className={`w-full p-3 text-left rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#174A3A] text-[#F8F7F2] shadow-xs'
                    : 'text-[#3E453F] hover:bg-[#F8F7F2] hover:text-[#174A3A]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-md ${isSelected ? 'bg-white/10 text-white' : 'bg-[#F2EFE8] text-[#174A3A]'}`}>
                    <TreatmentIcon type={treatment.iconType} className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-medium block">{treatment.title}</span>
                    <span className={`text-[11px] font-mono tabular-nums ${isSelected ? 'text-[#D7E4DC]' : 'text-[#7A837C]'}`}>
                      {treatment.duration}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}

          <div className="pt-4 mt-3 border-t border-[#F0EEE6] px-3 space-y-2">
            <span className="text-xs font-semibold text-[#222522] block">
              Not sure which treatment you need?
            </span>
            <p className="text-xs text-[#5E655F]">
              Book an initial comprehensive assessment with Dr. Vance to examine your dental health.
            </p>
            <button
              onClick={() => onOpenBooking('general-dentistry')}
              className="w-full mt-2 py-2 text-xs font-medium text-[#174A3A] border border-[#174A3A] hover:bg-[#174A3A]/5 rounded-md transition-colors cursor-pointer"
            >
              Book General Consultation
            </button>
          </div>
        </div>

        {/* Right Content / Active Treatment Detail (8 cols on lg) */}
        <div className="lg:col-span-8 bg-[#FFFFFF] border border-[#E6E4DC] rounded-xl p-6 sm:p-10 space-y-8">
          
          {/* Header with image */}
          <div className="space-y-4 pb-6 border-b border-[#F0EEE6]">
            {activeTreatment.image && (
              <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-[#E6E2D8]">
                <TreatmentThumbnailVisual
                  src={activeTreatment.image}
                  alt={activeTreatment.title}
                  className="w-full h-full"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#174A3A] font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Clinical Treatment Profile</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#5E655F] font-mono bg-[#F8F7F2] px-3 py-1 rounded-md border border-[#E6E4DC]">
                <Clock className="w-3.5 h-3.5 text-[#174A3A]" />
                <span className="tabular-nums">Typical Duration: {activeTreatment.duration}</span>
              </div>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#222522]">
              {activeTreatment.title}
            </h2>

            <p className="text-base text-[#4E5650] leading-relaxed">
              {activeTreatment.detailedDescription}
            </p>
          </div>

          {/* Key Clinical Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F8F7F2] border border-[#E6E4DC] p-5 rounded-lg space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#174A3A]">
                Who It Is Ideal For
              </h3>
              <p className="text-sm text-[#4E5650] leading-relaxed">
                {activeTreatment.idealFor}
              </p>
            </div>

            <div className="bg-[#F8F7F2] border border-[#E6E4DC] p-5 rounded-lg space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#174A3A]">
                Pre-Visit Guidelines
              </h3>
              <p className="text-sm text-[#4E5650] leading-relaxed">
                {activeTreatment.preparation}
              </p>
            </div>
          </div>

          {/* Key Advantages / Benefits */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold">
              Clinical Quality & Patient Comfort Standards
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {activeTreatment.keyBenefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#3E453F]">
                  <CheckCircle2 className="w-4 h-4 text-[#174A3A] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing transparency notice */}
          <div className="p-4 bg-[#F5F3EC] border border-[#E6E4DC] rounded-lg text-xs text-[#5E655F] space-y-1">
            <span className="font-semibold text-[#222522]">Transparent Fee Policy:</span>
            <p className="leading-relaxed">
              Every mouth has unique anatomy. We never publish fictional flat fees or hidden surcharges. Following your diagnostic examination, you receive a written, itemized treatment estimate before proceeding with any clinical work.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[#F0EEE6] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => onOpenBooking(activeTreatment.id)}
              className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-[#F8F7F2] bg-[#174A3A] hover:bg-[#123B2E] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment for {activeTreatment.title}</span>
            </button>

            <a
              href={`tel:${config.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-xs text-[#174A3A] hover:underline font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Questions? Call {config.phone}</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
