import React from 'react'
import Circles from '../Circles'
export default function SitPlan() {

  const records = [
    {
      firstname: 'Lord Neo',
      lastname: 'Barnachea'
    },
    {
      firstname: 'King',
      lastname: 'Barnachea'
    }, {
      firstname: 'Queen',
      lastname: 'Barnachea'
    }, {
      firstname: 'Star',
      lastname: 'Barnachea'
    }
  ]

  const items = records.map(item => <Circles data={item}/>)

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Sit Plan</h1>
      <div className='container' style={{display: 'flex', justifyContent:'space-around'}}>
        {items}
      </div>
    </>
  )
}
