import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
