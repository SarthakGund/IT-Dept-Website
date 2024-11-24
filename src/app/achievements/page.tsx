'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormData {
    achievementName: string;
    description: string;
}

export default function Page() {
    const [formData, setFormData] = useState<FormData>({
        achievementName: '',
        description: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/achievements', formData);
            alert(`Data saved: ${JSON.stringify(response.data)}`);
            handleReset();
        } catch (error) {
            console.error(error);
            alert('Failed to save data.');
        }
    };

    const handleReset = () => {
        setFormData({
            achievementName: '',
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
        <div>
            {/* <nav className="bg-slate-700 fixed top-0 w-full">
        <ul className="flex justify-around">
          <li><a href="https://www.djsce.ac.in/" target="_blank" className="block text-white text-center py-3 px-4 hover:bg-yellow-700">Home</a></li>
          <li><a href="https://www.djsce.ac.in/courses.php?course_id=2&sr_no=37#view" target="_blank" className="block text-white text-center py-3 px-4 hover:bg-yellow-700">More Achievements</a></li>
          <li><a href="https://www.djsce.ac.in/courses.php?course_id=2&sr_no=26#view" target="_blank" className="block text-white text-center py-3 px-4 hover:bg-yellow-700">Faculty</a></li>
          <li><a href="https://www.djsce.ac.in/placements-hs" target="_blank" className="block text-white text-center py-3 px-4 hover:bg-yellow-700">Placements</a></li>
        </ul>
      </nav> */}

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


            {/* Form Section */}
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
                <div className="w-full max-w-lg p-6 sm:p-10 bg-gray-950/80 backdrop-blur-md rounded-2xl shadow-lg">
                    <h1 className="text-4xl font-semibold text-center mb-8 text-gradient bg-gradient-to-r from-purple-400 to-blue-500">
                        Add Achievement Details
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="achievementName"
                                className="block text-sm font-medium text-gray-400 mb-2"
                            >
                                Achievement Name
                            </label>
                            <input
                                type="text"
                                id="achievementName"
                                name="achievementName"
                                value={formData.achievementName}
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
        </div>
    );
}
