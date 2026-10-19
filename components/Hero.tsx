"use client";

import React, { useState } from "react";
import { PhoneIcon, CheckCircleIcon, ShieldCheckIcon, StarIcon, ArrowRightIcon } from "./Icons";

export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburb: "",
    service: "Roof Restoration",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0c2340] via-[#0f2d52] to-[#0a1a2e] text-white overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Subtle architectural background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Decorative gradient glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: High Action Headlines & Trust Signals */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/70 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold shadow-inner">
              <ShieldCheckIcon className="w-4 h-4 text-blue-400" />
              <span>Melbourne&apos;s Trusted Roofing Specialists · 25+ Years Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Roof Restorations &amp; <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">
                Reliable Roof Repairs
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Affordability without compromise. Family-owned and operated, <strong className="text-white font-semibold">Lee&apos;s Roofing</strong> delivers 
              expert roof restorations, leak repairs, re-bedding, and guttering across Melbourne. 
              Done right the first time with our <strong className="text-amber-300 font-semibold">10-Year Written Guarantee</strong>.
            </p>

            {/* Key Value Proposition Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>100% Free On-Site Inspection &amp; Quote</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>10-Year Workmanship Warranty</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Licensed &amp; Fully Insured ($20M Public)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Same-Day Emergency Make-Safe Service</span>
              </div>
            </div>

            {/* Big High-Action Calling Button Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="tel:0400123456"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black text-base sm:text-lg shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-yellow-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0 animate-pulse-cta"
              >
                <div className="w-8 h-8 rounded-full bg-slate-950/10 flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-slate-950" />
                </div>
                <span>CALL NOW: 0400 123 456</span>
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-950/80 hover:bg-blue-900 text-white font-bold text-base border border-blue-700/60 transition-all hover:border-blue-500"
              >
                <span>View Our Services</span>
                <ArrowRightIcon className="w-4 h-4 text-blue-300" />
              </a>
            </div>

            {/* Social Trust Proof Under Button */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-slate-300 font-medium">
                <strong className="text-white font-bold">4.9/5 Rating</strong> from over 450+ satisfied Melbourne homeowners
              </span>
            </div>
          </div>

          {/* Right Column: High-Converting Lead Inspection Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900 border-4 border-blue-500/20 relative">
              {/* Form Header */}
              <div className="border-b border-slate-100 pb-4 mb-5 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
                  Fast 30-Second Inquiry
                </span>
                <h3 className="text-2xl font-black text-[#0c2340]">
                  Get Free Roofing Inspection
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Upfront fixed quote · No hidden costs · Fast response
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircleIcon className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Thank You, {formData.name}!</h4>
                  <p className="text-sm text-slate-600">
                    Your request for a free roofing inspection has been received. Our senior inspector will call you on{" "}
                    <strong className="text-slate-900">{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-2">
                    <a
                      href="tel:0400123456"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-700"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      Need urgent help? Call 0400 123 456
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 placeholder-slate-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0400 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Melbourne Suburb
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Berwick"
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-white"
                    >
                      <option value="Roof Restoration">Full Roof Restoration (Clean, Point &amp; Paint)</option>
                      <option value="Roof Leak / Emergency Repair">Roof Leak &amp; Broken Tile Repair</option>
                      <option value="Re-Bedding & Re-Pointing">Ridge Capping Re-bedding &amp; Re-pointing</option>
                      <option value="Guttering & Downpipes">Gutter Replacement &amp; Downpipes</option>
                      <option value="Roof Cleaning & Painting">Roof Pressure Cleaning &amp; Painting</option>
                      <option value="Roof Ventilation">Roof Ventilation (Whirlybirds)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Details / Comments (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your roof (tile type, leak area, approximate age)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 placeholder-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-base tracking-wide shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>CLAIM FREE ROOF INSPECTION</span>
                    <ArrowRightIcon className="w-5 h-5 text-blue-200" />
                  </button>

                  <div className="text-center pt-1">
                    <p className="text-[11px] text-slate-500">
                      🔒 Your information is confidential. No obligation or pushy sales calls.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
