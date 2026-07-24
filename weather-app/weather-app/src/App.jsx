import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import ForcastWeather from './components/ForcastWeather'

const App = () => {

  const [city, setCity] = useState('')
  const [data, setData] = useState(null)
  const API_KEY= import.meta.env.VITE_WEATHER_KEY
  
  const fetchData = async (city) =>{
    try {
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      const response  = await axios.get(url)
      setData(response.data)
    } catch (error) {
      console.log(error.message)
    }
      }  

  const submitHandler = async (e) =>{
    e.preventDefault()
    if (!city.trim()) return;   
   await fetchData(city)
      setCity('')
  }



  return (
    <div className='main h-screen w-full bg-black text-white' >
      <Navbar/>
      <div >
      <form
      className='flex gap-10 justify-center items-center px-10 py-5'
       onSubmit={submitHandler} >
        <input
        className='border-violet-500 border-2  outline-none rounded-2xl w-full py-2 placeholder:text-2xl placeholder:px-5 px-5 text-black text-2xl'
        onChange={(e)=>{
          setCity(e.target.value)
        }}
        value={city}
         type="text" placeholder='city name ...' />
        <button
        type='submit'
        className='bg-green-800 py-3 px-5 rounded-2xl text-2xl cursor-pointer hover:bg-green-950 active:scale-95 transition-all duration-500'
        >Search</button>
      </form>
      </div>
       <ForcastWeather data={data}/>
    </div>
  )
}

export default App