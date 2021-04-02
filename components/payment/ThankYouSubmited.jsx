import React from 'react'

export default function ThankYouSubmited() {
    return (
        <>
            <section className="thankyou bg-white pt-20  left-0 top-0 z-30 w-full h-full fixed hidden overflow-y-auto">
                <div className="container px-5 mx-auto">
                    <figure className="text-center">
                        <img className="mx-auto" src="/images/thankyou.png" alt="img"/>
                        <figcaption className="text-2xl capitalize text-green-600 font-bold mt-2">Thank You</figcaption>
                    </figure>
                    <p className="text-2xl capitalize text-gray-700 py-8 text-center"><span className="block font-bold">The Zion - Shimla</span>Has been Booked, </p>
                    <div className="w-full bg-green-50 rounded p-4">
                        <div className="dates flex items-end justify-between">
                            <div className="text-sm text-green-600 flex items-center">
                                <div className="pl-2">
                                    <p className="flex items-center"><span>Your Search:  2 Adults, 1 night</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-4 flex">
                            <p className="w-1/2 pr-5 text-sm text-green-600 border-r border-green-600">Check-in date<span className="text-sm font-bold block">Sat 20 Mar 2021</span></p>
                            <p className="w-1/2 pl-5 text-sm text-green-600">Check-out date<span className="text-sm font-bold block">Sat 22 Mar 2021</span></p>
                        </div>
                        <div className="time w-full flex mx-auto pt-2">
                            <p className="w-1/2 text-sm text-green-600 flex items-center">
                                <svg className="w-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-xs pl-1">11:00 - 14:00</span>
                            </p>
                            <p className="w-1/2 text-sm text-green-600 flex items-center pl-5">
                                <svg className="w-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-xs pl-1">11:00 - 14:00</span>
                            </p>
                        </div>
                    </div>
                    <div className="ticket py-6">
                        <a className="flex text-green-600 font-semibold items-center" href=""> 
                            <img className="mr-2" src="/images/ticket.svg" alt="icon"/> Download Ticket
                        </a>
                        <a href="/" className="bg-blue-500 text-white w-full block rounded-full text-center py-2 font-semibold mt-8">Explore More</a>
                    </div>
                </div>
            </section>
        </>
    )
}
