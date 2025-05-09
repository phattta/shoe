"use client"

import React, { useState, useEffect } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeScrolled = window.scrollY > 100
            if (shouldBeScrolled !== isScrolled) {
                setIsScrolled(shouldBeScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isScrolled])

    return (
        <>
            <div className="h-[72px]" /> {/* Always present placeholder */}
            
            <nav className={`w-full bg-white fixed top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
                <div className="flex items-center justify-between px-2 py-4 max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="flex items-center justify-end text-black font-serif text-lg leading-tight">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag h-8 w-8 text-red-500">
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                            <path d="M3 6h18"></path>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <p className="text-red-500 font-bold ml-2">Kickin&apos;</p>
                        <p className="text-teal-800 font-bold ml-2">Kicks</p>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-[#00103D] font-medium text-base">
                        <a href="#home" className="hover:text-orange-400">Home</a>
                        <a href="#productcard" className="hover:text-orange-400">Productcard</a>
                        <a href="#step" className="hover:text-orange-400">Step</a>
                        <a href="#collection" className="hover:text-orange-400">Collection</a>
                        <button className="bg-red-600 hover:bg-orange-400 transition-colors text-white px-6 py-2 rounded-md font-semibold">
                            Shop Now
                        </button>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden flex flex-col items-start gap-4 px-6 pb-4 bg-white text-[#00103D] font-medium text-base">
                        <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Home</a>
                        <a href="#productcard" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Productcard</a>
                        <a href="#step" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Step</a>
                        <a href="#collection" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Collection</a>
                        <button className="bg-[#F7931B] hover:bg-orange-600 transition-colors text-white px-6 py-2 rounded-md font-semibold w-full text-center">
                            Shop Now
                        </button>
                    </div>
                )}
            </nav>
        </>
    )
}