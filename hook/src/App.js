import './App.css';
import{ useState } from 'react'

function App() {
  let  [counter , setCounter] = useState(5) 
 
 // let counter = 5

  const addValue = ()=>{
    // console.log("value added",Math.random());
    console.log("value added",counter);
    counter = counter + 1 ;
    if(counter <= 20){
    setCounter(counter)
    }
  }
  const  removeValue = ()=>{
    counter = counter - 1 ;
   if(counter >= 0)
   {
    setCounter(counter)
   }
  }
  return (
    <>
    <div className ="back">
    <h1>chai aur react</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Subtract Value</button>
    </div>
    </>
  );
}

export default App;
