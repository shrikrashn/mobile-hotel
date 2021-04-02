import React from 'react'
import Slider from '../../components/common/SliderSlick'

export default function PropertyTypeSlider() {
    return (
        <>
            <section className="property-slider py-5">
                <div className="container px-5 mx-auto">
                    <div className="head pb-3">
                        <h2 className="text-xl font-bold text-gray-700">Browse By Property Type</h2>
                        <p className="text-gray-600 text-sm">Search your dream stay by Hotel, Homestay and Resorts</p>
                    </div>
                    <div className="slider-inner">
                        <Slider>
                        <div className="xl:w-1/4 sm:w-1/4 px-1 py-1 w-1/2">
                            <figure className="relative">
                                <a className="overflow-hidden block rounded-lg" href="/">
                                    <img className="w-full h-full transition duration-500 scale-100 img" src="images/trending1.png" alt="image"/>
                                </a>
                                <figcaption className="py-1 px-1">
                                    <div className="detail">
                                        <h4 className="xl:text-lg text-base font-semibold text-gray-600">Roseate House</h4>
                                        <p className="text-sm text-gray-400">40,560 Stays</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/4 px-1 py-1 w-1/2">
                            <figure className="relative">
                                <a className="overflow-hidden block rounded-lg" href="/">
                                    <img className="w-full h-full transition duration-500 scale-100 img" src="images/trending1.png" alt="image"/>
                                </a>
                                <figcaption className="py-1 px-1">
                                    <div className="detail">
                                        <h4 className="xl:text-lg text-base font-semibold text-gray-600">Roseate House</h4>
                                        <p className="text-sm text-gray-400">40,560 Stays</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/4 px-1 py-1 w-1/2">
                            <figure className="relative">
                                <a className="overflow-hidden block rounded-lg" href="/">
                                    <img className="w-full h-full transition duration-500 scale-100 img" src="images/trending1.png" alt="image"/>
                                </a>
                                <figcaption className="py-1 px-1">
                                    <div className="detail">
                                        <h4 className="xl:text-lg text-base font-semibold text-gray-600">Roseate House</h4>
                                        <p className="text-sm text-gray-400">40,560 Stays</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

 