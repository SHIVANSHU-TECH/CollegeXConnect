"use client";
import Image from 'next/image'
import React, { useState } from "react";
import { motion } from "framer-motion";
// import webinar from "../../public/webinar.png";

const categories = ["All", "Webinars", "Workshops", "Cultural", "Technical", "Sports", "Festivals"];

const EventData = [
  {
    id: 1,
    title: "ReactJS Webinar",
    category: "Webinars",
    description: "Join our expert-led ReactJS webinar covering hooks and performance optimization.",
    date: "March 25, 2025",
    image: "/webinar.png",
  },
  {
    id: 2,
    title: "Hackathon 2025",
    category: "Technical",
    description: "Code your heart out in our 24-hour hackathon.",
    date: "April 10, 2025",
    image: "hackathon.jpg",
  },
  {
    id: 3,
    title: "Dance Fiesta",
    category: "Cultural",
    description: "Show your moves at our colorful cultural dance event.",
    date: "April 20, 2025",
    image: "dance.jpg",
  },
  {
    id: 4,
    title: "Python Workshop",
    category: "Workshops",
    description: "Hands-on Python programming workshop for beginners.",
    date: "March 30, 2025",
    image: "python.jpg",
  },
  {
    id: 5,
    title: "Sports Meet 2025",
    category: "Sports",
    description: "Compete in multiple sports activities and win prizes.",
    date: "May 5, 2025",
    image: "sports.jpg",
  },
];

const Event = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = EventData.filter((event) => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-gray-50 min-h-screen py-28 px-4 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold font-[cursive] text-gray-800 mb-10 tracking-wide">
          Explore <span className="text-blue-600">Upcoming Events</span>
        </h2>

        {/* Search Box */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="🔍 Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-7 py-3 border border-gray-300 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-base font-medium"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border text-sm font-semibold tracking-wide transition duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-base font-medium mb-4 leading-relaxed">
                  {event.description}
                </p>
                <p className="text-blue-500 font-semibold mb-4">{event.date}</p>

                {/* Apply Now & Volunteer Buttons */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-[40%] bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-semibold tracking-wide hover:underline"
                  >
                    Apply Now
                  </a>
                  <a
                    href="#"
                    className="w-[55%] bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm font-semibold tracking-wide hover:underline"
                  >
                    Join as Volunteer
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
