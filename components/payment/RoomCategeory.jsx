import React from 'react'

export default function RoomCategeory() {
    return (
        <>
            <section className="room-categeory">
                <div className="container px-5 mx-auto">
                    <div className="top-sec pb-5">
                        <h2 className="text-base font-bold text-gray-700 pb-2">Selected Rooms <span className="text-blue-500">(3 Rooms)</span></h2>
                        <p className="text-sm text-gray-600 ">You have selected following rooms to book, Great Choice!!.</p>
                    </div>
                    <div className="room-box border border-gray-200 rounded py-2 px-2 relative mb-3">
                        <h2 className="font-bold text-lg text-gray-700 relative">Super Deluxe
                            <p className="flex items-center text-sm text-gray-700 font-normal pt-1">
                                <img className="mr-1" src="images/bed.svg" alt="icon"/> <span className="font-semibold">Sleeps:</span> 2 Adults 
                            </p>
                            <p className="bg-red-200 text-xs text-red-400 flex items-center font-normal py-0.5 px-1 rounded-sm absolute bottom-0 right-0">
                                <svg className="w-4 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Non-Refundable</p>
                            <a className="image absolute right-0 top-0" href="">
                                <img src="images/image.svg" alt="icon"/>
                            </a>
                        </h2>
                        <ul className="flex flex-wrap mt-3 mb-5">
                            <li className="flex items-center pr-1 pt-0.5">
                                <img src="/images/roomservice.svg" alt="icon"/>
                                <p className="text-sm text-gray-600 pl-1">Room service</p>
                            </li>
                            <li className="flex items-center pr-1 pt-0.5">
                                <img src="/images/viproom.svg" alt="icon"/>
                                <p className="text-sm text-gray-600 pl-1">VIP room facilities</p>
                            </li>
                            <li className="flex items-center pr-1 pt-0.5">
                                <img src="/images/bar.svg" alt="icon"/>
                                <p className="text-sm text-gray-600 pl-1">Mini Bar</p>
                            </li>
                            <li className="flex items-center pr-1 pt-0.5">
                                <img src="/images/air.svg" alt="icon"/>
                                <p className="text-sm text-gray-600 pl-1">Air conditioning</p>
                            </li>
                            <li className="flex items-center pr-1 pt-0.5">
                                <img src="/images/housekeeping.svg" alt="icon"/>
                                <p className="text-sm text-gray-600 pl-1">Housekeeping</p>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/tv_icon.svg" alt="icon"/>
                                <p className="text-sm text-gray-600 pl-1">Flatscreen</p>
                            </li>
                        </ul>
                        <div className="rate-button flex items-center border-t border-gray-200 py-2">
                            <div className="right-btn w-full">
                                <p className="text-xs text-gray-500">You may add guest names that needs to be accomodated in this room for convenience</p>
                                <button type="button" class="rounded-full bg-blue-500 text-white py-1 pr-5 pl-2 hover:bg-white hover:text-gray-600 mt-2 text-xs flex items-center">
                                <svg className="w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                    Add Guest
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="room-box border border-gray-200 rounded pb-2 relative mb-3">
                        <figure>
                            <img className="w-full" src="images/deluxe.jpg" alt="image"/>
                        </figure>
                        <h2 className="font-bold text-lg text-gray-700 relative px-2 pt-2">Super Deluxe
                            <p className="flex items-center text-sm text-gray-700 font-normal pt-1">
                                <img className="mr-1" src="images/bed.svg" alt="icon"/> <span className="font-semibold">Sleeps:</span> 2 Adults 
                            </p>
                            <p className="bg-red-200 text-xs text-red-400 flex items-center font-normal py-0.5 px-1 rounded-sm absolute bottom-0 right-0">
                                <svg className="w-4 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Non-Refundable</p>
                        </h2>
                        <ul className="flex flex-wrap mt-3 mb-5 px-2">
                            <li className="flex items-center pr-1 pt-0.5">
                                <img src="/images/roomservice.svg" alt="icon"/>
                                <p className="text-sm text-gray-600 pl-1">Room service</p>
                            </li>
                            <li className="flex items-center pr-1 pt-0.5">
                                <img src="/images/viproom.svg" alt="icon"/>
                                <p className="text-sm text-gray-600 pl-1">VIP room facilities</p>
                            </li>
                            <li className="flex items-center pr-1 pt-0.5">
                                <img src="/images/bar.svg" alt="icon"/>
                                <p className="text-sm text-gray-600 pl-1">Mini Bar</p>
                            </li>
                            <li className="flex items-center pr-1 pt-0.5">
                                <img src="/images/air.svg" alt="icon"/>
                                <p className="text-sm text-gray-600 pl-1">Air conditioning</p>
                            </li>
                            <li className="flex items-center pr-1 pt-0.5">
                                <img src="/images/housekeeping.svg" alt="icon"/>
                                <p className="text-sm text-gray-600 pl-1">Housekeeping</p>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/tv_icon.svg" alt="icon"/>
                                <p className="text-sm text-gray-600 pl-1">Flatscreen</p>
                            </li>
                        </ul>
                        <div className="rate-button flex items-center border-t border-gray-200 py-2 px-2">
                            <div className="right-btn w-full">
                                <p className="text-xs text-gray-500">You may add guest names that needs to be accomodated in this room for convenience</p>
                                <button type="button" class="rounded-full bg-blue-500 text-white py-1 pr-5 pl-2 hover:bg-white hover:text-gray-600 mt-2 text-xs flex items-center">
                                <svg className="w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                    Add Guest
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
