import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lee's Roofing | Expert Roof Restoration, Repairs & Guttering Melbourne",
  description: "Melbourne's trusted roofing specialists for over 25 years. Roof restoration, leak repairs, gutter replacement, and roof cleaning. Get your free quote today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans antialiased text-slate-800 bg-white">
        {children}
      </body>
    </html>
  );
}

