import React from 'react'

export default function FacilitiesService() {
    return (
        <>
            <div className="hidden facilities-services bg-white py-12 px-3 w-full fixed top-0 left-0 z-50 max-h-full overflow-y-auto h-full">
                <a className="w-6 h-6 flex justify-center items-center bg-gray-200 rounded-sm absolute left-4 top-4" href="">
                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                </a>
                <div className="service-sec sm:px-5 px-3 sm:w-1/3 w-full">
                    <h4 className="sm:text-lg text-base font-bold text-gray-700 sm:py-3 py-1">Property amenities</h4>
                    <ul>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/parking_icon.svg" alt="icon"/>
                            </figure>
                            <span>Free parking</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/airport.svg" alt="icon"/>
                            </figure>
                            <span>Airport transportation</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/wifi_icon.svg" alt="icon"/>
                            </figure>
                            <span>Free High Speed Internet (WiFi)</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/entertainment.svg" alt="icon"/>
                            </figure>
                            <span>Entertainment staff</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/bar.svg" alt="icon"/>
                            </figure>
                            <span>Bar / lounge</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/pool.svg" alt="icon"/>
                            </figure>
                            <span>Pool</span>
                        </li>
                    </ul>
                </div>
                <div className="service-sec sm:px-5 px-3 sm:w-1/3 w-full">
                    <h4 className="text-lg font-bold text-gray-700 py-3">Room features</h4>
                    <ul>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/roomservice.svg" alt="icon"/>
                            </figure>
                            <span>Room service</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/viproom.svg" alt="icon"/>
                            </figure>
                            <span>VIP room facilities</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/air.svg" alt="icon"/>
                            </figure>
                            <span>Air conditioning</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/bar.svg" alt="icon"/>
                            </figure>
                            <span>Mini Bar</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/housekeeping.svg" alt="icon"/>
                            </figure>
                            <span>Housekeeping</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/tv_icon.svg" alt="icon"/>
                            </figure>
                            <span>Flatscreen TV</span>
                        </li>
                    </ul>
                </div>
                <div className="service-sec sm:px-5 px-3 sm:w-1/3 w-full">
                    <h4 className="text-lg font-bold text-gray-700 py-3">Room types</h4>
                    <ul>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/view.svg" alt="icon"/>
                            </figure>
                            <span>mountain view </span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/view.svg" alt="icon"/>
                            </figure>
                            <span>City view</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/family.svg" alt="icon"/>
                            </figure>
                            <span>Bridal suite</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/family.svg" alt="icon"/>
                            </figure>
                            <span>Family rooms</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/housekeeping.svg" alt="icon"/>
                            </figure>
                            <span>Smoking rooms</span>
                        </li>
                        <li className="sm:text-base text-sm text-gray-600 flex items-center sm:py-2 py-1 capitalize">
                            <figure className="mr-2">
                                <img src="/images/housekeeping.svg" alt="icon"/>
                            </figure>
                            <span>Delux Room</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
