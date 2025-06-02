import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from '../../Components/Navbar';


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
   <div className='bg-black h-screen'>
       <div className="bg-[url('background.jpg')] opacity-50 bg-cover bg-center h-screen">
       </div> 
   </div>
    <div className='absolute top-0 w-screen h-screen'>
      <Navbar/>
      <div className='text-white mt-14 sm:mt-36 w-[43%] sm:w-1/4 ml-[47%] sm:ml-[50%] flex flex-col gap-4'>
        <p className='font-bold text-3xl sm:text-4xl'>Meet the Best Doctor</p>
        <div>
          <p>We know how large objects will act,</p>
          <p>but things on a small scale.</p>
        </div>
        <button className='bg-[#2e9fd2] px-12 py-3 rounded-3xl mt-2 cursor-pointer hover:bg-cyan-600 transition-all duration-300 ease-in-out' onClick={()=> loginWithRedirect()}>Login</button>
      </div>
    </div>
   </>
  )
}

export default Login