import React from 'react'
import { useState } from 'react'
import { TextField, Box, Button, FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import useRead from '../../hooks/useRead'
import useUpload from '../../hooks/useUpload'
export default function AddStudents() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [listSection, setListSection] = useState([]);
    const [listSubject, setListSubject] = useState([]);
    const [subject, setSubject] = useState('');
    const [section, setSection] = useState('');
    const students = {
        firstname: firstname,
        lastname: lastname,
        subject: subject,
        section: section,
    }
    useRead('Sections', setListSection)
    useRead('Subjects', setListSubject)

    const subjectOption = listSubject.map(item => <MenuItem key={item.id} value={item.data}>{item.data}</MenuItem>)
    const sectionOption = listSection.map(item => <MenuItem key={item.id} value={item.data}>{item.data}</MenuItem>)

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('Successfull!')
        await useUpload(students, 'Students')
        setFirstName('')
        setLastName('')
        setSubject('')
        setSection('')
    }


    return (
        <>
            <h2>Add students</h2>

            <form className='addStudentForm' onSubmit={onSubmit}>
                <Box sx={{ display: 'flex', gap: '3em' }}>
                    <TextField label="First name" value={firstname} required onChange={(e) => setFirstName(e.target.value)} />
                    <TextField label="Last name" value={lastname} required onChange={(e) => setLastName(e.target.value)} />
                </Box>
                <Box sx={{ display: 'flex', gap: '3em' }}>
                    <FormControl fullWidth>
                        <InputLabel>Section</InputLabel>
                        <Select
                            label="Section"
                            onChange={(e) => setSection(e.target.value)}
                            value={section}
                        >
                            {sectionOption}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Subject</InputLabel>
                        <Select
                            label="Subject"
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject}
                        >
                            {subjectOption}
                        </Select>
                    </FormControl>
                </Box>
                <Button type="submit">Submit</Button>
            </form>
        </>
    )
}
