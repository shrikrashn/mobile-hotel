import React from 'react'
import Footer from '../common/Footer'

export default function Layout({children}) {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}
