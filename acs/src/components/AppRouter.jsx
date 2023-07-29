import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SitPlan from './SitPlan'
import Records from './Records'
import Profile from './Profile'
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