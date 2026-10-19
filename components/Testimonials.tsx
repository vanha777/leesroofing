import React from "react";
import { StarIcon, ShieldCheckIcon } from "./Icons";

export function Testimonials() {
  const reviews = [
    {
      name: "Andree Lena",
      suburb: "Boronia, VIC",
      service: "Full Roof Restoration",
      quote:
        "I can’t believe how good my roof looks now! I was at work when the guys got the job done but my neighbour saw the crew hard at work on the roof and was seriously impressed – they never stopped working like busy bees! Friendly, professional and left the property spotless. Highly recommend Lee's Roofing.",
      rating: 5,
      date: "3 weeks ago",
    },
    {
      name: "Darcey Walker",
      suburb: "Narre Warren, VIC",
      service: "Ridge Re-Bedding & Leak Repair",
      quote:
        "Couldn't recommend Lee and his team more! They rocked up right on time and got straight into it. They showed us photos of exactly what was cracked and explained everything they were going to do to fix it. The boys were polite, professional and the price was very reasonable.",
      rating: 5,
      date: "1 month ago",
    },
    {
      name: "Katerina Millaras",
      suburb: "Berwick, VIC",
      service: "Gutters & Downpipe Replacement",
      quote:
        "Recently had our gutters and downpipes replaced with Colorbond Monument. We are so happy with their work! Very nice guys, highly professional, great job! Didn't waste any time and got the job finished ahead of the weekend rains. 10/10 service.",
      rating: 5,
      date: "2 months ago",
    },
    {
      name: "Michael Henderson",
      suburb: "Rowville, VIC",
      service: "Roof Cleaning & AcraTex Paint",
      quote:
        "Our 25-year-old concrete tile roof was looking completely weathered and faded. Lee’s Roofing completely transformed the look of our house. Several neighbours have already asked for their contact number. Fantastic quality and honest communication throughout.",
      rating: 5,
      date: "Recent Customer",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheckIcon className="w-4 h-4 text-blue-600" />
            Verified Customer Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight">
            Trusted by Hundreds of Melbourne Families
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 text-amber-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-900 font-extrabold text-lg">4.9 / 5.0</span>
            <span className="text-slate-500 text-sm">(Based on 450+ Local Google Reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating & Service */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">
                    {rev.service}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-slate-900 text-sm">
                    {rev.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {rev.suburb} · Verified Homeowner
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Stat Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 text-center flex flex-wrap items-center justify-around gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-blue-600">25+</div>
            <div className="text-xs text-slate-600 font-semibold uppercase mt-0.5">Years Experience</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-200" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-blue-600">3,800+</div>
            <div className="text-xs text-slate-600 font-semibold uppercase mt-0.5">Roofs Restored</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-200" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-blue-600">10-Year</div>
            <div className="text-xs text-slate-600 font-semibold uppercase mt-0.5">Written Guarantee</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-200" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-blue-600">100%</div>
            <div className="text-xs text-slate-600 font-semibold uppercase mt-0.5">Australian Owned</div>
          </div>
        </div>

      </div>
    </section>
  );
}
