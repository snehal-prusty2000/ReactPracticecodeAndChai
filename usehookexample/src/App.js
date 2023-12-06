import { useState , useEffect} from "react";
import MyComponent from "./MyComponet";

function App() {
  const [count , setCount] = useState(0)
  const [isVisible , setVisible] =  useState(true)

  useEffect(()=>{
    console.log("App is mounted...")
  },[])

  useEffect(()=>{
    console.log("When count is updated.....", count)
  return function(){
    console.log("Count return....", count)
  }
  },[count])

  return (
    <>
    <h1>The number is - {count}</h1>
    {isVisible?<MyComponent/>:<></>}
    <button onClick={()=> setCount(count + 1)}>Add</button>
    <button onClick={()=> setVisible(!isVisible)}>Toggle</button>
    </>
  );
}

export default App;
