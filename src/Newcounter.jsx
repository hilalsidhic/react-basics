import React,{ useState } from 'react'

function Newcounter() {
    const [count,setCount]=useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>click me</button>
            <h1>This is a new counter : {count}</h1>
        </div>
    )
}

export default Newcounter
