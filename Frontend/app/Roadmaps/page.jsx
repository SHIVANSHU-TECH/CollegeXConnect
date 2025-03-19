"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const categories = ["All", "Technical", "Marketing", "Trading", "Sales", "Design", "Freelancing", "Personal Development"];

const roadmaps = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Technical",
    description: "Master HTML, CSS, JavaScript, React, Node.js, and more.",
    file: "/roadmaps/fullstack.pdf",
    downloads: 1500,
    trending: true,
  },
  {
    id: 2,
    title: "Digital Marketing Pro",
    category: "Marketing",
    description: "SEO, SEM, Social Media, Email Campaigns & Analytics.",
    file: "/roadmaps/marketing.pdf",
    downloads: 1200,
    trending: false,
  },
  {
    id: 3,
    title: "Stock Market Trading",
    category: "Trading",
    description: "Learn fundamentals, technical analysis, and strategies.",
    file: "/roadmaps/trading.pdf",
    downloads: 1700,
    trending: true,
  },
];

const Roadmaps = ({ isLoggedIn }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewFile, setPreviewFile] = useState(null);
  const [showTrending, setShowTrending] = useState(false);
  const [showDownloaded, setShowDownloaded] = useState(false);

  const filteredRoadmaps = roadmaps.filter((r) =>
    (selectedCategory === "All" || r.category === selectedCategory) &&
    (r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const mostDownloaded = [...roadmaps].sort((a, b) => b.downloads - a.downloads).slice(0, 3);
  const trending = roadmaps.filter((r) => r.trending);

  // Roadmap card component to avoid repetition
  const RoadmapCard = ({ roadmap }) => (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
      <div className="p-6 text-left">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:text-purple-600 transition duration-300">
          {roadmap.title}
        </h3>
        <p className="text-gray-600 text-base mb-4">{roadmap.description}</p>

        <div className="flex gap-4">
          <button
            onClick={() => setPreviewFile(roadmap.file)}
            className="w-[50%] bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 text-sm font-semibold"
          >
            View
          </button>
          {isLoggedIn ? (
            <a
              href={roadmap.file}
              download
              className="w-[50%] bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 text-sm font-semibold"
            >
              Download
            </a>
          ) : (
            <button
              className="w-[50%] bg-gray-400 text-white py-2 rounded-lg text-sm font-semibold cursor-not-allowed"
              title="Login to Download"
            >
              🔒 Download
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-gradient-to-tr from-purple-200 via-purple-400 to-indigo-700
 min-h-screen py-28 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-10 font-[cursive] ">
          📚 Skill Learning <span className="text-purple-700">Roadmaps</span>
        </h2>

        {/* Search */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="🔎 Search roadmaps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-lg px-7 py-3 border rounded-full shadow bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full border font-semibold tracking-wide ${
                selectedCategory === cat ? "bg-purple-700 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-purple-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Sections Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* 🔥 Trending Section */}
          <div className="text-left">
            <div
              className="flex justify-between items-center cursor-pointer bg-white p-4 rounded-xl shadow"
              onClick={() => setShowTrending(!showTrending)}
            >
              <h3 className="text-2xl font-poppins font-400 text-gray-800 ">🔥 Trending</h3>
              {showTrending ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
            </div>

            {showTrending && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 mt-6"
              >
                {trending.map((roadmap) => (
                  <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                ))}
              </motion.div>
            )}
          </div>

          {/* 📈 Most Downloaded Section */}
          <div className="text-left">
            <div
              className="flex justify-between items-center cursor-pointer bg-white p-4 rounded-xl shadow"
              onClick={() => setShowDownloaded(!showDownloaded)}
            >
              <h3 className="text-2xl font-400 text-gray-800">📈 Most Downloaded</h3>
              {showDownloaded ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
            </div>

            {showDownloaded && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 mt-6"
              >
                {mostDownloaded.map((roadmap) => (
                  <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* 📜 All Roadmaps */}
        <h3 className="text-4xl font-600 font-[monospace] text-gray-800 mb-6 ">📜 All Roadmaps</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredRoadmaps.map((roadmap) => (
            <motion.div
              key={roadmap.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <RoadmapCard roadmap={roadmap} />
            </motion.div>
          ))}
        </div>

        {/* PDF Preview Modal */}
        {previewFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setPreviewFile(null)}
          >
            <div
              className="bg-white p-6 rounded-xl shadow-xl w-11/12 max-w-5xl relative max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">📄 Roadmap Preview</h3>
              <iframe src={previewFile} width="100%" height="500px" className="rounded-lg border"></iframe>
              <button
                onClick={() => setPreviewFile(null)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Roadmaps;