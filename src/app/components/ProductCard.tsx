import React from 'react';
import Image from 'next/image';

export default function ProductCard() {
    return (
        <div className="py-16 bg-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
                    Featured Products
                </h2>
                <p className="text-center text-lg text-gray-600 mb-12">
                    Our most popular shoes with distinctive designs and superior quality
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Product 1 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/product1.jpg"
                                alt="Product"
                                className="w-full h-72 object-cover"
                                width={500}
                                height={500}
                            />
                            <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold py-1 px-3 rounded-full">
                                Featured
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-sm text-gray-800">Special Collection</h3>
                            <p className="text-lg font-semibold text-gray-600">Special Collection Thai Pattern Shoes</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-xl font-bold text-red-500">$199</span>
                                <button className="bg-teal-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-teal-700 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/ProductCard2.avif"
                                alt="Thai-Inspired Basketball Shoes"
                                className="w-full h-72 object-cover"
                                width={500}
                                height={500}
                            />
                            <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold py-1 px-3 rounded-full">
                                Featured
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-sm text-gray-800">Basketball</h3>
                            <p className="text-lg font-semibold text-gray-600">Thai-Inspired Basketball Shoes</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-xl font-bold text-red-500">$169</span>
                                <button className="bg-teal-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-teal-700 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/ProductCard3.avif"
                                alt="Thai Pattern Painted Canvas Shoes"
                                className="w-full h-72 object-cover"
                                width={500}
                                height={500}
                            />
                            <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold py-1 px-3 rounded-full">
                                Featured
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-sm text-gray-800">White Canvas</h3>
                            <p className="text-lg font-semibold text-gray-600">Thai Pattern Painted Canvas Shoes</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-xl font-bold text-red-500">$129</span>
                                <button className="bg-teal-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-teal-700 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
