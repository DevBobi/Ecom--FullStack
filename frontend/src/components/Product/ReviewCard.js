
import React from 'react'
import Star from 'react-rating-stars-component'


const ReviewCard = ({ review }) => {

    return (
        <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
            <div className="mx-auto max-w-5xl flex flex-col">

                {/* :REVIEWS */}
                <div className="mt-5">
                    {review &&
                        <article className={`py-5 flex items-start ${review !== 0 && "border-t-2 border-gray-100"}`}>
                            {/* ::Avatar */}
                            <span className="flex-shrink-0 inline-block border-2 border-gray-50 rounded-full overflow-hidden" aria-label="avatar">
                                <img src="https://fancytailwind.com/static/profile3-7d5e2246807e801f5e5037c1234fc121.jpg" alt="" className="w-12 h-12" />
                            </span>
                            {/* ::Review Content */}
                            <div className="ml-3">
                                {/* :::author */}
                                <p className="text-sm text-gray-700 font-semibold">{review.author}</p>
                                {/* :::date */}
                                <p className="mt-1 text-xs text-gray-400 font-medium">March, 15, 2022</p>
                                {/* :::rating */}
                                <div className="my-4">
                                    <Star rating={review.rating} color="text-yellow-500" />
                                </div>
                                {/* :::title */}
                                <p className="text-base text-gray-700 font-semibold">{review.title}</p>
                                {/* :::text */}
                                <p className="text-base text-gray-500 font-medium">{review.comment}</p>
                            </div>
                        </article>

                    }
                </div>

            </div>
        </div>
    )
}

export default ReviewCard
