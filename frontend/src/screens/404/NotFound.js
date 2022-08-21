
import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
    return (
        <div className="py-16 w-full min-h-screen flex justify-center md:items-center bg-white">
            <div className="mx-auto max-w-xl lg:max-w-4xl flex flex-col lg:flex-row">

                {/* :ERROR 404 */}
                <div className="relative px-5 lg:border-r-2 border-gray-100">
                    <p className="text-8xl md:text-10xl text-gray-700 font-bold tracking-wider">404</p>
                </div>

                {/* :TEXT CONTAINER */}
                <div className="px-2">
                    <p className="text-2xl md:text-4xl text-gray-700 font-bold tracking-wide">Page not found</p>
                    <p className="mt-4 text-sm md:text-base text-gray-500 font-medium">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link. <br /><br />Sorry about that! Please visit our hompage to get where you need to go.</p>
                    <Link to="/">
                        <button type="button" className="mt-10 relative inline-flex items-center px-6 py-3 rounded border border-transparent bg-gray-700 md:text-lg text-white font-medium hover:bg-lime hover:duration-200 transition">
                            Go Home
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default NotFound
