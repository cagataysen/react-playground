import React, { useState } from "react"
// Updater function = A function passed as an argument to setState() usually
//                    ex. setYear (arrow function)    setYear (y => y + 1)
//                    Allow for safe updates based on the previous state  
//                    Used with multiple state updates and asynchronous functions
//                    Good practise to use updater functions whenever possible.


//When we really care about the previous state we are using this.

function MyComponent(){

    const [count, setCount] = useState(0);

    function increment() {
        //setCount(count + 1);
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    function decrement() {
        //setCount(count - 1);
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    function reset() {
        setCount(0);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment </button>    


            <button onClick={decrement}>Decrement </button>    


            <button onClick={reset}>Reset </button>    
        </div>
        

    );

    

}

export default MyComponent