/*
 * File  : HeroSection.js
 * Created on Tue Oct 25 2025
 * Author: Galuh Kurnia
 * Copyright (c) 2025 Your Company
 */

import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden hero-gradient">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content - Left  */}
          <div className="text-white space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <p className="text-xl font-light tracking-wider text-white/80">
                Hi, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Galuh
                <span className="block text-white">Kurnia</span>
              </h1>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-lg md:text-xl font-medium text-white/90 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  Student Physics at University Surabaya State
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-white/80 leading-relaxed max-w-lg">
              Saya adalah mahasiswa Fisika di{" "}
              <span className="font-semibold text-white">
                Universitas Negeri Surabaya (UNESA)
              </span>
              yang saat ini tengah mengikuti program pelatihan di{" "}
              <span className="font-semibold text-white">Celerates</span>
              dengan fokus pengembangan pada bidang{" "}
              <span className="font-semibold text-white">
                UI/UX Design
              </span> dan{" "}
              <span className="font-semibold text-white">Web Development</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* My Journey */}
              <a
                href="/about"
                className="btn-gradient text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group"
              >
                <span>Jelajahi Tentang Saya</span>
                <div className="w-5 h-5 transform group-hover:translate-x-1 transition-transform">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              </a>

              {/* Connect */}
              <a
                href="/contact"
                className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <div className="w-5 h-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </div>
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {[
                { number: "10+", label: "Projects Done" },
                { number: "1+", label: "Years Experience" },
                { number: "2+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile  */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-out group">
                {/* Background  */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-3xl rotate-6 blur-sm group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-400/10 to-pink-400/10 rounded-2xl -rotate-2 blur-xs"></div>

                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/40 shadow-2xl shadow-blue-500/25 backdrop-blur-sm">
                  <img
                    src="/assets/images/personal/galuh-kurnia.png"
                    alt="GALH"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Subtle overla */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-white/60 animate-bounce">
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
