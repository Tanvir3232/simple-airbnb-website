
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { createContext, useEffect, useState } from 'react';
export const ServiceContext = createContext([]);
function App() {
  
  const [services,setServices] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(()=>{
    setIsLoading(true);
    fetch('https://airbnb-app-server.vercel.app/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
    setIsLoading(false)
  },[])
  const value = {services,setServices,isLoading,setIsLoading}
  return (
    <ServiceContext.Provider value={value}>
      <div className='mx-6 my-3'> 
        <Header></Header>
      </div>
      <div className='mx-8 my-3'>
        {
          <Outlet></Outlet>
        }
      </div>
    </ServiceContext.Provider>
  )
}

export default App
