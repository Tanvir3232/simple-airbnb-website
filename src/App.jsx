
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className='mx-8 my-3'> 
        <Header></Header>
      </div>
      <div>
        {
          <Outlet></Outlet>
        }
      </div>
    </>
  )
}

export default App
