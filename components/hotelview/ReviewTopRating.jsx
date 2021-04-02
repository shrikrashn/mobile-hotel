import React from 'react'

export default function ReviewTopRating() {
    return (
        <>
            <div className="review-top-rating w-full pt-5 px-5">
                <div className="review-top flex py-5">
                    <label className="text-4xl font-bold text-gray-800">3.0</label>
                    <div className="bottom pl-3 ">
                        <p className="text-basetext-gray-700 ">Over all rating</p>
                        <div className="stars flex items-center">
                            <svg className="w-6 text-yellow-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-6 text-yellow-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-6 text-gray-400 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-6 text-gray-400 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm text-gray-500">4,103 reviews</span>
                        </div>
                    </div>
                </div>
                <div className="rating">
                    <p className="text-lg font-normal text-gray-800">#2 of 363 hotels in Agra</p>
                    <ul className="pt-2">
                        <li className="flex items-center py-2">
                            <span className="text-sm text-gray-600 w-20">Location</span>
                            <div className="relative w-4/6">
                                <div className="overflow-hidden h-2 text-xs flex">
                                    <div style={{ width: "20%" }} className="rounded-bl-lg rounded-tl-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="rounded-br-lg rounded-tr-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                </div>
                            </div>
                            <span className="text-sm text-gray-600 w-14 ml-2">1000</span>
                        </li>
                        <li className="flex items-center py-2">
                            <span className="text-sm text-gray-600 w-20">Service</span>
                            <div className="relative w-4/6">
                                <div className="overflow-hidden h-2 text-xs flex">
                                    <div style={{ width: "20%" }} className="rounded-bl-lg rounded-tl-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="rounded-br-lg rounded-tr-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                </div>
                            </div>
                            <span className="text-sm text-gray-600 w-14 ml-2">1000</span>
                        </li>
                        <li className="flex items-center py-2">
                            <span className="text-sm text-gray-600 w-20">Rooms</span>
                            <div className="relative w-4/6">
                                <div className="overflow-hidden h-2 text-xs flex">
                                    <div style={{ width: "20%" }} className="rounded-bl-lg rounded-tl-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="rounded-br-lg rounded-tr-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                </div>
                            </div>
                            <span className="text-sm text-gray-600 w-14 ml-2">1000</span>
                        </li>
                        <li className="flex items-center py-2">
                            <span className="text-sm text-gray-600 w-20">Hygine</span>
                            <div className="relative w-4/6">
                                <div className="overflow-hidden h-2 text-xs flex">
                                    <div style={{ width: "20%" }} className="rounded-bl-lg rounded-tl-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="rounded-br-lg rounded-tr-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                </div>
                            </div>
                            <span className="text-sm text-gray-600 w-14 ml-2">1000</span>
                        </li>
                        <li className="flex items-center py-2">
                            <span className="text-sm text-gray-600 w-20 leading-3">Children friendly</span>
                            <div className="relative w-4/6">
                                <div className="overflow-hidden h-2 text-xs flex">
                                    <div style={{ width: "20%" }} className="rounded-bl-lg rounded-tl-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="rounded-br-lg rounded-tr-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                </div>
                            </div>
                            <span className="text-sm text-gray-600 w-14 ml-2">1000</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
