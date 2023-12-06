import { useEffect } from "react";

function MyComponent ()  {
  useEffect(()=>{
    console.log("MyComponet is rendering.....")
   return function (){
    console.log("Unmounting...");
   }
  },[])

    return(
        <>
           <h2> This is my paraGraph</h2>
        </>
    );
 
}

export default MyComponent;