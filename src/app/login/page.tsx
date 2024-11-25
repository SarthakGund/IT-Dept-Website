'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setError(""); 

    try {
      const res = await signIn('credentials', { 
        email, 
        password, 
        redirect: false 
      });

      if (res?.error) {
        setError("Invalid credentials");
        return;
      }

      router.replace('/'); 
    } catch (error) {
      setError("An error occurred, please try again.");
    }
  };

  const handleGoogleLogin = () => {
    signIn("google");
  };

  return (
    <div className="bg-black p-8 text-center text-white h-screen flex flex-col justify-center items-center w-full">
      {error && (
        <div className="bg-red-200 px-6 py-4 text-lg flex items-center justify-center text-red-800 absolute right-[30px] top-[140px]">
          <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
            <path fill="currentColor"
              d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
            </path>
          </svg>
          {error}
        </div>
      )}
      <div className="w-full max-w-[600px]">
        <h2 className="mb-6 text-3xl font-bold">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="w-[600px] flex items-center flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[300px] px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[300px] px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-[300px] py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>

        <div className="flex flex-col items-center gap-[16px] my-[10px]">
          <button
            onClick={handleGoogleLogin}
            className="w-[300px] py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 font-semibold"
          >
            Login using Google
          </button>
          <button
            className="w-[300px] py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 font-semibold"
          >
            Login with something else
          </button>
        </div>
      </div>
    </div>
  );
}
