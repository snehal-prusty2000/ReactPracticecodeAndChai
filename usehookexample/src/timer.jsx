import { useEffect, useState } from "react";

const Timer = ()=>{
    const[time, setTime] = useState(0)

    useEffect(()=>{
    const timer =  setInterval(() => setTime(time+1),1000 );
    return function(){
        clearInterval(timer)
    }
    },[time])

    return(
        <>
        <h1> StopWatch </h1>
        <p> The time is - {time} </p>
        </>
    );
}

export {Timer} ;