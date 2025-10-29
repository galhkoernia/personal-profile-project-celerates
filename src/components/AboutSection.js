/*
 * File  : AboutSection.js
 * Created on Tue Oct 27 2025
 * Author: Galuh Kurnia
 * Copyright (c) 2025 Your Company
 */

import React from "react";

const AboutSection = () => {
  const traits = [
  { name: 'Analitis & Teliti', icon: <i className="fa-solid fa-microscope text-cyan-400"></i> },
  { name: 'Pemecah Masalah', icon: <i className="fa-solid fa-brain text-amber-400"></i> },
  { name: 'Kritis & Logis', icon: <i className="fa-solid fa-gear text-gray-300"></i> },
  { name: 'Kreatif dalam Eksperimen', icon: <i className="fa-solid fa-atom text-purple-400"></i> },
];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-soft p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon  */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Tentang Saya
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Saya seorang mahasiswa fisika yang tertarik mengembangkan
                teknologi berbasis sensor, berbasis web, dan berbasis kecerdasan
                buatan. Berbekal latar belakang keilmuan dan pengalaman
                mengikuti bootcamp, saya terbiasa menyelesaikan masalah teknis
                secara sistematis. Saya aktif dalam organisasi obotika dan
                belajar melalui proyek pribadi dan akademik.
              </p>

              {/* Traits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {traits.map((trait, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-lg">{trait.emoji}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {trait.name}
                    </span>
                  </div>
                ))}
              </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
