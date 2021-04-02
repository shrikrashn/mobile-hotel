import React from 'react'
import FilterHeading from '../components/common/FilterHeading'
import MobileMenu from '../components/common/MobileMenu'
import TradingSlider from '../components/common/TradingSlider'
import SearchSlider from '../components/other/SearchSlider'
import SearchTop from '../components/other/SearchTop'

export default function search() {
    return (
        <>
            <SearchTop />
            <FilterHeading />
            <SearchSlider />
            <TradingSlider />
            <MobileMenu />
        </>
    )
}
