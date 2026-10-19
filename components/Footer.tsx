import React from "react";
import { RoofCrestIcon, PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-[#071728] text-slate-300 pt-16 pb-28 md:pb-16 border-t border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: About & Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <RoofCrestIcon className="w-6 h-6" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                LEE&apos;S <span className="text-blue-400">ROOFING</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Melbourne&apos;s premier roof restoration, repairs, and guttering specialists. 
              Family owned with over 25+ years of proud service protecting homes across Victoria.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div><strong>VBA Reg:</strong> Plumbing &amp; Roof Tiling</div>
              <div><strong>Public Liability:</strong> $20 Million Active Cover</div>
              <div><strong>ABN:</strong> 42 618 902 411</div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-900/80 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Complete Roof Restoration</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Emergency Roof Leak Repairs</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Ridge Capping Re-Bedding</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Flexible Acrylic Re-Pointing</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Colorbond Gutters &amp; Downpipes</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Roof Pressure Cleaning &amp; Painting</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Roof Ventilation &amp; Whirlybirds</a></li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-900/80 pb-2">
              Hours of Operation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-blue-400 shrink-0" />
                <span><strong>Mon – Fri:</strong> 7:00 AM – 6:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-blue-400 shrink-0" />
                <span><strong>Saturday:</strong> 8:00 AM – 4:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Sunday:</strong> Emergency On-Call</span>
              </li>
              <li className="pt-2 text-xs text-emerald-400 font-semibold">
                ⚡ 24/7 Storm Make-Safe Response Available
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-900/80 pb-2">
              Contact Us Directly
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <a href="tel:0400123456" className="flex items-center gap-2.5 text-white hover:text-amber-400 transition-colors font-bold text-base">
                <PhoneIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <span>0400 123 456</span>
              </a>
              <div className="flex items-center gap-2.5">
                <MailIcon className="w-4 h-4 text-blue-400 shrink-0" />
                <span>info@leesroofing.com.au</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Greater Melbourne &amp; Surrounding Eastern Suburbs</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Lee&apos;s Roofing Melbourne. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Licensed &amp; Insured</span>
            <span>·</span>
            <span>Dulux AcraTex Certified</span>
            <span>·</span>
            <span>10-Year Warranty</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
