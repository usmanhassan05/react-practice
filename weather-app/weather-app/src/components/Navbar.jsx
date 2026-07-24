import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-blue-400 p-5' >
        <h1 className='font-bold text-2xl text-black cursor-pointer' >Weather-App</h1>
        <div className='flex' >
            <ul className='flex justify-between items-center gap-10' >
                <li className='text-2xl text-slate-800 cursor-pointer active:scale-95 hover:text-slate-950' >Home</li>
                <li className='text-2xl text-slate-800 cursor-pointer active:scale-95 hover:text-slate-950' >Contact</li>
                <li className='text-2xl text-slate-800 cursor-pointer active:scale-95 hover:text-slate-950' >About</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar