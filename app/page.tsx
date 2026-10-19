"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustRibbon } from "@/components/TrustRibbon";
import { Services } from "@/components/Services";
import { DoorKnockerWarning } from "@/components/DoorKnockerWarning";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Faq } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { QuoteModal } from "@/components/QuoteModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Roof Restoration");

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Header with Emergency Bar & Navigation */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-1">
        {/* Hero Section with High-Action Calling & Lead Capture */}
        <Hero />

        {/* Credentials & Trust Badges Ribbon */}
        <TrustRibbon />

        {/* Core Services Grid */}
        <Services onSelectService={(service) => handleOpenQuoteModal(service)} />

        {/* Warning: Door Knockers vs Licensed Specialists (Mirrors Taylor & Son advice) */}
        <DoorKnockerWarning onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Interactive Before & After Transformation Gallery */}
        <BeforeAfterGallery onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 6-Step Restoration Process */}
        <Process />

        {/* Verified Customer Reviews & Google Rating */}
        <Testimonials />

        {/* Melbourne Suburbs Service Coverage */}
        <ServiceAreas onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Frequently Asked Questions Accordion */}
        <Faq onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Urgency Callout Banner */}
        <CtaBanner onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Sticky Mobile Action Calling Bar (1-Tap Call & 1-Tap Quote) */}
      <StickyMobileBar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Universal Quick Quote & Inspection Modal */}
      <QuoteModal
        isOpen={modalOpen}
        onClose={handleCloseQuoteModal}
        initialService={selectedService}
      />
    </div>
  );
}
