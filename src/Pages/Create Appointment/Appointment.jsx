import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'

const Appointment = () => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const [patientName, setpatientName] = useState("")

  const patientFetcher = async () => {
      try{
        const res = await fetch('https://physionic-backend.vercel.app/patientname')
        if (!res.ok) {
          throw new Error('Failed to fetch patient name');
        }
        let result = await res.json();
        setpatientName(result.firstname + " " + result.lastname);
      }
      catch (error) {
        console.error('Error fetching patient name:', error)
      }
    }

  useEffect(() => {
    patientFetcher();
  }, [])

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      let res = await fetch('https://physionic-backend.vercel.app/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, name: patientName }),
      })
      if (!res.ok) {
        throw new Error('Failed to create appointment');
      }
      toast.success(`Appointment Booked, ThankYou!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      })
      let result = await res.json();
      console.log(result)
    }
    catch (error) {
      console.error('Error creating appointment:', error)
      toast.error('Failed to create appointment!', {
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
      <section>
        <div className='flex flex-col items-center justify-center h-full mt-10'>
          <h1 className='text-2xl font-bold mb-4'>Book an Appointment</h1>
          {/* React Hook Form */}
          <form className='w-full max-w-md px-2' onSubmit={handleSubmit(onSubmit)}>
            {/* Department */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Choose Department</label>
              <select id="dept" name="dept" {...register("dept", { required: { value: true, message: "Department is required" } })}>
                <option className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value="Physician">Physician</option>
                <option className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value="Gynecologist">Gynecologist</option>
                <option className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value="Dematologist">Dematologist</option>
                <option className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value="Neurology">Neurology</option>
              </select>
              {errors.dept && <span className='text-red-600 text-xs'>{errors.dept.message}</span>}
            </div>
            {/* Appointment Date */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Appointment Date</label>
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='date' {...register("date", { required: { value: true, message: "Date is required" } })} />
              {errors.date && <span className='text-red-600 text-xs'>{errors.date.message}</span>}
            </div>
            {/* Appointment Time */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Appointment Time</label>
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='time' {...register("time", { required: { value: true, message: "Time is required" } })} />
              {errors.time && <span className='text-red-600 text-xs'>{errors.time.message}</span>}
            </div>
            {/* Comments */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Comments</label>
              <input className='shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Explain about the problem' {...register("comments")} />
            </div>
            <button disabled={isSubmitting} className='bg-[#2e9fd2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer' type='submit'>Create Appointment</button>
            {isSubmitting && <div>Submitting...</div>}
          </form>
        </div>
      </section>
    </>
  )
}

export default Appointment