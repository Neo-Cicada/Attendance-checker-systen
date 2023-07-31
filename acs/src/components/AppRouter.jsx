import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SitPlan from './sitplan/SitPlan'
import Records from './records/Records'
import Profile from './profile/Profile'
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='sit-plan' element={<SitPlan />} />
            <Route path='records' element={<Records />} />
            <Route path='profile' element={<Profile />} />

        </Routes>
    )
}

export default AppRouter;