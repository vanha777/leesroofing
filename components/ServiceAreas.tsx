import React from "react";
import { MapPinIcon, PhoneIcon } from "./Icons";

interface Props {
  onOpenQuoteModal: () => void;
}

export function ServiceAreas({ onOpenQuoteModal }: Props) {
  const suburbs = [
    "Berwick",
    "Narre Warren",
    "Narre Warren North",
    "Narre Warren South",
    "Cranbourne",
    "Hallam",
    "Endeavour Hills",
    "Hampton Park",
    "Rowville",
    "Scoresby",
    "Boronia",
    "Knoxfield",
    "Wheelers Hill",
    "Dandenong",
    "Keysborough",
    "Springvale",
    "Moorabbin",
    "Frankston",
    "Carrum Downs",
    "Mornington Peninsula",
    "Glen Waverley",
    "Ferntree Gully",
    "Ringwood",
    "Croydon",
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-blue-50/60 border border-blue-100 rounded-3xl p-8 lg:p-10">
          
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
              <MapPinIcon className="w-3.5 h-3.5" />
              Melbourne Wide Coverage
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0c2340]">
              Servicing Melbourne, Eastern &amp; South-Eastern Suburbs
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our mobile roofing teams are fully equipped to provide fast inspections, same-day leak repairs, 
              and full roof restorations across all Greater Melbourne suburbs.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start">
              {suburbs.map((sub, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-2xs hover:border-blue-400 transition-colors"
                >
                  <MapPinIcon className="w-3 h-3 text-blue-500" />
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Call Action Card */}
          <div className="bg-[#0c2340] rounded-2xl p-6 sm:p-7 text-white text-center shrink-0 w-full lg:w-80 shadow-xl border border-blue-800">
            <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
              Don&apos;t see your suburb?
            </div>
            <h3 className="text-xl font-black mb-2">
              We Service All Greater Melbourne
            </h3>
            <p className="text-slate-300 text-xs mb-5">
              Call our friendly team to confirm immediate availability in your area today.
            </p>
            <a
              href="tel:0400123456"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-md transition-all"
            >
              <PhoneIcon className="w-4 h-4" />
              Call 0400 123 456
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="w-full mt-2.5 py-2.5 px-4 rounded-xl bg-blue-900/80 hover:bg-blue-800 text-blue-200 text-xs font-bold border border-blue-700/80 transition-all cursor-pointer"
            >
              Check My Suburb
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
