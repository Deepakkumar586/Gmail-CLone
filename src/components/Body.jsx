import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar/>

      {/* outlet me vo code aa rha hai jo children me likha gya hai  */}
      <Outlet/>
    </div>
  )
}

export default Body
