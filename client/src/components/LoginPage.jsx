
import React, { useEffect, useRef, useState, useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function LoginPage() {

    return (
        <div class="flex items-center justify-center h-screen">
            {/* <Toaster position='top-center' reverseOrder={false}></Toaster> */}
            <div class=" p-4 rounded-lg shadow-lg max-w-sm w-full">
                <div class="flex justify-center mb-2">
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-wheat" />
                </div>
                <h2 class="text-2xl font-semibold text-center mb-4">Login</h2>
                <p class="text-gray-600 text-center mb-6">Welcome to Cine Hub</p>
                <form className='py-1' >
                    <div class="mb-2">
                        <input type="email" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 " required placeholder="Enter username"
                            phone_number />
                    </div>
                    <div class="mb-2">
                        <input type="password" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 " required placeholder="Enter password"
                            password />
                    </div>
                    <div className='mb-4'>
                        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg  focus:outline-none " type='submit'>Login</button>

                    </div>
                    <div className='mb-2 min-h-[20px] justify-self-end'>
                        <span className='line'>Forgot Your Password?
                            <a href='#' className='text-orange text-decoration-none'> Reset</a>
                        </span>
                    </div>
                    <div className='mb-2 min-h-[20px] justify-self-end'>
                    </div>
                    <div className='mb-4 pl-5'>
                        <span className='line pr-5 text-blue-600'>Do have an account?</span>
                        <button className="w-50% px-10 bg-blue-500 text-white  py-2 rounded-lg  focus:outline-none " type='submit'>SignUp</button>
                    </div>


                </form>
            </div>
        </div>

    )

}

export default LoginPage
