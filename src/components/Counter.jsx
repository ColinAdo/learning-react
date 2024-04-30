import { useState } from "react"

/* 
    state => is an object or varibale used to store information to control the behavior of a component

    Difference between props and state
    1. props are immmutable
        states are dynamically changing, henece control the behavior of a component
    2. props are declared outside a component
        states are declared inside a component
    3. props are like parameters passed in a function
        states are like variable decalred within a function
    
*/

export default function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }
    return (
        <div>
            <h3>The count number is: {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}