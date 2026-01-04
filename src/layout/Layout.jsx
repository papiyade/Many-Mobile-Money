import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from '../components/ui/scroll-progress'
import useScrollToTop from '../hooks/useScrollToTop'
import CustomCursor from '../components/ui/CustomCursor'

const Layout = () => {
    useScrollToTop()

    return (
        <>
            <div className='flex flex-col gradient-primary min-h-screen overflow-hidden'>
                <CustomCursor />
                <ScrollProgress />
                <Navbar />
                <div className='flex-1'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
