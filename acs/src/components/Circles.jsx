import React from 'react'


const Circles = (data) =>{
    return(
        <>
            <div onClick={(e)=>console.log(data.data.data.firstname)} style={{height: '5em', width: '5em',
             border: '1px solid red', borderRadius: '50%',
             display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h3>{data.data.data.firstname}</h3>
            </div>
        </>
    )
}

export default Circles;