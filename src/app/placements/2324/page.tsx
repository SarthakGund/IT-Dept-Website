import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
             <div className="container mx-auto mt-10">
           <h1 className="text-4xl font-bold mb-8 text-white">Placements Details</h1>
          
           {/* <div className="mb-8">
               <a href="index.html" className="text-yellow-400 hover:text-yellow-300 bg-gray-800 p-3 rounded">← Back to Placements</a>
           </div> */}

           <div className="flex flex-col space-y-6 items-center">
               <img src="/assets/image1.jpg" alt="Placement Image 1" className="rounded shadow-lg"/>
               <img src="/assets/image2.jpg" alt="Placement Image 2" className="rounded shadow-lg"/>
               <img src="/assets/image3.jpg" alt="Placement Image 3" className="rounded shadow-lg"/>
               <img src="/assets/image4.jpg" alt="Placement Image 4" className="rounded shadow-lg"/>
           </div>
          
           <div className="mt-8">
               <Link href="/" className="text-yellow-400 hover:text-yellow-300 bg-gray-800 p-3 rounded">← Back to Placements</Link>
           </div>
      </div>
    </div>
  )
}
