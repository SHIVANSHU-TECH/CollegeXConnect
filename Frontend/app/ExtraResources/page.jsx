"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaEye, FaDownload } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const hardcodedResources = [
  {
    id: 1,
    title: "JavaScript Cheatsheet",
    description: "A complete guide to mastering JavaScript.",
    viewLink: "https://drive.google.com/file/d/1KtLkA0FAfxVOMCGfprIhtmevOJEmR-gH/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=1KtLkA0FAfxVOMCGfprIhtmevOJEmR-gH",
  },
  {
    id: 2,
    title: "Flask Cheatsheet",
    description: "Essential notes to get started with React.js.",
    viewLink: "https://drive.google.com/file/d/1MKHHWwZLq_DUsEw3mJBqSrAMOvlEJjsM/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=1MKHHWwZLq_DUsEw3mJBqSrAMOvlEJjsM",
  },
  {
    id: 3,
    title: "CSS Cheatsheet",
    description: "Learn full-stack development step-by-step.",
    viewLink: "https://drive.google.com/file/d/1DKZuWL7rOQIg4dueNRBWunekJEVCBzgK/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=1DKZuWL7rOQIg4dueNRBWunekJEVCBzgK",
  },
  {
    id: 4,
    title: "Html 5",
    description: "Html 5 cheatsheet.",
    viewLink: "https://drive.google.com/file/d/1lkvt17_ZMYLeCT0qJTJyyp70Is9UfAQ0/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=1lkvt17_ZMYLeCT0qJTJyyp70Is9UfAQ0",
  },
  {
    id: 5,
    title: "Sql",
    description: "A complete guide to mastering JavaScript.",
    downloadLink: "https://drive.google.com/uc?export=download&id=1Dy8WDSj2Kv2BNC1jwAHT1EZX0N4VyaqX",
    viewLink: "https://drive.google.com/file/d/1Dy8WDSj2Kv2BNC1jwAHT1EZX0N4VyaqX/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Amazon Interview Question",
    description: "A complete guide to mastering JavaScript.",
    viewLink: "https://drive.google.com/file/d/1Jn0o3Tw98w-DdNQrgWzSDpI2e2V8IrLN/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=1Jn0o3Tw98w-DdNQrgWzSDpI2e2V8IrLN",
  }
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', link: '' });

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-28 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center tracking-wide 
              uppercase drop-shadow-md mb-6" style={{ fontFamily: 'cursive' }}>Extra Resources</h1>

      {/* Search and Button in the same horizontal line */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <Input
          type="text"
          placeholder="🔍 Search for resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-4 w-full max-w-2xl h-14 text-lg border border-gray-300 rounded-full shadow-lg
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 
               bg-white text-gray-800 placeholder-gray-500 outline-none"
        />

        {/* Modal Trigger Button */}
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white h-14 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          Showcase
        </Button>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hardcodedResources
          .filter((resource) =>
            resource.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((resource) => (
            <Card key={resource.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 tracking-wide 
              hover:text-blue-600 transition-all duration-200">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed italic">{resource.description}</p>
                <div className="mt-4 flex space-x-2">
                  <Link href={resource.viewLink} target="_blank">
                    <Button variant="outline" className="flex items-center space-x-2 bg-gray-200 px-6 py-2 rounded-md hover:bg-gray-400 transition">
                      <FaEye className="text-gray-600 text-lg w-4 h-4" />
                      <span className="text-sm font-medium">View</span>
                    </Button>
                  </Link>
                  <Link href={resource.downloadLink} target="_blank">
                    <Button className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-800 transition">
                      <FaDownload className="text-white text-lg w-4 h-4" />
                      <span className="text-sm font-medium">Download</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-2xl relative">
            {/* Close Icon */}
            <button 
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              <IoMdClose />
            </button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Showcase Your Resource</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                type="text" 
                name="title" 
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Resource Title" 
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <Input 
                type="text" 
                name="description" 
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Short Description" 
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <Input 
                type="url" 
                name="link" 
                value={formData.link}
                onChange={handleInputChange}
                placeholder="Resource Link (View or Download)" 
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />

              <Button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
