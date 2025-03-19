"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const slides = [
    {
      imageSrc: "/testimonial-t1.jpg",
      name: " ~ Ayushi Rawat",
      text: "Thanks to this platform, I not only aced my exams but also landed an internship that aligned perfectly with my career goals."
    },
    {
      imageSrc: "/testimonial-t2.jpg",
      name: "~ Mayank Sharma",
      text: "The notes are clear and concise, and the internships helped me apply what I learned in a real-world setting."
    },
    {
      imageSrc: "/testimonial-t3.jpg",
      name: "~ Naveen Mann",
      text: "The resources here are of exceptional quality, and the support I received during my internship search was outstanding."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      name: " ~ Janhvi ",
      text: "I recommend this platform to every student who wants to excel. The quality of notes and the internship opportunities are second to none."
    },
    {
      imageSrc: "/profile.jpg",
      name: "~ Nitin Sharma",
      text: " This site truly bridges the gap between academics and the professional world."
    },
    {
      imageSrc: "/testimonial-t4.jpg",
      name: "~ Abhinav Singh",
      text: "The best resource hub for students who want to succeed."
    } , 
    {
      imageSrc: "/testimonial-t2.jpg",
      name: "~ Mayank Sharma",
      text: "The notes are clear and concise, and the internships helped me apply what I learned in a real-world setting."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      name: " ~ Janhvi ",
      text: "I recommend this platform to every student who wants to excel. The quality of notes and the internship opportunities are second to none."
    },
    {
      imageSrc: "/profile.jpg",
      name: "~ Nitin Sharma",
      text: " This site truly bridges the gap between academics and the professional world."
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderStyles, setSliderStyles] = useState({});
  const totalSlides = slides.length;

  const calculateSliderStyles = (index) => {
    let transform = `translateX(-${(index * 100) / slides.length}%)`;
    let width = `${slides.length * 100}%`;

    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      transform = `translateX(-${((index%4) * 100) / (slides.length/ 2)}%)`;
      width = `${(slides.length / 2) * 100}%`;
    }

    if (window.innerWidth >= 1024) {
     
      transform = `translateX(-${((index%3) * 100) / (slides.length / 3)}%)`;
      width = `${(slides.length / 3) * 100}%`;
    

    }
    
    return { transform, width };
  };

  useEffect(() => {
    setSliderStyles(calculateSliderStyles(currentIndex));

    const handleResize = () => {
      setSliderStyles(calculateSliderStyles(currentIndex));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex , slides.length]); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]); 

  return (
    <div className="flex text-white flex-col items-center gap-6 font-medium text-sm overflow-hidden">
      {/* Section 1 */}
      <div className="flex flex-col items-center justify-around mt-5 p-4 gap-4 md:flex-row overflow-hidden">
        <h1 className="w-full md:w-1/2 bg-gradient-to-r from-[#e1eec3] to-[#f05053] bg-clip-text text-transparent text-2xl font-extrabold md:text-4xl lg:text-5xl mt-2">
          Empowering Students with Knowledge and Opportunities
        </h1>

        <Image
          src="/main.gif"
          alt="GIF"
          width={150}
          height={100}
          style={{ objectFit: "cover" }}
        />

        <div className="flex flex-col w-full md:w-1/3 font-medium items-start">
          <p className="mb-3 text-left p-2 text-lg text-[#b1b3c3]">
            Our platform has provided me with the essential notes and internship
            opportunities that truly empowered my academic journey and career path.
          </p>
          <Link
            href={"https://whatsapp.com/channel/0029Vak33pQJ3jv7QEoyuY1C"}
            className="p-2"
          >
            <button className="w-[250px] h-[50px] flex text-[18px] items-center gap-4 bg-[#322169e0] text-[#e5d9d9d1] rounded p-2">
              JOIN COMMUNITY <FaArrowRight size={"35px"} />
            </button>
          </Link>
        </div>
      </div>

      {/* Section 2 */}
      <div className="relative w-full p-5 mx-auto">
        <div className="mb-5 rounded-lg">
          <div
            className="flex transition-transform duration-500 gap-8"
            style={sliderStyles}
          >
            {slides.map((insideSlide, idx) => (
              <div
                className="relative w-full md:w-[380px] h-[380px] rounded-md"
                key={idx}
              >
                <img
                  src={insideSlide.imageSrc}
                  alt={insideSlide.name}
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                    {insideSlide.name}
                  </h1>
                  <p className="mt-2 text-sm text-gray-300">
                    {insideSlide.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
