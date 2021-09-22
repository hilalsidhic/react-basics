import './App.css'
import Header from './components/Header.js'
import { useState } from 'react'
function App() {
  const data="hello hilal"
  const [count,setCount]=useState(0)
  let addcounter=()=>{
    setCount(count+1)
    console.log(count)
  }
  return (
    <div>
      <Header data={data}/>
      <p>this is description {data}</p>
      <h2>Counter : {count}</h2>
      <button onClick={addcounter}>click Me</button>
    </div> 
  );
}

export default App;


