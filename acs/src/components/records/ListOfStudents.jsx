import React from 'react'
import useRead from '../../hooks/useRead'
import { useState } from 'react';
import { Container } from '@mui/material';
export default function ListOfStudents() {
    const [data, setData] = useState([]);

    useRead('Students', setData);

    const students = data.map(student => <li key={student.id}>{student.data.firstname}</li>)
    console.log(data.lastname)
    return (
        <>
            <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                <h2>List of Students</h2>
                <ul>
                    {students}
                </ul>
            </Container>

        </>
    )
}
