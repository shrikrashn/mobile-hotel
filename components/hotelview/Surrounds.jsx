import React from 'react'

export default function Surrounds() {
    return (
        <>
            <section className="surround pt-3">
                <div className="container px-5 mx-auto">
                    <h2 class="text-gray-700 text-lg font-bold capitalize">Property Surrounds</h2>
                    <div className="repeat py-4">
                        <h3 class="text-gray-700 text-base font-normal uppercase mb-2 flex items-center"> 
                            <img className="mr-1" src="images/nearby.svg" alt="icon" />
                            Near By
                        </h3>
                        <ul>
                            <li className="text-sm text-gray-600 flex justify-between py-2 border-b border-gray-100 items-center">
                                <p className="w-3/5">Dharamshila Narayana Super speciality Hospital</p>
                                <span className="text-green-500 w-1/5 font-semibold">1.6 Km</span>
                            </li>
                            <li className="text-sm text-gray-600 flex justify-between py-2 border-b border-gray-100 items-center">
                                <p className="w-3/5">Akshardham</p>
                                <span className="text-green-500 w-1/5 font-semibold">1.6 Km</span>
                            </li>
                            <li className="text-sm text-gray-600 flex justify-between py-2 border-b border-gray-100 items-center">
                                <p className="w-3/5">Akshardham</p>
                                <span className="text-green-500 w-1/5 font-semibold">1.6 Km</span>
                            </li>
                            <li className="text-sm text-gray-600 flex justify-between py-2 border-b border-gray-100 items-center">
                                <p className="w-3/5">Max Super Speciality Hospital, Patparganj</p>
                                <span className="text-green-500 w-1/5 font-semibold">1.6 Km</span>
                            </li>
                        </ul>
                    </div>
                    <div className="repeat pt-4">
                        <h3 class="text-gray-700 text-base font-normal uppercase mb-2 flex items-center"> 
                            <img className="mr-1" src="images/railway.svg" alt="icon" />Railway Station
                        </h3>
                        <ul>
                            <li className="text-sm text-gray-600 flex justify-between py-2 items-center">
                                <p className="w-3/5">Nizamuddin Railway Station</p>
                                <span className="text-green-500 w-1/5 font-semibold">10.6 Km</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
