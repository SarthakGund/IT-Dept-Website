'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import react from "react";
import { classnames } from "@/utils";
import Image from 'next/image'
import { heading, paragraphbold, subSubheading } from "@/constants";
import { AuthProvider } from "./Providers";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";  


interface Layoutprops{
  children: React.ReactNode
}


const Layout: React.FC<Layoutprops> = (props) => {
  
  return(
    <html>
      <body>
        <nav className={classnames("flex h-[80px] justify-center bg-black text-white ")}>
          <div className=" flex w-[94%] justify-between py-[5px]">
            <div className={classnames("flex items-center",)}>
              <Image src="/assets/djsce_logo.png" alt="" height={70} width={70}></Image>
            </div>
            <div className={classnames("header flex flex-col gap-[5px]",)}>
              <div className={classnames("head1  text-center font-semibold 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-2xl")}>
                Department of Information Technology
              </div>
              <div className={classnames("head2  text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl")}>
                Dwarkadas J. Sanghvi College of Engineering
              </div>
            </div>
            <div className={classnames("flex items-center",)}>
              <Image src="/assets/svkm-logo.png" alt="" height={60} width={60}></Image>
            </div>
          </div>
        </nav>
        <div className=" border-y flex justify-center bg-black text-white">
          <div className="flex gap-[32px] text-[18px] py-[3px] mb-[4px]">
            <div className="cursor-pointer hover:text-gray-400"><Link href='/'>Home</Link></div>
            <div className="cursor-pointer hover:text-gray-400"><Link href='/aboutus'>About Us</Link></div>
            <div className="cursor-pointer hover:text-gray-400"><Link href='/achievements'>Achievements</Link></div>
            <div className="cursor-pointer hover:text-gray-400"><Link href='/placements'>Placements</Link></div>
            {/* <div onClick={()=>{signOut()}} className="cursor-pointer hover:text-gray-400"><Link href='/placements'>Logout</Link></div> */}
          </div>
        </div>
        <div className=" flex justify-center bg-black text-white border-y-[2px] border-[#333333]">
      </div>  


        <AuthProvider>

          {props.children}
        </AuthProvider>

        <footer className="bg-gray-900 text-white py-10 ">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="telephone" className="block text-sm mb-1">Telephone *</label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="query" className="block text-sm mb-1">Query / Comments</label>
              <textarea
                id="query"
                name="query"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
                rows={4}
              ></textarea>
            </div>

            <button type="submit" className=" w-[200px] mx-[22px] inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details and Map */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">Reach Us</h2>
          <div className="space-y-4">
            <p className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>No.U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Marg, Opp. Cooper Hospital, Vile Parle (West), Mumbai-400 056. India</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-400" />
              <span>42335000 / 42335001</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-400" />
              <span>info@djsce.ac.in / admin@djsce.ac.in</span>
            </p>
          </div>

          {/* Social Media Icons */}
          <h3 className="text-xl font-semibold text-blue-400 mt-6">Follow Us</h3>
          <div className="flex space-x-6 mt-3">
            <a href="https://www.facebook.com/djsce.official/" className="text-2xl text-white hover:text-blue-400 transition-colors" target="_blank"><FaFacebook /></a>
            <a href="https://x.com/djsce_official" className="text-2xl text-white hover:text-blue-400 transition-colors" target="_blank"><FaTwitter /></a>
            <a href="https://www.instagram.com/djsce.official/" className="text-2xl text-white hover:text-blue-400 transition-colors" target="_blank"><FaInstagram /></a>
            <a href="https://www.linkedin.com/school/djsce/posts/?feedView=all" className="text-2xl text-white hover:text-blue-400 transition-colors" target="_blank"><FaLinkedin /></a>
          </div>

          {/* Embedded Map */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.842358251256!2d72.8366080762933!3d19.107042839083406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9edddf0a7f3%3A0x85e1b83908e126e0!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1695648986032!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>

      </body>
    </html>
  )
}

export default Layout;
