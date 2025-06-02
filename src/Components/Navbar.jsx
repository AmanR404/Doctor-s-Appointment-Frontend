import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const loginRequired = () => {
        toast.error("Please login to continue", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }
  return (
    <>
      <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
            />
      <nav className='flex justify-between lg:w-3/4 mx-auto h-16 items-center px-10 pt-4'>
          <div className='flex justify-between gap-28'>
              <span className='font-bold text-white text-2xl'>Physionic</span>
              <ul className='text-white flex flex-col sm:flex-row sm:gap-6 items-center pt-2'>
                  <li onClick={()=>{loginRequired()}} className='cursor-pointer hidden sm:inline-block '>Book an Appointment</li>
                  <li onClick={()=>{loginRequired()}} className='cursor-pointer hidden sm:inline-block '>My Appointment</li>
              </ul>
          </div>
          <button className='text-white bg-[#2e9fd2] px-15 py-3 rounded-sm mt-2 cursor-pointer hover:bg-cyan-600 hidden md:inline-block' onClick={()=> loginWithRedirect()}>Login</button>
      </nav>
    </>
  )
}

export default Navbar