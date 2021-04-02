import React from 'react'
import SearchEnter from './SearchEnter'

export default function Search() {
    return (
        <>
        <div className="bannet-text w-full text-center pb-16 absolute top-36 left-0 z-50">
            <div className="container px-5 mx-auto">
                <h1 className="text-2xl text-white font-semibold px-4">Smarter and Hassle Free Hotel Booking Decisions</h1>
                <div className="search xl:w-2/4 lg:w-1/2 mx-auto relative inline-block w-full mt-4">
                    <span className="absolute left-4 top-0 bottom-0 m-auto h-5">
                        <img src="/images/search.svg" alt="icon" />
                    </span>
                    <input type="text" id="search" name="search" placeholder="Where are you going?" className="inpt-search w-full h-10 bg-white rounded-full text-base outline-none text-gray-800 py-1 pl-12 sm:pr-40 pr-14 leading-8 transition-colors duration-200 ease-in-out shadow-sm" />
                    <SearchEnter />
                </div>
            </div>
        </div>
        
        </>
    )
}
