import React from 'react'
import {
  Container, Box, TextField, FormControl,
  Select, MenuItem, Button, Typography
} from '@mui/material'
import useRead from '../hooks/useRead'
import { useState } from 'react'
export default function ProfileInformation() {
  const [subjects, setSubjects] = useState([])
  const [sections, setSections] = useState([])

  useRead('Sections', setSections)
  useRead('Subjects', setSubjects)

  const subjectItems = subjects.map(subject => <li key={subject.id}>{subject.data}</li>)
  const sectionItems = sections.map(section => <li key={section.id}>{section.data}</li>)
  return (
    <>
      <h2>Professor Information</h2>
      <Typography sx={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Name: Lord Neo Barnachea </Typography>
      <Typography>Handle Sections: </Typography>
      <ul>
        {sectionItems}
      </ul>
      <Typography>Handle Subjects: </Typography>
      <ul>
        {subjectItems}
      </ul>
    </>
  )
}
