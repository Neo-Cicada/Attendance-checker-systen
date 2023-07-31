import React from 'react'
import { Box, Button, Container } from '@mui/material'
import { useState } from 'react'
import CreateSitPlan from './CreateSitPlan';
import Attendance from './Attendance';
export default function SitPlan() {
  const [status, setStatus] = useState(true);
  return (
    <>
      <Box sx={{ border: '1px solid red', height: '10%',
       display: 'flex', justifyContent: 'center',
        alignItems: 'center', gap: '1em ' }}>
        <Button onClick={() => setStatus(true)}>Create Sit Plan</Button>
        <Button onClick={() =>setStatus(false)}>Attendance</Button>

      </Box>
      <Container sx={{height: '90%', border: '1px solid red'}}>
        {status ? <CreateSitPlan/> : <Attendance/>}
      </Container>
    </>
  )
};



