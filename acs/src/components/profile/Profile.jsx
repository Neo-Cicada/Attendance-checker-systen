import React from 'react'
import '../../styles/profile.css'
import ManageSubjectAndSections from './ManageSubjectAndSections'
import ProfileInformation from './ProfileInformation'
export default function Profile() {

  
  return (
    <>
      <div className="profileContainer">
        <div className='profileInformation'>
          <ProfileInformation/>
        </div>
        <div className='profileManagement'>
          <ManageSubjectAndSections/>
        </div>
      </div>
    </>
  )
}
