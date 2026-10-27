import React from 'react';
import { X, RotateCcw, Check, Sparkles, Image as ImageIcon, Camera, Palette } from 'lucide-react';
import { ClinicConfig, defaultClinicConfig } from '../config/clinicConfig';

interface ClinicCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  config: ClinicConfig;
  onUpdateConfig: (newConfig: ClinicConfig) => void;
}

export const ClinicCustomizer: React.FC<ClinicCustomizerProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
}) => {
  if (!isOpen) return null;

  const handleImageModeSelect = (mode: 'photo' | 'illustration') => {
    if (mode === 'photo') {
      onUpdateConfig({
        ...config,
        images: {
          hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80",
          dentist: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
          clinicLounge: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
        },
        treatments: config.treatments.map((t) => {
          let img = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80";
          if (t.id === 'teeth-cleaning') img = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80";
          if (t.id === 'root-canal') img = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80";
          if (t.id === 'dental-implants') img = "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80";
          if (t.id === 'orthodontics') img = "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80";
          if (t.id === 'cosmetic-dentistry') img = "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80";
          return { ...t, image: img };
        }),
      });
    } else {
      onUpdateConfig({
        ...config,
        images: {
          hero: "/images/hero-clinic.svg",
          dentist: "/images/dentist-portrait.svg",
          clinicLounge: "/images/clinic-lounge.svg",
        },
        treatments: config.treatments.map((t) => ({
          ...t,
          image: `/images/treatment-${t.iconType}.svg`,
        })),
      });
    }
  };

  const handlePresetSelect = (presetKey: 'aura' | 'verdant' | 'sovereign') => {
    if (presetKey === 'aura') {
      onUpdateConfig(defaultClinicConfig);
    } else if (presetKey === 'verdant') {
      onUpdateConfig({
        ...defaultClinicConfig,
        name: "Verdant Family Dental",
        tagline: "Modern, preventive dental care for children, teens, and adults in a serene atmosphere.",
        accreditationBadge: "British Dental Association Good Practice · Verified Quality Standard",
        images: {
          hero: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80",
          dentist: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
          clinicLounge: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80",
        },
        phone: "+44 (0)131 496 0244",
        phoneRaw: "+441314960244",
        email: "hello@verdantdental.scot",
        whatsapp: "+447911024400",
        address: {
          line1: "82 George Street",
          area: "New Town",
          city: "Edinburgh",
          postcode: "EH2 3BU",
          country: "United Kingdom",
        },
        dentist: {
          ...defaultClinicConfig.dentist,
          name: "Dr. Alistair MacIntyre",
          title: "Lead Clinician & Family Dentistry Specialist",
          credentials: "BDS (Dundee), MFGDP(UK), Dip Restorative Dentistry",
          experienceYears: "17 Years Clinical Practice",
          gdcNumber: "GDC Registration: 184520 [Editable Sample]",
          bio: "Dr. Alistair MacIntyre brings seventeen years of dedicated gentle clinical care to Edinburgh families. His philosophy centers around preventative longevity, patient comfort, and early habit coaching for young smiles.",
        }
      });
    } else if (presetKey === 'sovereign') {
      onUpdateConfig({
        ...defaultClinicConfig,
        name: "Sovereign Dental & Implants",
        tagline: "Advanced implantology and bespoke restorative aesthetics delivered with quiet precision.",
        accreditationBadge: "Fellowship of Dental Surgery (RCS) · Digital Smile Design Certified",
        images: {
          hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80",
          dentist: "https://images.unsplash.com/photo-1594824813596-f308a067ff2c?auto=format&fit=crop&w=900&q=80",
          clinicLounge: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
        },
        phone: "+44 (0)117 496 0881",
        phoneRaw: "+441174960881",
        email: "consultations@sovereigndental.co.uk",
        whatsapp: "+447911088100",
        address: {
          line1: "26 The Mall, Clifton",
          area: "Clifton Village",
          city: "Bristol",
          postcode: "BS8 4DS",
          country: "United Kingdom",
        },
        dentist: {
          ...defaultClinicConfig.dentist,
          name: "Dr. Sophia Sterling",
          title: "Specialist Prosthodontist & Implantologist",
          credentials: "BDS (Bristol), MClinDent Prosthodontics, FDS RCS (Eng)",
          experienceYears: "16 Years Clinical Practice",
          gdcNumber: "GDC Registration: 219043 [Editable Sample]",
          bio: "Dr. Sophia Sterling specializes in complex full-mouth rehabilitation, dental implants, and porcelain aesthetics. Known for meticulous diagnostic precision and calming chairside bedside manner.",
        }
      });
    }
  };

  const isPhotoActive = config.images?.hero?.startsWith('http');

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#222522]/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md h-full bg-[#F8F7F2] border-l border-[#D9D6CB] p-6 sm:p-7 overflow-y-auto shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#E6E4DC]">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#174A3A] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Template Customiser
              </span>
              <h3 className="font-serif-editorial text-2xl font-semibold text-[#222522]">
                Customise Clinic Profile
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#5E655F] hover:text-[#222522] rounded-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Image Mode Switcher */}
          <div className="space-y-2 bg-[#FFFFFF] border border-[#E6E4DC] p-3.5 rounded-xl">
            <span className="text-xs font-semibold text-[#222522] block">
              Image Display Style:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleImageModeSelect('photo')}
                className={`py-2 px-3 text-xs rounded-lg border flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  isPhotoActive
                    ? 'bg-[#174A3A] text-white border-[#174A3A] font-medium'
                    : 'bg-[#F8F7F2] text-[#4E5650] border-[#D9D6CB] hover:border-[#174A3A]'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Real Photos</span>
              </button>

              <button
                type="button"
                onClick={() => handleImageModeSelect('illustration')}
                className={`py-2 px-3 text-xs rounded-lg border flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  !isPhotoActive
                    ? 'bg-[#174A3A] text-white border-[#174A3A] font-medium'
                    : 'bg-[#F8F7F2] text-[#4E5650] border-[#D9D6CB] hover:border-[#174A3A]'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Vector Artwork</span>
              </button>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-[#222522]">
              Instant Practice Presets:
            </label>
            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => handlePresetSelect('aura')}
                className={`p-2.5 text-left rounded-lg border text-xs transition-colors flex items-center justify-between cursor-pointer ${
                  config.name === 'Aura Dental Studio'
                    ? 'border-[#174A3A] bg-[#174A3A]/5 font-semibold text-[#174A3A]'
                    : 'border-[#D9D6CB] bg-[#FFFFFF] text-[#333834] hover:border-[#174A3A]/40'
                }`}
              >
                <div>
                  <div className="font-medium">Aura Dental Studio</div>
                  <div className="text-[11px] text-[#7A837C]">Marylebone, London · Restorative & Aesthetic</div>
                </div>
                {config.name === 'Aura Dental Studio' && <Check className="w-4 h-4 text-[#174A3A]" />}
              </button>

              <button
                type="button"
                onClick={() => handlePresetSelect('verdant')}
                className={`p-2.5 text-left rounded-lg border text-xs transition-colors flex items-center justify-between cursor-pointer ${
                  config.name === 'Verdant Family Dental'
                    ? 'border-[#174A3A] bg-[#174A3A]/5 font-semibold text-[#174A3A]'
                    : 'border-[#D9D6CB] bg-[#FFFFFF] text-[#333834] hover:border-[#174A3A]/40'
                }`}
              >
                <div>
                  <div className="font-medium">Verdant Family Dental</div>
                  <div className="text-[11px] text-[#7A837C]">Edinburgh · Family & Preventive Care</div>
                </div>
                {config.name === 'Verdant Family Dental' && <Check className="w-4 h-4 text-[#174A3A]" />}
              </button>

              <button
                type="button"
                onClick={() => handlePresetSelect('sovereign')}
                className={`p-2.5 text-left rounded-lg border text-xs transition-colors flex items-center justify-between cursor-pointer ${
                  config.name === 'Sovereign Dental & Implants'
                    ? 'border-[#174A3A] bg-[#174A3A]/5 font-semibold text-[#174A3A]'
                    : 'border-[#D9D6CB] bg-[#FFFFFF] text-[#333834] hover:border-[#174A3A]/40'
                }`}
              >
                <div>
                  <div className="font-medium">Sovereign Dental & Implants</div>
                  <div className="text-[11px] text-[#7A837C]">Clifton, Bristol · Implantology & Aesthetics</div>
                </div>
                {config.name === 'Sovereign Dental & Implants' && <Check className="w-4 h-4 text-[#174A3A]" />}
              </button>
            </div>
          </div>

          {/* Images Section in Customizer */}
          <div className="space-y-3 pt-2 border-t border-[#E6E4DC]">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#222522]">
              <ImageIcon className="w-3.5 h-3.5 text-[#174A3A]" />
              <span>Direct Photo URLs / Paths:</span>
            </div>
            
            <div>
              <label className="block text-[11px] font-medium text-[#5E655F] mb-1">
                Hero Dental Suite Photo
              </label>
              <input
                type="text"
                value={config.images?.hero || ''}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    images: { ...config.images, hero: e.target.value },
                  })
                }
                className="w-full px-2.5 py-1.5 text-xs bg-[#FFFFFF] border border-[#D9D6CB] rounded-md font-mono text-[#222522]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#5E655F] mb-1">
                Dentist Portrait Photo
              </label>
              <input
                type="text"
                value={config.images?.dentist || ''}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    images: { ...config.images, dentist: e.target.value },
                  })
                }
                className="w-full px-2.5 py-1.5 text-xs bg-[#FFFFFF] border border-[#D9D6CB] rounded-md font-mono text-[#222522]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#5E655F] mb-1">
                Reception Lounge Photo
              </label>
              <input
                type="text"
                value={config.images?.clinicLounge || ''}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    images: { ...config.images, clinicLounge: e.target.value },
                  })
                }
                className="w-full px-2.5 py-1.5 text-xs bg-[#FFFFFF] border border-[#D9D6CB] rounded-md font-mono text-[#222522]"
              />
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-3 pt-2 border-t border-[#E6E4DC]">
            <div>
              <label className="block text-xs font-semibold text-[#222522] mb-1">Clinic Name</label>
              <input
                type="text"
                value={config.name}
                onChange={(e) => onUpdateConfig({ ...config, name: e.target.value })}
                className="w-full px-3 py-1.5 text-xs bg-[#FFFFFF] border border-[#D9D6CB] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#174A3A]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#222522] mb-1">Tagline</label>
              <input
                type="text"
                value={config.tagline}
                onChange={(e) => onUpdateConfig({ ...config, tagline: e.target.value })}
                className="w-full px-3 py-1.5 text-xs bg-[#FFFFFF] border border-[#D9D6CB] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#174A3A]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#222522] mb-1">Lead Clinician</label>
                <input
                  type="text"
                  value={config.dentist.name}
                  onChange={(e) =>
                    onUpdateConfig({
                      ...config,
                      dentist: { ...config.dentist, name: e.target.value },
                    })
                  }
                  className="w-full px-3 py-1.5 text-xs bg-[#FFFFFF] border border-[#D9D6CB] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#174A3A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#222522] mb-1">Phone</label>
                <input
                  type="text"
                  value={config.phone}
                  onChange={(e) =>
                    onUpdateConfig({
                      ...config,
                      phone: e.target.value,
                      phoneRaw: e.target.value.replace(/[^0-9+]/g, ''),
                    })
                  }
                  className="w-full px-3 py-1.5 text-xs bg-[#FFFFFF] border border-[#D9D6CB] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#174A3A]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-[#E6E4DC] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onUpdateConfig(defaultClinicConfig)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs text-[#5E655F] hover:text-[#174A3A] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-[#F8F7F2] bg-[#174A3A] hover:bg-[#123B2E] rounded-lg transition-colors cursor-pointer"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
