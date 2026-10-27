import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { ClinicConfig } from '../config/clinicConfig';

interface FooterProps {
  config: ClinicConfig;
  onNavigate: (page: string, treatmentId?: string) => void;
  onOpenBooking: (treatmentId?: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onNavigate,
  onOpenBooking,
  onOpenLegal,
}) => {
  return (
    <footer className="bg-[#174A3A] text-[#F8F7F2] pt-16 pb-12 border-t border-[#123B2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#256350]">
          
          {/* Brand & Purpose (col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-serif-editorial text-2xl font-semibold tracking-tight text-[#FFFFFF]">
              {config.name}
            </h2>
            <p className="text-sm text-[#D7E4DC] leading-relaxed max-w-sm">
              {config.tagline}
            </p>
            <div className="pt-2 text-xs text-[#A8C4B5] space-y-1">
              <p>{config.accreditationBadge}</p>
              <p>{config.dentist.gdcNumber}</p>
            </div>
          </div>

          {/* Quick Treatment Navigation (col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-[#A8C4B5] font-semibold">
              Treatments
            </h3>
            <ul className="space-y-2 text-sm">
              {config.treatments.map((treatment) => (
                <li key={treatment.id}>
                  <button
                    onClick={() => onNavigate('treatments', treatment.id)}
                    className="text-[#E6EFEA] hover:text-[#FFFFFF] transition-colors text-left hover:underline underline-offset-4 decoration-[#76A892]"
                  >
                    {treatment.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Contact & Opening (col 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-[#A8C4B5] font-semibold">
              Clinic Contact & Hours
            </h3>
            
            <div className="space-y-2.5 text-sm text-[#E6EFEA]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A8C4B5] shrink-0 mt-0.5" />
                <div>
                  <p>{config.address.line1}, {config.address.area}</p>
                  <p>{config.address.city} {config.address.postcode}</p>
                  <a
                    href={config.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#C5DDD0] hover:text-[#FFFFFF] pt-0.5 hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A8C4B5] shrink-0" />
                <a
                  href={`tel:${config.phoneRaw}`}
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  {config.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A8C4B5] shrink-0" />
                <a
                  href={`mailto:${config.email}`}
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  {config.email}
                </a>
              </div>
            </div>

            {/* Opening Hours list */}
            <div className="pt-2 border-t border-[#256350] space-y-1.5 text-xs text-[#D7E4DC]">
              <div className="flex items-center gap-1.5 text-[#A8C4B5] font-medium pb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Practice Hours</span>
              </div>
              {config.openingHours.map((slot, index) => (
                <div key={index} className="flex justify-between gap-4">
                  <span>{slot.days}</span>
                  <span className="font-mono tabular-nums">{slot.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8C4B5]">
          <p>© {new Date().getFullYear()} {config.name}. All rights reserved. Professional Dental Clinic Website Template.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#FFFFFF] transition-colors underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#FFFFFF] transition-colors underline-offset-2 hover:underline"
            >
              Practice Standards & Terms
            </button>
            <button
              onClick={() => onOpenBooking()}
              className="text-[#FFFFFF] font-medium hover:underline"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
