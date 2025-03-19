"use client";

import { useState } from 'react';

const NotesFetcher = () => {
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [notesLink, setNotesLink] = useState('');

  const semesters = ['1', '2', '3', '4', '5', '6'];
  const api_key=process.env.NEXT_PUBLIC_API_KEY;
  

  const subjects = {
    '1': {
      ' Accounting And Finance': `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12PpXykqIJf1Ot84wY4Tu8opg5DNPyTAu&allowdl=no`,
      'Banking and Insurance': `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12VQ7oGwLrLtqdQN6ncLxPHcvv3KGDp2M&allowdl=no`,
      'Business Analytics': `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12b5Zvzq2QUmZY1qeYrVLcQuJGsnGTXLX&allowdl=no`,
      'E Commerce': `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12a-uUjoUZGRlD4VO94Az1k2slbxYQiHu&allowdl=no`,
      'Economics': `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12Z8LnQwXsE4OUyQs3kTn-URVzNibIamK&allowdl=no`,
      'Human Resource Management': `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12iz48h1rGTe7MOJIj9U6ayj875Yyjq_1&allowdl=no`,
      'Marketing': `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12WbbVScjuDx1vN0-XSlBxUyvpfG6vzFb&allowdl=no`,
    },
    '2': {
    },
    '3': {
  },
  '4': {
  },
  '5': {
  },
  '6': {
  },
    
  };


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
      <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-300 min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 mt-30px">
        <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden lg:flex lg:space-x-8">
          <div className="bg-[#a6c4f5] py-6 px-8 lg:w-1/3">
            <h1 className="text-3xl font-bold text-white text-center">BCom Notes</h1>
            <div className="p-8">
              <div className="space-y-6">

              {/* Semester */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
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
                
                {semester &&  subjects[semester] && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
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
              <div className="bg-[#a6c4f5] py-4 px-6 lg:mt-0 mt-5">
                <h2 className="text-2xl font-semibold ">Notes</h2>
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