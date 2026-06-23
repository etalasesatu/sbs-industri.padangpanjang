/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemAgitation from './components/ProblemAgitation';
import Services from './components/Services';
import BenefitsAndStats from './components/BenefitsAndStats';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import PriceTable from './components/PriceTable';
import PromoCountdown from './components/PromoCountdown';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import Widgets from './components/Widgets';
import Chatbot from './components/Chatbot';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  // Handle clicking "Pesan Paket" in comparison price cards
  const handleSelectPackage = (packageName: string) => {
    setSelectedService(packageName);
    
    // Smooth scroll down to order form section
    const orderElement = document.getElementById('order');
    if (orderElement) {
      const headerOffset = 80;
      const elementPosition = orderElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-sans min-h-screen bg-slate-50 flex flex-col justify-between scroll-smooth scroll-pt-20">
      
      {/* Sticky Header Navigation Component */}
      <Header />

      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero />

        {/* Problem Section (PAS Copywriting) */}
        <ProblemAgitation />

        {/* Services Showcase Cards */}
        <Services />

        {/* Value Proposition Credentials & Statistics */}
        <BenefitsAndStats />

        {/* Project Gallery Filter Array with Lightbox Slider */}
        <Gallery />

        {/* Step-by-Step 5 Step Workflow */}
        <HowItWorks />

        {/* Cost Comparison Table with callback triggers */}
        <PriceTable onSelectPackage={handleSelectPackage} />

        {/* Midnight Automatic countdown promotion clock */}
        <PromoCountdown />

        {/* Verified Client Testimonials */}
        <Testimonials />

        {/* 10 Collapsible Accordion Frequently Asked Questions */}
        <FAQ />

        {/* Booking Form validation that ports direct WhatsApp redirects */}
        <OrderForm selectedService={selectedService} />

      </main>

      {/* Footer and visual maps section */}
      <Footer />

      {/* Floating utility indicators (Sticky WA & back-to-top shortcuts) */}
      <Widgets />

      {/* Elegant, interactive customer helper Chatbot */}
      <Chatbot />

    </div>
  );
}

