import React from 'react'
import useRead from '../../hooks/useRead'
import { useState } from 'react';
import { Container } from '@mui/material';
export default function ListOfStudents() {
    const [data, setData] = useState([]);

    useRead('Students', setData);

    const students = data.map(student => <li key={student.id}>{student.data.section}</li>)
    console.log(data.lastname)

    const bscs4 = data.filter(item => item.data.section === "4BSCS").map(item => <li key={item.id}>{item.data.section}</li>)
    const bscs3 = data.filter(item => item.data.section === "3BSCS").map(item => <li key={item.id}>{item.data.section}</li>)
    const bscs2 = data.filter(item => item.data.section === "2BSCS").map(item => <li key={item.id}>{item.data.section}</li>)
    const bscs1 = data.filter(item => item.data.section === "1BSCS").map(item => <li key={item.id}>{item.data.section}</li>)


    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <h2>List of Students</h2>
                <ul>
                    {students}

                </ul>
            </Container>

        </>
    )
}
