/*
 * File  : TestimonialsSection.js
 * Created on Tue Oct 28 2025
 * Author: Galuh Kurnia
 * Copyright (c) 2025 Your Company
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie,         
  faStar,           
  faQuoteLeft       
} from '@fortawesome/free-solid-svg-icons';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ekawati M",
      position: "Kepala Sekolah",
      content: "Website-nya terlihat profesional, tampilannya keren, dan sangat responsif di berbagai perangkat.",
      icon: faUserTie,
      color: "from-purple-500 to-cyan-500"
    },
    {
      name: "Ainun M", 
      position: "Manager PLN",
      content: "Hasil pengerjaannya sangat memuaskan, desainnya rapi dan performanya mantap!",
      icon: faUserTie,
      color: "from-blue-500 to-pink-500"
    },
    {
      name: "Tika M",
      position: "Konsultan ",
      content: "Website-nya terlihat profesional, tampilannya keren, dan sangat responsif di berbagai perangkat.",
      icon: faUserTie,
      color: "from-purple-500 to-cyan-500"
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimoni Klien</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apa kata klien yang telah bekerja sama dengan saya
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-soft p-6 relative group hover:transform hover:scale-105 transition-all duration-300">
              
              {/* Quote Ico */}
              <div className="absolute top-4 right-4 opacity-10">
                <FontAwesomeIcon 
                  icon={faQuoteLeft} 
                  className="w-8 h-8 text-gray-600" 
                />
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center shadow-lg`}>
                  <FontAwesomeIcon 
                    icon={testimonial.icon} 
                    className="w-6 h-6 text-white" 
                  />
                </div>

                <div className="flex-1">
                  {/* Testimonial Content */}
                  <p className="text-gray-600 mb-4 italic relative z-10 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Client Info */}
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>

                  <div className="flex items-center gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FontAwesomeIcon 
                        key={star}
                        icon={faStar}
                        className="w-3 h-3 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;