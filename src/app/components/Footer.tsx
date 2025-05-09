import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="bg-teal-800 text-white py-8 md:py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Section */}
                    <div className="col-span-1 xs:col-span-2 md:col-span-1">
                        <h1 className="text-base md:text-lg font-bold flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag h-6 w-6 md:h-8 md:w-8 text-yellow-400">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                <path d="M3 6h18"></path>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            <span className="text-yellow-400">Kickin&apos;</span>
                            <span className="text-white ml-1">Kicks</span>
                        </h1>
                        <p className="text-gray-300 text-sm md:text-base mb-6">
                            Shoes that blend Thai uniqueness with modern style, letting you step confidently in shoes like no other.
                        </p>
                        <div className="flex gap-3 md:gap-4">
                            <a href="https://facebook.com" className="bg-teal-700 p-1.5 md:p-2 rounded-full hover:bg-teal-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-white">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </a>
                            <a href="https://instagram.com" className="bg-teal-700 p-1.5 md:p-2 rounded-full hover:bg-teal-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-white">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com" className="bg-teal-700 p-1.5 md:p-2 rounded-full hover:bg-teal-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-white">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Product Categories */}
                    <div>
                        <h3 className="text-base md:text-lg font-bold text-yellow-400 mb-4">Product Categories</h3>
                        <ul className="space-y-2 text-sm md:text-base">
                            <li><a href="#" className="text-white hover:text-yellow-400">Men&apos;s Shoes</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-400">Women&apos;s Shoes</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-400">Running Shoes</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-400">Streetwear Shoes</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-400">Special Collections</a></li>
                        </ul>
                    </div>

                    {/* Store Information */}
                    <div>
                        <h3 className="text-base md:text-lg font-bold text-yellow-400 mb-4">Store Information</h3>
                        <ul className="space-y-2 text-sm md:text-base">
                            <li><a href="#" className="text-white hover:text-yellow-400">About Us</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-400">Privacy Policy</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-400">Terms of Service</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-400">FAQ</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-400">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h3 className="text-base md:text-lg font-bold text-yellow-400 mb-4">Newsletter</h3>
                        <p className="text-white text-sm md:text-base mb-4">Get updates and special offers from us</p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-3 md:px-4 py-2 rounded-md bg-teal-900 text-white text-sm md:text-base placeholder-gray-400 border border-teal-700 focus:outline-none focus:border-teal-600"
                            />
                            <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors text-sm md:text-base">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Footer Bottom */}
                <div className="text-center mt-8 md:mt-12">
                    {/* Divider Line */}
                    <div className="border-t border-teal-700 my-8 md:my-12"></div>

                    {/* Payment Methods and Copyright */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                        <p className="text-xs md:text-sm text-gray-300">&copy; 2025 Kickin&apos; Kicks. All rights reserved.</p>
                        
                        <div className="flex items-center gap-6">
                            <Image src="/visa-icon.png" alt="Visa" width={32} height={32} className="brightness-0 invert opacity-75" />
                            <Image src="/mastercard-icon.png" alt="Mastercard" width={32} height={32} className="brightness-0 invert opacity-75" />
                            <Image src="/american-express-icon.png" alt="American Express" width={32} height={32} className="brightness-0 invert opacity-75" />
                            <Image src="/paypal-icon.png" alt="PayPal" width={32} height={32} className="brightness-0 invert opacity-75" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
