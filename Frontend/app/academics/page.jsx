import React from 'react';
import Link from 'next/link';

function Academics() {
  return (
    <div className="bg-[#ceddf5] flex flex-col lg:flex-row">
      <div className="pl-5 lg:pl-14 mt-20 lg:mt-44 flex relative">
      
        <div className="absolute lg:left-14 top-7 h-28 lg:h-52 w-1 lg:w-2 bg-[#0d326e]"></div>
        
        <div className="ml-6 lg:ml-8">
          <div className="text-[#0d326e] text-4xl mt-10 lg:text-7xl font-medium ">
            <div>Upskill</div>
            <div className="pt-3 lg:pt-7">Yourself</div>
          </div>

          <div className="text-lg lg:text-2xl pt-8 lg:pt-14 pr-8 lg:pr-24 mb-20">
            Stay ahead in the tech world with our curated courses and roadmaps. Discover the latest trends, master new skills, and elevate your career with expert guidance.
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mb-5 lg:-ml-24">
        <Link href="/courseSection">
          <div className="pt-10 lg:pt-20">
            <img
              src="/courses-2.jpeg"
              alt="courses"
              className="scale-[.85] lg:scale-[.77] rounded-[20px] lg:rounded-[40px] cursor-pointer hover:scale-[.82] lg:hover:scale-[.74] transition-transform duration-300"
            />
            
            <img src="/roadmap_review.png" alt="roadmap" className='md:block hidden' />
          </div>
        </Link>

        <Link href="/Roadmaps">
          <div className="mt-10 lg:mt-32">
          <img src="/course_review.png" alt="roadmap" className='md:block hidden'/>
            <img
              src="/roadmaps.jpeg"
              alt="roadmaps"
              className="-mt-5 lg:-mt-4 scale-[.85] lg:scale-[.77] rounded-[20px] lg:rounded-[40px] cursor-pointer hover:scale-[.82] lg:hover:scale-[.74] transition-transform duration-300"
            />
           
             
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Academics;
