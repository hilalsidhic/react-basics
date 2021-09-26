import React,{ useState,useEffect } from 'react'

function Newcounter() {
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)
    useEffect(()=>{
        console.log('mounting')
        console.log('updating....'+count1);
        console.log('updating....'+count2);
        return()=>{
            console.log('cleanup ..'+count1)
            console.log('cleanup....'+count2);
        }
    },[count1,count2]);   
    return (
        <div>
            <button onClick={()=>setCount1(count1+1)}>click me</button>
            <h1>This is a new counter : {count1}</h1>
            <button onClick={()=>setCount2(count2+1)}>click me</button>
            <h1>This is a new counter : {count2}</h1>
        </div>
    )
}

export default Newcounter
