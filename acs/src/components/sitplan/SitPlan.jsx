import React from 'react'
import Circles from '../Circles'
import { useState } from 'react'
import useRead from '../../hooks/useRead'
export default function SitPlan() {
  const [data, setData] = useState([]);

  useRead('Students', setData);



  const students = data.map(item => <Circles data={item}/>)

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Sit Plan</h1>
      <div className='container' style={{display: 'flex', justifyContent:'space-around'}}>
        {students}
      </div>
    </>
  )
}
