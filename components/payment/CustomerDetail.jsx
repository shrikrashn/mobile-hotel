import React from 'react'

export default function CustomerDetail() {
    return (
        <>
            <section className="customer-detail py-5">
                <div className="container px-5 mx-auto">
                    <h2 className="text-base font-bold uppercase text-gray-700 mb-2">Customer Details</h2>
                    <p className="text-sm text-gray-600">We need your details so that we can send you the updates regarding your booking. We will send the booking confirmation on the provided details.</p>
                    <div className="form pt-5 text-sm">
                        <form>
                            <div className="form-group">
                                <div className="flex justify-between pt-1">
                                    <div className="month w-1/2 relative pr-1">
                                        <input type="text" name="fname" placeholder="First Name" className="bg-white border text-gray-700 py-2.5 pl-8 pr-2 rounded w-full" />
                                        <span className="absolute left-3 top-4">
                                            <img src="images/person.svg" alt="icon" />
                                        </span>
                                    </div>
                                    <div className="month w-1/2 relative pl-1">
                                        <input type="text" name="lname" placeholder="Last Name" className="bg-white border text-gray-700 py-2.5 pr-2 pl-8 rounded w-full" />
                                        <span className="absolute left-4 top-4">
                                            <img src="images/person.svg" alt="icon" />
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group pt-2">
                                    <div className="field relative">
                                        <input type="text" name="mail" placeholder="Email Address" className="bg-white border text-gray-700 py-2.5 pl-8 pr-2 rounded w-full" />
                                        <span className="absolute left-3 top-4">
                                            <img src="images/mail.svg" alt="icon" />
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group pt-2">
                                    <div className="field relative">
                                        <input type="text" name="mobile" placeholder="Your Phone Number" className="bg-white border text-gray-700 py-2.5 pl-8 pr-2 rounded w-full" />
                                        <span className="absolute left-2 top-4">
                                            <img src="images/code.svg" alt="icon" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
