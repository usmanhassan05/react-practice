import React from 'react'
import Navbar from './components/Navbar'
import AddTask from './components/AddTask'

const App = () => {

  return (
    <div className='h-screen w-full bg-(--c2) text-white' >
        <Navbar/>
        <AddTask/>
    </div>
  )
}

export default App