'use client'
import React from 'react';
import FacultyCard from './components/FacultyCard';
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

interface Faculty {
  name: string;
  position: string;
  joined: string;
  image: string;
}

const facultyList: Faculty[] = [
  {
    name: "Dr. (Mrs.) Vinaya M. Sawant",
    position: "Head of the Department",
    joined: "6.8.2003",
    image: "/assets/Vinayamaam.jpg"
  },
  {
    name: "Dr. Abhijit R. Joshi",
    position: "Professor",
    joined: "13.4.2004",
    image: "/assets/abhijitsir.jpg"
  },
  {
    name: "Dr. (Mrs.) Monika Mangla",
    position: "Assistant Professor",
    joined: "11.01.2022",
    image: "/assets/monikamaamjpg.jpg"
  },
  {
    name: "Prof.(Mrs.) Sharvari Partil",
    position: "Associate Professor",
    joined: "11.01.2022",
    image: "/assets/sharvarimaam.jpg"
  },
  
  // Add more faculty members as needed
];

const Home: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <div className='bg-black'>
    
            {session ? (
                <div className="flex flex-row items-center justify-between gap-0 mx-[30px] p-2 rounded-lg text-white">
                    <p className="text-lg font-medium">Welcome, {session.user?.email}!</p>
                    <button onClick={() => signOut()} className="mx-[22px] inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
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

      <div className="bg-black text-white flex items-center flex-col">
        <div className="bg-black text-white hero-section h-[100vh] py-[210px] w-[96%]">
          <div className="hero-heading px-[50px] w-[60%] leading-relaxed font-bold 3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-4xl">
            Official website of IT department of DJSCE
          </div>
        </div>
      </div>

      <div className="bg-black text-white">
        <div className="heading 3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-3xl font-semibold text-center">
          Our Faculties
        </div>
        <div className="flex justify-center mt-[50px]">
          <div className="faculty-sec flex flex-wrap justify-evenly gap-[40px] w-[96%]">
            {facultyList.map((faculty, index) => (
              <FacultyCard
                key={index}
                image={faculty.image}
                name={faculty.name}
                position={faculty.position}
                joined={faculty.joined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
