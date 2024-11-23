'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from "react-toastify";

export default function Page() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        //e.preventDefault(); //this is to prevent reloading on submit duhh.
        if(!username || !email || !password){
            setError("All fields are necessary.")
            return;
        }
        try {
            const res = await fetch('../api/signup', {
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    username, email, password
                })
            })

            if(res.ok){
                const form = e.target
                form.reset()
            }
            else{
                console.log("User registeration failed")
            }
        } catch (error) {
            console.log("Error during registeration: ", error)
        }
    };

    return (
        <div className="bg-black min-h-screen">
                { error && (
                    <div className="bg-red-200 px-6 py-4 text-lg flex items-center justify-center text-red-800 absolute right-[0px]">
                        <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                            <path fill="currentColor"
                                d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
                            </path>
                        </svg>
                        {error}
                    </div>

                )}

            <div className="bg-black flex items-center justify-center h-screen">
                <div className="bg-black p-8 rounded-xl shadow-xl w-full max-w-md text-center text-white">
                    <h2 className="mb-6 text-3xl font-bold">Sign Up</h2>
                    <form onSubmit = {handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-300">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 font-semibold"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-gray-400">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-400 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
