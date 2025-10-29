/*
 * File  : PortfolioSection.js
 * Created on Tue Oct 27 2025
 * Author: Galuh Kurnia
 * Copyright (c) 2025 Your Company
 */

import React from 'react';

const PortfolioSection = () => {
  const projects = [
    {
    id: 1,
    title: "Desain 3D Rumah 2 Lantai",
    category: "design",
    date: "21-01-2023",
    image: "/assets/images/work/01-design-house-2lt.png",
    description: "Model 3D rumah 2 lantai menggunakan SketchUp.",
    fullDescription:
      "Desain 3D ini dibuat menggunakan SketchUp untuk menggambarkan visual bangunan rumah 2 lantai. Fokus desain berada pada bentuk fasad, komposisi ruang, dan pencahayaan. Desain ini bertujuan memberikan gambaran realistis terhadap rancangan AutoCAD yang telah dibuat sebelumnya.",
    tags: ["SketchUp", "3D", "V-Ray"],
    demoUrl: "#",
  },
    {
      id: 2,
      title: "Personal Portfolio",
      category: "Website", 
      description: "Website portofolio pribadi yang dibangun dengan Next.js.",
      fullDescription: "Karya ini merupakan website portofolio pribadi yang dikembangkan menggunakan Next.js. Website ini berfungsi sebagai wadah untuk menampilkan karya, proyek, dan tulisan pribadi secara profesional. Fokus pengembangan berada pada tampilan responsif, struktur navigasi yang sederhana, serta kemudahan pengelolaan konten.",
      image: "/assets/images/work/02-personal-portfolio.png",
      tags: ["Frontend", "Web Development", "Portfolio"],
      demoUrl: "https://www.galhkoernia.my.id/",
      date: "15-03-2025"
    },
    {
      id: 3,
      title: "GALHAI — Tempat Berlabuhnya Cerita",
      category: "AI Application",
      description: "Terinspirasi dari kesunyian, GALHAI adalah sebuah ChatBox AI yang tengah dikembangkan sejak Mei 2025 hingga kini",
      fullDescription: "GALHAI adalah sebuah ChatBox AI yang tengah dikembangkan sejak Mei 2025 hingga kini. Ia lahir dari kesadaran sederhana, tidak semua orang memiliki tempat untuk bercerita. Melalui proyek ini, tercipta ruang digital yang hangat dan netral,tempat seseorang bisa berbagi pikiran, keresahan, atau perasaan tanpa takut dihakimi. Setiap tahap pengembangan bukan hanya proses teknis, tetapi juga perjalanan empati untuk memahami sisi manusia dalam kesunyian.",
      image: "/assets/images/work/02-galhbot.png",
      tags: ["AI", "ChatBox", "Empati Digital", "Ekspresi Diri"],
      demoUrl: "https://www.galhbot.web.id/",
      date: "10-05-2025 — sekarang"
    },
    {
      id: 4,
      title: "Labtronika — Website Eksperimen Elektronika",
      category: "Web Application",
      description: "Website ini merupakan luaran dari kegiatan Studi Independen bersama mitra, yang berfokus pada eksperimen dan pembelajaran elektronika secara interaktif.",
      fullDescription: "Labtronika adalah platform website yang masih dalam tahap pengembangan, sebagai luaran dari kegiatan Studi Independen bersama mitra IT. Website ini dirancang untuk mempermudah mahasiswa dan praktikan dalam melakukan eksperimen elektronika secara terarah dan interaktif.",
      image: "/assets/images/work/02-labtronika-preview.png",
      tags: ["Elektronika", "Web Development", "Fisika"],
      demoUrl: "https://www.labtronika.web.id/",
      date: "01-09-2025 — sekarang"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Portfolio Pilihan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kumpulan project  yang telah saya kerjakan dan beberapa masih proses pengembangan, menampilkan berbagai 
            aspek keahlian dalam desain, development, dan inovasi teknologi
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card-soft overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/assets/placeholder-project.png';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {project.date}
                  </span>
                </div>

                {/*  CTA Button */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-lg font-semibold mb-2">{project.title}</div>
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-gray-800 mb-2 text-lg leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <button className="flex-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:from-[#5a6fd8] hover:to-[#6a4190]">
                    Lihat Detail
                  </button>
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                      title="Live Demo"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Lihat Lebih Banyak Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;