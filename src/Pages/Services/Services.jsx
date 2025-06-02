import React from 'react'

const Services = () => {
  return (
   <section className='flex flex-wrap w-[85%] absolute right-0 mt-10'>
       <div className='bg-black w-[250px] h-[150px] m-5 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
            <div className="w-full h-full flex justify-center items-center bg-[url('background.jpg')] opacity-50 bg-cover bg-center font-bold">
                Regular Heathcare  Package
            </div>
       </div>
       <div className='bg-black w-[250px] h-[150px] m-5 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
            <div className="w-full h-full flex justify-center items-center bg-[url('background.jpg')] opacity-50 bg-cover bg-center font-bold">
                CT Scan | X-Ray
            </div>
       </div>
       <div className='bg-black w-[250px] h-[150px] m-5 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
            <div className="w-full h-full flex justify-center items-center bg-[url('background.jpg')] opacity-50 bg-cover bg-center font-bold">
                Lab Test
            </div>
       </div>
       <div className='bg-black w-[250px] h-[150px] m-5 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
            <div className="w-full h-full flex justify-center items-center bg-[url('background.jpg')] opacity-50 bg-cover bg-center font-bold">
                Gynae Health
            </div>
       </div>
       <div className='bg-black w-[250px] h-[150px] m-5 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
            <div className="w-full h-full flex justify-center items-center bg-[url('background.jpg')] opacity-50 bg-cover bg-center font-bold">
                Ayurveda Treatment
            </div>
       </div>
       <div className='bg-black w-[250px] h-[150px] m-5 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
            <div className="w-full h-full flex justify-center items-center bg-[url('background.jpg')] opacity-50 bg-cover bg-center font-bold">
                Dental Checkup
            </div>
       </div>
   </section>
  )
}

export default Services