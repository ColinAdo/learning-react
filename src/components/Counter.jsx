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
    // Handling multiple states 
    const [incrementBy, setIncrementBy] = useState(1);


    function increment() {
        setCount(count + incrementBy);
    }

    function decrement() {
        setCount(count - incrementBy);
    }

    function IncreaseIncrement() {
        setIncrementBy(incrementBy + 1);
    }

    function DecreaseIncrement() {
        setIncrementBy(incrementBy - 1);
    }
    return (
        <div>
            <h3>The count number is: {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <h3>We are incrementing or decrementing by: {incrementBy}</h3>
            <button onClick={IncreaseIncrement}>Increase Increment</button>
            <button onClick={DecreaseIncrement}>Decrease Increment</button>
        </div>
    )
}