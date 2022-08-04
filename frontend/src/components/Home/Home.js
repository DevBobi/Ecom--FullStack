
import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from 'react-icons/fa'


const Home = () => {
    return (
        <div className="relative w-full h-full flex justify-center bg-gradient-to-t from-black via-transparent to-gray-900 overflow-hidden">

            {/* :HERO IMAGE */}
            <img src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="absolute w-full h-full object-cover object-left sm:object-center opacity-90 brightness-90" />

            {/* :HERO MAIN CONTAINER */}
            <div className="relative py-28 xl:py-48 w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center">

                {/* ::Hero title & text */}
                <div className="mx-5 md:mx-0 p-8 rounded-xl md:rounded-r-none bg-gray-800 bg-opacity-50 text-white shadow-2xl">
                    <h1 className="text-3xl sm:text-5xl font-josefin font-extrabold">Ecom, Fancy <br /><span className="text-yellow-400 text-opacity-80">Ecom</span> Website <br /></h1>
                    <p className="mt-3 text-gray-100 font-firacode">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis in asperiores optio est, id.</p>


                    {/* ::Hero button */}
                    <button className="relative m-5 w-full md:w-2/3 lg:w-2/5 inline-flex items-center text-2xl font-firacode text-white overflow-hidden transition-all duration-300 transform hover:translate-x-4">
                        <Link to="/" className="relative -top-0.5 mr-2 text-white ">Explore</Link>
                        <FaArrowCircleRight />
                        {/* <img src="https://fancytailwind.com/static/53e4540ef179fe51d5a02619660a1a92/arrow1.png" alt="" /> */}
                    </button>

                </div>


            </div>
        </div>
    )
}

export default Home
