import React from 'react'
import Link from 'next/link'

export default function FooterMenu() {
    return (
        <>
            <div className="footer-menu bg-gray-800 w-full mt-24 inline-block">
                <div className="container mx-auto px-5">
                    <div className="menu-sec w-full bg-white rounded-3xl sm:px-16 px-4 py-2 -mt-16 shadow sm:mb-0 mb-8">
                        <div className="menu-bottom py-5 flex flex-wrap">
                            <div className="menu-repeat lg:w-1/4 sm:w-1/2 w-1/2 mb-3">
                                <h4 className="text-sm text-blue-500 uppercase font-bold mb-2">Company</h4>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">We Are Hiring</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">TMI Reviews</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Privacy Policies</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Copyright Policies</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Support</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-repeat lg:w-1/4 sm:w-1/2 w-1/2 mb-3 sm:block hidden">
                                <h4 className="text-sm text-blue-500 uppercase font-bold mb-2">PROPERTY TYPE</h4>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Homes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Apartments</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Resorts</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Hostels</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">B&Bs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Guest houses</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Villas</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-repeat lg:w-1/4 sm:w-1/2 w-1/2 mb-3">
                                <h4 className="text-sm text-blue-500 uppercase font-bold mb-2">INTERESTED AREAS</h4>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Wildlife</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Heritage</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Pilgrimage</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Hill Station</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Adventure</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Beach</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-repeat lg:w-1/4 sm:w-1/2 w-1/2 mb-3">
                                <h4 className="text-sm text-blue-500 uppercase font-bold mb-2">OTHER SERVICES</h4>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Destination Weddings
MICE</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Medical Tourism</a>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="social-menu mt-5">
                                    <ul className="flex items-center">
                                        <li>
                                            <a href="" className="flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full mr-2">
                                                <img src="images/twitter.svg" alt="twitter"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full mr-2">
                                                <img src="images/facebook.svg" alt="twitter"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full mr-2">
                                                <img src="images/linkden.svg" alt="twitter"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full mr-2">
                                                <img src="images/youtube.svg" alt="twitter"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
