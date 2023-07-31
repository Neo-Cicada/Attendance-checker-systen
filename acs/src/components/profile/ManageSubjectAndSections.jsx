import React from 'react'
import {
    Container, Box, TextField, FormControl,
    Select, MenuItem, Button, Typography
  } from '@mui/material'
  import useUpload from '../../hooks/useUpload'
  import { useState } from 'react'
export default function ManageSubjectAndSections() {
    const [subject, setSubject] = useState('')
    const [section, setSection] = useState('')

    const onHandleSubjectSubmit = async (e) => {
        e.preventDefault();
        await useUpload(subject, 'Subjects');
        setSubject('')
    }

    const onHandleSectionSubmit = async (e) => {
        e.preventDefault();
        await useUpload(section, 'Sections')
        setSection('')
    }
    return (
        <>
            <h2>Manage Subjects and Sections</h2>
            <form onSubmit={onHandleSectionSubmit}>
                <Typography sx={{ textAlign: 'center', marginTop: '1em' }}>Add Section</Typography>
                <Box sx={{ display: 'flex', gap: '2em' }}>

                    <TextField
                        label="Section"
                        onChange={(e) => setSection(e.target.value)}
                        value={section}
                        required
                    />
                    <Button type='submit'>Submit</Button>

                </Box>
            </form>
            <form onSubmit={onHandleSubjectSubmit}>
                <Typography sx={{ textAlign: 'center', marginTop: '5em' }}>Add Subject</Typography>
                <Box sx={{ display: 'flex', gap: '2em' }}>

                    <TextField
                        label="Subect"
                        required
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                    />
                    <Button type="submit">Submit</Button>

                </Box>
            </form>
    </>
  )
}
