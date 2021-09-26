import './App.css'
import Header from './components/Header.js'
import { useState } from 'react'
import Employee from './Employee.jsx'
import Newcounter from './Newcounter'
// import Counter from './Counter'
function App() {
  const data="hello hilal"
  const [count,setCount]=useState(1)
  const [state,setState]=useState(false)
  let addcounter=()=>{
    setCount(count+1)
    console.log(count)
  }
  // let obj={
  //   title: "1st Counter",
  //   count,
  //   place:'mvpa'
  // }
  let employee=[{name:'hilal', age:21},{name:'gan',age:24},{name:'uhuh',age:28}]
  return (
    <div>
      <Header data={data}/>
      <p>this is description {data}</p>

      {/* <Counter {...obj} />
      <Counter title={"2nd Counter"} count={count} /> */}

      <button onClick={addcounter}>click Me</button>
      {employee.map((obj,index)=>
        (
          <Employee key={index} {...obj}/>
        )
      )}
{/* //mounting and unmount */}
      <h1 onClick={()=>setState(!state)}>SHOW/HIDE</h1>         
      {state && <Newcounter/> }                            
    </div> 
  );
}

export default App;


