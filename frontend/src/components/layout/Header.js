import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className=
            "w-full bg-white text-gray-900 body-font mb-4 shadow-sm"
        >
            {/* :DESKTOP MENU */}
            <div className="container mx-auto flex justify-between items-center py-7 px-5">
                {/* ::Site logo and Name */}
                <Link
                    to="/"
                    className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
                >
                    <img src="" className="w-10 h-10" alt="" />
                    <span className="ml-3 text-xl text-gray-900 font-semibold antialiased">
                        Ecom
                    </span>
                </Link>
                {/* ::Navbar */}
                <div className="flex justify-center">
                    <nav className="hidden md:mr-auto md:border-gray-500 md:flex flex-wrap items-center justify-center text-base tracking-wide">
                        <Link to="" className="mr-8 hover:bg-blue-50 hover:text-gray-800 p-1 rounded-sm ">
                            Solutions
                        </Link>

                        <Link to="/about" className="mr-8 hover:bg-blue-50 hover:text-gray-800 p-1 rounded-sm ">
                            About
                        </Link>
                        <Link to="/about" className="mr-8 hover:bg-blue-50 hover:text-gray-800 p-1 rounded-sm ">
                            Contact
                        </Link>
                    </nav>
                </div>
                {/* ::Avatar */}
                <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
                    <div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                        </svg>
                    </div>
                    <div className="px-4">
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                            />
                        </svg>
                    </div>
                </div>
                {/* ::Burger icon standard */}
                <button
                    className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-yellow-500 hover:to-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* :MOBILE MENU */}
            {isOpen && (
                <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-800 text-base uppercase text-center font-semibold">
                    <a
                        href="#link"
                        className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        Solutions
                    </a>
                    <a
                        href="#link"
                        className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        Prices
                    </a>
                    <a
                        href="#link"
                        className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        About
                    </a>
                    <a
                        href="#link"
                        className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Header;