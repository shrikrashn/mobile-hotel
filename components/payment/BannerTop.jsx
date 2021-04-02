import React from 'react'
import EditDate from '../hotelview/EditDate'
import EditTime from '../payment/EditTime'

export default function BannerTop() {
    return (
        <>
            <section className="search-slider ">
                <div className="head bg pb-20 pt-8 px-5 bg-blue-500">
                    <h1 className="text-lg font-bold text-white pb-3">The Zion - Shimla</h1>
                    <p className="text-sm text-white flex items-start ">
                        <svg className="w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    <span>Near Sankat Mochan (Old Muhal Badai), 171010 Shimla, India - <a className="text-white font-semibold" href="/map">Show on Map</a></span> 
                    </p>
                </div>
                <div className="container mx-auto px-5 -mt-12">
                    <div className="banner-inner">
                        <figure className="overflow-hidden relative">
                            <img className="w-full" src="images/banner-top.jpg" alt="image"/>
                            <figcaption className="absolute top-3 right-0 bg-white">
                                <p className="text-gray-600 text-sm pl-2 py-1 pr-1">2000 Reviews <span className="text-white bg-green-600 rounded px-1 ml-1">4.5</span></p>
                            </figcaption>
                        </figure>
                    </div>
                    <EditDate />
                    <EditTime />
                </div>
            </section>
        </>
    )
}
