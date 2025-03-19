"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PartnersPage() {
  const partners = [
    {
      name: "College Nexus",
      description: "Brief description of the collaboration or partnership details.",
      logo: "/cn.jpeg",
    },
    {
      name: "Delhi Colleges",
      description: "Details of partner's contribution, collaboration, or event.",
      logo: "/dc.jpeg",
    },
    {
      name: "Future Partner",
      description: "Showcasing their role in the community and collaboration.",
      logo: "/partners/partner-placeholder.png",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen p-16 md:p-28 font-sans">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 mb-6 tracking-widest font-['Poppins']">
          Our Partners & Collaborations
        </h1>
        <p className="text-gray-700 text-xl max-w-4xl mx-auto leading-relaxed font-medium font-['Raleway'] italic">
          We’re grateful for the organizations, startups, and brands that believe in 
          <span className="font-semibold text-purple-700"> CollegeX Connect</span>.
          Together, we’re building a powerful ecosystem for students, professionals, and institutions.
        </p>
      </motion.div>

      {/* Partner Cards with Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20"
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition font-['Poppins']"
          >
            <div className="mb-6">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={120}
                className="mx-auto object-contain rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 tracking-wide">{partner.name}</h3>
            <p className="text-gray-600 text-base">{partner.description}</p>
          </div>
        ))}
      </motion.div>

      {/* Collaboration CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center bg-white rounded-3xl shadow-xl p-12 font-['Playfair_Display']"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-800 tracking-wider">Looking to Collaborate or Invest?</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed font-['Raleway']">
          Join us in revolutionizing student networking, opportunities, and learning experiences. 
          We're open to partnerships, collaborations, sponsorships, and funding. Let's build the future together!
        </p>

        <a
          href="mailto:collegeconnect.tech@gmail.com"
          className="inline-block bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 text-white font-semibold text-xl py-4 px-12 rounded-full shadow-lg hover:shadow-2xl transition duration-300 tracking-wide font-['Poppins']"
        >
          Connect with Us 📩
        </a>
      </motion.div>

      {/* Footer Email */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-20 font-['Roboto']"
      >
        <p className="text-gray-600 text-lg mb-8 italic">For partnerships, sponsorships, collaborations, or funding inquiries, feel free to email us:</p>
        <a href="mailto:collegeconnect.tech@gmail.com" className="text-blue-700 font-semibold text-xl hover:underline tracking-wide">
          collegeconnect.tech@gmail.com
        </a>
      </motion.div>
    </div>
  );
}
