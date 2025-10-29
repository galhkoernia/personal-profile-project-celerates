/*
 * File  : ContactSection.js
 * Created on Tue Oct 27 2025
 * Author: Galuh Kurnia
 * Copyright (c) 2025 Your Company
 */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot 
} from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 hero-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">Tertarik Kolaborasi?</h2>
            <p className="text-white text-opacity-90 mb-8 leading-relaxed">
              Mari berbicara tentang project Anda. Saya siap membantu mewujudkan
              ide digital Anda menjadi kenyataan.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-white text-opacity-90 hover:text-opacity-100 transition-colors duration-300">
                    galuh.23105@mhs.unesa.ac.id
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-white text-opacity-90 hover:text-opacity-100 transition-colors duration-300">
                    +62 812-5985-3104
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-white text-opacity-90 hover:text-opacity-100 transition-colors duration-300">
                    Surabaya, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-soft p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Pesan
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Ceritakan tentang project Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-gradient text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
