import React from "react";
import { AlertTriangleIcon, CheckCircleIcon, XIcon, ShieldCheckIcon, PhoneIcon } from "./Icons";

interface Props {
  onOpenQuoteModal: () => void;
}

export function DoorKnockerWarning({ onOpenQuoteModal }: Props) {
  const comparison = [
    {
      feature: "Licensing & Qualifications",
      lees: "VBA Licensed Tradespeople (Roof Tiling & Plumbing)",
      knockers: "Unlicensed, itinerant labourers without credentials",
    },
    {
      feature: "Insurance Coverage",
      lees: "$20 Million Public Liability + Full WorkCover",
      knockers: "Zero insurance; you are liable for accidents on your roof",
    },
    {
      feature: "Written Warranty",
      lees: "10-Year Written Workmanship & Material Guarantee",
      knockers: "No warranty or fake paperwork; gone the next day",
    },
    {
      feature: "Materials Used",
      lees: "Genuine Dulux AcraTex & Colorbond® Steel",
      knockers: "Cheap thinned paint from unbranded drums",
    },
    {
      feature: "Quotes & Contracts",
      lees: "Itemised written quotes, cooling-off period honored",
      knockers: "High-pressure door tactics, demands cash upfront",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Warning Callout Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-14 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-600 mt-1">
              <AlertTriangleIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-950">
                Consumer Warning: Beware of Door-to-Door Roof Restorers in Melbourne
              </h3>
              <p className="text-sm text-amber-900 mt-1.5 leading-relaxed">
                Under Victorian Consumer Law, you are entitled to a mandatory 10-business-day cooling-off period for unsolicited door-to-door sales. 
                Do not sign or hand over cash deposits on your doorstep. Always insist on a licensed company with a physical Melbourne address, 
                current public liability insurance, and written guarantees.
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-extrabold text-sm uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            The Lee&apos;s Roofing Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-4">
            Why Melbourne Homeowners Choose Us Over Travelling Tradesmen
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            With 25+ years in Melbourne, our reputation is built on doing what is right for your home, not taking quick shortcuts.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900 text-white p-4 font-bold text-sm tracking-wide">
            <div className="md:col-span-4 uppercase text-slate-400">Protection Standard</div>
            <div className="md:col-span-4 text-emerald-400 flex items-center gap-2 mt-2 md:mt-0">
              <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
              <span>Lee&apos;s Roofing (Local Specialist)</span>
            </div>
            <div className="md:col-span-4 text-rose-400 flex items-center gap-2 mt-2 md:mt-0">
              <AlertTriangleIcon className="w-5 h-5 text-rose-400" />
              <span>Unlicensed Door-Knockers</span>
            </div>
          </div>

          <div className="divide-y divide-slate-200">
            {comparison.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-5 text-sm gap-3 items-center hover:bg-white transition-colors">
                <div className="md:col-span-4 font-bold text-slate-900">
                  {item.feature}
                </div>
                <div className="md:col-span-4 text-slate-800 flex items-start gap-2.5">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="font-medium">{item.lees}</span>
                </div>
                <div className="md:col-span-4 text-slate-500 flex items-start gap-2.5">
                  <XIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600">{item.knockers}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            Get a Licensed, Guaranteed Quote
          </button>
          <a
            href="tel:0400123456"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-base transition-colors"
          >
            <PhoneIcon className="w-4 h-4 text-blue-600" />
            <span>Speak With A Senior Roofer: 0400 123 456</span>
          </a>
        </div>

      </div>
    </section>
  );
}
