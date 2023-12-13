import React , {useContext} from "react";
import { CounterContext } from "../context/Counter";


const Counter = () => {
    const counterContext = useContext(CounterContext);
    return (
        <div>
            <button onClick={()=>counterContext.setCount(counterContext.count + 1)}>Increments</button>
            <button onClick={()=>counterContext.setCount(counterContext.count - 1)}>Decrements</button>

        </div>
    );
};

export default Counter;