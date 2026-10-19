"use client";

import React, { useState, useEffect } from "react";
import { XIcon, CheckCircleIcon, PhoneIcon, ArrowRightIcon, ShieldCheckIcon } from "./Icons";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function QuoteModal({ isOpen, onClose, initialService }: Props) {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <QuoteModalContent
      key={initialService || "default"}
      onClose={onClose}
      initialService={initialService}
    />
  );
}

function QuoteModalContent({
  onClose,
  initialService,
}: {
  onClose: () => void;
  initialService?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburb: "",
    service: initialService || "Roof Restoration",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 border border-slate-200 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircleIcon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              Inquiry Received!
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. One of our senior roof inspectors will call you on{" "}
              <strong className="text-slate-900">{formData.phone}</strong> shortly to discuss your free inspection.
            </p>
            <div className="pt-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheckIcon className="w-4 h-4 text-blue-600" />
                100% Free &amp; No Obligation
              </div>
              <h3 className="text-2xl font-black text-[#0c2340]">
                Get A Free Inspection &amp; Quote
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Fill out the form below or call us directly. We respond within 15 mins!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Brown"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 placeholder-slate-400"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Melbourne Suburb
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Narre Warren"
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Service You Need
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-white"
                >
                  <option value="Roof Restoration">Full Roof Restoration</option>
                  <option value="Roof Leak / Emergency Repair">Emergency Roof Leak &amp; Repairs</option>
                  <option value="Re-Bedding & Re-Pointing">Ridge Re-bedding &amp; Flexible Pointing</option>
                  <option value="Gutters & Downpipes">Gutters, Downpipes &amp; Fascia</option>
                  <option value="Roof Cleaning & Painting">Roof Cleaning &amp; Painting</option>
                  <option value="Roof Ventilation">Roof Ventilation &amp; Whirlybirds</option>
                  <option value="General Inquiry">General Roof Inspection</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Brief Message (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your roof issue or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 placeholder-slate-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>SEND MY FREE QUOTE REQUEST</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>

              <div className="pt-2 text-center">
                <div className="text-xs text-slate-500 mb-2">Or call directly for immediate emergency service:</div>
                <a
                  href="tel:0400123456"
                  className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-extrabold text-sm"
                >
                  <PhoneIcon className="w-4 h-4 text-blue-600" />
                  <span>Call 0400 123 456 (Dean / Lee)</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
