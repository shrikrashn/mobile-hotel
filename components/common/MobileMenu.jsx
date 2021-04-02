import React from 'react'
import LocationFilter from './LocationFilter'
import PriceFilter from './PriceFilter'
import ReviewFilter from './ReviewFilter'

export default function MobileMenu() {
    return (
        <>
            <section className="mobile-menu bg-white w-full py-2 fixed bottom-0 z-10 sm:hidden block shadow">
                <div className="mx-auto container px-5">
                    <ul className="flex items-end justify-between relative">
                        <li>
                            <a className="price text-center mx-3 inline-block" href="/">
                                <figure>
                                    <img className="inline" src="images/price.svg" alt="price" />
                                    <figcaption>
                                        <p className="text-sm text-gray-700 mt-1 hover:text-blue-500 font-semibold">Price</p>
                                    </figcaption>
                                </figure>
                            </a>
                            <PriceFilter />
                        </li>
                        <li>
                            <a className="location text-center mx-3 inline-block" href="/">
                                <figure>
                                    <img className="inline" src="images/location.svg" alt="location" />
                                    <figcaption>
                                        <p className="text-sm text-gray-700 mt-1 hover:text-blue-500 font-semibold">Location</p>
                                    </figcaption>
                                </figure>
                            </a>
                            <LocationFilter />
                        </li>
                        <li>
                            <a className="rating text-center mx-3 inline-block" href="/">
                                <figure>
                                    <img className="inline" src="images/review-m.png" alt="location" />
                                    <figcaption>
                                        <p className="text-sm text-gray-700 mt-1 hover:text-blue-500 font-semibold">Rating</p>
                                    </figcaption>
                                </figure>
                            </a>
                            <ReviewFilter />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
