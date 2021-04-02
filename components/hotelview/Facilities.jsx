import React from 'react'
import FacilitiesService from './FacilitiesService'

export default function Facilities() {
    return (
        <>
            <section id="amenities" className="facilities pt-10">
                <div className="container px-5 mx-auto">
                    <h2 class="text-gray-700 text-lg font-bold uppercase mb-3">Facilities</h2>
                    <ul className="flex justify-between items-center mt-2">
                        <li>
                            <span className="bg-gray-200 rounded-sm px-1.5 py-2 flex justify-center items-center w-10">
                                <img src="images/facilities1.svg" alt="facilities"/>
                            </span>
                        </li>
                        <li>
                            <span className="bg-gray-200 rounded-sm px-1.5 py-2 flex justify-center items-center w-10 h-10">
                                <img src="images/facilities2.svg" alt="facilities"/>
                            </span>
                        </li>
                        <li>
                            <span className="bg-gray-200 rounded-sm px-1.5 py-2 flex justify-center items-center w-10 h-10">
                                <img src="images/facilities3.svg" alt="facilities"/>
                            </span>
                        </li>
                        <li>
                            <span className="bg-gray-200 rounded-sm px-1.5 py-2 flex justify-center items-center w-10 h-10">
                                <img src="images/facilities4.svg" alt="facilities"/>
                            </span>
                        </li>
                        <li>
                            <span className="bg-gray-200 rounded-sm px-1.5 py-2 flex justify-center items-center w-10 h-10">
                                <img src="images/facilities5.svg" alt="facilities"/>
                            </span>
                        </li>
                        <li>
                            <a href="" className="more bg-blue-500 rounded-sm px-1.5 py-2 flex justify-center items-center w-10 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                            <FacilitiesService />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
