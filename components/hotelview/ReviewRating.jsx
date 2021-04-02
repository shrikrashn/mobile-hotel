import React from 'react'
import ReviewTop from './ReviewTop'

export default function ReviewRating() {
    return (
        <>
            <div id="reviews"  className="ratting-right md:w-2/6 w-full px-5 pt-8">
            <h2 class="text-gray-700 text-lg font-bold uppercase">Guest Reviews & Ratings</h2>
                <div className="review-top flex py-5">
                    <label className="text-xl px-3 text-white bg-green-600 rounded-sm flex items-center">4.5</label>
                    <div className="bottom pl-3">
                        <p className="text-lg text-green-600 font-semibold leading-6">Very Good</p>
                        <div className="stars flex items-center">
                            <span className="text-lg text-gray-500 leading-5">4,103 Reviews</span>
                        </div>
                    </div>
                </div>
                <div className="rating">
                    <ul className="pt-2">
                        <li className="flex items-center py-2">
                            <span className="text-sm text-gray-600 w-40 leading-3">Cleanliness</span>
                            <div className="relative md:w-2/3 w-4/5">
                                <div className="overflow-hidden h-2 text-xs flex">
                                    <div style={{ width: "20%" }} className="rounded-bl-lg rounded-tl-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="rounded-br-lg rounded-tr-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                </div>
                            </div>
                            <span className="text-xs text-white leading-3 ml-2 bg-red-500 px-2 py-0.5 rounded-sm">1</span>
                        </li>
                        <li className="flex items-center py-2">
                            <span className="text-sm text-gray-600 w-40 leading-3">Communication</span>
                            <div className="relative md:w-2/3 w-4/5">
                                <div className="overflow-hidden h-2 text-xs flex">
                                    <div style={{ width: "20%" }} className="rounded-bl-lg rounded-tl-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="rounded-br-lg rounded-tr-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                </div>
                            </div>
                            <span className="text-xs text-white leading-3 ml-2 bg-yellow-400 px-2 py-0.5 rounded-sm">2</span>
                        </li>
                        <li className="flex items-center py-2">
                            <span className="text-sm text-gray-600 w-40 leading-3">Check In</span>
                            <div className="relative md:w-2/3 w-4/5">
                                <div className="overflow-hidden h-2 text-xs flex">
                                    <div style={{ width: "20%" }} className="rounded-bl-lg rounded-tl-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="rounded-br-lg rounded-tr-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                </div>
                            </div>
                            <span className="text-xs text-white leading-3 ml-2 bg-blue-400 px-2 py-0.5 rounded-sm">2</span>
                        </li>
                        <li className="flex items-center py-2">
                            <span className="text-sm text-gray-600 w-40 leading-3">Accuracy</span>
                            <div className="relative md:w-2/3 w-4/5">
                                <div className="overflow-hidden h-2 text-xs flex">
                                    <div style={{ width: "20%" }} className="rounded-bl-lg rounded-tl-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="rounded-br-lg rounded-tr-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                </div>
                            </div>
                            <span className="text-xs text-white leading-3 ml-2 bg-green-500 px-2 py-0.5 rounded-sm">3</span>
                        </li>
                        <li className="flex items-center py-2">
                            <span className="text-sm text-gray-600 w-40 leading-3">Location</span>
                            <div className="relative md:w-2/3 w-4/5">
                                <div className="overflow-hidden h-2 text-xs flex">
                                    <div style={{ width: "20%" }} className="rounded-bl-lg rounded-tl-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="rounded-br-lg rounded-tr-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                </div>
                            </div>
                            <span className="text-xs text-white leading-3 ml-2 bg-green-500 px-2 py-0.5 rounded-sm">3</span>
                        </li>
                        <li className="flex items-center py-2">
                            <span className="text-sm text-gray-600 w-40 leading-3">Value</span>
                            <div className="relative md:w-2/3 w-4/5">
                                <div className="overflow-hidden h-2 text-xs flex">
                                    <div style={{ width: "20%" }} className="rounded-bl-lg rounded-tl-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                    <div style={{ width: "20%" }} className="rounded-br-lg rounded-tr-lg shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300 mr-0.5"></div>
                                </div>
                            </div>
                            <span className="text-xs text-white leading-3 ml-2 bg-green-500 px-2 py-0.5 rounded-sm">3</span>
                        </li>
                    </ul>
                </div>
                <div className="more text-right">
                    <a className="detail text-red-500 font-semibold mr-0 text-sm" href="">More...</a>
                    <ReviewTop />
                </div>
            </div>
        </>
    )
}
