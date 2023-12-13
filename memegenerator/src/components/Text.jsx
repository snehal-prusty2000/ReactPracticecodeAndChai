import React, { useState } from "react";
import Draggable from "react-draggable"

const Text = () =>{
    const[editMode ,  setEditMode] = useState(false);
    const[val,setVal] = useState("Double Click to Edit");

  return (
    <Draggable>
        {/* <h1> I am a Text </h1> */}
        {
            editMode ? (
                <input 
                onDoubleClick={(e) => setEditMode(false)}
                value={val} onChange={(e) => setVal(e.target.value)} />
            ) :(
                <h1 onDoubleClick={(e) => setEditMode(true)}>{val}</h1>
            )
        }
    </Draggable>
    
    );
}
 
export default Text ;