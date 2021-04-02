import React from 'react'

export default function Request() {
    return (
        <>
            <section className="request py-4">
                <div className="container px-5 mx-auto">
                    <h2 className="text-lg uppercase text-gray-700 font-bold mb-3">Booking Preferences</h2>
                    <h3 className="text-lg font-bold text-gray-700 mb-2">Special Request</h3>
                    <p className="text-sm text-gray-600">Please write your special requestes if any, Special requests cannot be guaranteed, but the property will do its best to meet your needs.</p>
                    <div className="editor pt-4">
                        <textarea className="text-sm text-gray-600 border border-gray-200 rounded h-36 w-full p-3" placeholder="Start Writing...."></textarea>
                    </div>
                </div>
            </section>
        </>
    )
}
