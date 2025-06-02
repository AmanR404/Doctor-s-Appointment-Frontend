import React from 'react'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const navigate = useNavigate()

    const sidebarSwitcher = () => {
        isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
    }
  return (
    <>
    <header className='flex justify-between px-8 h-12 bg-[url("background.jpg")]'>
        <div className='flex gap-8 items-center'>
            <span className='px-6 py-1 hidden md:inline-block bg-white rounded-full hover:bg-gray-300 hover:cursor-pointer'>Patient System</span>
            <img onClick={()=>sidebarSwitcher()} className='w-6' src="hamburger.svg" alt="" />
        </div>
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-4'>
            <button className='hidden sm:inline-block h-8 mt-2 px-6 text-sm sm:text-md bg-white rounded-full hover:bg-gray-300 hover:cursor-pointer' onClick={()=>navigate('/services')}>Services</button>
            <button className='h-8 mt-1 sm:mt-2 px-3 sm:px-6 text-sm sm:text-md bg-white rounded-full hover:bg-gray-300 hover:cursor-pointer' onClick={()=>navigate('/appointment')}>Book an Appointment</button>
            <button className='h-8 sm:mt-2 px-3 sm:px-6 text-sm sm:text-md bg-white rounded-full hover:bg-gray-300 hover:cursor-pointer' onClick={()=>navigate('/myappointments')}>My Appointment</button>
        </div>
    </header>
    {isSidebarOpen && <Sidebar/>}
    </>
  )
}

export default Header