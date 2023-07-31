import React from 'react'
import '../../styles/record.css'
import './AddStudents'
import AddStudents from './AddStudents'
import ListOfStudents from './ListOfStudents'
//TODO: add students, see current students, convert attendance to xsml/ arrange sit plan
export default function Records() {
  return (
    <>
      <div className='record-container'>
        <div className='list-of-students'>
          <ListOfStudents/>
        </div>
        <div className='add-students'>
          <AddStudents />
        </div>

      </div>
    </>
  )
}
