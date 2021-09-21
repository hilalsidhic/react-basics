import './App.css'
import Header from './components/Header.js'
function App() {
  const data="hello hilal"
  return (
    <div>
      <Header data={data}/>
      <p>this is description {data}</p>
    </div>
    
  );
}

export default App;


