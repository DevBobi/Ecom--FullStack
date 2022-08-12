import React from 'react'

const Search = () => {
    return (
        <div className='m-48 py-10'>
            <form onSubmit="" className="flex justify-center items-center w-full flex-1">
                <input

                    value=""
                    type='text'
                    className="p-4 px-7 my-4 outline-none rounded-full ml-14 border border-lime"
                    placeholder='Search products...'
                />
                <button
                    type='submit'
                    className="text-4xl relative right-24 mb-2"
                >
                    <span className='text-xl font-semibold text-lime'> Search</span>
                </button>
            </form>
        </div>
    )
}

export default Search