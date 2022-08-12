import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiSearch2Line } from 'react-icons/ri';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="w-full fixed top-0 z-50 bg-white text-gray-900 body-font shadow-sm"
        >
            {/* :DESKTOP MENU */}
            <div className="container lg:mx-auto flex justify-between items-center py-5 lg:px-20">

                {/* ::Burger icon standard */}
                <button
                    className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-lime hover:to-gray-400"
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
                {/* ::Site logo and Name */}
                <Link
                    to="/"
                    className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0 md:mx-0"
                >
                    {/* <img src="" className="w-10 h-10" alt="" /> */}
                    <div className="ml-3 text-2xl text-lime font-bold antialiased">
                        ECOM
                    </div>
                </Link>
                {/* ::Navbar */}
                <div className="flex justify-center">
                    <nav className="hidden md:mr-auto md:border-gray-500 md:flex flex-wrap items-center justify-around gap-5 text-base tracking-wide">
                        <Link to="/category" className=" hover:bg-blue-50 hover:text-gray-800 p-1 rounded-sm ">
                            Category
                        </Link>

                        <Link to="/about" className=" hover:bg-blue-50 hover:text-gray-800 p-1 rounded-sm ">
                            About
                        </Link>
                        <Link to="/contact" className=" hover:bg-blue-50 hover:text-gray-800 p-1 rounded-sm ">
                            Contact
                        </Link>
                        <Link to="/search" className=" hover:bg-blue-50 hover:text-gray-800 px-1 rounded-sm ">
                            <RiSearch2Line />
                        </Link>

                    </nav>
                </div>
                {/* ::Avatar */}
                <div className="gap-2 flex  cursor-pointer">
                    <div className="hover:bg-blue-50 hover:text-gray-800 p-1 rounded-sm ">
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
                    <div className=" hover:bg-blue-50 hover:text-gray-800 p-1 rounded-sm">
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

            </div>

            {/* :MOBILE MENU */}
            {isOpen && (
                <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-100 text-base uppercase text-center font-semibold">
                    <Link
                        to=""
                        className="block px-3 py-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700"
                    >
                        Category
                    </Link>
                    <Link
                        to=""
                        className="block px-3 py-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700"
                    >
                        About
                    </Link>
                    <Link
                        to=""
                        className="block px-3 py-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Header;