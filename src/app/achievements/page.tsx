'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import axios from 'axios';
import Link from 'next/link';

interface FormData {
    title: string;
    description: string;
}

export default function Page() {
    const { data: session, status } = useSession();

    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        // image: null,
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (!session?.user?.email) {
                console.error("User is not authenticated");
                return;
            }

            // Send a POST request to the API endpoint
            const response = await fetch('/api/achievements', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    userId: session.user.email,
                }),
            });

            if (response.ok) {
                // Handle successful response
                console.log('Achievement added successfully!');
                handleReset(); // Reset the form fields
            } else {
                // Handle errors
                console.error(`Failed to add achievement: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error adding achievement: ', error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = () => {
        setFormData({
            title: '',
            description: '',
        });
    };

    const achievements = [
        {
            title: "WINNER AT THE UNESCO INDIA AFRICA HACKATHON 2022(23rd-24th November 2022)",
            description:
                "At the Gautam Buddha University in Uttar Pradesh organised by ministry of education and MOE's innovation cell, government of India",
            image: "/assets/africa-transformed-without-msg.jpeg",
        },
        {
            title: "WINNERS OF SMART INDIA HACKATHON",
            description:
                "TY students bagged First Position in Smart India Hackathon organised by DRDO",
            image: "/assets/SIH-winner.png",
        },
        {
            title: "First prize in Blockchain Domains-Clash Of Codes 23",
            description: "Clash of Codes 23 presented by DJS IETE X DJS Trinity",
            image: "/assets/blockchain-winners.png",
        },
        {
            title: "2nd runner Up at LINES OF CODE 5.0",
            description:
                "TY IT students were 2nd runner Up at LOC 5.0. Won 20 thousand prize",
            image: "/assets/LOC 5.0.png",
        },
        {
            title: "1st prize in Data Analytics domain",
            description:
                "TY students won 1st prize in Data Analytics domain in DATAHACK 1.0",
            image: "/assets/datahack1.0.png",
        },
        {
            title: "TY students bagged first prize at BITNBUILD",
            description: "Google Developer Student Clubs CRCE X UMIT",
            image: "/assets/BITNBUILD.png",
        },
    ];

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

            <h1 className="text-white pt-10 text-center text-5xl mt-10 mb-10 transition duration-300 hover:scale-125">
                &#11088;Achievements&#11088;
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-12">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className="card max-w-xs mx-auto mb-6 p-8 rounded-md shadow-lg bg-gray-800 border-4 border-transparent hover:border-yellow-500 transition-all duration-300 relative group transform hover:scale-110"
                    >
                        <p className="text-lg font-bold text-white mb-2">{achievement.title}</p>
                        <div className="relative overflow-hidden rounded-md">
                            <img
                                src={achievement.image}
                                alt={achievement.title}
                                className="w-full rounded-md transition-transform duration-300 group-hover:scale-125 group-hover:z-10"
                            />
                        </div>
                        <div className="text-sm text-white mt-2">{achievement.description}</div>
                        <div className="absolute inset-0 border-4 opacity-0 group-hover:opacity-100 group-hover:border-opacity-100 transition-all duration-300 rounded-md" />
                    </div>
                ))}
            </div>

            {session ? (
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
                    <div className="w-full max-w-lg p-6 sm:p-10 bg-gray-950/80 backdrop-blur-md rounded-2xl shadow-lg">
                        <h1 className="text-4xl font-semibold text-center mb-8 text-gradient">
                            Add Achievement Details
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Achievement Name
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Enter achievement name"
                                    className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Enter description"
                                    className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                                    rows={4}
                                    required
                                />
                            </div>
                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:scale-105 transition-transform"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="w-full py-3 bg-gray-800 border border-gray-700 text-white font-semibold rounded-md hover:scale-105 hover:border-gray-500 transition-transform"
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="flex justify-around">
                    {/* Content when not logged in */}
                </div>
            )}
        </div>
    );
}
