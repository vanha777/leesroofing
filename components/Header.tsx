"use client";

import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, StarIcon, MenuIcon, XIcon, RoofCrestIcon } from "./Icons";

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export function Header({ onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-40">
      {/* Top Urgent & Trust Contact Bar */}
      <div className="bg-[#071b30] text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Locations & Emergency Response */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-blue-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="text-emerald-400 font-semibold">Open Now:</span> 24/7 Emergency Storm Damage & Leak Repairs
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <MapPinIcon className="w-3.5 h-3.5 text-blue-400" />
              Melbourne &amp; Eastern / South-Eastern Suburbs
            </span>
          </div>

          {/* Right: Reviews & Direct Phone */}
          <div className="flex items-center gap-4 text-xs sm:text-sm flex-wrap justify-center">
            <div className="flex items-center gap-1 text-amber-400 font-medium">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold ml-1">4.9/5</span>
              <span className="text-slate-300 text-xs hidden sm:inline">(450+ Local Reviews)</span>
            </div>

            <span className="text-slate-500 hidden sm:inline">|</span>

            <a
              href="tel:0400123456"
              className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-bold tracking-wide transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>0400 123 456</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <div className="bg-[#0c2340] sticky top-0 shadow-xl border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
                <RoofCrestIcon className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white leading-none">
                  LEE&apos;S <span className="text-blue-400">ROOFING</span>
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-200 mt-1">
                  Melbourne Roof Restorations
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              <a href="#services" className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors">
                Our Services
              </a>
              <a href="#why-us" className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors">
                Why Us
              </a>
              <a href="#gallery" className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors">
                Before &amp; After
              </a>
              <a href="#process" className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors">
                Our Process
              </a>
              <a href="#reviews" className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors">
                Reviews
              </a>
              <a href="#faqs" className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors">
                FAQs
              </a>
            </nav>

            {/* High Action Calling Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:0400123456"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-white border border-blue-700/60 transition-all font-bold text-sm shadow-sm"
              >
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <PhoneIcon className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-blue-300 uppercase leading-none font-medium">Free Call &amp; Advice</div>
                  <div className="text-sm leading-tight font-extrabold text-white">0400 123 456</div>
                </div>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                GET FREE QUOTE
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="tel:0400123456"
                className="p-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center gap-1.5"
                aria-label="Call Lee's Roofing"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Call</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-300 hover:text-white bg-blue-950/80 border border-blue-800/80"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#071b30] border-t border-blue-900/60 px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-2">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-blue-900/50 hover:text-white"
              >
                Our Services
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-blue-900/50 hover:text-white"
              >
                Why Choose Lee&apos;s Roofing
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-blue-900/50 hover:text-white"
              >
                Before &amp; After Gallery
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-blue-900/50 hover:text-white"
              >
                Our 6-Step Process
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-blue-900/50 hover:text-white"
              >
                Customer Reviews
              </a>
              <a
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-blue-900/50 hover:text-white"
              >
                Frequently Asked Questions
              </a>
            </nav>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="tel:0400123456"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-center shadow-md"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Now: 0400 123 456
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-center shadow-md"
              >
                Get 100% Free Inspection Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
