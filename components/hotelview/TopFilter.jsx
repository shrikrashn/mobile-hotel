import React from 'react'

export default function TopFilter() {
    return (
        <>
            <section className="top-filter bg-blue-500 sticky top-0 z-10">
                <div className="container px-5 mx-auto">
                    <ul className="flex pb-2 overflow-x-auto whitespace-nowrap">
                        <li>
                            <a className="text-xs text-white px-1.5 active:bg-red-800" href="#overview">Overview</a>
                        </li>
                        <li>
                            <a className="more text-xs text-white px-1.5" href="#amenities">amenities</a>
                        </li>
                        <li>
                            <a className="reviews text-xs text-white px-1.5" href="#reviews">Reviews</a>
                        </li>
                        <li>
                            <a className="text-xs text-white px-1.5" href="#location">Location</a>
                        </li>
                        <li>
                            <a className="text-xs text-white px-1.5" href="#policies">Hotel Policy</a>
                        </li>
                        
                    </ul>
                </div>
            </section>
        </>
    )
}
