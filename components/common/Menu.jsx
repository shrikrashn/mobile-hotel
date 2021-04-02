import React from 'react'

export default function Menu() {
    return (
        <>
            <section className="menu-bar bg-white fixed top-0 bottom-0 left-0 w-full h-full z-auto py-5 hidden">
                <div className="container px-5 mx-auto">
                    <a className="absolute right-4 top-4" href="/">
                        <svg className="w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </a>
                    <div className="logo">
                        <a href="/">
                            <img src="images/logo-mobile.svg" alt="logo"/>
                        </a>
                        <p className="text-2xl text-gray-800 font-semibold">Tour My India</p>
                    </div>
                    <nav className="pt-10">
                        <ul>
                            <li className="py-3">
                                <a className="text-lg text-gray-800 flex items-center  hover:text-blue-500" href="">
                                    <img className="mr-3" src="images/hotel-m.svg" alt="icon" />
                                    Hotels 
                                </a>
                            </li>
                            <li className="py-3">
                                <a className="text-lg text-gray-800 flex items-center hover:text-blue-500" href="">
                                    <img className="mr-3" src="images/payment-m.svg" alt="icon" />
                                    Payment 
                                </a>
                            </li>
                            <li className="py-3">
                                <a className="text-lg text-gray-800 flex items-center hover:text-blue-500" href="">
                                    <img className="mr-3" src="images/hospital-m.svg" alt="icon" />
                                    Hospitals 
                                </a>
                            </li>
                            <li className="py-3">
                                <a className="text-lg text-gray-800 flex items-center hover:text-blue-500" href="">
                                    <img className="mr-3" src="images/notification-m.svg" alt="icon" />
                                    Notifications 
                                </a>
                            </li>
                            <li className="py-3">
                                <a className="text-lg text-gray-800 flex items-center hover:text-blue-500" href="">
                                    <img className="mr-3" src="images/setting-m.svg" alt="icon" />
                                    Settings 
                                </a>
                            </li>
                            <li className="py-3">
                                <a className="text-lg text-gray-800 flex items-center hover:text-blue-500" href="">
                                    <img className="mr-3" src="images/star-m.svg" alt="icon" />
                                    Rate Us 
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}
