import React from 'react'
import Menu from './Menu'

export default function Header() {
    return (
        <>
            <section className="header absolute left-0 top-8 pb-5 z-20 w-full">
                <div className="container px-5 mx-auto flex justify-between">
                    <div className="left logo">
                        <a className="/">
                            <img src="images/tmi_logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="right flex items-center">
                        <div className="select w-24 text-white text-sm flex items-center">
                            <figure className="w-5 h-5 overflow-hidden rounded-full mr-2">
                                <img src="images/user-icon.svg" alt="icon" />
                            </figure>
                            <label className="flex items-center">Rajput
                                <img className="ml-1" src="images/arrow-down.svg" alt="icon" />
                            </label>
                        </div>
                        <a className="mobile-menu" href="">
                            <svg className="text-white w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                        <Menu />
                    </div>
                </div>
            </section>
        </>
    )
}
