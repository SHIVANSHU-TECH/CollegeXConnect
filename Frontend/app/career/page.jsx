"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer (React.js)",
    location: "Remote",
    type: "Full-time",
    description: "Build intuitive and modern web apps with React.js and Next.js.",
  },
  {
    id: 2,
    title: "Community Manager",
    location: "New Delhi",
    type: "Full-time",
    description: "Lead and grow our vibrant student and educator community.",
  },
  {
    id: 3,
    title: "Content Writer - EdTech",
    location: "Remote",
    type: "Part-time / Internship",
    description: "Craft engaging and impactful educational content.",
  },
];

export default function Career() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobs : jobs.filter((job) => job.type.includes(filter));

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen px-6 sm:px-16 lg:px-28 py-16 pt-28 font-sans">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 mb-6">
          Careers at College X Connect
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Join our mission to empower students and shape the future of education. Grow your career while making a difference.
        </p>
      </div>

      {/* Why Join Us */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-24"
      >
        {[
          { title: "🚀 Career Growth", color: "text-blue-700", desc: "Fast-paced environment focused on your professional growth and skills development." },
          { title: "🤝 Open Culture", color: "text-purple-700", desc: "A collaborative, transparent, and inclusive workspace where every voice matters." },
          { title: "💡 Real Impact", color: "text-pink-700", desc: "Create solutions that shape the learning journey of thousands of students." },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <h3 className={`text-2xl font-semibold mb-4 ${item.color}`}>{item.title}</h3>
            <p className="text-gray-600 text-lg">{item.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Filter Options */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
        {["All", "Remote", "Full-time", "Internship"].map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`px-5 py-3 rounded-full border ${
              filter === option ? "bg-blue-600 text-white" : "bg-white text-gray-700 border-gray-300"
            } hover:bg-blue-600 hover:text-white transition`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Open Positions */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-800 text-center">✨ Open Positions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">{job.title}</h3>
            <p className="text-gray-600 mb-6 text-lg">{job.description}</p>
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mb-6">
              <span>📍 {job.location}</span>
              <span>⏰ {job.type}</span>
            </div>
            <button
              onClick={() => setSelectedJob(job)}
              className="flex items-center gap-3 text-white bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 w-full sm:w-auto justify-center"
            >
              Apply Now <FaArrowRight />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-lg">
            <h3 className="text-2xl font-bold mb-4">Apply for {selectedJob.title}</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-lg bg-white" required />
              <input type="email" placeholder="Your Email" className="w-full border p-3 rounded-lg bg-white" required />
              <textarea placeholder="Cover Letter / Message" className="w-full border p-3 rounded-lg bg-white" rows="4" required></textarea>
              <input type="file" className="w-full border p-3 rounded-lg" />
              <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full sm:w-auto">Submit</button>
                <button type="button" onClick={() => setSelectedJob(null)} className="text-gray-600 hover:underline w-full sm:w-auto">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-24"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Didn't find your perfect role?</h3>
        <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
          We're always open to passionate talent. Drop your CV and let us know how you can contribute!
        </p>
        <a
          href="https://forms.gle/your-google-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl inline-block"
        >
          Drop Your CV
        </a>
      </motion.div>
    </div>
  );
}
