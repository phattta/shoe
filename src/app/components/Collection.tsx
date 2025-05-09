import React from 'react';
import Image from 'next/image';

export default function Collection() {
    return (
        <div className="py-8 md:py-16 bg-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-black">Latest Collection</h2>
                    <div className="flex gap-2 md:gap-4">
                        <button className="border font-medium border-black text-black py-1 md:py-2 px-4 md:px-6 rounded-lg text-sm hover:bg-yellow-300 flex items-center gap-2">
                            Filter
                        </button>
                        <button className="border font-medium border-black text-black py-1 md:py-2 px-4 md:px-6 rounded-lg text-sm hover:bg-yellow-300 flex items-center gap-2">
                            Sort
                        </button>
                    </div>
                </div>

                <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12">
                    Discover shoes that blend Thai elements in ways never seen before, with innovative designs that suit the modern lifestyle.
                </p>

                {/* Grid for Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                    {/* Product cards remain the same, but with adjusted responsive classes */}
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <div className="relative">
                                <Image
                                    src="/ProductCard2.avif"
                                    alt="Handwoven Fabric Sandals"
                                    className="w-full h-72 object-cover"
                                    width={500}
                                    height={500}
                                />
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                                    New
                                </div>
                            </div>
                            <div className="p-3 md:p-4">
                                <h3 className="text-base md:text-lg font-semibold text-gray-800 truncate">Thai Collection Item {index + 1}</h3>
                                <p className="text-xs md:text-sm text-gray-600">Category</p>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 md:mt-4 gap-2">
                                    <span className="text-lg md:text-xl font-bold text-red-500">${(99 + index * 10).toFixed(2)}</span>
                                    <button className="w-full sm:w-auto bg-teal-600 text-white py-1.5 md:py-2 px-3 md:px-4 rounded-lg text-xs md:text-sm font-medium hover:bg-teal-700 flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="9" cy="21" r="1"></circle>
                                            <circle cx="20" cy="21" r="1"></circle>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Products Button */}
                <div className="text-center mt-8 md:mt-12">
                    <button className="w-full sm:w-auto bg-gray-800 text-white py-2 px-6 rounded-lg text-base md:text-lg hover:bg-gray-700 transition duration-300">
                        View All Products
                    </button>
                </div>
            </div>
        </div>
    );
}
