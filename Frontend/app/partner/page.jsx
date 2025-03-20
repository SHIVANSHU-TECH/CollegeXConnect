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
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen p-6 md:p-20 lg:p-28 pt-28 font-sans">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 mb-6 tracking-widest font-['Poppins']">
          Our Partners & Collaborations
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed font-medium font-['Raleway'] italic">
          We’re grateful for the organizations, startups, and brands that believe in{" "}
          <span className="font-semibold text-purple-700">CollegeX Connect</span>.
          Together, we’re building a powerful ecosystem for students, professionals, and institutions.
        </p>
      </motion.div>

      {/* Partner Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20"
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition cursor-pointer font-['Poppins']"
          >
            <div className="mb-6">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={140}
                className="mx-auto object-contain rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 tracking-wide">{partner.name}</h3>
            <p className="text-gray-600 text-base">{partner.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Collaboration CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center bg-white rounded-3xl shadow-2xl p-8 sm:p-12 font-['Playfair_Display']"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 tracking-wider">Looking to Collaborate or Invest?</h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed text-justify font-['Raleway']">
          Join us in revolutionizing student networking, opportunities, and learning experiences. 
          We're open to partnerships, collaborations, sponsorships, and funding. Let’s build the future together!
        </p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="mailto:collegeconnect.tech@gmail.com"
          className="inline-block bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 text-white font-semibold text-lg sm:text-xl py-4 px-10 sm:px-14 rounded-full shadow-lg hover:shadow-2xl transition duration-300 tracking-wide font-['Poppins']"
        >
          Connect with Us 📩
        </motion.a>
      </motion.div>

      {/* Footer Email */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-20 font-['Roboto']"
      >
        <p className="text-gray-600 text-lg sm:text-xl mb-6 italic">
          For partnerships, sponsorships, collaborations, or funding inquiries, feel free to email us:
        </p>
        <a 
          href="mailto:collegeconnect.tech@gmail.com" 
          className="text-blue-700 font-semibold text-xl sm:text-2xl hover:underline tracking-wide"
        >
          collegeconnect.tech@gmail.com
        </a>
      </motion.div>
    </div>
  );
}
