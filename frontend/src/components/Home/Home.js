
import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className="relative w-full h-full flex justify-end bg-gradient-to-t from-black via-transparent to-black overflow-hidden">

            {/* :HERO IMAGE */}
            <img src="https://fancytailwind.com/static/f9e0992b36915d2ecac18949d7ba0fdf/24862/walking1.webp" alt="" className="absolute w-full h-full object-cover object-left sm:object-center opacity-70" />

            {/* :HERO MAIN CONTAINER */}
            <div className="relative py-28 xl:py-40 w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center">

                {/* ::Hero title & text */}
                <div className="mx-5 md:mx-0 p-8 rounded-xl md:rounded-r-none bg-gray-800 bg-opacity-50 text-white shadow-2xl">
                    <h1 className="text-3xl sm:text-5xl font-josefin font-extrabold">Formidable, <br /><span className="text-yellow-400 text-opacity-80">Fancy Hero 8</span> est <br />Formidable !</h1>
                    <p className="mt-3 text-gray-100 font-firacode">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis in asperiores optio est, id, temporibus perspiciatis ratione ipsam quam tempore aliquam distinctio repudiandae iusto facilis, consequatur eligendi illum quos.</p>
                </div>

                {/* ::Hero button */}
                <button className="relative m-5 w-full md:w-2/3 lg:w-2/5 inline-flex items-center text-2xl font-firacode text-white overflow-hidden transition-all duration-300 transform hover:translate-x-4">
                    <Link to="/" className="relative -top-0.5 mr-2">Explore</Link>
                    <img src="https://fancytailwind.com/static/53e4540ef179fe51d5a02619660a1a92/arrow1.png" alt="" className="absolute left-32 w-20" />
                </button>

                {/* ::Social media */}
                <div className="absolute top-4 sm:top-auto bottom-auto sm:bottom-20 md:bottom-0 -right-16 md:right-0 h-36 inline-flex md:flex-col justify-around items-center text-yellow-400 transform -translate-x-1/2">
                    {/* Facebook */}
                    <a
                        href="/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-teal-500 transition hover:text-teal-500/75"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                    {/* Twitter */}
                    <a
                        href="/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-teal-500 transition hover:text-teal-500/75"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                            />
                        </svg>
                    </a>
                    {/* Instagram */}
                    <a
                        href="/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-teal-500 transition hover:text-teal-500/75"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

            </div>

            {/* :BOTTOM OPTIONS */}
            <div className="absolute left-1/2 bottom-0 w-full md:w-2/3 flex justify-around items-end transform -translate-x-1/2">
                {/* ::Our Story */}
                <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                    Our Story
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </a>
                {/* ::Our Shop */}
                <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                    Our Shop
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </a>
                {/* ::Our Contact */}
                <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                    Our Contact
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </a>
            </div>

        </div>
    )
}

export default Home