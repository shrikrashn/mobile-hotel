import React from 'react'
import BookRoomPopup from '../payment/BookRoomPopup'

export default function RoomCategory() {
    return (
        <>
            <section id="category" className="room-category pt-5">
                <div className="container px-5 mx-auto">
                    <h2 className="text-gray-700 text-lg font-bold uppercase mb-2">ROOM CATEGORY</h2>
                    <div className="room-box border border-gray-200 rounded py-4 px-2 relative mb-3">
                        <h2 className="font-bold text-lg text-gray-700">Deluxe Twin
                            <p className="flex items-center text-sm text-gray-700 font-normal">
                                <img className="mr-1" src="images/bed.svg" alt="icon"/> 2 single-bed 
                            </p>
                            <a className="image bookroom absolute right-3 top-3" href="">
                                <img src="images/image.svg" alt="icon"/>
                            </a>
                            <BookRoomPopup />
                        </h2>
                        <ul className="flex flex-wrap mt-3 mb-5">
                            <li className="flex items-center pr-2">
                                <img src="/images/room-service-icon.svg" alt="icon"/>
                                <p className="text-sm text-green-500 pl-1">Room service</p>
                            </li>
                            <li className="flex items-center pr-2">
                                <img src="/images/vip-room-icon.svg" alt="icon"/>
                                <p className="text-sm text-green-500 pl-1">VIP room facilities</p>
                            </li>
                            <li className="flex items-center pr-2">
                                <img src="/images/mini-bar-icon.svg" alt="icon"/>
                                <p className="text-sm text-green-500 pl-1">Mini Bar</p>
                            </li>
                            <li className="flex items-center pr-2">
                                <img src="/images/ac-icon.svg" alt="icon"/>
                                <p className="text-sm text-green-500 pl-1">Air conditioning</p>
                            </li>
                            <li className="flex items-center pr-2">
                                <img src="/images/housekeeping-icon.svg" alt="icon"/>
                                <p className="text-sm text-green-500 pl-1">Housekeeping</p>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/screen-icon.svg" alt="icon"/>
                                <p className="text-sm text-green-500 pl-1">Flatscreen</p>
                            </li>
                        </ul>
                        <div className="rate-button flex items-center">
                            <div className="left-rate w-1/2">
                                <p className="text-sm text-gray-700">Book 3 rooms for
                                <span class="text-xl font-bold text-blue-500 block">₹ 33,520</span>
                                </p>
                            </div>
                            <div className="right-btn w-1/2">
                                <p className="text-xs text-red-500">+ ₹ 4,022 Taxes and Charges</p>
                                <a href="" class="bookroom rounded-full bg-blue-500 text-white py-1 px-6 hover:bg-white hover:text-gray-600 w-full mt-2 block text-center">I'll Book</a>
                                <BookRoomPopup />
                            </div>
                        </div>
                    </div>
                    <div className="room-box border border-gray-200 rounded py-4 px-2 relative mb-3">
                        <h2 className="font-bold text-lg text-gray-700">Deluxe Twin
                            <p className="flex items-center text-sm text-gray-700 font-normal">
                                <img className="mr-1" src="images/bed.svg" alt="icon"/> 2 single-bed 
                            </p>
                            <a className="image absolute right-3 top-3" href="">
                                <img src="images/image.svg" alt="icon"/>
                            </a>
                        </h2>
                        <ul className="flex flex-wrap mt-3 mb-5">
                            <li className="flex items-center pr-2">
                                <img src="/images/room-service-icon.svg" alt="icon"/>
                                <p className="text-sm text-green-500 pl-1">Room service</p>
                            </li>
                            <li className="flex items-center pr-2">
                                <img src="/images/vip-room-icon.svg" alt="icon"/>
                                <p className="text-sm text-green-500 pl-1">VIP room facilities</p>
                            </li>
                            <li className="flex items-center pr-2">
                                <img src="/images/mini-bar-icon.svg" alt="icon"/>
                                <p className="text-sm text-green-500 pl-1">Mini Bar</p>
                            </li>
                            <li className="flex items-center pr-2">
                                <img src="/images/ac-icon.svg" alt="icon"/>
                                <p className="text-sm text-green-500 pl-1">Air conditioning</p>
                            </li>
                            <li className="flex items-center pr-2">
                                <img src="/images/housekeeping-icon.svg" alt="icon"/>
                                <p className="text-sm text-green-500 pl-1">Housekeeping</p>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/screen-icon.svg" alt="icon"/>
                                <p className="text-sm text-green-500 pl-1">Flatscreen</p>
                            </li>
                        </ul>
                        <div className="rate-button flex items-center">
                            <div className="left-rate w-1/2">
                                <p className="text-sm text-gray-700">Book 3 rooms for
                                <span class="text-xl font-bold text-blue-500 block">₹ 33,520</span>
                                </p>
                            </div>
                            <div className="right-btn w-1/2">
                                <p className="text-xs text-red-500">+ ₹ 4,022 Taxes and Charges</p>
                                <button type="button" class="rounded-full bg-blue-500 text-white py-1 px-6 hover:bg-white hover:text-gray-600 w-full mt-2">I'll Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
