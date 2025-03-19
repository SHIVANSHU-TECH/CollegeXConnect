"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaClock, FaSearch } from "react-icons/fa";

const Courseshardcode = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Master HTML, CSS, JavaScript, React, and Node.js with hands-on projects.",
    duration: "12 Weeks",
    link: "/courses/full-stack",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description: "Deep dive into Python, Pandas, NumPy, and Machine Learning techniques.",
    duration: "16 Weeks",
    link: "/courses/data-science",
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass",
    description: "SEO, Social Media Marketing, Google Ads, and Email Marketing strategies.",
    duration: "10 Weeks",
    link: "/courses/digital-marketing",
  },
  {
    id: 4,
    title: "Competitive Coding",
    description: "DSA, Problem-Solving, and Competitive Programming Strategies.",
    duration: "8 Weeks",
    link: "/courses/competitive-coding",
  },
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses based on search input
  const filteredCourses = Courseshardcode.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Explore Our <span className="text-blue-600">Premium Courses</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Upskill yourself with industry-relevant courses designed for success.
        </p>

        {/* 🔍 Search Box */}
        <div className="relative max-w-lg mx-auto mb-10">
          <input
            type="text"
            placeholder=" 🔍 Search for a course..."
            className="w-full pl-10 pr-6 py-3 border border-gray-300 focus:outline-none focus:ring-10 focus:ring-blue-500 focus:border-blue-600 transition-all duration-300  bg-white rounded-full shadow-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transition duration-300 transform hover:shadow-lg hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{course.description}</p>

                {/* Course Duration */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FaClock className="mr-2 text-blue-500" /> {course.duration}
                </div>

                {/* Enroll Now Button */}
                <Link
                  href={course.link}
                  className="inline-block w-full text-center px-5 py-3 bg-blue-600 text-white font-medium rounded-lg transition duration-300 hover:bg-blue-700"
                >
                  Enroll Now
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg">No courses found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Courses;
