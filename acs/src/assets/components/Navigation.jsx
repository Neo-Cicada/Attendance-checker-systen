import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <>
     <nav style={{display: 'flex', gap: '1em', marginRight: '1em'}}>
        <Link to="/">HOME</Link>
        <Link to="sit-plan">SIT PLAN</Link>
        <Link to="records">RECORDS</Link>
        <Link to="profile">PROFILE</Link>
     </nav>
    </>
  )
}
