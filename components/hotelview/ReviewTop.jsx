import React from 'react'
import ReviewTopRating from './ReviewTopRating'

export default function ReviewTop() {
    return (
        <>
            <div className="hidden review-top py-5 fixed left-0 top-0 z-20 bg-white h-full max-h-full overflow-y-auto whitespace-normal w-full text-left">
                <a href="#" className="text-gray-600 w-6 h-6 block cursor-pointer absolute right-3 top-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </a>
                <ReviewTopRating />
                <div className="w-full p-5 inline-block border-b border-gray-200 md:py-5 py-2">
                    <div className="head flex flex-wrap items-center">
                        <figure className="w-10 h-10 overflow-hidden rounded-full sm:w-12 sm:h-12 sm:mb-0 mb-2 mr-3">
                            <img src="images/review-img.svg" alt="img"/>
                        </figure>
                        <div className="review-hed py-2">
                            <h6 className="sm:text-base text-sm font-semibold text-gray-800 capitalize leading-4">Alisha Xyz</h6>
                            <p className="sm:text-sm text-xs text-gray-500">23 Feb, 2019</p>
                            <div className="stars flex">
                                <svg className="w-4 text-yellow-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="w-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="w-4 text-yellow-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="w-4 text-yellow-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h5 className="sm:text-lg text-base font-semibold text-gray-800">A must visit place in India</h5>
                        <p className="sm:text-base text-sm text-gray-600 py-1">No words to explain,a must visit place in India the place holds historical events and values a pride of India. No words to explain,a must visit place in India the place holds historical events and values a pride of India.</p>
                        <a href="/" className="text-red-500 text-sm flex items-center hover:text-red-600">Read More
                        <img className="ml-2" src="images/red-arrow.svg" alt="icon" />
                        </a>
                    </div>
                    <div className="likes flex items-center pt-5">
                        <span className="flex sm:text-sm text-xs text-gray-500 mr-5 hover:text-gray-700">1000
                            <svg className="w-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                        </span>
                        <span className="flex sm:text-sm text-xs text-gray-500 mr-5 hover:text-gray-700">Downvote
                        <svg className="w-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                        </svg>
                        </span>
                        <span className="flex sm:text-sm text-xs text-gray-500 mr-5 hover:text-gray-700">Share
                        <svg className="w-5 ml-1"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        </span>
                    </div>
                </div>
                <div className="w-full p-3 inline-block border-b border-gray-200 md:py-5 py-2">
                    <div className="head flex flex-wrap items-center">
                        <figure className="w-10 h-10 overflow-hidden rounded-full sm:w-12 sm:h-12 sm:mb-0 mb-2 mr-3">
                            <img src="images/review-img.svg" alt="img"/>
                        </figure>
                        <div className="review-hed py-2">
                            <h6 className="sm:text-base text-sm font-semibold text-gray-800 capitalize leading-4">Alisha Xyz</h6>
                            <p className="sm:text-sm text-xs text-gray-500">23 Feb, 2019</p>
                            <div className="stars flex">
                                <svg className="w-4 text-yellow-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="w-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="w-4 text-yellow-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="w-4 text-yellow-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h5 className="sm:text-lg text-base font-semibold text-gray-800">A must visit place in India</h5>
                        <p className="sm:text-base text-sm text-gray-600 py-1">No words to explain,a must visit place in India the place holds historical events and values a pride of India. No words to explain,a must visit place in India the place holds historical events and values a pride of India.</p>
                        <a href="/" className="text-red-500 text-sm flex items-center hover:text-red-600">Read More
                        <img className="ml-2" src="images/red-arrow.svg" alt="icon" />
                        </a>
                    </div>
                    <div className="slide flex pt-5">
                        <div className="card pr-1 py-1">
                            <figure>
                                <img src="images/img-slide1.svg" />
                            </figure>
                        </div>
                        <div className="card pr-1 py-1">
                            <figure>
                                <img src="images/img-slide1.svg" />
                            </figure>
                        </div>
                        <div className="card pr-1 py-1">
                            <figure>
                                <img src="images/img-slide1.svg" />
                            </figure>
                        </div>
                        <div className="card pr-1 py-1">
                            <figure className="relative">
                                <img src="images/img-slide1.svg" />
                                <a className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 h-full w-full bg-black bg-opacity-50 text-white" href="/">10 More</a>
                            </figure>
                        </div>
                    </div>
                    <div className="likes flex items-center pt-5">
                        <span className="flex sm:text-sm text-xs text-gray-500 mr-5 hover:text-gray-700">1000
                            <svg className="w-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                        </span>
                        <span className="flex sm:text-sm text-xs text-gray-500 mr-5 hover:text-gray-700">Downvote
                        <svg className="w-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                        </svg>
                        </span>
                        <span className="flex sm:text-sm text-xs text-gray-500 mr-5 hover:text-gray-700">Share
                        <svg className="w-5 ml-1"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        </span>
                    </div>
                </div>
                
            </div>
        </>
    )
}
