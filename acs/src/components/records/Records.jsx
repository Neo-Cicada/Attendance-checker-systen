import React from 'react'
import { TextField, Box, Button } from '@mui/material'
import '../../styles/record.css'
import { useState } from 'react'
//TODO: add students, see current students, convert attendance to xsml/ arrange sit plan
export default function Records() {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  return (
    <>
      <div className='record-container'>
        <div className='list-of-students'>
          <h2>List of Students</h2>
        </div>
        <div className='add-students'>
          <h2>Add students</h2>

          <form className='addStudentForm'>
            <Box sx={{ display: 'flex', gap: '3em' }}>
              <TextField label="First name" onChange={(e) => setFirstName(e.target.value)} />
              <TextField label="Last name" onChange={(e) => setLastName(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', gap: '3em' }}>
              <TextField label="Section" />
              <TextField label="Subject" />
            </Box>
            <Button>Submit</Button>
          </form>
        </div>

      </div>
    </>
  )
}
