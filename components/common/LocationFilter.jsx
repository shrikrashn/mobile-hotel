import React from 'react'

export default function LocationFilter() {
    return (
        <>
        <section className="hidden location-filter w-full bg-white fixed h-full top-0 left-0 text-left shadow-lg z-50">
            <div className="head flex justify-between p-5">
                <a href="#" className="text-gray-600 w-6 h-6 md:hidden block cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                </a>
                <label className="text-base font-bold text-gray-700">FILTERS</label>
                <span className="text-gray-700 text-base">Clear All</span>
            </div>
            <div className="w-full p-4 overflow-y-auto max-h-full">
                <h3 className="text-lg text-gray-700 font-bold pb-2">Popular Destination</h3>
                <ul>
                    <li className="py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <a className="flex items-center " href="">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                        </a>
                    </li>
                    <li className="py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <a className="flex items-center " href="">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                        </a>
                    </li>
                    <li className="py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <a className="flex items-center " href="">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                        </a>
                    </li>
                    <li className="py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <a className="flex items-center " href="">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                        </a>
                    </li>
                    <li className="py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <a className="flex items-center " href="">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                        </a>
                    </li>
                    <li className="py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <a className="flex items-center " href="">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                        </a>
                    </li>
                    <li className="py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <a className="flex items-center " href="">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                        </a>
                    </li>
                    <li className="py-2 px-2 bg-white hover:bg-gray-100 border-b border-gray-200">
                        <a className="flex items-center " href="">
                        <figure className="w-6 h-6 overflow-hidden rounded-md">
                            <svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </figure>
                        <h5 className="text-base font-semibold text-gray-700 pl-1 leading-5">
                        Shrinagar<p className="text-sm text-gray-500 font-normal">India</p>
                        </h5>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="bg-white py-2 px-4 shadow fixed bottom-0 w-full z-20">
                <button className="text-white text-sm block rounded-full bg-blue-500 py-2 font-bold w-full" type="button">Apply</button>
            </div>
        </section>
        </>
    )
}
