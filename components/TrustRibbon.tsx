import React from "react";
import { ShieldCheckIcon, AwardIcon } from "./Icons";

export function TrustRibbon() {
  const credentials = [
    {
      title: "10-Year Written Guarantee",
      subtitle: "Materials & Workmanship Warranty",
      badge: "100% Backed",
    },
    {
      title: "Dulux AcraTex Certified",
      subtitle: "Premium Roof Membrane Applicator",
      badge: "Certified",
    },
    {
      title: "Colorbond Genuine Steel",
      subtitle: "Tested For Tough Australian Weather",
      badge: "Quality",
    },
    {
      title: "Master Builders Vic",
      subtitle: "Licensed VBA Trade Specialists",
      badge: "Verified",
    },
  ];

  return (
    <section className="bg-slate-900 border-y border-blue-900/60 py-6 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {credentials.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center shrink-0 text-blue-400 shadow-md">
                {idx === 0 && <ShieldCheckIcon className="w-6 h-6 text-amber-400" />}
                {idx === 1 && <AwardIcon className="w-6 h-6 text-blue-400" />}
                {idx === 2 && <ShieldCheckIcon className="w-6 h-6 text-cyan-400" />}
                {idx === 3 && <AwardIcon className="w-6 h-6 text-emerald-400" />}
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-tight">{item.title}</div>
                <div className="text-xs text-slate-400">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
