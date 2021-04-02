import React from 'react'
import FilterHeading from '../components/common/FilterHeading'
import TradingSlider from '../components/common/TradingSlider'
import SearchEdit from '../components/other/SearchEdit'
import SearchSlider from '../components/other/SearchSlider'

export default function searchedit() {
    return (
        <>  <SearchEdit />
            <FilterHeading />
            <SearchSlider />
            <TradingSlider />
        </>
    )
}
