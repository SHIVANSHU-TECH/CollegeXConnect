"use client";

import { useState } from 'react';

const NotesFetcher = () => {
  // const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [notesLink, setNotesLink] = useState('');

  // const branches = ['CSE', 'ECE', 'EEE', 'ME', 'CE'];
  const semesters = ['1', '2', '3', '4'];
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const subjects = { 
    '1': {
      'Financial Management': `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12xFzrV5pZM7NhtuCg8ATOaNVEhzyJMab&allowdl=no`,
    },
    '2': {
      'Marketing Management': `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12pcBwEvvgb9_QkYGNXGetrUdoNQqZV0a&allowdl=no`,
      'Human Resource Management': `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12tNlJrOqmu6-fFlw0Q3o9msm969p_BST&allowdl=no`,
    },
    '3': {
      'Information Technology': `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12v1kgo0sGZNSLrepjC6BqnbzjOr5tRvc&allowdl=no`,
    },
    '4': {
      'Entrepreneurship': `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12qAU586jaVAhIlTugEVGNZ01WDhjGJyU&allowdl=no`,
    },
  };

  // const handleBranchChange = (e) => {
  //   setBranch(e.target.value);
  //   setSemester('');
  //   setSubject('');
  //   setNotesLink('');
  // };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    setSubject('');
    setNotesLink('');
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setNotesLink(subjects[semester][e.target.value]);
  };
  return (
    <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-300 min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden lg:flex lg:space-x-8">
        <div className="bg-indigo-700 py-6 px-8 lg:w-1/3">
          <h1 className="text-3xl font-bold text-white text-center">MBA</h1>
          <div className="p-8">
            <div className="space-y-6">
              {/* <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select Branch
                  </label>
                  <select
                    value={branch}
                    onChange={handleBranchChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="">Select Branch</option>
                    {branches.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                </div> */}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Semester
                </label>
                <select
                  value={semester}
                  onChange={handleSemesterChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="">Select Semester</option>
                  {semesters.map((sem) => (
                    <option key={sem} value={sem}>
                      {sem}
                    </option>
                  ))}
                </select>
              </div>

              {semester && subjects[semester] && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select Subject
                  </label>
                  <select
                    value={subject}
                    onChange={handleSubjectChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="">Select Subject</option>
                    {Object.keys(subjects[semester]).map((subj) => (
                      <option key={subj} value={subj}>
                        {subj}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>
        {notesLink && (
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden lg:w-2/3">
            <div className="bg-purple-700 py-4 px-6 lg:mt-0 mt-5 ">
              <h2 className="text-2xl font-semibold text-white ">Notes</h2>
            </div>
            <div className="p-4">
              <iframe
                src={notesLink.replace('/view', '/preview')}
                title="Notes"
                className="w-full h-[600px] border-0 rounded-lg shadow-inner bg-gray-700"
                allow="autoplay"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesFetcher;