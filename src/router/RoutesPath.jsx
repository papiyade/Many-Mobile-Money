import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../layout/Layout'
import Home2 from '../pages/Home2'
import Home3 from '../pages/Home3'
import Home4 from '../pages/Home4'
import Authentication from '../pages/Authentication'
import NotFound from '../pages/NotFound'
import UnderMaintenance from '../pages/UnderMaintence '
import ServerError from '../pages/ServerError'
import ComingSoon from '../pages/ComingSoon'
import TermsAndConditions from '../pages/TermAndConditions'
import PrivacyPolicy from '../pages/PrivacyPolicy'
const RoutesPath = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home2" element={<Home2 />} />
                    <Route path="home3" element={<Home3 />} />
                    <Route path="home4" element={<Home4 />} />
                </Route>
                <Route path="/login" element={<Authentication />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/under-maintenance" element={<UnderMaintenance />} />
                <Route path="/server-error" element={<ServerError />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
            </Routes>
        </>
    )
}

export default RoutesPath
