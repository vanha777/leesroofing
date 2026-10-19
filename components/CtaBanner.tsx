import React from "react";
import { PhoneIcon, ArrowRightIcon, ShieldCheckIcon } from "./Icons";

interface Props {
  onOpenQuoteModal: () => void;
}

export function CtaBanner({ onOpenQuoteModal }: Props) {
  return (
    <section className="relative bg-gradient-to-r from-[#0c2340] via-[#123663] to-[#071b30] text-white py-16 sm:py-20 overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-600/50 text-blue-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
          <ShieldCheckIcon className="w-4 h-4 text-amber-400" />
          Melbourne&apos;s High-Priority Roof Protection
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Don&apos;t Wait For The Next Melbourne Storm To Find Your Roof Leak
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          A cracked ridge cap or rusted valley iron can lead to thousands of dollars in water-damaged ceiling plaster, insulation, and electrical systems. 
          Book your 100% free inspection today.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <a
            href="tel:0400123456"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <PhoneIcon className="w-5 h-5 text-slate-950" />
            <span>0400 123 456</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            <span>BOOK FREE INSPECTION</span>
            <ArrowRightIcon className="w-4 h-4 text-blue-200" />
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span>✓ 100% Free &amp; No Obligation</span>
          <span>✓ Upfront Fixed Written Quote</span>
          <span>✓ 10-Year Workmanship Guarantee</span>
          <span>✓ Licensed VBA Tradespeople</span>
        </div>
      </div>
    </section>
  );
}
