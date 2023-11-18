import react from 'react';
 
var isDone = false;

function strick(){
  // document.getElementById("root").style.textDecoration = "line-through";
  isDone = true;
}

function unstrick(){
 // document.getElementById("root").style.textDecoration = null;
 isDone = false;
}


function App(){
   // var isDone = false;
    
    return (
      <div>
        {/* <p>Buy milk</p>
        <button onClick={strick}>Change to strick</button>
        <button onClick={unstrick}>Change back</button> */}
  
    {/* This is not work because these elements are being renderd and they are not changeable . They have to re-rendered onto the screen in order for the changes in their properties of style that seen so "HOOKS" is use*/}
         <p style={isDone ? {textDecoration: "line-through"} : null }>Buy milk</p>
        <button onClick={strick}>Change to strick</button>
        <button onClick={unstrick}>Change back</button>
      </div> 
    
    );
  }
  
  export default App;