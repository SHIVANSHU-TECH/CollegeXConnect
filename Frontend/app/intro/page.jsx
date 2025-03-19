"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyCollegeX() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen p-32 font-sans">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 mb-6 tracking-tight leading-tight font-serif">
          Why Choose CollegeX Connect?
        </h1>
        <p className="text-gray-700 text-2xl max-w-4xl mx-auto leading-relaxed tracking-wide font-[500]">
          Because it's more than just a platform. It’s a movement to empower, uplift, and connect the next generation of students, educators, and professionals.
        </p>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-8 border hover:shadow-2xl transition duration-300"
        >
          <h3 className="text-3xl font-extrabold text-blue-700 mb-4 font-serif tracking-tight">
            🎯 Purpose-Driven
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed tracking-wide font-medium">
            Every feature we build solves real student problems—whether it’s finding opportunities, networking, or upgrading skills.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-8 border hover:shadow-2xl transition duration-300"
        >
          <h3 className="text-3xl font-extrabold text-purple-700 mb-4 font-serif tracking-tight">
            💬 Community First
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed tracking-wide font-medium">
            We thrive on collaboration. Join a network of dreamers, learners, and achievers who believe in mutual growth.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-8 border hover:shadow-2xl transition duration-300"
        >
          <h3 className="text-3xl font-extrabold text-pink-700 mb-4 font-serif tracking-tight">
            🌐 Future-Ready
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed tracking-wide font-medium">
            AI-powered tools, career roadmaps, and real-time opportunities—all designed to prepare you for tomorrow.
          </p>
        </motion.div>
      </div>

      {/* About Us Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-24">
        <h2 className="text-5xl font-bold text-gray-700 mb-10 text-center font-serif tracking-tight">About Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <video controls className="rounded-2xl shadow-lg w-full md:w-1/2">
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
        className="bg-white rounded-3xl p-12 shadow-xl text-center max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6 font-serif tracking-tight">Built By Students, For Students</h2>
        <p className="text-gray-700 text-xl leading-relaxed mb-8 tracking-wide font-medium">
          We know the struggle because we’ve lived it. <b>College x Connect</b> was born out of late-night brainstorming sessions, countless rejections, and the shared dream of changing how students access growth opportunities.
        </p>
        <p className="text-2xl font-semibold text-purple-700 font-serif tracking-tight">Your journey matters. Let's walk it together.</p>
      </motion.div>

      {/* Join CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-24"
      >
        <h3 className="text-4xl font-bold mb-6 text-gray-800 font-serif tracking-tight">Ready to Be Part of the Change?</h3>
        <p className="text-gray-600 text-xl mb-8 leading-relaxed tracking-wide font-medium">
          Join thousands of students and professionals who are already transforming their careers with us.
        </p>
        <button className="bg-blue-700 text-white px-12 py-5 rounded-full text-xl hover:bg-blue-800 transition duration-300 shadow-lg hover:shadow-xl font-semibold tracking-wide">
          <Link href="/opportunities">
            Explore Opportunities
          </Link>
        </button>
      </motion.div>
    </div>
  );
}
