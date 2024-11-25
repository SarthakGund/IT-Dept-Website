'use client'
import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  // Log the session and status for debugging
  console.log("Session status:", status);
  console.log("Session data:", session);

  // Show loading spinner when status is "loading"
  if (status === "loading") {
    return (
      <div className="fixed inset-0 bg-gradient-to-t from-black via-gray-800 to-black z-[99999] flex justify-center items-center">
        <div className="relative w-[100px] h-[60px]">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-[100px] h-[50px] transform origin-bottom-center animate-spin-slow`}
              style={{
                animationDelay: `-${50 * index}ms`,
              }}
            >
              <div
                className={`border-4 border-transparent rounded-full absolute top-0 left-0 w-[100px] h-[100px] mx-auto`}
                style={{
                  borderColor: `hsl(${(index * 60) % 360}, 80%, 60%)`,
                  width: `${90 - index * 14}px`,
                  height: `${90 - index * 14}px`,
                  top: `${7 + index * 7}px`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Render when session is loaded
  return (
    <div className="bg-black">
      {status === "authenticated" ? (
        <div className="flex flex-row items-center justify-between gap-0 mx-[30px] p-2 rounded-lg text-white">
          <p className="text-lg font-medium">Welcome, {session.user?.email}!</p>
          <button
            onClick={() => signOut()}
            className="mx-[22px] inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between gap-0 mx-[30px] p-2 rounded-lg text-white">
          <p className="text-lg font-medium">Please log in to access the content.</p>
          <div className="gap-x-[30px]">
            <Link href="/login">
              <button className="mx-[22px] inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="mx-[22px] inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-8 text-white">Placements</h1>
        <div className="space-y-4">
          <a
            href="/placements/2324"
            className="block text-xl text-yellow-400 hover:text-yellow-300 bg-gray-800 p-3 rounded"
          >
            Placements for 23-24
          </a>
          <a
            href="first.html"
            className="block text-xl text-yellow-400 hover:text-yellow-300 bg-gray-800 p-3 rounded"
          >
            Placements for 22-23
          </a>
          <a
            href="first.html"
            className="block text-xl text-yellow-400 hover:text-yellow-300 bg-gray-800 p-3 rounded"
          >
            Placements for 21-22
          </a>
          <a
            href="first.html"
            className="block text-xl text-yellow-400 hover:text-yellow-300 bg-gray-800 p-3 rounded"
          >
            Placements for 20-21
          </a>
        </div>
      </div>
    </div>
  );
}
