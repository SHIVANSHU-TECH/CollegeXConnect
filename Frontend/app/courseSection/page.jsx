"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaClock } from "react-icons/fa";

const initialCourses = [
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
  const [courses, setCourses] = useState(initialCourses);
  const [showModal, setShowModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    duration: "",
    link: "",
  });

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddCourse = (e) => {
    e.preventDefault();
    setCourses([
      ...courses,
      { ...newCourse, id: courses.length + 1 },
    ]);
    setNewCourse({ title: "", description: "", duration: "", link: "" });
    setShowModal(false);
  };

  return (
    <section className="py-32 bg-gray-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Explore Our <span className="text-blue-600">Premium Courses</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Upskill yourself with industry-relevant courses designed for success.
        </p>

        {/* Search + Add Course */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-10">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="🔍 Search for a course..."
              className="w-full pl-10 pr-6 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white rounded-full shadow-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition whitespace-nowrap"
          >
            + Add New Course
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transition duration-300 transform hover:shadow-lg hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{course.description}</p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FaClock className="mr-2 text-blue-500" /> {course.duration}
                </div>

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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-lg p-8 relative shadow-2xl">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">Add New Course</h3>
            <form onSubmit={handleAddCourse} className="space-y-5">
              <input
                type="text"
                placeholder="Course Title"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Course Description"
                value={newCourse.description}
                onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                required
                rows="4"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <input
                type="text"
                placeholder="Duration (e.g., 8 Weeks)"
                value={newCourse.duration}
                onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Link (e.g., /courses/new-course)"
                value={newCourse.link}
                onChange={(e) => setNewCourse({ ...newCourse, link: e.target.value })}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
