import React, { useState } from 'react';
import { Menu, X, Phone, Settings } from 'lucide-react';
import { ClinicConfig } from '../config/clinicConfig';

interface NavbarProps {
  config: ClinicConfig;
  activePage: string;
  onNavigate: (page: string, treatmentId?: string) => void;
  onOpenBooking: (treatmentId?: string) => void;
  onOpenCustomizer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  activePage,
  onNavigate,
  onOpenBooking,
  onOpenCustomizer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'treatments', label: 'Treatments' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Patient Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F2]/95 backdrop-blur-xs border-b border-[#E6E4DC] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left font-serif-editorial text-2xl sm:text-[1.75rem] font-semibold text-[#174A3A] hover:text-[#123B2E] transition-colors tracking-tight whitespace-nowrap shrink-0 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#174A3A] rounded-sm"
          aria-label={`${config.name} Home`}
        >
          {config.name}
        </button>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#464D47]" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
                activePage === link.id
                  ? 'border-[#174A3A] text-[#174A3A] font-semibold'
                  : 'border-transparent text-[#464D47] hover:text-[#174A3A] hover:border-[#174A3A]/40'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (+ optional demo customizer toggle) */}
        <div className="flex items-center gap-3 shrink-0">
          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              title="Customise Clinic Settings (Demo Mode)"
              aria-label="Customise Clinic Settings"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#5E655F] hover:text-[#174A3A] border border-[#E6E4DC] hover:border-[#174A3A] rounded-md transition-colors cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Customise Demo</span>
            </button>
          )}

          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-[#F8F7F2] bg-[#174A3A] hover:bg-[#123B2E] active:scale-[0.99] rounded-lg transition-all shadow-xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#174A3A] whitespace-nowrap shrink-0"
          >
            Book Appointment
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#222522] hover:text-[#174A3A] rounded-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#174A3A]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E6E4DC] bg-[#F8F7F2] px-5 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base py-2 px-1 transition-colors ${
                  activePage === link.id
                    ? 'text-[#174A3A] font-semibold'
                    : 'text-[#3E453F] hover:text-[#174A3A]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#E6E4DC] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 text-center text-sm font-medium text-[#F8F7F2] bg-[#174A3A] hover:bg-[#123B2E] rounded-lg transition-colors cursor-pointer"
            >
              Book Appointment
            </button>

            <a
              href={`tel:${config.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-[#174A3A] border border-[#174A3A]/30 rounded-lg hover:bg-[#174A3A]/5 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Clinic {config.phone}</span>
            </a>

            {onOpenCustomizer && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomizer();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-[#5E655F] hover:text-[#174A3A] transition-colors"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Customise Clinic Settings (Demo Mode)</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
