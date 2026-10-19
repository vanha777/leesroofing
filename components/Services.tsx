import React from "react";
import { RoofCrestIcon, DropletIcon, WindIcon, WrenchIcon, SparklesIcon, ShieldCheckIcon, ArrowRightIcon } from "./Icons";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const serviceList = [
    {
      id: "restoration",
      title: "Complete Roof Restoration",
      tag: "Most Popular",
      desc: "Transform and protect your tired, faded roof with our complete 5-stage restoration system using genuine Dulux AcraTex coatings.",
      features: [
        "4,000 PSI high-pressure moss & dirt wash",
        "Full ridge cap re-bedding & flexible re-pointing",
        "Damaged & cracked tile replacement",
        "High-build primer + dual coat gloss membrane",
      ],
      icon: RoofCrestIcon,
      highlight: true,
    },
    {
      id: "leaks",
      title: "Emergency Roof Leaks & Repairs",
      tag: "Same-Day Response",
      desc: "Stop water ingress before it ruins your ceiling, insulation, and timber framing. Fast, permanent leak detection and storm make-safe.",
      features: [
        "Pinpoint thermal & visual leak detection",
        "Broken tile & rusted valley iron repair",
        "Chimney, skylight & wall flashing repairs",
        "Immediate same-day emergency tarping",
      ],
      icon: DropletIcon,
      highlight: false,
    },
    {
      id: "repointing",
      title: "Re-Bedding & Flexible Pointing",
      tag: "Structural Integrity",
      desc: "Cracked cement mortar along your ridge caps allows water to enter. We re-bed in concrete and seal with flexible acrylic compound.",
      features: [
        "Removal of fractured, loose mortar",
        "Re-alignment of ridge caps in cement bed",
        "Flexible acrylic pointing that flexes with house shifts",
        "Color-matched to your existing tile profile",
      ],
      icon: WrenchIcon,
      highlight: false,
    },
    {
      id: "gutters",
      title: "Gutters, Downpipes & Fascia",
      tag: "Colorbond® Steel",
      desc: "Prevent foundation damage and ceiling overflows with seamless Colorbond guttering and high-capacity downpipe installations.",
      features: [
        "Rust-proof Colorbond gutter replacement",
        "Fascia capping & rotten timber repairs",
        "High-flow downpipes & leaf-guard systems",
        "Box gutters & concealed valley drainage",
      ],
      icon: ShieldCheckIcon,
      highlight: false,
    },
    {
      id: "cleaning",
      title: "Roof Cleaning & Painting",
      tag: "Instant Curb Appeal",
      desc: "Restore your home's look and boost property value without the cost of a full re-roof. Removes decades of black mould and lichen.",
      features: [
        "Deep sterilising anti-fungal treatment",
        "Eco-friendly 4,000 PSI rotoclean process",
        "Reflective heat-shield thermal coatings",
        "Choice of over 36 modern Colorbond colors",
      ],
      icon: SparklesIcon,
      highlight: false,
    },
    {
      id: "ventilation",
      title: "Roof Ventilation & Whirlybirds",
      tag: "Energy Efficient",
      desc: "Drop internal ceiling heat by up to 25°C in Melbourne summers and stop winter ceiling moisture, damp, and mould growth.",
      features: [
        "Wind-driven Edmonds aluminium whirlybirds",
        "High-capacity solar roof ventilator units",
        "Moisture and condensation prevention",
        "Lower household summer cooling bills",
      ],
      icon: WindIcon,
      highlight: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-extrabold text-sm uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Professional Roofing Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-4">
            We Make Your Roof Our Absolute Top Priority
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            From minor tile repairs to full residential roof restorations across Melbourne. 
            All work carried out by licensed, experienced tradespeople with our 10-year written guarantee.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`rounded-2xl p-7 transition-all duration-200 flex flex-col justify-between ${
                  service.highlight
                    ? "bg-white border-2 border-blue-600 shadow-xl ring-4 ring-blue-500/10"
                    : "bg-white border border-slate-200 hover:border-blue-400 shadow-md hover:shadow-xl"
                }`}
              >
                <div>
                  {/* Top Bar with Icon and Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        service.highlight
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                          : "bg-blue-50 text-blue-700 border border-blue-100"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        service.highlight
                          ? "bg-amber-100 text-amber-900 border border-amber-300"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-extrabold text-[#0c2340] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 border-t border-slate-100 pt-5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    service.highlight
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25"
                      : "bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200"
                  }`}
                >
                  <span>Request Free Inspection</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Urgent Service Callout Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#0c2340] to-[#1e3a8a] text-white p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-700/50">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-amber-400 font-extrabold text-xs uppercase tracking-wider">
              Need fast advice or emergency repairs?
            </span>
            <h4 className="text-xl sm:text-2xl font-black">
              Unsure what your roof needs? Talk to a licensed roofer right now.
            </h4>
            <p className="text-slate-300 text-sm max-w-xl">
              We provide free honest assessments without pressure. If you only need a couple of tiles replaced, we&apos;ll tell you straight.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:0400123456"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-center shadow-lg transition-all"
            >
              📞 0400 123 456
            </a>
            <button
              onClick={() => onSelectService("General Inquiry")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-900/80 hover:bg-blue-800 text-white font-bold text-center border border-blue-600 transition-all cursor-pointer"
            >
              Request Call Back
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
