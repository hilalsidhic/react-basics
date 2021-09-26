import './App.css'
import Header from './components/Header.js'
import { useState } from 'react'
import Counter from './Counter'
function App() {
  const data="hello hilal"
  const [count,setCount]=useState(1)
  let addcounter=()=>{
    setCount(count+1)
    console.log(count)
  }
  return (
    <div>
      <Header data={data}/>
      <p>this is description {data}</p>
      <Counter count={count} />
      <button onClick={addcounter}>click Me</button>
    </div> 
  );
}

export default App;


