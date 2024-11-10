import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import Logo from '../../../public/assests/Himages/Logo.png';
import { RiMenu3Line } from "react-icons/ri";
import { IoMdCloudUpload } from "react-icons/io";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {Mr_Dafoe,Oswald} from 'next/font/google';
import Logo from '../../../public/Assets/Logo.jpg';
import {Audiowide} from 'next/font/google';
// import {Resume} from'../../../public/Assets/';





const font= Mr_Dafoe({
  subsets: ['latin'],
  weight: '400'
})
const font2= Oswald({subsets: ['latin']})


const font3= Audiowide({
  subsets: ['latin'],
  weight: "400"
})


// import Loading from '@/app/(others)/loading';
// import { TbTruckLoading } from 'react-icons/tb';

const Navbar = () => {
 

  return (
    <div>
      <header className="text-gray-400 bg-gradient-to-b from-darkPurple via-mediumPurple  to-lightPurple body-font sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">

          {/*  Download CV Button (left side on small screens) */}
          <a href="/Assets/ShaheerNaeemResume.pdf" download="ShaheerNaeemResume.pdf">

          <div className="flex items-center gap-4 md:hidden">
            <button 
            
              className={`inline-flex items-center text-white  border-2  py-1 px-3 focus:outline-none hover:bg-white hover:text-lightPurple  rounded text-base transition duration-300 ease-in-out transform hover:scale-105 ${font3.className}`}
            >
                                          <IoMdCloudUpload className='pr-2 text-3xl' />


              Download CV
            </button>
          </div>
</a>
          {/* Logo and Name */}
          <Link
  className="flex title-font font-medium items-center transform transition duration-300 ease-in-out hover:scale-110 hover:translate-x-1 hover:-translate-y-0.5"
  href="/"
>

<Image src={Logo} height={50} width={50} alt="Company Logo" className="rounded-full" />

  <span className={`ml-3 text-2xl font-Monument text-white hover:text-logocolor ${font.className}`}>Shaheer Naeem</span>
</Link>

          {/* Mobile Menu Trigger (right side on small screens) */}
          <Sheet>
  <SheetTrigger className="md:hidden text-3xl text-white font-extrabold hover:text-lightPurple">
    <RiMenu3Line />
  </SheetTrigger  >
  <SheetContent className='bg-gradient-to-b from-darkPurple via-mediumPurple to-lightPurple text-white text-lg'>
    <nav className="md:ml-auto md:mr-auto flex flex-col">

      <Link href="/" className="mb-2 text-white hover:text-lightPurple md:hidden">Home</Link>
      <Link href="/about" className="mb-2 text-white hover:text-lightPurple md:hidden">About</Link>
      <Link href="#Project" className="mb-2 text-white hover:text-lightPurple md:hidden">Projects</Link>
      <Link href="/contact" className="mb-2 text-white hover:text-lightPurple md:hidden">Contact</Link>
      <Link href="#skills" className="mb-2 text-white hover:text-lightPurple md:hidden">Skills</Link>
      
    </nav>
  </SheetContent>
</Sheet>



          {/* Desktop Menu */}
          <nav className={`hidden md:flex md:ml-auto flex-wrap items-center justify-center text-xl gap-9 ${font2.className}`}>
            <Link href="/" className="relative group mr-5">
              <span className={`text-white hover:text-lightPurple transition-all duration-300 ` }>Home</span>
              <span className="absolute left-0 -bottom-1 w-1 h-1 bg-gradient-to-b from-darkPurple via-mediumPurple to-lightPurple transition-all duration-300 group-hover:w-full"></span>
              </Link>
            <Link href="/about" className="relative group mr-5">
              <span className="text-white hover:text-lightPurple transition-all duration-300">About</span>
              <span className="absolute left-0 -bottom-1 w-1 h-1 bg-gradient-to-b from-darkPurple via-mediumPurple to-lightPurple transition-all duration-300 group-hover:w-full"></span>
              </Link>
            <Link href="#Project" className="relative group mr-5">
              <span className="text-white hover:text-lightPurple transition-all duration-300">Project</span>
              <span className="absolute left-0 -bottom-1 w-1 h-1 bg-gradient-to-b from-darkPurple via-mediumPurple to-lightPurple transition-all duration-300 group-hover:w-full"></span>
              </Link>
            <Link href="/contact" className="relative group mr-5">
              <span className="text-white hover:text-lightPurple transition-all duration-300">Contact</span>
              <span className="absolute left-0 -bottom-1 w-1 h-1 bg-gradient-to-b from-darkPurple via-mediumPurple to-lightPurple transition-all duration-300 group-hover:w-full"></span>
              </Link>
            <Link href="#skills" className="relative group mr-5">
              <span className="text-white hover:text-lightPurple transition-all duration-300">Skills</span>
              <span className="absolute left-0 -bottom-1 w-1 h-1 bg-gradient-to-b from-darkPurple via-mediumPurple to-lightPurple transition-all duration-300 group-hover:w-full"></span>
              </Link>
          </nav>

          {/*   Download CV  Button (right side on desktop screens) */}
          <a href="/Assets/ShaheerNaeemResume.pdf" download="ShaheerNaeemResume.pdf">

          <div className="hidden md:flex items-center gap-7">

            <button
              className={`inline-flex items-center text-white  border-2  py-1 px-3 focus:outline-none hover:bg-white hover:text-lightPurple  rounded text-base transition duration-300 ease-in-out transform hover:scale-105 ${font3.className}`}
            >
                            <IoMdCloudUpload className='pr-2 text-3xl' />

              Download CV
            </button>
            

          </div>
          </a>

        </div>
      </header>
    </div>
  );
};

export default Navbar;