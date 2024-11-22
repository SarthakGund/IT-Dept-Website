import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import react from "react";
import { classnames } from "@/utils";
import Image from 'next/image'
import { heading, paragraphbold, subSubheading } from "@/constants";
import Link from 'next/link'

interface Layoutprops{
  children: React.ReactNode
}


const Layout: React.FC<Layoutprops> = (props) => {
  return(
    <html>
      <body>
        <nav className={classnames("flex h-[80px] justify-center bg-black text-white",)}>
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
          </div>
        </div>
        <div className=" flex justify-center bg-black text-white border-y-[2px] border-[#333333]">
      </div>  


        {props.children}
      </body>
    </html>
  )
}

export default Layout;
