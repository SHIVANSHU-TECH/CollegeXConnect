"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyCollegeX() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen p-6 sm:p-8 md:p-12 lg:p-24 font-sans pt-28">
    {/* Hero Section */}
    <div className="text-center mb-10 md:mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 mb-6 tracking-tight leading-tight font-serif">
        Why Choose CollegeX Connect?
      </h1>
      <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto leading-relaxed tracking-wide font-medium">
        It’s not just a platform — it’s a movement to empower, uplift, and connect the next generation of students, educators, and professionals.
      </p>
    </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
        {[
          {
            title: "🎯 Purpose-Driven",
            color: "text-blue-700",
            desc: "Every feature solves real student problems — whether it’s finding opportunities, networking, or upgrading skills.",
          },
          {
            title: "💬 Community First",
            color: "text-purple-700",
            desc: "Join a network of dreamers, learners, and achievers who thrive on collaboration and mutual growth.",
          },
          {
            title: "🌐 Future-Ready",
            color: "text-pink-700",
            desc: "AI-powered tools, career roadmaps, and real-time opportunities designed to prepare you for tomorrow.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border hover:shadow-2xl transition duration-300"
          >
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${feature.color} mb-4 font-serif`}>
              {feature.title}
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed tracking-wide font-medium">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-8 text-center font-serif tracking-tight">
          About Us
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <video
            controls
            className="rounded-2xl shadow-lg w-full lg:w-2/3 max-h-[400px] object-cover"
          >
            <source src="/video/collegex_intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      {/* Impact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg text-center max-w-5xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-serif tracking-tight">
          Built By Students, For Students
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 tracking-wide font-medium">
          We know the struggle because we’ve lived it. <b>CollegeX Connect</b> was born out of late-night brainstorming sessions, countless rejections, and the shared dream of changing how students access growth opportunities.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-700 font-serif tracking-tight">
          Your journey matters. Let's walk it together.
        </p>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-serif tracking-tight">
          Ready to Be Part of the Change?
        </h3>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 leading-relaxed tracking-wide font-medium max-w-3xl mx-auto">
          Join thousands of students and professionals already transforming their careers with us.
        </p>
        <Link
          href="/opportunities"
          className="bg-blue-700 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl hover:bg-blue-800 transition duration-300 shadow-md hover:shadow-lg font-semibold tracking-wide inline-block"
        >
          Explore Opportunities
        </Link>
      </motion.div>
    </div>
  );
}
