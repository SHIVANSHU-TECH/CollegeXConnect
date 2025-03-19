"use client";
import React, { useState } from 'react';
import Link from "next/link"

const Home = () => {
    return (
        <div className='flex flex-col lg:flex-row mt-10 mt-15'>
            <div className='w-full lg:w-1/2 bg-[#ceddf5] p-6 lg:p-10 relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-full h-full bg-opacity-10 bg-pattern-hexagons'></div>
                <div className='relative z-10'>
                    <div className='text-4xl sm:text-6xl lg:text-6xl font-bold pt-14 lg:pt-40 animate-fade-in-down'>
                        Unlock Your
                        <div className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 md:pt-3'>
                            Potential & Future
                        </div>
                        <div className='md:pt-3'>with one platform</div>
                    </div>
                    <div className='text-lg sm:text-2xl mt-8 md:mt-12 lg:mt-10 lg:mr-6 animate-fade-in'>
                        Empowering your journey with tailored resources, transformative opportunities, and cutting-edge insights. Navigate your path to excellence with us.
                    </div>
                    <div className='mt-12 lg:mt-8 lg:mb-0 mb-10'>
                        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
                            <Link href="/notes"><button className="w-full sm:w-auto bg-gradient-to-r from-black to-gray-800 text-white px-7 py-3 rounded-2xl 
                       flex items-center justify-center space-x-3
                       hover:from-gray-800 hover:to-black hover:scale-105 transition-all duration-300 transform hover:-translate-y-1">
                                <span className='text-lg'>Explore Academics</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button></Link>
                            <a href="https://linktr.ee/collegeXconnect"><button className="w-full sm:w-auto bg-white text-gray-700 px-7 py-3 rounded-2xl 
                       flex items-center justify-center space-x-3 shadow-md bg-opacity-80 backdrop-filter backdrop-blur-sm
                       hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                                <span className='font-semibold text-lg'>Join community</span>
                            </button></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='absolute top-0 left-0 w-full h-full bg-opacity-10 bg-pattern-hexagons'></div>

                </div>
            </div> 
            <div className='bg-gradient-to-br from-gray-700 to-black w-full lg:w-1/2 p-6 lg:p-0 overflow-hidden '>
                <div className='flex flex-col items-center lg:items-start justify-center lg:space-x-0 md:space-x-12 space-x-0 md:flex-row md:mt-0 space-y-8 md:space-y-0'>
                    <div className='w-full max-w-[22rem] lg:w-auto lg:ml-12 lg:-mr-5'>
                        <div className="card border-b-[9px] border-[#ffb321] bg-gray-100 shadow-xl scale-100 lg:scale-75 cursor-pointer lg:mt-44  transition-all duration-300 group">
                            <div className='bg-gradient-to-br rounded-t-xl from-yellow-400 to-orange-500 bg-opacity-85 transition-opacity duration-300 flex justify-center group-hover:opacity-100'>
                                <figure className="relative overflow-hidden h-52 w-32">
                                    <div className="absolute inset-0"></div>
                                    <img src="/opp2.svg" alt="opp2" className='opacity-100' />
                                </figure>
                            </div>
                            <Link href="/notes"><div className="card-body">
                                <h2 className="card-title text-2xl">Academics</h2>
                                <p className='text-base md:text-lg'>Master your studies with precision-crafted notes</p>
                                <div className="card-actions justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 md:transform md:group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="black">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div></Link>
                        </div>
                    </div>
                    <div className='w-full max-w-[22rem] lg:w-auto flex flex-col space-y-4 lg:-space-y-[60px]'>
                        <div className="card card-compact mt-2 border-b-[9px] border-[#40a2cd] bg-gray-100 shadow-xl scale-100 lg:scale-75 cursor-pointer transition-all duration-300 group">
                            <div className='bg-gradient-to-br from-green-400 to-blue-500 flex justify-center rounded-t-xl p-5 bg-opacity-85 transition-colors duration-300'>
                                <figure className="relative overflow-hidden h-44 w-32">
                                    <div className="absolute inset-0"></div>
                                    <img src="/event.svg" alt="" className='opacity-100' />
                                </figure>
                            </div>
                            <Link href="/Event"><div className="card-body ">
                                <h2 className="card-title text-2xl">Events</h2>
                                <p className='text-base md:text-lg'>Immerse yourself in transformative experiences</p>
                                <div className="card-actions justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 transform md:group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="black">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div></Link>
                        </div>
                        <div className="card card-compact border-b-[9px] border-[#ca6ef5] bg-gray-100 shadow-xl scale-100 lg:scale-75 lg:-mt-44 cursor-pointer transition-all duration-300 group">
                            <div className='bg-gradient-to-br from-purple-400 to-indigo-500 bg-opacity-85 flex justify-center rounded-t-xl transition-opacity duration-300'>
                                <figure className="relative overflow-hidden h-56 w-32">
                                    <div className="absolute inset-0"></div>
                                    <img src="/opp2.png" alt="" className='opacity-100' />
                                </figure>
                            </div>
                            <Link href='/opportunities'><div className="card-body">
                                <h2 className="card-title text-2xl">Opportunities</h2>
                                <p className='text-base md:text-lg'>Discover pathways to your dream career</p>
                                <div className="card-actions justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 transform md:group-hover:translate-x-1 transition-transform duration-300 sm:group-hover " viewBox="0 0 20 20" fill="black">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
