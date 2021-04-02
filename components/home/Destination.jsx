import React from 'react'

export default function Destination() {
    return (
        <>
             <section className="explore-destinations">
                <div className="container px-5 mx-auto">
                    <div className="head pb-3">
                        <h2 className="text-xl font-bold text-gray-700">Explore Destinations</h2>
                        <p className="text-gray-600 text-sm">Search hotels in top indian Destinations</p>
                    </div>
                    <div className="slider-inner flex flex-wrap">
                        <div className="xl:w-1/4 sm:w-1/4 px-1 py-1 w-1/2">
                            <figure className="relative">
                                <span className="overflow-hidden block rounded-lg">
                                    <img className="w-full h-full transition duration-500 scale-100 img" src="images/trending2.png" alt="image"/>
                                </span>
                                <a className="py-2 px-2 flex items-end justify-between w-full h-full absolute bottom-0 left-0 z-10" href="/hotelview">
                                    <div className="detail">
                                        <h4 className="xl:text-lg text-base font-semibold text-white">Andaman</h4>
                                        <p className="text-xs text-white">40,560 Stays</p>
                                    </div>
                                    <span>
                                        <img src="images/btn.svg" alt=""/>
                                    </span>
                                </a>
                                <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-lg"></div>
                            </figure>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/4 px-1 py-1 w-1/2">
                            <figure className="relative">
                                <span className="overflow-hidden block rounded-lg">
                                    <img className="w-full h-full transition duration-500 scale-100 img" src="images/trending1.png" alt="image"/>
                                </span>
                                <a className="py-2 px-2 flex items-end justify-between w-full h-full absolute bottom-0 left-0 z-10" href="/">
                                    <div className="detail">
                                        <h4 className="xl:text-lg text-base font-semibold text-white">Andaman</h4>
                                        <p className="text-xs text-white">40,560 Stays</p>
                                    </div>
                                    <span>
                                        <img src="images/btn.svg" alt=""/>
                                    </span>
                                </a>
                                <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-lg"></div>
                            </figure>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/4 px-1 py-1 w-1/2">
                            <figure className="relative">
                                <span className="overflow-hidden block rounded-lg">
                                    <img className="w-full h-full transition duration-500 scale-100 img" src="images/trending1.png" alt="image"/>
                                </span>
                                <a className="py-2 px-2 flex items-end justify-between w-full h-full absolute bottom-0 left-0 z-10" href="/">
                                    <div className="detail">
                                        <h4 className="xl:text-lg text-base font-semibold text-white">Andaman</h4>
                                        <p className="text-xs text-white">40,560 Stays</p>
                                    </div>
                                    <span>
                                        <img src="images/btn.svg" alt=""/>
                                    </span>
                                </a>
                                <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-lg"></div>
                            </figure>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/4 px-1 py-1 w-1/2">
                            <figure className="relative">
                                <span className="overflow-hidden block rounded-lg">
                                    <img className="w-full h-full transition duration-500 scale-100 img" src="images/trending2.png" alt="image"/>
                                </span>
                                <a className="py-2 px-2 flex items-end justify-between w-full h-full absolute bottom-0 left-0 z-10" href="/">
                                    <div className="detail">
                                        <h4 className="xl:text-lg text-base font-semibold text-white">Andaman</h4>
                                        <p className="text-xs text-white">40,560 Stays</p>
                                    </div>
                                    <span>
                                        <img src="images/btn.svg" alt=""/>
                                    </span>
                                </a>
                                <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-lg"></div>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
