import React from "react";
import { CheckCircleIcon } from "./Icons";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Comprehensive Roof Inspection",
      desc: "We perform a thorough 35-point safety inspection of your tiles, battens, valleys, flashing, gutter lines, and ceiling cavity.",
    },
    {
      num: "02",
      title: "4,000 PSI High-Pressure Clean",
      desc: "Our industrial rotowash strips decades of stubborn moss, lichen, black dirt, and fungi from the tile surface without damaging the substrate.",
    },
    {
      num: "03",
      title: "Re-Bedding in Concrete Mortar",
      desc: "All damaged, cracked, or broken tiles are replaced. Ridge caps are lifted, old brittle cement is chipped away, and reset in fresh mortar.",
    },
    {
      num: "04",
      title: "Flexible Acrylic Re-Pointing",
      desc: "We apply a premium acrylic flexible pointing compound that stretches with temperature expansion and contraction, preventing cracked cement.",
    },
    {
      num: "05",
      title: "High-Adhesion Primer Coat",
      desc: "A specially formulated deep-penetrating primer is sprayed across every tile to seal porosity and maximize topcoat bonding.",
    },
    {
      num: "06",
      title: "Dual AcraTex Membrane Topcoats",
      desc: "Two generous coats of genuine Dulux AcraTex roof membrane are airless-sprayed for maximum UV protection, followed by a total site cleanup.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-extrabold text-sm uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Meticulous Workmanship
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-4">
            Our Proven 6-Step Roof Restoration Process
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            We never take shortcuts. Every roof is restored to Australian Standards (AS 2050) to deliver decades of waterproof protection.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-blue-600/40 group-hover:text-blue-600 transition-colors">
                  {step.num}
                </span>
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
