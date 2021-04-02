import React from 'react'

export default function RoomBooking() {
    return (
        <>
            <section id="overview" className="room-booking px-5 py-1">
                <div className="head bg pb-5 pt-2">
                    <h1 className="text-lg font-bold text-gray-700 pb-3">The Zion - Shimla</h1>
                    <p className="text-sm text-gray-700 flex items-start ">
                        <svg className="w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    <span>Near Sankat Mochan (Old Muhal Badai), 171010 Shimla, India - <a className="text-green-500 font-semibold" href="/map">Show on Map</a></span> 
                    </p>
                </div>
                <div className="container mx-auto rounded-bl-md rounded-br-md bg-blue-100">
                    <div className="banner-inner">
                        <figure className="overflow-hidden relative">
                            <img className="w-full" src="images/slider-img.jpg" alt="image"/>
                            <figcaption className="absolute top-3 right-0 bg-white">
                                <p className="text-gray-600 text-sm pl-2 py-1">2000 Reviews <span className="text-white bg-green-600 rounded px-1 ml-1">4.5</span></p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="slide-content px-3 pb-4 mb-3 pt-2">
                        <div className="head flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-700">The Zion Shimla</h2>
                        </div>
                        <div className="text-area pt-1">
                            <p className="text-sm text-gray-700">Paharganj New Delhi India,</p>
                            <p className="text-base text-gray-700 flex items-center pt-3 font-semibold"> 
                                <figure className="flex mr-2">
                                    <img className="ml-0.5" src="images/classic-icon.svg" alt="icon"/>
                                    <img className="ml-0.5" src="images/classic-icon.svg" alt="icon"/>
                                    <img className="ml-0.5" src="images/plus.svg" alt="icon"/>
                                    <img className="ml-0.5" src="images/classic-icon.svg" alt="icon"/>
                                </figure>
                                Guests
                            </p>
                            <p className="text-gray-600 text-sm">in 1 x Room (Deluxe Twin)</p>
                        </div>
                        <div className="price-section pt-7 flex justify-between">
                            <p class="flex items-center w-3/5">
                                <span class="text-xl text-gray-500 line-through">₹ 1500</span>
                                <span class="text-3xl font-bold text-blue-500 line-through ml-4">₹ 900</span>
                            </p>
                            <p className="text-xs text-gray-500  w-2/5">Includes taxes and Charges For 2 Nights</p>
                        </div>
                        <div className="button section pt-5 pb-3 flex justify-between">
                            <a href="/payment" className="rounded-full bg-white text-gray-600 py-1 px-4">Other Rooms</a>
                            <a href="/payment" className="rounded-full bg-blue-500 text-white py-1 px-4 hover:bg-white hover:text-gray-600">Book this Room</a>
                        </div>
                    </div>
                    
                </div>
            </section>
            <div className="more-rooms sticky bottom-0">
                <a href="#category" className="more block bg-blue-500 py-1 text-center w-full text-white">More Room Options</a>
            </div>
        </>
    )
}
