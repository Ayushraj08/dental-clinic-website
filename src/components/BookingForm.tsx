import React, { useState } from 'react';
import { Phone, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { ClinicConfig } from '../config/clinicConfig';

interface BookingFormProps {
  config: ClinicConfig;
  defaultTreatmentId?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  treatmentId: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  treatmentId?: string;
  preferredDate?: string;
  preferredTime?: string;
  consent?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  config,
  defaultTreatmentId,
  onSuccess,
  isModal = false,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    treatmentId: defaultTreatmentId || config.treatments[0]?.id || '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 – 12:00)',
    notes: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const todayStr = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    const phoneClean = formData.phone.replace(/[\s()-]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for booking confirmation';
    } else if (!/^\+?[0-9]{7,15}$/.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid phone number (e.g. +44 7946 019200)';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.treatmentId) {
      newErrors.treatmentId = 'Please select a treatment';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time slot';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm consent to be contacted regarding this enquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
      if (onSuccess) onSuccess();
    }, 750);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      treatmentId: config.treatments[0]?.id || '',
      preferredDate: '',
      preferredTime: 'Morning (09:00 – 12:00)',
      notes: '',
      consent: false,
    });
    setErrors({});
  };

  const timeOptions = [
    'Morning (09:00 – 12:00)',
    'Early Afternoon (12:00 – 15:00)',
    'Late Afternoon (15:00 – 18:00)',
    'Flexible / Any Available Slot',
  ];

  if (isSubmitted && submittedData) {
    const selectedTreatment = config.treatments.find((t) => t.id === submittedData.treatmentId);

    return (
      <div className="bg-[#FFFFFF] border border-[#E6E4DC] p-6 sm:p-8 rounded-xl text-center space-y-5">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#E8EFEA] flex items-center justify-center text-[#174A3A]">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif-editorial text-2xl font-semibold text-[#174A3A]">
            Enquiry Received
          </h3>
          <p className="text-sm text-[#4A524B] max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-[#222522]">{submittedData.fullName}</strong>. Your appointment request for <strong className="text-[#222522]">{selectedTreatment?.title || 'Dental Treatment'}</strong> has been registered.
          </p>
        </div>

        <div className="bg-[#F8F7F2] border border-[#E6E4DC] p-4 rounded-lg text-left text-xs text-[#4A524B] space-y-1.5 max-w-md mx-auto">
          <div className="flex justify-between">
            <span className="text-[#7A837C]">Phone Contact:</span>
            <span className="font-medium text-[#222522] font-mono tabular-nums">{submittedData.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#7A837C]">Requested Date:</span>
            <span className="font-medium text-[#222522]">{submittedData.preferredDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#7A837C]">Preferred Time:</span>
            <span className="font-medium text-[#222522]">{submittedData.preferredTime}</span>
          </div>
        </div>

        <div className="p-3 bg-[#E8EFEA] text-[#174A3A] text-xs rounded-md max-w-md mx-auto">
          <p className="font-medium">
            Next Step: Our clinical reception desk will call you directly within 2 business hours to confirm slot availability and discuss any medical questions.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-[#174A3A] border border-[#174A3A] hover:bg-[#174A3A]/5 rounded-lg transition-colors cursor-pointer"
          >
            Submit Another Request
          </button>
          <a
            href={`tel:${config.phoneRaw}`}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-[#F8F7F2] bg-[#174A3A] hover:bg-[#123B2E] rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Reception Now</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="p-3 bg-[#F4F2EA] border border-[#E6E4DC] rounded-lg flex items-start gap-2.5 text-xs text-[#525953]">
        <AlertCircle className="w-4 h-4 text-[#174A3A] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {config.bookingDisclaimer}
        </p>
      </div>

      <div>
        <label htmlFor="fullName" className="block text-xs font-semibold text-[#222522] mb-1">
          Full Name <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="e.g. Jane Henderson"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          className={`w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#174A3A] transition-colors ${
            errors.fullName ? 'border-red-600 bg-red-50/20' : 'border-[#D9D6CB] hover:border-[#174A3A]/60'
          }`}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-xs text-red-700">
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-[#222522] mb-1">
            Phone Number <span className="text-red-700">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +44 7946 019200"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#174A3A] transition-colors ${
              errors.phone ? 'border-red-600 bg-red-50/20' : 'border-[#D9D6CB] hover:border-[#174A3A]/60'
            }`}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-700">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#222522] mb-1">
            Email Address <span className="text-[#7A837C] font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. jane@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#174A3A] transition-colors ${
              errors.email ? 'border-red-600 bg-red-50/20' : 'border-[#D9D6CB] hover:border-[#174A3A]/60'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-700">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="treatmentId" className="block text-xs font-semibold text-[#222522] mb-1">
          Preferred Treatment / Service <span className="text-red-700">*</span>
        </label>
        <select
          id="treatmentId"
          name="treatmentId"
          value={formData.treatmentId}
          onChange={(e) => setFormData({ ...formData, treatmentId: e.target.value })}
          className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#D9D6CB] hover:border-[#174A3A]/60 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#174A3A] transition-colors"
        >
          {config.treatments.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title} ({t.duration})
            </option>
          ))}
          <option value="other-consultation">Other / Comprehensive Consultation</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#222522] mb-1">
            Preferred Date <span className="text-red-700">*</span>
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            min={todayStr}
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            aria-invalid={!!errors.preferredDate}
            aria-describedby={errors.preferredDate ? 'preferredDate-error' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#174A3A] transition-colors ${
              errors.preferredDate ? 'border-red-600 bg-red-50/20' : 'border-[#D9D6CB] hover:border-[#174A3A]/60'
            }`}
          />
          {errors.preferredDate && (
            <p id="preferredDate-error" className="mt-1 text-xs text-red-700">
              {errors.preferredDate}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#222522] mb-1">
            Preferred Time Slot <span className="text-red-700">*</span>
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#D9D6CB] hover:border-[#174A3A]/60 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#174A3A] transition-colors"
          >
            {timeOptions.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-xs font-semibold text-[#222522] mb-1">
          Specific Concerns or Dental History <span className="text-[#7A837C] font-normal">(Optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={isModal ? 2 : 3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="e.g. History of dental anxiety, sensitivity in upper molars, or date flexibility..."
          className="w-full px-3.5 py-2 text-sm bg-[#FFFFFF] border border-[#D9D6CB] hover:border-[#174A3A]/60 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#174A3A] transition-colors"
        />
      </div>

      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-0.5 w-4 h-4 rounded text-[#174A3A] focus:ring-[#174A3A] border-[#C5C0B3]"
          />
          <span className="text-xs text-[#525953] leading-relaxed">
            I agree that {config.name} may contact me by phone or email regarding this enquiry. Patient health details are kept strictly confidential.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-700">{errors.consent}</p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-5 text-sm font-medium text-[#F8F7F2] bg-[#174A3A] hover:bg-[#123B2E] disabled:bg-[#72857D] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Enquiry...</span>
            </>
          ) : (
            <span>Submit Appointment Enquiry</span>
          )}
        </button>
      </div>

      <div className="pt-3 border-t border-[#E6E4DC] flex flex-wrap items-center justify-between gap-3 text-xs text-[#525953]">
        <span>Need immediate assistance?</span>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${config.phoneRaw}`}
            className="inline-flex items-center gap-1 text-[#174A3A] font-medium hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{config.phone}</span>
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#174A3A] font-medium hover:underline"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </form>
  );
};
