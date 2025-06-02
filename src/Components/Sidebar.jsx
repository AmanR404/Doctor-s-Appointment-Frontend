import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
   const { logout, user, isAuthenticated } = useAuth0();
  return (
    <aside className='w-48 border-r-2 border-gray-200 h-[85%] pt-6 absolute left-0 z-10 bg-[#f0f4f8]'>
        <div className='flex flex-col gap-2 items-center'>
            <img className='w-12 rounded-full' src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg" alt="" />
            <p className='text-xs mb-2'>{isAuthenticated?user.name:"Name"}</p>
            <span className='bg-[#2e9fd2] w-2/3 rounded-full text-white pl-10'>Patient</span>
            <button className='inline-block sm:hidden h-8 mt-2 px-6 text-sm sm:text-md bg-white rounded-full hover:bg-gray-300 hover:cursor-pointer' onClick={()=>navigate('/services')}>Services</button>
            <button className='w-2/3 bg-white rounded-full border border-gray-200 text-gray-800 hover:bg-gray-300 hover:cursor-pointer transition-all duration-400 ease-in-out' onClick={()=>logout()}>Logout</button>
        </div>
    </aside>
  )
}

export default Sidebar