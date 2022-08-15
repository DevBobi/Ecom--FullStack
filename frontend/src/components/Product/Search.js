import React, { useState } from 'react'

const Search = ({ history }) => {
    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/products/${keyword}`);
        } else {
            history.push("/products");
        }
    };

    return (
        <div className='bg-gray-100'>
            <div className='pt-64 pb-52 '>
                <form
                    onSubmit={searchSubmitHandler}
                    className="flex justify-center items-center w-full flex-1"
                >
                    <input
                        type="text"
                        placeholder="Search a Product ..."
                        onChange={(e) => setKeyword(e.target.value)}
                        className="p-4 px-7 my-4 outline-none rounded-full ml-14 border border-lime"
                    />
                    <button
                        type='submit'
                        className="relative text-xl font-semibold text-lime right-24 mb-2"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search