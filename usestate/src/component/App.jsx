import React ,{useState} from "react";

function App(){
    
//var count = 0 ;
const [count ,setCount] = useState(0);
//console.log(state[0]);

function increase(){
  //count ++;
  setCount(count + 1);
 
}
function decrease(){
    setCount(count -1);
}
return (
 <div className='container'>
  {/* <h1>{count}</h1> */}
  <h1>{count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
 </div>
);

}

export default App ;