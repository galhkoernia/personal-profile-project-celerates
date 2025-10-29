/*
 * File  : Footer.js
 * Created on Tue Oct 28 2025
 * Author: Galuh Kurnia
 * Copyright (c) 2025 Your Company
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialIcons = [
    { 
      name: 'Instagram', 
      icon: faInstagram,
      url: 'https://www.instagram.com/galh_krnia?igsh=aXVrbjZuZm90cnBk' 
    },
    { 
      name: 'LinkedIn', 
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/galuh-kurnia-a25b9b325?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSq2Ht6N%2FSR6a32l1xvoR2A%3D%3D' 
    },
    { 
      name: 'GitHub', 
      icon: faGithub,
      url: 'https://github.com/galhkoernia' 
    }
  ];

  const footerLinks = ['About', 'Skills', 'Portfolio', 'Contact'];

  return (
    <footer className="bg-white border-t border-gray-100 py-12 relative overflow-hidden">
      
      {/* Background Text EffecT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h2 className="text-[12vw] md:text-[8rem] font-bold text-gray-400 select-none whitespace-nowrap">
          GALUH KURNIA
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          
          {/* Logo & Description */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <div className="w-2 h-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full"></div>
              <span className="text-gray-800 font-bold text-2xl">
                GALH<span className="text-[#667eea]">.</span>
              </span>
            </div>
            <p className="text-gray-600 max-w-md text-sm leading-relaxed">
              Creating impactful digital experiences through creative design 
              and modern technology solutions.
            </p>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-8 mb-8 lg:mb-0">
            {footerLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-[#667eea] transition-colors duration-300 font-medium text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Media  */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.name}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-0"></div>
                  
                  {/* Icon Container */}
                  <div className="relative w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:border-[#667eea] transition-all duration-300">
                    <FontAwesomeIcon 
                      icon={social.icon} 
                      className="w-4 h-4 text-gray-600 group-hover:text-[#667eea] transition-colors duration-300" 
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu  */}
        <div className="flex md:hidden justify-center space-x-6 mb-8">
          {footerLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-[#667eea] transition-colors duration-300 font-medium text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Galuh Kurnia Pratama. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Crafted with passion and attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;