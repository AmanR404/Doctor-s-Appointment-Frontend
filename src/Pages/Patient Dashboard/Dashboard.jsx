import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'

const Dashboard = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

    // Patient profile submission handler
    const onSubmit = async (data) => {
        try{
            const res = await fetch("https://physionic-backend.vercel.app/patients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (!res.ok) {
            throw new Error('Failed to save patient data')}
        toast.success(`Data Saved!`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
        let result = await res.json();
        console.log(result)
        }
        catch (error) {
            console.error('Error saving patient data:', error);
            toast.error('Failed to save patient data!', {
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
    }
       useEffect(() => {
       toast.success(`Login Successful!`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
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
            <header className='h-12 border-b-2 border-gray-200 z-10 p-4 w-[85%] absolute right-0'>
                Patient Dashboard
            </header>
            <div className='h-72 w-[450px] sm:w-[520px] absolute right-0 top-23 p-3 left-5 sm:left-30 md:left-65 lg:left-100'>
                <span className='text-2xl font-bold w-1/2 block text-center'>Patient Details</span>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full p-4 flex flex-col gap-4'>
                    {/* First Name */}
                    <div className='flex gap-3 items-center'>
                        <label>Firstname</label>
                        <input className='border border-gray-400 ml-10' type="text" {...register("firstname", { required: { value: true, message: "Firstname is required" }, minLength: { value: 3, message: "Min.characters are 3" }, maxLength: { value: 15, message: "Max. characters limit is 15" } })} />
                        {errors.firstname && <span className='text-red-600 text-xs'>{errors.firstname.message}</span>}
                    </div>
                    {/* Last Name */}
                    <div className='flex gap-3 items-center'>
                        <label>Lastname</label>
                        <input className='border border-gray-400 ml-10' type="text" {...register("lastname", { required: { value: true, message: "Lastname is required" }, minLength: { value: 3, message: "Min.characters are 3" }, maxLength: { value: 15, message: "Max. characters limit is 15" } })} />
                        {errors.lastname && <span className='text-red-600 text-xs'>{errors.lastname.message}</span>}
                    </div>
                    {/* Phone */}
                    <div className='flex gap-3 items-center'>
                        <label>Phone number</label>
                        <input className='border border-gray-400 ml-1' type='number' {...register("number", { required: { value: true, message: "Phone Number is required" }, minLength: { value: 10, message: "Min.characters are 10" }, maxLength: { value: 12, message: "Max. characters limit is 12" } })} />
                        {errors.number && <span className='text-red-600 text-xs'>{errors.number.message}</span>}
                    </div>
                    {/* /Email */}
                    <div className='flex gap-3 items-center'>
                        <label>Email Address</label>
                        <input className='border border-gray-400 ml-2' type='email' {...register("email", { required: { value: true, message: "Email Address required" }, minLength: { value: 15, message: "Min.characters are 15" }, maxLength: { value: 50, message: "Max. characters limit is 50" } })} />
                        {errors.email && <span className='text-red-600 text-xs'>{errors.email.message}</span>}
                    </div>
                    {/* Address */}
                    <div className='flex gap-3 items-center'>
                        <label>Address</label>
                        <input className='border border-gray-400 ml-12' type='text' {...register("address", { required: { value: true, message: "Address is required" }, minLength: { value: 5, message: "Min.characters are 5" }, maxLength: { value: 50, message: "Max. characters limit is 50" } })} />
                        {errors.address && <span className='text-red-600 text-xs'>{errors.address.message}</span>}
                    </div>
                    {/* City */}
                    <div className='flex gap-3 items-center'>
                        <label>City</label>
                        <input className='border border-gray-400 ml-20' type='text' {...register("city", { required: { value: true, message: "City is required" }, minLength: { value: 3, message: "Min.characters are 3" }, maxLength: { value: 20, message: "Max. characters limit is 20" } })} />
                        {errors.city && <span className='text-red-600 text-xs'>{errors.city.message}</span>}
                    </div>
                    {/* State */}
                    <div className='flex gap-3 items-center'>
                        <label>State</label>
                        <input className='border border-gray-400 ml-17' type='text' {...register("state", { required: { value: true, message: "State is required" }, minLength: { value: 3, message: "Min.characters are 3" }, maxLength: { value: 20, message: "Max. characters limit is 20" } })} />
                        {errors.state && <span className='text-red-600 text-xs'>{errors.state.message}</span>}
                    </div>
                    {/* Zip Code */}
                    <div className='flex gap-3 items-center'>
                        <label>Zip Code</label>
                        <input className='border border-gray-400 ml-10' type='text' {...register("zipcode", { required: { value: true, message: "Zipcode is required" }, minLength: { value: 6, message: "Min.characters are 6" }, maxLength: { value: 6, message: "Max. characters limit is 6" } })} />
                        {errors.zipcode && <span className='text-red-600 text-xs'>{errors.zipcode.message}</span>}
                    </div>
                    <input disabled={isSubmitting} className='w-[90%] mt-2 px-6 py-1.5 bg-[#2e9fd2] text-white rounded-full hover:bg-gray-300 hover:cursor-pointer hover:text-black transition-all duration-400 ease-in-out' type="submit" value="Submit" />
                    {isSubmitting && <div>Submitting...</div>}
                </form>

            </div>
        </>
    )
}
export default Dashboard
