"use client";

import React from "react";
import { PhoneIcon, RoofCrestIcon } from "./Icons";

interface Props {
  onOpenQuoteModal: () => void;
}

export function StickyMobileBar({ onOpenQuoteModal }: Props) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#071b30] border-t-2 border-blue-500/50 p-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] flex items-center gap-3">
      {/* 1-Tap Call Now Button */}
      <a
        href="tel:0400123456"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-amber-500 active:bg-amber-600 text-slate-950 font-black text-sm tracking-wide shadow-md"
      >
        <PhoneIcon className="w-4 h-4 text-slate-950" />
        <span>CALL 0400 123 456</span>
      </a>

      {/* 1-Tap Free Quote Button */}
      <button
        onClick={onOpenQuoteModal}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-blue-600 active:bg-blue-700 text-white font-extrabold text-sm tracking-wide shadow-md cursor-pointer"
      >
        <RoofCrestIcon className="w-4 h-4 text-blue-200" />
        <span>FREE QUOTE</span>
      </button>
    </div>
  );
}
