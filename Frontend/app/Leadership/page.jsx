"use client";

import { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const founders = [
  {
    id: 1,
    name: "Amit Verma",
    role: "Co-Founder & CTO",
    img: "/Amit.jpg",
    desc: "Driving technology forward with creative problem-solving.",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 2,
    name: "Shivanshu Shukla",
    role: "Founder & CEO",
    img: "/shivanshu.jpeg",
    desc: "A visionary leader fostering innovation, connections, and endless possibilities.",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 3,
    name: "Satyam Kumar",
    role: "Co-Founder & CMO",
    img: "/Satyam.jpg",
    desc: "Crafting brand stories that inspire and engage communities.",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
];

export default function Leadership() {
  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 md:py-28 px-4 md:px-10 pt-28">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6">
        Meet Our Leaders
      </h1>

      <p className="text-justify text-gray-700 max-w-3xl mx-auto text-base md:text-lg mb-16">
        At <span className="font-semibold text-blue-600">CollegeX Connect</span>, leadership is not just about titles, it’s about inspiring change, building communities, and leading with vision. Our leaders represent a perfect blend of passion, skills, and creativity that drives our mission forward.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 max-w-7xl mx-auto">
        {founders.map((founder) => (
          <div
            key={founder.id}
            className="w-full h-[500px] sm:h-[480px] perspective cursor-pointer"
            onClick={() => handleClick(founder.id)}
          >
            <div className={`flip-card-inner ${activeCard === founder.id ? "flipped" : ""}`}>
              {/* Back Side */}
              <div className="flip-card-back bg-gradient-to-tr from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg flex items-center justify-center">
                <p className="text-lg md:text-xl font-semibold px-4">Click to Reveal</p>
              </div>

              {/* Front Side */}
              <div className="flip-card-front bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-500">
                <div className="rounded-t-2xl overflow-hidden">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="w-full h-52 sm:h-60 object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{founder.name}</h2>
                  <p className="text-blue-600 font-medium mb-3">{founder.role}</p>
                  <p className="text-gray-600 text-sm sm:text-base mb-5 leading-relaxed">{founder.desc}</p>
                  <div className="flex justify-center gap-5 text-xl">
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="hover:text-blue-700 transition duration-300" />
                    </a>
                    <a href={founder.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="hover:text-blue-400 transition duration-300" />
                    </a>
                    <a href={founder.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="hover:text-pink-500 transition duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leadership Vision */}
      <div className="mt-20 max-w-5xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 bg-clip-text text-transparent mb-8 animate-fadeIn">
          Our Leadership Vision
        </h2>

        <p className="text-gray-800 text-base md:text-lg leading-relaxed tracking-wide font-[Playfair Display] italic transition duration-500 hover:scale-[1.02]">
          <span className="text-blue-700 font-semibold">At CollegeX Connect</span>, we believe leadership
          is not just about positions or titles. It's about <span className="text-purple-700 font-bold">inspiring change</span>,
          <span className="text-pink-600 font-bold"> nurturing talents</span>, and <span className="text-indigo-700 font-bold"> creating impact</span> that resonates.
          <br /><br />
          Our leaders craft every decision with a vision to empower students, build meaningful connections, 
          and shape a future where education meets innovation. Together, we <span className="underline decoration-pink-500 font-semibold">lead with purpose, passion, and creativity</span>.
        </p>

        <div className="mt-8">
          <a 
            href="#"
            className="inline-block px-8 py-4 text-white text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:scale-105 hover:shadow-2xl transition duration-500"
          >
            Join the Movement 🚀
          </a>
        </div>
      </div>
    </div>
  );
}
