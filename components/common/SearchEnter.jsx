import React from 'react'

export default function SearchEnter() {
    return (
        <>
            <section className="hidden search-result w-full bg-white fixed h-full top-0 left-0 text-left shadow-lg z-50">
                <div className="top-search bg-blue-500">
                    <a className="absolute right-4 top-4" href="/">
                        <svg className="w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </a>
                    <div className="container px-5 pt-8 pb-4 mx-auto">
                        <h4 className="text-xl text-white font-semibold px-4 text-center">Enter Destination</h4>
                        <div className="search xl:w-2/4 lg:w-1/2 mx-auto relative inline-block w-full mt-4">
                            <span className="absolute left-4 top-0 bottom-0 m-auto h-5">
                                <img src="/images/search.svg" alt="icon" />
                            </span>
                            <input type="text" id="search" name="search" placeholder="e.g. City, Landmark, address" className="w-full h-12 bg-white rounded-full text-base outline-none text-gray-800 py-1 pl-12 sm:pr-40 pr-14 leading-8 transition-colors duration-200 ease-in-out shadow-sm" />
                        </div>
                        <p className="text-white text-sm flex items-center pt-4"><img src="images/mouse.png" alt="icon" />Around Current Location</p>
                    </div>
                    
                </div>
                <div className="w-full p-4">
                <h3 className="text-lg text-gray-700 font-bold pb-2">Popular Destination</h3>
                <ul>
                    <li className="flex items-center py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                    </li>
                    <li className="flex items-center py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                    </li>
                    <li className="flex items-center py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                    </li>
                    <li className="flex items-center py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                    </li>
                    <li className="flex items-center py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                    </li>
                    <li className="flex items-center py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                    </li>
                    <li className="flex items-center py-2 px-2 bg-white hover:bg-gray-100  border-gray-200">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                    </li>
                </ul>
            </div>
            </section>
        </>
    )
}
