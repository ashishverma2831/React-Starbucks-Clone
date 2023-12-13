import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'


const Joinnow = () => {
  return (
    <div>
        
        <div className=' p-5'>
          <div className=' mx-auto w-[568px]  px-10'>
            <h1 className='text-center font-semibold text-3xl p-5 '>Create an account</h1>
            <div className='w-full mx-auto flex flex-col justify-center items-center text-center p-10 gap-3'>
              <h1 className='text-gray-500 font-semibold text-sm text-center'>STARBUCKS® REWARDS</h1>
              <p className='w-11/12 text-gray-500 text-sm'>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
            </div>
            <div className='w-full py-5 px-6 rounded-xl shadow-lg'>
              <h1 className='text-sm my-8'>*indicates required field</h1>
              <label className='text-black text-lg my-2 font-semibold'>Personal Information</label>
              <div class="relative my-4">
                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-800 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-md font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-800 peer-focus:dark:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">* First name</label>
              </div>
              <div class="relative my-4">
                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-800 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-md font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-800 peer-focus:dark:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">* Last name</label>
              </div>

              <label className='text-black text-lg my-5 font-semibold'>Account Security</label>
              <div class="relative mt-4">
                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-800 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-md font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-800 peer-focus:dark:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">* Email address</label>
              </div>
                <p className='px-4 text-md font-normal'>This will be your username</p>
              <div class="relative mt-4">
                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-800 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-md font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-800 peer-focus:dark:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">* Password</label>
              </div>
                <p className='px-4 text-md font-normal'>Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</p>

              <div className='flex flex-col gap-4 mb-10 mt-5'>
                <label className='text-gray-500 text-md font-semibold tracking-wider'>COLLECT MORE STARS & EARN REWARDS</label>
                <p className='font-semibold'>Email is a great way to know about offers and what’s new from Starbucks.</p>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-start gap-3 font-semibold">
                    <input checked id="checked-checkbox" type="checkbox" value="" class="w-5 h-5 text-green-800 bg-gray-100 border-gray-300 rounded " />
                    <span> Yes, I’d like email from Starbucks</span>
                  </div>
                  <p className='px-8 text-md font-normal text-gray-500 mx-auto'>Know about initiatives, announcements and product offers.</p>
                </div>
              </div>
              <div className='flex flex-col gap-6'>
                <label className='text-gray-500 text-md font-semibold tracking-wider'>TERMS OF USE</label>
                <div className="flex items-start">
                  <input id="checked-checkbox" type="checkbox" value="" class="w-5 h-5 text-green-800 bg-gray-100 border-gray-300 rounded " />
                  <p className='px-4 text-md font-medium'>* I agree to the 
                        <NavLink><span className='text-green-900 underline font-medium'> Starbucks® Rewards Terms <i className="fa-solid fa-arrow-up-right-from-square text-green-800"></i>  </span></NavLink>
                        and the 
                        <NavLink><span className='text-green-900 underline font-medium'> Starbucks Card Terms <i className="fa-solid fa-arrow-up-right-from-square text-green-800"></i> </span></NavLink>
                        and have read the 
                        <NavLink><span className='text-green-900 underline font-medium'> Starbucks Privacy Statement <i className="fa-solid fa-arrow-up-right-from-square text-green-800"></i> </span></NavLink>
                        .
                  </p>
                </div>
              </div>
              <div className='flex justify-end'>
                <button className="px-6 py-4 font-semibold mt-10 mb-5 text-white bg-green-800 rounded-[150px] shadow-md shadow-gray-400">
                  <NavLink to="#">Create account</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default Joinnow