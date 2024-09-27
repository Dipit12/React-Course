import React from 'react'
import Card from './components/Card'
import Button from './components/Button';
function App() {
  const [count,setCount] = useState(0);

  const handleClick = ()=>{
    setCount(count+1);
  }
  return (
    <div>
      <Card name = "Dipit">
          <h1>This is a heading</h1>
          <p>This is a para</p>
      </Card>
      <p>The count is {count}</p>
      <Button incrementCount = {handleClick}/>
    </div>
  )
}

export default App
