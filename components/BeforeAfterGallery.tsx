"use client";

import React, { useState } from "react";
import { CheckCircleIcon } from "./Icons";

interface Props {
  onOpenQuoteModal: () => void;
}

export function BeforeAfterGallery({ onOpenQuoteModal }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: "Full Concrete Tile Restoration",
      location: "Berwick, Victoria",
      scope: "4,000 PSI Pressure Clean + Complete Re-Bedding + Flexible Pointing + 2x Dulux AcraTex Coats",
      color: "Colorbond® Monument",
      beforeStats: ["Heavy lichen & moss buildup", "32 broken and cracked tiles", "Crumbled ridge mortar leaking into ceiling"],
      afterStats: ["100% waterproof sealed", "Flexible pointing moves with house", "10-Year written manufacturer warranty"],
      gradientBefore: "from-amber-950/80 via-stone-900 to-slate-900",
      gradientAfter: "from-slate-900 via-blue-950 to-slate-800",
      beforeLabel: "Weathered, Faded & Leaking (35 Years Old)",
      afterLabel: "Fully Restored & Glazed (Like Brand New)",
    },
    {
      title: "Terracotta Tile Re-bedding & Seal",
      location: "Narre Warren North, Victoria",
      scope: "Anti-Fungal Sterilisation + Valley Replacement + Terracotta Clear Gloss Glaze",
      color: "Natural Terracotta Gloss",
      beforeStats: ["Damp moss blocking water channels", "Valley irons rusted through", "Water stains in master bedroom"],
      afterStats: ["New zinc valley flashings installed", "High-gloss protective UV barrier", "Zero leaks across all storms"],
      gradientBefore: "from-stone-800 via-amber-950 to-stone-900",
      gradientAfter: "from-amber-900 via-orange-950 to-stone-900",
      beforeLabel: "Heavy Moss & Rusted Valleys",
      afterLabel: "Cleaned, Sealed & Glazed Terracotta",
    },
    {
      title: "Metal Colorbond & Gutter Upgrade",
      location: "Rowville, Victoria",
      scope: "Rusted Iron Replacement + Colorbond Quad Gutters + 90mm Downpipes",
      color: "Colorbond® Woodland Grey",
      beforeStats: ["Corroded valley trays & rusted gutters", "Water overflowing into eaves during downpours", "Blocked downpipes"],
      afterStats: ["Seamless heavy-duty Colorbond gutters", "High-volume stormwater drainage", "Clean modern street appearance"],
      gradientBefore: "from-zinc-900 via-neutral-900 to-stone-800",
      gradientAfter: "from-slate-950 via-blue-900 to-slate-900",
      beforeLabel: "Rusted Corrugated Iron & Sagging Gutters",
      afterLabel: "Pristine Colorbond® Installation",
    },
  ];

  const current = projects[activeTab];

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-400 font-extrabold text-sm uppercase tracking-wider bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800">
            Real Melbourne Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-4">
            See What A Professional Restoration Can Do
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            A complete restoration restores structural integrity and adds tens of thousands of dollars to your home&apos;s street value.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projects.map((proj, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {proj.title} ({proj.location.split(",")[0]})
            </button>
          ))}
        </div>

        {/* Project Card */}
        <div className="bg-slate-800/90 rounded-3xl border border-slate-700 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-slate-700/80 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                Location: {current.location}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {current.title}
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                <strong>Color Finish:</strong> {current.color} · <strong>Scope:</strong> {current.scope}
              </p>
            </div>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-md transition-all shrink-0 cursor-pointer"
            >
              Get a Quote for Your Roof
            </button>
          </div>

          {/* Before & After Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before Box */}
            <div className="rounded-2xl border-2 border-red-900/40 bg-slate-950 overflow-hidden flex flex-col">
              <div className="p-4 bg-red-950/60 border-b border-red-900/40 flex items-center justify-between">
                <span className="text-xs font-black tracking-wider uppercase text-red-300 bg-red-900/60 px-3 py-1 rounded-full">
                  BEFORE RESTORATION
                </span>
                <span className="text-xs text-slate-400">{current.beforeLabel}</span>
              </div>
              
              {/* Visual Simulated Roof Canvas */}
              <div className={`h-48 sm:h-56 bg-gradient-to-br ${current.gradientBefore} relative flex items-center justify-center p-6 text-center`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 space-y-2">
                  <div className="inline-block px-3 py-1 rounded-md bg-black/60 text-red-300 text-xs font-semibold backdrop-blur-sm">
                    ⚠️ Severe Weathering &amp; Fractured Pointing
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-xs mx-auto">
                    Water pooling in cracked valleys, loose capping tiles slipping down the pitch.
                  </p>
                </div>
              </div>

              {/* Before Details */}
              <div className="p-5 space-y-2.5 bg-slate-900/90 flex-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Initial Inspection Findings:
                </div>
                {current.beforeStats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                    <span>{stat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After Box */}
            <div className="rounded-2xl border-2 border-emerald-500/40 bg-slate-950 overflow-hidden flex flex-col">
              <div className="p-4 bg-emerald-950/60 border-b border-emerald-800/40 flex items-center justify-between">
                <span className="text-xs font-black tracking-wider uppercase text-emerald-300 bg-emerald-900/60 px-3 py-1 rounded-full">
                  AFTER LEE&apos;S ROOFING
                </span>
                <span className="text-xs text-emerald-300 font-semibold">{current.afterLabel}</span>
              </div>
              
              {/* Visual Simulated Roof Canvas */}
              <div className={`h-48 sm:h-56 bg-gradient-to-br ${current.gradientAfter} relative flex items-center justify-center p-6 text-center shadow-inner`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 space-y-2">
                  <div className="inline-block px-3 py-1 rounded-md bg-emerald-950/80 text-emerald-300 text-xs font-semibold backdrop-blur-sm border border-emerald-600/40">
                    ✨ Flawlessly Re-Pointed &amp; Double Coated
                  </div>
                  <p className="text-slate-200 text-xs sm:text-sm max-w-xs mx-auto font-medium">
                    100% watertight seal, radiant thermal gloss finish, guaranteed for 10 years.
                  </p>
                </div>
              </div>

              {/* After Details */}
              <div className="p-5 space-y-2.5 bg-slate-900/90 flex-1">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  Results Delivered:
                </div>
                {current.afterStats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
