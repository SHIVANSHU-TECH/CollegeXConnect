"use client";
import Link from 'next/link';

const BrowseNotes = () => {
  const courses = [
    { name: 'BCA', icon: '🔧', link: '/notes/BcaNotes', rating: '4.8', users: '2.6K' },
    { name: 'B.Tech', icon: '💻', link: '/notes/BTechNotes', rating: '4.9', users: '3.2K' },
    { name: 'BCom', icon: '📊', link: '/NotFound', rating: '4.7', users: '1.8K' },
    { name: 'BA', icon: '📚', link: '/NotFound', rating: '4.6', users: '2.1K' },
    { name: 'BSc', icon: '🧪', link: '/NotFound', rating: '4.8', users: '2.4K' },
    { name: 'MBA', icon: '🧪', link: '/NotFound', rating: '3.9', users: '1.4K' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-300 mt-10">
      <div className="container mx-auto px-8 py-20">
        
        <h1 className="text-5xl font-bold mb-2">Digital Learning </h1>
        <h2 className="text-5xl font-bold mb-6">Under One, <span className="underline">Umbrella</span></h2>
        
        <div className="mb-12">
          <button className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center mr-4">
            Get Started <span className="ml-2">→</span>
          </button>
          {/* <Link href="#" className="text-gray-700 underline">Watch Trailer — Demo</Link> */}
        </div>

        <div className="mt-20">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Top Popular Notes</h3>
            <Link href="#" className="text-gray-700 underline">See All →</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {courses.map((course, index) => (
              
              <div key={course.name} className={`bg-gray-900 hover:cursor-pointer rounded-lg p-4 text-white ${index === 1 ? 'sm:col-span-2 row-span-2' : ''}`}>
                <Link href={course.link}>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-3xl">{course.icon}</div>
                  <div className="flex items-center">
                    <span className="mr-1">♥</span>
                    <span>{course.rating}</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{course.name}</h4>
                <p className="text-sm text-gray-400 mb-2">Active Users</p>
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2 mr-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                    <div className="w-6 h-6 rounded-full bg-green-500"></div>
                    <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                  </div>
                  <span className="text-sm bg-pink-500 px-2 py-1 rounded-full">+{course.users}</span>
                </div>
                <div className="text-sm text-gray-300 flex items-center">
                  Explore notes <span className="ml-1">→</span>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseNotes;