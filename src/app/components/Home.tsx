import React from 'react';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
            <div className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="w-full px-4 sm:px-6 lg:w-1/2">
                        <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-red-500 text-white text-xs sm:text-sm font-bold rounded-2xl mb-3 sm:mb-4">
                            New Collection 2025
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                            Thai-Style Shoes
                            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-300 font-bold'>For Modern Generation</p>
                        </h1>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl">
                            Blending Thai heritage with modern streetwear
                            <span className="block sm:inline"> style, reflecting Thai culture in every step.</span>
                        </p>
                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:space-x-4">
                            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white py-2 px-4 sm:px-6 rounded-lg text-sm sm:text-base transition duration-300">
                                Shop Now
                            </button>
                            <button className="w-full sm:w-auto border-2 bg-white border-white text-white py-2 px-4 sm:px-6 rounded-lg text-sm sm:text-base hover:bg-transparent hover:text-black transition duration-300">
                                View Collection
                            </button>
                        </div>
                    </div>
                    <div className="relative mt-8 lg:mt-0">
                        <Image
                            src="/photo-1595950653106-6c9ebd614d3a.avif"
                            alt="Shoes"
                            className="w-full lg:w-auto h-full object-cover rounded-lg rotate-right"
                            width={500}
                            height={400}
                        />
                        <div className="absolute -bottom-11 left-4 bg-white text-black py-4 px-4 rounded-xl shadow-lg">
                            <h3 className="font-semibold text-[#00103D] text-sm">Natural Materials</h3>
                            <p className="mt-1 text-red-500 font-semibold text-sm">Contemporary Thai Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
