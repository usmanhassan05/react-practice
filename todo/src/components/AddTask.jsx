import React, { useState } from 'react'
import List from './List'

const AddTask = () => {

    const [task, settask] = useState('')
    const [taskList, settaskList] = useState(()=>{
        const saved = localStorage.getItem('task')
        return saved ? JSON.parse(saved) : []
    })

    const submitHandler = (e) =>{
        e.preventDefault()
         const updatedList = [...taskList, task]
         settaskList(updatedList)
         localStorage.setItem('task', JSON.stringify(updatedList))
        settask('')
    }

  return (

    <div>
        <div className='flex h-30 items-center justify-center' >
        <form className='flex gap-5' onSubmit={(e)=>{
            submitHandler(e)
        }} >
            <input
            value={task}
            onChange={(e)=>{
                settask(e.target.value)
            }}
            className=' border-gray-600 border-2 bg-blue-400 text-black rounded px-5 py-2 outline-none text-2xl w-[70vw]'
             type="text" placeholder='Type something...' />
        <button
        type='submit'
        className='bg-green-800 px-5 py-2 border-none outline-none rounded text-2xl cursor-pointer active:scale-95'
        >Add</button>
        </form>
    </div>

            <div className='px-10 flex flex-col gap-3 items-center'>
                {taskList.map((elem,idx)=>{
                return <List key={idx} task={elem} />
            })}</div>
           
    </div>
    
  )
}

export default AddTask