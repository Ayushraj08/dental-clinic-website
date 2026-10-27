import React, { useState } from 'react';

interface VisualProps {
  src?: string;
  className?: string;
  alt?: string;
}

/**
 * Hero Dental Suite Visual
 * Displays authentic photography with smooth fade-in and a resilient fallback.
 */
export const HeroDentalVisual: React.FC<VisualProps> = ({
  src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
  className = '',
  alt = 'Aura Dental Studio modern treatment suite',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`relative w-full aspect-video sm:aspect-16/10 lg:aspect-16/9 bg-[#EFECE3] rounded-xl overflow-hidden border border-[#E4E1D7] flex items-center justify-center shadow-xs select-none ${className}`}
      role="img"
      aria-label={alt}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#EFECE3] animate-pulse flex items-center justify-center text-xs text-[#8A928B]">
          <span>Loading suite...</span>
        </div>
      )}

      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          loading="eager"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#EAE6DA] p-6 text-center text-[#174A3A]">
          <span className="font-serif-editorial text-xl font-semibold">{alt}</span>
          <span className="text-xs text-[#5E655F] mt-1">Aura Private Operatory Suite</span>
        </div>
      )}
    </div>
  );
};

/**
 * Professional Dentist Portrait Visual
 */
export const DentistPortraitVisual: React.FC<VisualProps> = ({
  src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
  className = '',
  alt = 'Dr. Eleanor Vance, Principal Dental Surgeon',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`relative w-full aspect-3/4 bg-[#EFECE3] rounded-xl overflow-hidden border border-[#E4E0D5] flex items-center justify-center shadow-xs select-none ${className}`}
      role="img"
      aria-label={alt}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#EFECE3] animate-pulse flex items-center justify-center text-xs text-[#8A928B]">
          <span>Loading portrait...</span>
        </div>
      )}

      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#ECE7DB] p-6 text-center text-[#174A3A]">
          <span className="font-serif-editorial text-xl font-semibold">{alt}</span>
          <span className="text-xs text-[#5E655F] mt-1">BDS (Hons) · MSc Restorative Dentistry</span>
        </div>
      )}
    </div>
  );
};

/**
 * Serene Clinic Lounge & Atmosphere Visual
 */
export const ClinicLoungeVisual: React.FC<VisualProps> = ({
  src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80',
  className = '',
  alt = 'Aura Dental Studio patient reception and relaxation lounge',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`relative w-full aspect-video sm:aspect-16/10 lg:aspect-16/9 bg-[#F4F2EC] rounded-xl overflow-hidden border border-[#E5E2D9] flex items-center justify-center shadow-xs select-none ${className}`}
      role="img"
      aria-label={alt}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#F4F2EC] animate-pulse flex items-center justify-center text-xs text-[#8A928B]">
          <span>Loading lounge...</span>
        </div>
      )}

      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#EAE5D9] p-6 text-center text-[#174A3A]">
          <span className="font-serif-editorial text-lg font-semibold">{alt}</span>
          <span className="text-xs text-[#5E655F] mt-1">Air-Filtered Relaxation Suite</span>
        </div>
      )}
    </div>
  );
};

/**
 * Treatment Item Thumbnail Visual
 */
export const TreatmentThumbnailVisual: React.FC<{
  src?: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = 'w-full aspect-16/9 rounded-lg overflow-hidden' }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src || hasError) {
    return null;
  }

  return (
    <div className={`relative bg-[#F4F1EA] border border-[#E6E2D8] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#F4F1EA] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

/**
 * Clean, restrained treatment vector icon
 */
export const TreatmentIcon: React.FC<{ type: string; className?: string }> = ({
  type,
  className = 'w-5 h-5 text-[#174A3A]',
}) => {
  switch (type) {
    case 'general':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2C8.5 2 5 4.5 5 8.5C5 12 7 15 8 19C8.7 21.5 10 22 12 22C14 22 15.3 21.5 16 19C17 15 19 12 19 8.5C19 4.5 15.5 2 12 2Z" />
          <path d="M12 6V11" />
          <path d="M9.5 8.5H14.5" />
        </svg>
      );
    case 'cleaning':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2.5L13.5 6.5L17.5 8L13.5 9.5L12 13.5L10.5 9.5L6.5 8L10.5 6.5L12 2.5Z" />
          <path d="M18 14L18.8 16.2L21 17L18.8 17.8L18 20L17.2 17.8L15 17L17.2 16.2L18 14Z" />
          <path d="M6 15L6.6 16.9L8.5 17.5L6.6 18.1L6 20L5.4 18.1L3.5 17.5L5.4 16.9L6 15Z" />
        </svg>
      );
    case 'root-canal':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M7 4C7 2.9 7.9 2 9 2H15C16.1 2 17 2.9 17 4V8C17 12 18.5 15 19 19C19.3 21 17.8 22 16.5 22C15.2 22 14.5 20.5 14 18C13.5 15 13 13 12 13C11 13 10.5 15 10 18C9.5 20.5 8.8 22 7.5 22C6.2 22 4.7 21 5 19C5.5 15 7 12 7 8V4Z" />
          <path d="M12 2V10" />
        </svg>
      );
    case 'implants':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 2H16V7C16 8.5 14.5 10 12 10C9.5 10 8 8.5 8 7V2Z" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9.5" y1="15" x2="14.5" y2="15" />
          <line x1="10" y1="18" x2="14" y2="18" />
          <path d="M12 10V22" />
        </svg>
      );
    case 'ortho':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M3 14C6 8 18 8 21 14" />
          <rect x="5" y="10" width="3" height="3" rx="0.5" />
          <rect x="10.5" y="8" width="3" height="3" rx="0.5" />
          <rect x="16" y="10" width="3" height="3" rx="0.5" />
          <path d="M4 17C7.5 14 16.5 14 20 17" strokeDasharray="2 2" />
        </svg>
      );
    case 'cosmetic':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
          <path d="M7 14C8.5 16.5 11 17.5 12 17.5C13 17.5 15.5 16.5 17 14" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
      );
  }
};
