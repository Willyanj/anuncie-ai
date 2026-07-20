/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import BudgetModal from './components/BudgetModal';
import { AnimatePresence } from 'motion/react';
import { getWhatsAppLink } from './data';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | null>(null);

  const handleOpenBudget = (serviceId?: string) => {
    window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
  };

  const handleCloseBudget = () => {
    setIsModalOpen(false);
    setPreselectedService(null);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-white font-sans antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Header onOpenBudget={() => handleOpenBudget()} />

      {/* Main Sections flow */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBudget={() => handleOpenBudget()} />

        {/* Final Conversion Pitch Section */}
        <CTASection onOpenBudget={() => handleOpenBudget()} />
      </main>

      {/* Premium Footer with Map and Address metadata */}
      <Footer />

      {/* Persistent floating action widgets */}
      <WhatsAppFloat />

      {/* Modal Popup Dialog orchestrator */}
      <AnimatePresence>
        {isModalOpen && (
          <BudgetModal
            isOpen={isModalOpen}
            onClose={handleCloseBudget}
            preselectedServiceId={preselectedService}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

