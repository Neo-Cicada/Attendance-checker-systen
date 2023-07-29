import React from 'react'
import '../styles/profile.css'
import { Container, Box, TextField, FormControl,
   Select, MenuItem, Button, Typography } from '@mui/material'

import {useState} from 'react'
export default function Profile() {
  const [subject, setSubject] = useState()
  const [section, setSection] = useState()


  return (
    <>
      <div className="profileContainer">
        <div className='profileInformation'>
          <h2>Professor Information</h2>
          <Typography sx={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Name: Lord Neo Barnachea </Typography>
          <Typography>Handle Sections: </Typography>
          <Typography>Handle Subjects: </Typography>
        </div>
        <div className='profileManagement'>
          <h2>Manage Subjects and Sections</h2>
          <form action="">
            <Typography sx={{ textAlign: 'center', marginTop: '1em' }}>Add Section</Typography>
            <Box sx={{ display: 'flex', gap: '2em' }}>

              <TextField label="Section" onChange={(e)=>setSection(e.target.value)} />
              <Button>Submit</Button>

            </Box>
          </form>
          <form>
            <Typography sx={{ textAlign: 'center', marginTop: '5em' }}>Add Subject</Typography>
            <Box sx={{ display: 'flex', gap: '2em' }}>

              <TextField label="Subect" onChange={(e)=>setSubject(e.target.value)}/>
              <Button>Submit</Button>

            </Box>
          </form>
        </div>
      </div>
    </>
  )
}
