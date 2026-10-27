import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ClinicConfig } from '../config/clinicConfig';
import { BookingForm } from './BookingForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ClinicConfig;
  defaultTreatmentId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  config,
  defaultTreatmentId,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#222522]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#F8F7F2] rounded-xl border border-[#D9D6CB] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#5E655F] hover:text-[#222522] rounded-md transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <p className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold mb-1">
            {config.name}
          </p>
          <h2 id="booking-modal-title" className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-[#222522]">
            Book an Appointment Enquiry
          </h2>
          <p className="text-xs sm:text-sm text-[#5E655F] mt-1.5">
            Select your preferred treatment and date. Our reception team will reach out to confirm your slot.
          </p>
        </div>

        {/* Booking Form */}
        <BookingForm
          config={config}
          defaultTreatmentId={defaultTreatmentId}
          isModal={true}
          onSuccess={() => {}}
        />
      </div>
    </div>
  );
};
