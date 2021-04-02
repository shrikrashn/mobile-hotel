import React from 'react'
import ThankYouSubmited from './ThankYouSubmited'

export default function PriceSummary() {
    return (
        <>
            <section className="price-summary py-4">
                <div className="container px-5 mx-auto">
                    <div className="summary shadow w-full p-3 rounded">
                        <h2 className='text-gray-700 uppercase text-lg mb-2 font-bold'>PRICE SUMMARY</h2>
                        <ul className=" border-b pb-4">
                            <li className="flex justify-between items-center text-base text-gray-700 py-1">
                                <p>3 Rooms x 3 Nights</p>
                                <span className="font-semibold">₹ 10,800</span>
                            </li>
                            <li className="flex justify-between items-center text-base text-gray-700 py-1">
                                <p>Total Discounts <span className="text-green-500">-17%</span></p>
                                <span className="text-green-500 font-semibold">₹ 10,800</span>
                            </li>
                        </ul>
                        <ul className=" border-b pb-4 pt-2">
                            <li className="flex justify-between items-center text-base text-gray-700 py-1">
                                <p>Total after Discount</p>
                                <span className="font-semibold">₹ 9,000</span>
                            </li>
                            <li className="flex justify-between items-center text-base text-gray-700 py-1">
                                <p>Tax & Charges</p>
                                <span className="text-yellow-500 font-semibold">+ ₹ 1,080</span>
                            </li>
                        </ul>
                        <ul className="pb-2 pt-4">
                            <li className="flex justify-between items-center text-2xl text-gray-700 py-1  font-bold">
                                <p>To Pay</p>
                                <span className="text-blue-500">₹ 33,520</span>
                            </li>
                        </ul>
                    </div>
                    <div className="paynow relative my-5">
                        <label class="items-center py-1 block">
                            <p className="absolute right-2 top-2">
                            <svg className="w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            </p>
                            <p className="text-sm text-gray-600 cursor-pointer font-normal p-3 bg-blue-50 border border-blue-400 rounded">
                                <span className="text-base uppercase font-bold block mb-2">Pay Now</span>
                                Pay ₹ 10,080 now via UPI, Debit/Credit Card or Net Banking.
                            </p>
                        </label>
                        <label class="items-center py-1 block relative">
                            <p className="absolute right-5 top-5">
                            <svg className="w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            </p>
                            <p className="text-sm text-gray-600 cursor-pointer font-normal p-3 ">
                                <span className="text-base uppercase font-bold block mb-2">Pay at Property</span>
                                Get a confirmed booking now, and pay directly at the property during check-in
                            </p>
                        </label>
                        <a href="" className="paynow text-white bg-blue-500 w-full py-2 px-2 rounded-full block text-center mt-4">Pay Now</a>
                            <ThankYouSubmited />
                    </div>
                    <div className="cancelation bg-red-50 rounded p-3">
                        <h2 className="text-gray-800 font-semibold">CANCELLATION CHARGES</h2>
                        <p className="text-base text-green-600 my-3">FREE cancellation till 15 Mar, 2021 23:59</p>
                        <p className="text-base flex justify-between">From 16 Mar, 00:00 onwards<span className="text-green-600 font-semibold">₹ 3,000</span></p>
                    </div>
                </div>
            </section>
            
        </>
    )
}
