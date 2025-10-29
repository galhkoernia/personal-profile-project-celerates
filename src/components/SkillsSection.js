/*
 * File  : SkillsSection.js
 * Created on Tue Oct 27 2025
 * Author: Galuh Kurnia
 * Copyright (c) 2025 Your Company
 */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDrawPolygon,
  faCube,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const SkillsSection = () => {
  const skills = [
    {
      name: "Figma",
      icon: faFigma,
      category: "Design",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "JavaScript",
      icon: faJs,
      category: "Frontend",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      name: "Python",
      icon: faPython,
      category: "Backend",
      color: "from-blue-500 to-green-500",
    },
    {
      name: "AutoCAD",
      icon: faDrawPolygon,
      category: "Tools",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "SketchUp",
      icon: faCube,
      category: "Tools",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3 text-black">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Teknologi dan alat yang saya gunakan dalam pengembangan web dan
            desain antarmuka.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100"
            >
              {/* SIcon */}
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} mx-auto mb-3 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}
              >
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="w-5 h-5 text-white"
                />
              </div>

              {/* Skill Name */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  {skill.name}
                </h3>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {skill.category}
                </span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-sm">
            <FontAwesomeIcon
              icon={faCode}
              className="w-4 h-4 text-purple-500"
            />
            <span className="text-sm text-gray-600">
              Terus belajar dan mengembangkan skill baru
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
