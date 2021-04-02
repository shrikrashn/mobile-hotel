import React from 'react'
import ThankYouSubmited from './ThankYouSubmited'

export default function BottomFixed() {
    return (
        <>
            <div className="rate-button flex items-center px-5 mx-auto fixed bottom-0 left-0 z-10 w-full bg-white py-1 shadow">
                <div className="left-rate w-1/2">
                    <p className="text-lg text-gray-700 font-bold">To Pay
                    <span class="text-2xl font-bold text-blue-500 block">₹ 33,520</span>
                    </p>
                </div>
                <div className="right-btn w-1/2">
                    <a href="" class="paynow rounded-full bg-blue-500 text-white py-2 px-6 hover:bg-white hover:text-gray-600 w-full mt-2 block text-center">Pay Now</a>
                    <ThankYouSubmited />
                </div>
            </div>
        </>
    )
}
