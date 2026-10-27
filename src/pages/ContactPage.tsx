import React from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, AlertCircle } from 'lucide-react';
import { ClinicConfig } from '../config/clinicConfig';
import { BookingForm } from '../components/BookingForm';

interface ContactPageProps {
  config: ClinicConfig;
  defaultTreatmentId?: string;
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  config,
  defaultTreatmentId,
  onNavigate,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-2xl space-y-3">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs text-[#5E655F] hover:text-[#174A3A] transition-colors mb-2 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
        <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold block">
          Get in Touch
        </span>
        <h1 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#222522]">
          Contact & Book an Appointment
        </h1>
        <p className="text-base text-[#4E5650] leading-relaxed">
          Submit your appointment enquiry below or connect directly with our clinical reception team by telephone or WhatsApp.
        </p>
      </div>

      {/* Grid: Clinic Details & Maps on Left (5 cols) | Form on Right (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Main Contact Card */}
          <div className="bg-[#FFFFFF] border border-[#E6E4DC] rounded-xl p-6 sm:p-7 space-y-6">
            <h2 className="font-serif-editorial text-2xl font-semibold text-[#222522]">
              Clinic Location & Reception
            </h2>

            <div className="space-y-4 text-sm text-[#4E5650]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#174A3A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#222522]">{config.name}</p>
                  <p>{config.address.line1}, {config.address.area}</p>
                  <p>{config.address.city} {config.address.postcode}</p>
                  <a
                    href={config.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#174A3A] hover:underline pt-1 font-medium"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#F0EEE6]">
                <Phone className="w-5 h-5 text-[#174A3A] shrink-0" />
                <div>
                  <span className="text-xs text-[#7A837C] block">Telephone</span>
                  <a
                    href={`tel:${config.phoneRaw}`}
                    className="font-medium text-[#222522] hover:text-[#174A3A] transition-colors"
                  >
                    {config.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#F0EEE6]">
                <MessageSquare className="w-5 h-5 text-[#174A3A] shrink-0" />
                <div>
                  <span className="text-xs text-[#7A837C] block">WhatsApp Enquiries</span>
                  <a
                    href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#174A3A] hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#F0EEE6]">
                <Mail className="w-5 h-5 text-[#174A3A] shrink-0" />
                <div>
                  <span className="text-xs text-[#7A837C] block">Email</span>
                  <a
                    href={`mailto:${config.email}`}
                    className="font-medium text-[#222522] hover:text-[#174A3A] transition-colors"
                  >
                    {config.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="pt-4 border-t border-[#E6E4DC] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#174A3A]">
                <Clock className="w-4 h-4" />
                <span>Practice Hours</span>
              </div>
              <div className="space-y-1.5 text-xs text-[#4E5650]">
                {config.openingHours.map((slot, index) => (
                  <div key={index} className="flex justify-between gap-4 py-1 border-b border-[#F5F3EC] last:border-b-0">
                    <span className="font-medium">{slot.days}</span>
                    <span className="font-mono tabular-nums text-[#222522]">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency Triage Notice */}
          <div className="bg-[#FFFFFF] border border-[#E6E4DC] rounded-xl p-5 space-y-2 text-xs text-[#4E5650]">
            <div className="flex items-center gap-2 text-[#174A3A] font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>Dental Emergency Protocols</span>
            </div>
            <p className="leading-relaxed">
              {config.emergencyNotice}
            </p>
          </div>

        </div>

        {/* Appointment Enquiry Form Column */}
        <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E6E4DC] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold">
              Online Booking
            </span>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-[#222522] mt-1">
              Request Your Appointment
            </h2>
            <p className="text-xs sm:text-sm text-[#5E655F] mt-1">
              Complete your preferred details. Our clinical team will reach out within two business hours to confirm your scheduled time.
            </p>
          </div>

          <BookingForm
            config={config}
            defaultTreatmentId={defaultTreatmentId}
            onSuccess={() => {}}
          />
        </div>

      </div>

    </div>
  );
};
