import React from 'react'

export default function Location() {
    return (
        <>
             <section id="location" className="location-section pb-5 pt-10">
                <div className="container px-5 mx-auto flex flex-wrap">
                    <h2 class="text-gray-700 text-lg font-bold uppercase mb-4">Location</h2>
                    <div className="weather md:w-2/5 w-full">
                        <div className="top-head flex justify-between">
                            <div className="left w-1/2">
                                <span className="text-gray-500 text-5xl font-normal relative flex items-center">33 
                                    <b className="text-3xl font-normal pl-4">C</b>
                                    <sup className="absolute left-14 top-4 text-gray-500">&deg;</sup>
                                </span>
                                <p className="text-gray-500 text-base py-3">Agra, Uttar Pradesh</p>
                            </div>
                            <div className="right">
                                <img className="w-16" src="images/ellipse.png" alt="img" />
                            </div>
                        </div>
                        <div className="bottom-head">
                            <p className="text-gray-500 text-sm uppercase font-semibold">Forecast</p>
                            <ul className="flex justify-between pt-5">
                                <li className="w-1/4">
                                    <p className="text-xs text-gray-600">MON <span className="block text-xs text-gray-400">2pm</span></p>
                                    <figure className="py-5">
                                        <img src="images/weather_icon.svg" alt="icon"/>
                                    </figure>
                                    <span className="block text-xs text-gray-400">23 &deg;</span>
                                </li>
                                <li className="w-1/4">
                                    <p className="text-xs text-gray-600">MON <span className="block text-xs text-gray-400">2pm</span></p>
                                    <figure className="py-5">
                                        <img src="images/weather_icon.svg" alt="icon"/>
                                    </figure>
                                    <span className="block text-xs text-gray-400">23 &deg;</span>
                                </li>
                                <li className="w-1/4">
                                    <p className="text-xs text-gray-600">MON <span className="block text-xs text-gray-400">2pm</span></p>
                                    <figure className="py-5">
                                        <img src="images/weather_icon.svg" alt="icon"/>
                                    </figure>
                                    <span className="block text-xs text-gray-400">23 &deg;</span>
                                </li>
                                <li className="w-1/4">
                                    <p className="text-xs text-gray-600">MON <span className="block text-xs text-gray-400">2pm</span></p>
                                    <figure className="py-5">
                                        <img src="images/weather_icon.svg" alt="icon"/>
                                    </figure>
                                    <span className="block text-xs text-gray-400">23 &deg;</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="map md:w-3/5 w-full md:pr-10 md:pt-0 pr-0 pt-5 ">
                        <img className="w-full" src="images/map.png" alt="image"/>
                    </div>
                </div>
            </section>
        </>
    )
}
