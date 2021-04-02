import React from 'react'
import Filter from './Filter'

export default function FilterHeading() {
    return (
        <>
            <div className="filter-main px-5 mx-auto py-3">
                <h2 className="text-gray-700 font-semibold text-xl flex justify-between items-center">Top result matching "agra"
                <a href="">
                    <img src="images/filter-icon.svg" alt="icon" />
                </a>
                <Filter />
                </h2>
            </div>
        </>
    )
}
