
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className='mx-6 my-3'> 
        <Header></Header>
      </div>
      <div className='mx-8 my-3'>
        {
          <Outlet></Outlet>
        }
      </div>
    </>
  )
}

export default App
