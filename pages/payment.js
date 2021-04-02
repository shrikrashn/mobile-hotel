import React from 'react'
import ArriavalTime from '../components/payment/ArriavalTime'
import BannerTop from '../components/payment/BannerTop'
import BottomFixed from '../components/payment/BottomFixed'
import CustomerDetail from '../components/payment/CustomerDetail'
import PriceSummary from '../components/payment/PriceSummary'
import Request from '../components/payment/Request'
import RoomCategeory from '../components/payment/RoomCategeory'
import ThankYouSubmited from '../components/payment/ThankYouSubmited'

export default function payment() {
    return (
        <>
            <BannerTop />
            <CustomerDetail />
            <RoomCategeory />
            <Request />
            <ArriavalTime />
            <PriceSummary />
            <BottomFixed />
            <ThankYouSubmited />
        </>
    )
}
