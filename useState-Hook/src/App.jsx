import React, {useState} from 'react'

function App(){
  const [count,setCount] = useState(0);

  function handleIncrement(){
    setCount(count+1);
  }
  function handleDecrement(){
    setCount(count-1);
  }
  function Reset(){
    setCount(0);
  }
  return(
    <>
    <h1>The count is {count}</h1>
    <button onClick = {handleIncrement}>Increment</button>
    <button onClick = {handleDecrement}>Decrement</button>
    <button onClick = {Reset}>Reset</button>
    </>
  )
}

export default App;