import React from 'react'
import SearchEdit from './SearchEdit'

export default function SearchTop() {
    return (
        <>
            <section className="search-mobile">
                <div className="top-search bg-blue-500">
                    <div className="container px-5 pt-5 pb-5 mx-auto relative">
                        <div className="dates flex items-end justify-between">
                            <div className="text-sm text-white flex items-center">
                                <a href="/">
                                    <svg className="text-white w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <div className="pl-2">
                                    <p className="font-bold">Goa</p>
                                    <p className="flex items-center"><span>23 Mar - 24 Mar,</span><span> 2 Adults</span></p>
                                </div>
                            </div>
                            <a className="edit pl-5 pr-2 text-sm bg-white text-gray-800 rounded-full flex" href="#">Edit
                                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <SearchEdit />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
