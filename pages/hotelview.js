import React from 'react'
import EditDate from '../components/hotelview/EditDate'
import Overview from '../components/hotelview/Overview'
import RoomBooking from '../components/hotelview/RoomBooking'
import SearchTop from '../components/other/SearchTop'
import TradingSlider from '../components/common/TradingSlider'
import LocationFilter from '../components/common/LocationFilter'
import TopFilter from '../components/hotelview/TopFilter'
import RoomCategory from '../components/hotelview/RoomCategory'
import Facilities from '../components/hotelview/Facilities'
import Location from '../components/hotelview/Location'
import Surrounds from '../components/hotelview/Surrounds'
import Policies from '../components/hotelview/Policies'
import ReviewRating from '../components/hotelview/ReviewRating'
import RecentReviewSlider from '../components/hotelview/RecentReviewSlider'
import ReviewTop from '../components/hotelview/ReviewTop'

export default function hotelview() {
    return (
        <>
            <SearchTop />
            <TopFilter />
            <RoomBooking />
            <Overview />
            <EditDate />
            <RoomCategory />
            <Facilities />
            <Location />
            <Surrounds />
            <Policies />
            <ReviewRating />
            <RecentReviewSlider />
            <ReviewTop />
            <TradingSlider />
            <LocationFilter />
        </>
    )
}
