import React from 'react'
import EditDate from '../hotelview/EditDate'
import Slider from '../../components/common/SliderSlick'

export default function BookRoomPopup() {
    return (
        <>
            <section className="book-room font-normal pt-8 bg-white hidden fixed top-0 left-0 z-10 w-full h-full overflow-y-auto">
            <a class="absolute right-4 top-4" href="/"><svg class="w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></a>
                <div className="container mx-auto">
                    <div className="twinset px-5 ">
                        <h2 className="font-bold text-lg text-gray-700 relative">Deluxe Twin
                            <p className="flex items-center text-sm text-gray-700 font-normal pt-1">
                                <img className="mr-1" src="images/bed.svg" alt="icon"/> 2 single-bed  
                            </p>
                        </h2>
                        <ul className="flex flex-wrap mt-3 mb-5 ">
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
                    </div>
                    <div className="banner-inner leading-none">
                        <Slider settings={gallary}>
                        <figure className="overflow-hidden relative">
                            <img className="w-full" src="images/banner-top.jpg" alt="image"/>
                        </figure>
                        <figure className="overflow-hidden relative">
                            <img className="w-full" src="images/banner-top.jpg" alt="image"/>
                        </figure>
                        </Slider>
                    </div>
                    <EditDate />
                    <div className="select-room bg-blue-50 p-4 pb-7">
                        <h3 className="text-gray-700 font-bold text-center">Select Room</h3>
                        <div className="value flex justify-between items-center py-4">
                            <div className="left w-2/5 relative">
                                <span className="absolute left-2 top-1 cursor-pointer">
                                    <svg className="w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <input type="text" className="border rounded-full px-8 py-0.5 bg-white w-full text-center" />
                                <span className="absolute top-1 right-2 cursor-pointer">
                                    <svg className="w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                            <div className="right w-3/5 pl-4">
                                <p className="text-sm text-gray-700">Book 3 rooms for</p>
                                <span className="text-blue-500 font-bold text-lg">₹ 33,520</span>
                                <p className="text-xs text-gray-400">+ ₹ 4,022 Taxes and Charges</p>
                            </div>
                            
                        </div>
                        <a className="bg-blue-500 w-full text-center text-white py-1 block text-sm rounded-full" href="">I'll Book</a>
                    </div>
                </div>
            </section>
        </>
    )
}
const gallary = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    arrows: false,
  
    
  
  };