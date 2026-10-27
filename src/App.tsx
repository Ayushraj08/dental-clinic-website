import React, { useState, useEffect } from 'react';
import { defaultClinicConfig, ClinicConfig } from './config/clinicConfig';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LegalModal } from './components/LegalModal';
import { ClinicCustomizer } from './components/ClinicCustomizer';
import { HomePage } from './pages/HomePage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [config, setConfig] = useState<ClinicConfig>(defaultClinicConfig);
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | undefined>(undefined);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingTreatmentId, setBookingTreatmentId] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [customizerOpen, setCustomizerOpen] = useState(false);

  // Sync hash routing for shareable links / browser back button
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('treatment/')) {
        const tId = hash.replace('treatment/', '');
        setActivePage('treatments');
        setSelectedTreatmentId(tId);
      } else if (['home', 'treatments', 'about', 'contact', 'reviews'].includes(hash)) {
        if (hash === 'reviews') {
          setActivePage('home');
          setTimeout(() => {
            const el = document.getElementById('patient-reviews');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          setActivePage(hash);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string, treatmentId?: string) => {
    if (page === 'reviews') {
      setActivePage('home');
      window.location.hash = 'reviews';
      setTimeout(() => {
        window.scrollTo({ top: 1800, behavior: 'smooth' });
      }, 100);
      return;
    }

    setActivePage(page);
    if (treatmentId) {
      setSelectedTreatmentId(treatmentId);
      window.location.hash = `treatment/${treatmentId}`;
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (treatmentId?: string) => {
    setBookingTreatmentId(treatmentId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F2] text-[#222522] overflow-x-hidden selection:bg-[#174A3A] selection:text-[#F8F7F2]">
      
      {/* Top Navigation Bar */}
      <Navbar
        config={config}
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenCustomizer={() => setCustomizerOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full overflow-x-hidden">
        {activePage === 'home' && (
          <HomePage
            config={config}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activePage === 'treatments' && (
          <TreatmentsPage
            config={config}
            selectedTreatmentId={selectedTreatmentId}
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            config={config}
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            config={config}
            defaultTreatmentId={selectedTreatmentId}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Editorial Footer */}
      <Footer
        config={config}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Booking Enquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        config={config}
        defaultTreatmentId={bookingTreatmentId}
      />

      {/* Legal & Practice Standards Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        config={config}
      />

      {/* Clinic Settings Customizer Drawer */}
      <ClinicCustomizer
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        config={config}
        onUpdateConfig={(newConfig) => setConfig(newConfig)}
      />

    </div>
  );
}
