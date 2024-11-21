import React from 'react'

export default function page() {
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

    <h1 className="text-white pt-10 text-center text-5xl mt-10 mb-10 transition duration-300 hover:scale-125">&#11088;Achievements&#11088;</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ml-12">
        <div className="max-w-xs mx-auto  border-solid border-4 border-white p-8 rounded-md transition duration-300 hover:border-opacity-10">
            <p className="text-lg font-bold text-white mb-2 transition duration-300 hover:scale-105">WINNER AT THE UNESCO INDIA AFRICA HACKATHON 2022(23rd-24th November 2022)</p>
            <img src="/assets/africa-transformed-without-msg.jpeg" className="w-full transition duration-300 hover:scale-110"/>
            <div className="text-sm text-white mt-2 transition duration-300 hover:scale-105">At the Gautam Buddha University in Uttar Pradesh organised by ministry of education and MOE's innovation cell, government of India</div>
        </div>

        <div className="max-w-xs mx-auto border-solid border-4 border-white p-8 rounded-md transition duration-300 hover:border-opacity-10">
            <p className="text-lg font-bold text-white mb-2 mt-10 transition duration-300 hover:scale-105">WINNERS OF SMART INDIA HACKATHON</p>
            <img src="/assets/SIH-winner.png" className="w-full transition duration-300 hover:scale-110"/>
            <p className="text-sm text-white mt-2 transition duration-300 hover:scale-105">TY students bagged First Position in Smart India Hackathon organised by DRDO</p>
        </div>

        <div className="max-w-xs mx-auto border-solid border-4 border-white p-8 rounded-md transition duration-300 hover:border-opacity-10">
            <p className="text-lg font-bold text-white mb-2 mt-10 transition duration-300 hover:scale-105">First prize in Blockchain Domains-Clash Of Codes 23</p>
            <img src="/assets/blockchain-winners.png" className="w-full transition duration-300 hover:scale-110"/>
            <p className="text-sm text-white mt-2 transition duration-300 hover:scale-105">Clash of Codes 23 presented by DJS IETE X DJS Trinity</p>
        </div>

        <div className="max-w-xs mx-auto border-solid border-4 border-white p-8 rounded-md transition duration-300 hover:border-opacity-10">
            <p className="text-lg font-bold text-white mb-2 mt-10 transition duration-300 hover:scale-105">2nd runner Up at LINES OF CODE 5.0</p>
            <img src="/assets/LOC 5.0.png" className="w-full transition duration-300 hover:scale-110"/>
            <p className="text-sm text-white mt-2 transition duration-300 hover:scale-105">TY IT students were 2nd runner Up at LOC 5.0</p>
            <p className="text-sm text-white mt-2 transition duration-300 hover:scale-105">Won 20 thousand prize</p>
        </div>

        <div className="max-w-xs mx-auto border-solid border-4 border-white p-8 rounded-md transition duration-300 hover:border-opacity-10">
            <p className="text-lg font-bold text-white mb-2 mt-10 transition duration-300 hover:scale-105">1st prize in Data Analytics domain</p>
            <img src="/assets/datahack1.0.png" className="w-full transition duration-300 hover:scale-110"/>
            <p className="text-sm text-white mt-2 transition duration-300 hover:scale-105">TY students won 1st prize in Data Analytics domain in DATAHACK 1.0</p>
        </div>

        <div className="max-w-xs mx-auto border-solid border-4 border-white p-8 rounded-md transition duration-300 hover:border-opacity-10">
            <p className="text-lg font-bold text-white mb-2 mt-10 transition duration-300 hover:scale-105">TY students bagged first prize at BITNBUILD</p>
            <img src="/assets/BITNBUILD.png" className="w-full transition duration-300 hover:scale-110"/>
            <p className="text-sm text-white mt-2 transition duration-300 hover:scale-105">Google Developer Student Clubs CRCE X UMIT</p>
        </div>
    </div>
    </div>
  )
}
