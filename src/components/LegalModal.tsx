import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { ClinicConfig } from '../config/clinicConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
  config: ClinicConfig;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, config }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && type) {
        onClose();
      }
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#222522]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#F8F7F2] rounded-xl border border-[#D9D6CB] p-6 sm:p-8 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#5E655F] hover:text-[#222522] rounded-md transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-[#174A3A]">
          {type === 'privacy' ? <ShieldCheck className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
          <span className="text-xs font-semibold uppercase tracking-wider">{config.name} Standards</span>
        </div>

        <h2 id="legal-modal-title" className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-[#222522]">
          {type === 'privacy' ? 'Patient Privacy & Confidentiality Policy' : 'Practice Standards & Appointment Terms'}
        </h2>

        <div className="prose prose-sm text-[#464D47] text-xs sm:text-sm leading-relaxed space-y-3 pt-2 border-t border-[#E6E4DC]">
          {type === 'privacy' ? (
            <>
              <p>
                At {config.name}, patient privacy is foundational to the doctor-patient relationship. All clinical notes, dental radiographs, medical history records, and communication logs are stored securely in compliance with General Data Protection Regulation (GDPR) and General Dental Council (GDC) ethical principles.
              </p>
              <h4 className="font-semibold text-[#222522] text-sm pt-2">1. Information We Collect</h4>
              <p>
                When you enquire about an appointment or register as a patient, we gather contact details (name, telephone number, email), relevant medical background, current medications, and past dental treatments to ensure your safe clinical management.
              </p>
              <h4 className="font-semibold text-[#222522] text-sm pt-2">2. Confidentiality & Third Parties</h4>
              <p>
                We never sell, rent, or trade patient personal data. Information is shared strictly with accredited specialist dental laboratories (e.g. for custom crown milling or aligner manufacturing) under strict data processing agreements.
              </p>
              <h4 className="font-semibold text-[#222522] text-sm pt-2">3. Website Template Demonstration Mode</h4>
              <p className="italic text-[#6B726C]">
                Note: This website is an agency-grade dental template. When connected to a clinical backend, form data is encrypted in transit and at rest.
              </p>
            </>
          ) : (
            <>
              <p>
                These terms govern your clinical care and appointments at {config.name}. We strive to provide punctual, unhurried treatment in a calm, modern environment.
              </p>
              <h4 className="font-semibold text-[#222522] text-sm pt-2">1. Appointment Scheduling & Cancellations</h4>
              <p>
                Because we schedule generous one-on-one clinician time with zero double-booking, we kindly ask for at least 24 hours advance notice if you need to reschedule an appointment. This enables our clinical reception team to assist patients who require emergency triage.
              </p>
              <h4 className="font-semibold text-[#222522] text-sm pt-2">2. Transparent Treatment Estimates</h4>
              <p>
                Following your clinical evaluation, you will receive a detailed written estimate outlining all available options, steps, and associated costs before proceeding with any restorative or aesthetic treatment.
              </p>
              <h4 className="font-semibold text-[#222522] text-sm pt-2">3. Emergency Care Protocols</h4>
              <p>
                We reserve daily emergency slots for registered and unregistered patients experiencing severe toothache, acute swelling, or dental trauma. Contact our clinical line on {config.phone} for guidance.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-[#E6E4DC] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-[#F8F7F2] bg-[#174A3A] hover:bg-[#123B2E] rounded-lg transition-colors cursor-pointer"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
};
