import React from 'react'
import SearchEdit from '../other/SearchEdit'

export default function EditDate() {
    return (
        <>
            <section className="edit-date font-normal">
                <div className="top-search bg-blue-500">
                    <div className="container px-5 pt-5 pb-3 mx-auto relative">
                        <div className="dates flex items-end justify-between">
                            <div className="text-sm text-white flex items-center">
                                <div className="pl-2">
                                    <p className="flex items-center"><span>Your Search:  2 Adults, 1 night</span></p>
                                </div>
                            </div>
                            <a className="edit pl-5 pr-2 text-sm bg-white text-gray-800 rounded-full flex" href="#">Edit
                                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <SearchEdit />
                        </div>
                        <div className="w-full mt-7 flex">
                            <p className="w-1/2 pr-5 text-sm text-white border-r border-gray-100">Check-in date<span className="text-sm font-bold block">Sat 20 Mar 2021</span></p>
                            <p className="w-1/2 pl-5 text-sm text-white">Check-out date<span className="text-sm font-bold block">Sat 22 Mar 2021</span></p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
