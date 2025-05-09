import React from 'react';
import Image from 'next/image';

export default function Step() {
    return (
        <div className="bg-gradient-to-r bg-white py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Image Section: Updated to be first */}
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-lg overflow-hidden">
                                <Image
                                    src="/step1.avif"
                                    alt="Thai craftsman making shoes"
                                    className="w-full h-full object-cover"
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden">
                                <Image
                                    src="/step2.avif"
                                    alt="Thai style detail"
                                    className="w-full h-full object-cover"
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden">
                                <Image
                                    src="/step3.jpg"
                                    alt="Thai style detail"
                                    className="w-full h-full object-cover"
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden">
                                <Image
                                    src="/step4.jpg"
                                    alt="Thai style detail"
                                    className="w-full h-full object-cover"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Section: Updated to be second */}
                    <div className="lg:w-1/2">
                        <h2 className="text-xl text-red-500 mb-4">Our Brand</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">Thai Art in Every Step</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            We are dedicated to creating shoes that blend traditional Thai art with contemporary design, with attention to every detail.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            Each pair is designed and crafted by Thai artisans using high-quality, sustainable, and environmentally friendly materials, ensuring both beauty and comfort in every step.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex-1">
                                    <h4 className="text-[#00103D] font-semibold text-lg mb-1">Natural Materials</h4>
                                    <p className="text-gray-600 text-sm">From sustainable and eco-friendly sources</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex-1">
                                    <h4 className="text-[#00103D] font-semibold text-lg mb-1">Thai Craftsmanship</h4>
                                    <p className="text-gray-600 text-sm">Produced by experienced artisans</p>
                                </div>
                            </div>
                            <button className="bg-red-600 text-white py-3 px-6 rounded-xl text-base hover:bg-red-700 w-fit">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
