// updater function = A function passed as an argument to setState() usually
//                                  Allow for safe updates based on the previous state
//                                  Used with multiple state updates and asynchronous functions
//                                  Good practice to use updater functions

import React, {useState} from "react";

function MyComponent(){

    const [count, setCount] = useState(0);

    function increment(){
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    function decrement(){ 
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }
    function reset(){
        setCount(0)
    }

    return(
        <>
            <div>
                <p >{count}</p>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div>
        </>
    )
}

export default MyComponent