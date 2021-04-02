import React from 'react'

export default function SearchEdit() {
    return (
        <>
            <section className="search-edit bg-blue-500 pb-5 hidden absolute left-0 top-16 z-50">
                <div className="container px-5 mx-auto">
                    <div className="form bg-blue-600 p-1 rounded">
                        <form>
                            <div className="search mx-auto relative inline-block w-full mb-1">
                                <span className="absolute left-2 top-0 bottom-0 m-auto h-5">
                                    <img src="/images/map-pin.png" alt="icon" />
                                </span>
                                <input type="text" id="search" name="search" placeholder="Goa" className="w-full h-11 bg-white text-base outline-none text-gray-800 py-1 pl-8 sm:pr-40 pr-14 leading-8 transition-colors duration-200 ease-in-out shadow-sm" />
                                <a href="" className="absolute right-2 top-3 bg-gray-200 rounded-full px-2 text-xs text-gray-600 flex items-center h-5"><img className="pr-1" src="/images/gps.png" alt="icon" /> Near Me</a>
                            </div>
                            <div className="flex relative">
                                <div className="search mx-auto relative inline-block w-1/2 mb-1">
                                    <span className="absolute left-2 top-0 bottom-0 m-auto h-5">
                                        <img src="/images/calendar.svg" alt="icon" />
                                    </span>
                                    <input type="text" id="search" name="search" placeholder="23 Mar" className="w-full h-11 bg-white text-base outline-none text-gray-800 py-1 pl-8 leading-8 transition-colors duration-200 ease-in-out shadow-sm" />
                                </div>
                                <div className="search mx-auto relative inline-block w-1/2 mb-1">
                                    <input type="text" id="search" name="search" placeholder="23 Mar" className="w-full h-11 bg-white text-base outline-none text-gray-800 py-1 pl-8 leading-8 transition-colors duration-200 ease-in-out shadow-sm" />
                                </div>
                                <span className="absolute left-0 top-0 bottom-0 right-0 w-5 m-auto h-1">
                                    <img src="/images/line.png" alt="icon" />
                                </span>
                            </div>
                            <div className="search mx-auto relative inline-block w-full mb-1">
                                <span className="absolute left-2 top-0 bottom-0 m-auto h-5">
                                    <img src="/images/adult.png" alt="icon" />
                                </span>
                                <input type="text" id="search" name="search" placeholder="1 Room, 2 Adults" className="w-full h-12 bg-white text-base outline-none text-gray-800 py-1 pl-8 sm:pr-40 pr-14 leading-8 transition-colors duration-200 ease-in-out shadow-sm" />
                            </div>
                            <div className="button-search w-full">
                                <button className="text-white w-full bg-blue-600 py-3 flex items-center justify-center" type="button"><img src="images/search-w.png" alt="search" /> SEARCH</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
