import React from 'react'

export default function ArriavalTime() {
    return (
        <>
            <section className="arriaval-time py-3">
                <div className="container px-5 mx-auto">
                    <h2 className="text-lg uppercase text-gray-700 font-bold mb-3">Arrival Time</h2>
                    <p className="text-sm text-gray-600">Let property know about your probable time of arrival, this would help property prepare your rooms in advance and offer your warm welcome</p>
                    <p className="text-base text-gray-600 mt-4"><label className="block">I'll arrive on</label> <span className="font-semibold text-blue-500 ">Wednesday, 17 Mar 2021</span> somewhere around:</p>
                    <div className="w-full relative mt-4">
                        <select class="block appearance-none w-full bg-white border text-gray-700 py-3 pl-3 pr-8 rounded leading-tight " id="grid-state">
                            <option>I Don't Know</option>
                        </select>
                        <svg className="w-5 text-gray-600 absolute top-4 right-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}
