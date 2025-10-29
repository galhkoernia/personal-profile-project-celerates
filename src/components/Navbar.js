/*
 * File  : Navbar.js
 * Created on Tue Oct 24 2025
 * Galuh Kurnia
 * Copyright (c) 2025 Your Company
 */

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["About", "Skills", "Portfolio", "Contact"];
  const socialIcons = [
    {
      name: "Instagram",
      icon: faInstagram,
      url: "https://www.instagram.com/galh_krnia?igsh=aXVrbjZuZm90cnBk",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/galuh-kurnia-a25b9b325?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSq2Ht6N%2FSR6a32l1xvoR2A%3D%3D",
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-gray-200/50 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full"></div>
            <span className="text-gray-800 font-bold text-xl tracking-tight">
              GALH<span className="text-[#667eea]">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-[#667eea] transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#667eea] transition-colors duration-300 hover:scale-110 transform"
                title={social.name}
              >
                <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-[#667eea] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-[#667eea] transition-colors duration-300 font-medium py-2 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}

              {/* Social Icons in Mobile Menu */}
              <div className="flex justify-center space-x-6 pt-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#667eea] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
