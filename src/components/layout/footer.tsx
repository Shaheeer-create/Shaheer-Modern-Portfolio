import Link from 'next/link';
import React from 'react'
import { FaYoutube } from "react-icons/fa";
import logo from "../../../public/Assets/Logo.jpg";
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import {Audiowide} from 'next/font/google';
import {Mr_Dafoe} from 'next/font/google';
import { FaGithub } from "react-icons/fa";





const font= Audiowide({
    subsets: ['latin'],
    weight: "400"
})

const font2= Mr_Dafoe({
    subsets: ['latin'],
    weight: '400'
  })



const Footer = () => {
  return (

        <footer className="text-gray-400 bg-gradient-to-b from-darkPurple via-mediumPurple  to-lightPurple body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link  href={'https://github.com/Shaheeer-create'}className="flex title-font font-medium items-center md:justify-start justify-center text-white">
    <Image src={logo} alt='Logo' height={100} width={100} className="rounded-full" />
      <span className={`ml-3 text-xl ${font2.className} select-none text-logocolor`}>Shaheer Naeem</span>
    </Link>
    <p className={`text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4 select-none ${font.className}`}>
      © 2024 Made With ❤ —  Shaheer Naeem
    
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank' href={"https://www.youtube.com/@MusicBySherry?sub_confirmation=1"} className="text-gray-400 text-3xl transform transition duration-300 ease-in-out hover:scale-110 hover:translate-x-1 hover:-translate-y-0.5 hover:text-[#FF0000]">
      <FaYoutube />

      </Link >
     
      <Link href={"https://www.instagram.com/_.irtiza_naeem._/"} className="ml-3 text-gray-400 text-3xl transform transition duration-300 ease-in-out hover:scale-110 hover:translate-x-1 hover:-translate-y-0.5 hover:text-[#F56040] "  target="_blank">
       <FaInstagram />

      </Link>
      <Link href={"https://github.com/Shaheeer-create"} className="ml-3 text-gray-400 text-3xl   transform transition duration-300 ease-in-out hover:scale-110 hover:translate-x-1 hover:-translate-y-0.5  hover:text-gray-700"  target="_blank">
       <FaGithub />
      </Link>
    
    </span>
  </div>
</footer>
    
  )
}

export default Footer