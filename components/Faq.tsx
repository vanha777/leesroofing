"use client";

import React, { useState } from "react";
import { ChevronDownIcon, PhoneIcon } from "./Icons";

interface Props {
  onOpenQuoteModal: () => void;
}

export function Faq({ onOpenQuoteModal }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why is my roof leaking?",
      a: "Roofs leak for several common reasons: cracked or broken tiles, compromised valley flashings, blocked weep holes along the top ridge, deteriorated mortar bedding, or rusted valley iron. We perform a full safety inspection to pinpoint the exact leak location without guesswork.",
    },
    {
      q: "What is flexible pointing and why is it better than plain cement?",
      a: "Flexible pointing is a specialized polymer-acrylic compound mixed with graded sand. Unlike traditional brittle cement that cracks when timber house framing settles and shifts with Melbourne's seasonal hot and cold temperatures, flexible pointing bends and moves naturally without fracturing or letting water in.",
    },
    {
      q: "What is the difference between re-bedding and re-pointing?",
      a: "Re-bedding involves lifting the ridge caps, chipping away degraded old cement, and laying a new concrete mortar bed to physically anchor the tiles to the roof frame. Re-pointing is applying the external flexible acrylic compound over the edges of the bedded caps to create an impenetrable, waterproof, and seamless seal.",
    },
    {
      q: "How long does a complete roof restoration take?",
      a: "A typical single or double-storey home restoration usually takes 2 to 3 fine-weather days. Day 1 covers inspection, high-pressure washing, and tile replacement. Day 2 covers re-bedding and flexible pointing. Day 3 covers primer application and dual high-build Dulux AcraTex membrane coats.",
    },
    {
      q: "Do you provide a written warranty?",
      a: "Yes! Every full roof restoration completed by Lee's Roofing comes backed by our comprehensive 10-Year Written Guarantee covering both the Dulux AcraTex coatings and our trade workmanship. You receive official warranty documentation upon completion.",
    },
    {
      q: "Can my family remain at home while the work is being done?",
      a: "Absolutely. Our team works completely on the exterior of your property. We only require external access to a garden tap and power point, and we take great care to cover gardens, protect pathways, and thoroughly clean the site every day.",
    },
    {
      q: "How much does a roof restoration cost in Melbourne?",
      a: "Pricing depends on roof pitch, tile type (terracotta vs concrete tile vs metal), the condition of ridge mortar, and the square metre size. A full restoration is generally a fraction of the cost of a complete roof replacement. We provide 100% free, fixed-price itemised quotes with no hidden surprises.",
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-extrabold text-sm uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Clear, honest advice from Melbourne&apos;s licensed roofing specialists.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-100 text-blue-600" : "text-slate-500"
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 text-base">
            Have a question about your specific roof?
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            Call us directly or send through a photo of your roof for instant trade advice.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:0400123456"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md transition-all"
            >
              <PhoneIcon className="w-4 h-4" />
              Call 0400 123 456
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm hover:bg-slate-200 transition-all cursor-pointer"
            >
              Ask an Inspector Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
