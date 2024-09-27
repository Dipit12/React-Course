import UserCard from './components/UserCard'
import './App.css'

function App() {


  return (
    <>
      <div className = "container">
        <UserCard name = "Dipit" title = "Software Engineer"/>
        <UserCard name = "Tithi" title = "Frontend Dev" />
        <UserCard name = "Kushal" title = "Backend Dev"/>
      </div>
      
    </>
  )
}

export default App
