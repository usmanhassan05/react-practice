import React from 'react'

const List = ({task}) => {

  return (
    <div className='bg-gray-800 px-5 py-2 rounded w-[70vw] text-xl flex justify-between'>
        <h1>{task}</h1>
        <button className='bg-red-500 px-4 py-2 rounded cursor-pointer active:scale-95' >Remove</button>
    </div>
  )
}

export default List