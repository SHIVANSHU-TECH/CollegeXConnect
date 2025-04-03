"use client";
import Image from 'next/image'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUpload } from "react-icons/fi"; // Icon for uploader


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
    image: "/hackathon.jpg",
  },
  {
    id: 3,
    title: "Dance Fiesta",
    category: "Cultural",
    description: "Show your moves at our colorful cultural dance event.",
    date: "April 20, 2025",
    image: "/dance.jpg",
  },
  {
    id: 4,
    title: "Python Workshop",
    category: "Workshops",
    description: "Hands-on Python programming workshop for beginners.",
    date: "March 30, 2025",
    image: "/python.jpg",
  },
  {
    id: 5,
    title: "Sports Meet 2025",
    category: "Sports",
    description: "Compete in multiple sports activities and win prizes.",
    date: "May 5, 2025",
    image: "/sports.jpg",
  },
];


const Event = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    date: '',
    uploader: '',
    image: null, // Now holds the uploaded file
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registrationData, setRegistrationData] = useState({ name: "", email: "" });

  const filteredEvents = EventData.filter((event) => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistrationDataChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleEnrollClick = (event) => {
    setSelectedEvent(event);
    setShowRegistrationModal(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registered for:", selectedEvent.title, "by", registrationData.name);
    setShowModal(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Selected File:', file);
      setFormData({ ...formData, image: file });
      // You can implement actual file upload logic here
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created by:", formData.uploader);
    console.log("Event Data:", formData);
    // Future connection to database or file upload
    setShowModal(false);
  };

  

  return (
    <section className="bg-gray-50 min-h-screen py-28 px-4 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold font-[cursive] text-gray-800 mb-10 tracking-wide">
          Explore <span className="text-blue-600">Upcoming Events</span>
        </h2>

        {/* Search and Create Button on Same Line */}
        <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="🔍 Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-[60%] px-7 py-3 border border-gray-300 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-base font-medium"
          />
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 font-semibold"
          >
            + Create Event
          </button>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border text-sm font-semibold tracking-wide transition duration-300 ${selectedCategory === category
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

                <div className="flex gap-4">
                  
                <button
                onClick={() => handleEnrollClick(event)}
                className="w-[40%] bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-semibold tracking-wide hover:underline"
                >
                 Apply Now
                </button> 
                  
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

      {/* Modal for Creating Event */}
      {showCreateModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white rounded-2xl shadow-2xl w-full max-w-[90%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[42%] max-h-[90vh] p-6 relative overflow-y-auto border border-gray-200"
    >
      {/* Close Icon */}
      <button
        onClick={() => setShowCreateModal(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
      >
        &times;
      </button>

      {/* <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">🎉 Create New Event</h2> */}

      <form onSubmit={handleSubmit} className="space-y-6">
  {/* Form Header */}
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2 font-poppins">
      Create Event ✨
    </h2>
    <p className="text-gray-500 text-sm">Craft your perfect event experience</p>
  </div>

  <div className="space-y-5">
    {/* Event Title */}
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        required
        onChange={handleFormDataChange}
        className="w-full border-2 border-gray-200 px-6 py-3.5 rounded-xl bg-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 placeholder-gray-400 text-gray-700 font-medium transition-all"
      />
    </div>

    {/* Category Select */}
    <div className="relative">
      <select
        name="category"
        required
        onChange={handleFormDataChange}
        className="w-full border-2 border-gray-200 px-6 py-3.5 rounded-xl bg-white appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-gray-700 font-medium transition-all"
      >
        <option value="">Select Category</option>
        {categories.slice(1).map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
      <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    {/* Description */}
    <div className="relative group">
      <textarea
        name="description"
        placeholder="Describe your event..."
        required
        rows="3"
        onChange={handleFormDataChange}
        className="w-full border-2 border-gray-200 px-6 py-3.5 rounded-xl bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 placeholder-gray-400 text-gray-700 font-medium resize-none transition-all"
      />
      <div className="absolute bottom-3 right-3 text-gray-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      </div>
    </div>

    {/* Date & Uploader Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="relative">
        <input
          type="date"
          name="date"
          required
          onChange={handleFormDataChange}
          className="w-full border-2 border-gray-200 px-6 py-3.5 rounded-xl bg-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-gray-700 font-medium transition-all"
        />
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          name="uploader"
          placeholder="Your Name"
          required
          onChange={handleFormDataChange}
          className="w-full border-2 border-gray-200 px-6 py-3.5 rounded-xl bg-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 placeholder-gray-400 text-gray-700 font-medium transition-all"
        />
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>
    </div>

    {/* File Upload */}
    <div className="mt-6">
      <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-8 cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-colors group">
        <div className="mb-4 text-purple-600 group-hover:text-purple-700 transition-colors">
          <FiUpload className="w-10 h-10" />
        </div>
        <span className="text-gray-600 font-medium group-hover:text-purple-700 transition-colors">
          Drag & drop or{" "}
          <span className="text-purple-600 font-semibold">browse files</span>
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
        <p className="text-sm text-gray-400 mt-2">JPEG, PNG, WEBP (max 5MB)</p>
      </label>
    </div>

    {/* Submit Button */}
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold tracking-wide hover:shadow-xl transition-all"
    >
      Create Event 🌟
    </motion.button>
  </div>
</form>
    </motion.div>
  </div>
)}
{showRegistrationModal && selectedEvent && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative w-full max-w-md mx-2" // Added mx-2 for small screen margins
    >
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20"> {/* Responsive padding */}
        {/* Header */}
        <div className="text-center mb-4 md:mb-6"> {/* Responsive margin */}
          <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4"> {/* Responsive icon size */}
            <svg 
              className="w-6 h-6 md:w-8 md:h-8 text-blue-600" // Responsive icon
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-poppins"> {/* Responsive text */}
            Join {selectedEvent.title}
          </h2>
          <p className="text-gray-500 text-xs md:text-sm">Enter your details to register</p> {/* Responsive text */}
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4 md:space-y-6"> {/* Responsive spacing */}
          <div className="space-y-3 md:space-y-4">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                onChange={handleRegistrationDataChange}
                className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base bg-white/90 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder-gray-400 text-gray-700 font-medium" // Responsive padding/text
              />
              {/* ... icon ... */}
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                onChange={handleRegistrationDataChange}
                className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base bg-white/90 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder-gray-400 text-gray-700 font-medium" // Responsive padding/text
              />
              {/* ... icon ... */}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 md:gap-3"> {/* Responsive spacing */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 md:py-4 text-sm md:text-base rounded-lg font-semibold tracking-wide hover:shadow-lg transition-all" // Responsive padding/text
            >
              Secure My Spot
            </motion.button>
            
            <button
              type="button"
              onClick={() => setShowRegistrationModal(false)}
              className="w-full py-2.5 md:py-3.5 text-xs md:text-sm text-gray-600 hover:text-gray-800 font-medium rounded-lg transition-colors" // Responsive padding/text
            >
              Maybe Later
            </button>
          </div>
        </form>

        {/* Event Preview */}
        <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white/80 rounded-lg border border-gray-100 flex items-center gap-3 md:gap-4"> {/* Responsive spacing */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden"> {/* Responsive image */}
            <Image
              src={selectedEvent.image}
              alt={selectedEvent.title}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h4 className="text-xs md:text-sm font-semibold text-gray-800">{selectedEvent.title}</h4> {/* Responsive text */}
            <p className="text-[0.65rem] md:text-xs text-gray-500">{selectedEvent.date}</p> {/* Responsive text */}
          </div>
        </div>
      </div>
    </motion.div>
  </div>
)}
</section>
  );
};

export default Event;
