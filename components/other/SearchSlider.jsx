import React from 'react'
import Slider from '../../components/common/SliderSlick'
export default function SearchSlider() {
    return (
        <>
            <section className="search-slider px-5">
                <div className="container mx-auto shadow rounded-bl-md rounded-br-md">
                    <div className="banner-inner">
                        <Slider settings={sslider}>
                            <figure className="overflow-hidden relative">
                                <img className="w-full" src="images/slider-img.jpg" alt="image"/>
                                <figcaption className="absolute top-3 right-0 bg-white">
                                    <p className="text-green-600 text-xs pl-2 py-1">SAVE INR ₹ 5,110.36 <span className="text-white bg-green-600 rounded-tl-lg  rounded-bl-lg px-2 ml-1">50%</span></p>
                                </figcaption>
                            </figure>
                            <figure className="overflow-hidden relative">
                                <img className="w-full" src="images/slider-img.jpg" alt="image"/>
                                <figcaption className="absolute top-3 right-0 bg-white">
                                    <p className="text-green-600 text-xs pl-2 py-1">SAVE INR ₹ 5,110.36 <span className="text-white bg-green-600 rounded-tl-lg  rounded-bl-lg px-2 ml-1">50%</span></p>
                                </figcaption>
                            </figure>
                        </Slider>
                    </div>
                    <div className="slide-content px-3 pb-4 mb-3">
                        <div className="head flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-700">The Zion Shimla</h2>
                            <p className="flex">
                                <a href="" className="px-2  text-sm bg-yellow-600 text-white rounded-sm">Budget</a>
                                <a href="" className="px-2  text-sm bg-red-500 text-white rounded-sm ml-1">oyo</a>
                            </p>
                        </div>
                        <div className="text-area pt-1">
                            <p className="flex pb-2">
                                <span className="text-white bg-green-600 rounded-sm px-1 mr-1 text-xs">4.5/5</span>
                                <a href="review" className="text-xs text-gray-700 hover:text-blue-600">27 reviews</a>
                            </p>
                            <p className="text-sm text-gray-700 flex"><svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Paharganj New Delhi India,
                            </p>
                            <p className="text-base text-gray-700 flex items-center pt-3">Classic (2X) 
                                <figure className="flex ml-2">
                                    <img className="ml-0.5" src="images/classic-icon.svg" alt="icon"/>
                                    <img className="ml-0.5" src="images/classic-icon.svg" alt="icon"/>
                                    <img className="ml-0.5" src="images/classic-icon.svg" alt="icon"/>
                                </figure>
                            </p>
                            <p className="text-green-600 text-base">For 2 Nights, 3 Adults in 1 Room.</p>
                        </div>
                        <div className="price-section pt-7 text-right">
                            <p class="flex items-center justify-end">
                                <span class="text-sm text-gray-500 line-through">₹ 1500</span>
                                <span class="text-lg font-bold text-blue-500 line-through ml-3">₹ 900</span>
                            </p>
                            <p className="text-base text-gray-700 text-right">+ ₹ 819 Taxes and Charges</p>
                            <a href="" className="text-red-600 text-base">Free Cancellation</a>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="search-slider px-5 py-1">
                <div className="container mx-auto shadow rounded-bl-md rounded-br-md">
                    <div className="banner-inner">
                        <Slider settings={sslider}>
                            <figure className="overflow-hidden relative">
                                <img className="w-full" src="images/slider-img.jpg" alt="image"/>
                                <figcaption className="absolute top-3 right-0 bg-white">
                                    <p className="text-green-600 text-xs pl-2 py-1">SAVE INR ₹ 5,110.36 <span className="text-white bg-green-600 rounded-tl-lg  rounded-bl-lg px-2 ml-1">50%</span></p>
                                </figcaption>
                            </figure>
                            <figure className="overflow-hidden relative">
                                <img className="w-full" src="images/slider-img.jpg" alt="image"/>
                                <figcaption className="absolute top-3 right-0 bg-white">
                                    <p className="text-green-600 text-xs pl-2 py-1">SAVE INR ₹ 5,110.36 <span className="text-white bg-green-600 rounded-tl-lg  rounded-bl-lg px-2 ml-1">50%</span></p>
                                </figcaption>
                            </figure>
                        </Slider>
                    </div>
                    <div className="slide-content px-3 pb-4 mb-3">
                        <div className="head flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-700">The Zion Shimla</h2>
                            <p className="flex">
                                <a href="" className="px-2  text-sm bg-yellow-600 text-white rounded-sm">Budget</a>
                                <a href="" className="px-2  text-sm bg-red-500 text-white rounded-sm ml-1">oyo</a>
                            </p>
                        </div>
                        <div className="text-area pt-1">
                            <p className="flex pb-2">
                                <span className="text-white bg-green-600 rounded-sm px-1 mr-1 text-xs">4.5/5</span>
                                <a href="review" className="text-xs text-gray-700 hover:text-blue-600">27 reviews</a>
                            </p>
                            <p className="text-sm text-gray-700 flex"><svg className="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Paharganj New Delhi India,
                            </p>
                            <p className="text-base text-gray-700 flex items-center pt-3">Classic (2X) 
                                <figure className="flex ml-2">
                                    <img className="ml-0.5" src="images/classic-icon.svg" alt="icon"/>
                                    <img className="ml-0.5" src="images/classic-icon.svg" alt="icon"/>
                                    <img className="ml-0.5" src="images/classic-icon.svg" alt="icon"/>
                                </figure>
                            </p>
                            <p className="text-green-600 text-base">For 2 Nights, 3 Adults in 1 Room.</p>
                        </div>
                        <div className="price-section pt-7 text-right">
                            <p class="flex items-center justify-end">
                                <span class="text-sm text-gray-500 line-through">₹ 1500</span>
                                <span class="text-lg font-bold text-blue-500 line-through ml-3">₹ 900</span>
                            </p>
                            <p className="text-base text-gray-700 text-right">+ ₹ 819 Taxes and Charges</p>
                            <a href="" className="text-red-600 text-base">Free Cancellation</a>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
const sslider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
          
        }
      }
    ]
  
  
  };