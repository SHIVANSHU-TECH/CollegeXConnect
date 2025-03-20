"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function SuggestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "/api/suggest",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
        }
      );
      setSuccess(true);
      setFormData({ name: "", email: "", suggestion: "" });
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen p-16 md:p-28 font-sans">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 mb-4">
          Share Your Suggestions
        </h1>
        <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          Help us grow! Suggest the features, tools, or pages you want to see next on{" "}
          <span className="font-semibold text-purple-700">
            <Link href="/">CollegeX Connect </Link>
          </span>.
        </p>
      </motion.div>

      {/* Suggestion Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10"
      >
        <h2 className="text-4xl font-bold text-gray-800  mb-8 text-center">
          Your{" "}
          <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">
            Voice
          </span>{" "}
          Matters!
        </h2>

        <form className="space-y-8 text-lg" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-3 font-semibold text-gray-700 ">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-white"
              required
            />
          </div>

          <div>
            <label className="block mb-3 font-semibold text-gray-700 ">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 bg-white focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          <div>
            <label className="block mb-3 font-semibold text-gray-700 ">
              What would you like us to add?
            </label>
            <textarea
              rows="5"
              name="suggestion"
              placeholder="Share your ideas for new pages, tools, or features..."
              value={formData.suggestion}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-600 bg-white"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl text-xl transition duration-300"
          >
            Submit Suggestion 🚀
          </motion.button>
        </form>

        {success && (
          <p className="text-green-600 text-center mt-6 text-xl font-semibold">
            ✅ Thank you! Your suggestion has been submitted.
          </p>
        )}
      </motion.div>

      {/* CTA Footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-20"
      >
        <h3 className="text-3xl font-bold mb-4 text-gray-800">Want to Explore More?</h3>
        <p className="text-gray-600 text-lg mb-8">
          Check out all the opportunities waiting for you on CollegeX Connect.
        </p>
        <Link href="/opportunities">
          <button className="bg-blue-700 text-white px-10 py-4 rounded-full text-lg hover:bg-blue-800 transition duration-300 shadow-lg hover:shadow-xl">
            Explore Opportunities
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
