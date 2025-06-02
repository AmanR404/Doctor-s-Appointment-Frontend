import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'

const Myappointments = () => {
  const [appointments, setAppointments] = useState([])
  const joinNow = () => {
    toast.success(`Wait for your Appointment Time!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
  }
  // Fetching Appointments
  const fetchAppointments = async () => {
    try {
        const response = await fetch('https://physionic-backend.vercel.app/myappointments')
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json()
        setAppointments(data)
      }
      catch (error) {
        console.error('Error fetching appointments:', error)
        toast.error('Failed to fetch appointments', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        })
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  return (
    <>
      <ToastContainer
        position="bottom-left"
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
      <section className='flex gap-12 justify-center items-center flex-wrap w-[85%] absolute left-8 sm:right-25 mt-10'>
        {/* Displaying Appointments */}
        {appointments.map((appointment) => {
          return (<div key={appointment._id} className='flex flex-col w-[320px] h-[240px]'>
            <div className="h-1/2 bg-[url('https://5.imimg.com/data5/EL/OD/MY-78574409/surgical-item.jpg')] bg-cover bg-center flex justify-end">
              <span className='text-white pt-2 font-semibold pr-2'>{appointment.date} {appointment.time}</span>
            </div>
            <div className='flex justify-between h-1/2 bg-[#3eb3f6]'>
              <div className='flex flex-col text-sm p-2 text-white'>
                <span>Doctor Details</span>
                <span>Name : Dr. Hameed Ansari</span>
                <span>Department : {appointment.dept}</span>
                <span className='mb-2'>Rating : 4.8</span>
                <span className='font-semibold'>Patient Name : {appointment.name}</span>
              </div>
              <button onClick={() => { joinNow() }} className='bg-white font-bold text-[#3eb3f6] px-6 h-8 mt-10 mr-1 cursor-pointer rounded-2xl'>Join</button>
            </div>
          </div>)
        })}
      </section>
    </>
  )
}

export default Myappointments
