import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { Audiowide } from 'next/font/google';
import { IoLogoJavascript } from "react-icons/io";
import { Yatra_One } from 'next/font/google';
import { BiLogoTypescript } from "react-icons/bi";

const font= Audiowide({
  subsets: ['latin'],
  weight: "400"
});
const font2= Yatra_One({
  subsets: ['latin'],
  weight: "400"
});

const Skill = () => {
  return (
    <div id='skills'>
      <section className="text-gray-400 bg-gradient-to-t from-darkPurple via-mediumPurple to-lightPurple body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
          <h2 className={`text-4xl text-white tracking-widest select-none font-medium title-font mb-1 ${font.className} animate-bounce`}>
  Skills
</h2>

          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* Skill 1 */}
            <div className="p-4 md:w-1/3 animate-fadeIn">
              <div className="flex rounded-lg h-full bg-opacity-60 p-8 flex-col transition duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0 animate-pulse">
                    <FaHtml5 className="text-2xl font-bold" />
                  </div>
                  <h2 className={`text-white text-2xl title-font font-medium select-none ${font2.className}`}>
                    Html
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-black rounded-xl">
                    <div className="absolute bg-gradient-to-r from-darkPurple via-mediumPurple to-lightPurple h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-white select-none text-lg text-right">100%</p>
                </div>
              </div>
            </div>
            
            {/* Skill 2 */}
            <div className="p-4 md:w-1/3 animate-fadeIn">
              <div className="flex rounded-lg h-full bg-opacity-60 p-8 flex-col transition duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-800 text-white flex-shrink-0 animate-pulse">
                    <DiCss3 className="text-2xl font-bold" />
                  </div>
                  <h2 className={`text-white text-2xl title-font font-medium select-none ${font2.className}`}>
                    Css
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-black rounded-xl">
                    <div className="absolute bg-gradient-to-r from-darkPurple via-mediumPurple to-lightPurple h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-white select-none text-lg text-right">95%</p>
                </div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="p-4 md:w-1/3 animate-fadeIn">
              <div className="flex rounded-lg h-full bg-opacity-60 p-8 flex-col transition duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0 animate-pulse">
                    <IoLogoJavascript className="text-2xl font-bold" />
                  </div>
                  <h2 className={`text-white text-2xl title-font font-medium select-none ${font2.className}`}>
                    Javascript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-black rounded-xl">
                    <div className="absolute bg-gradient-to-r from-darkPurple via-mediumPurple to-lightPurple h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-white select-none text-lg text-right">80%</p>
                </div> 
              </div>
            </div>

            {/* Skill 4 */}
            <div className="p-4 md:w-1/3 animate-fadeIn">
              <div className="flex rounded-lg h-full bg-opacity-60 p-8 flex-col transition duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-700 text-white flex-shrink-0 animate-pulse">
                    <BiLogoTypescript className="text-2xl font-bold" />
                  </div>
                  <h2 className={`text-white text-2xl title-font font-medium select-none ${font2.className}`}>
                    TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-black rounded-xl">
                    <div className="absolute bg-gradient-to-r from-darkPurple via-mediumPurple to-lightPurple h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-white select-none text-lg text-right">90%</p>
                </div>
              </div>
            </div>

            {/* Skill 5 */}
            <div className="p-4 md:w-1/3 animate-fadeIn">
              <div className="flex rounded-lg h-full bg-opacity-60 p-8 flex-col transition duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0 animate-pulse">
                    <RiNextjsFill className="text-2xl font-bold" />
                  </div>
                  <h2 className={`text-white text-2xl title-font font-medium select-none ${font2.className}`}>
                    Next JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-black rounded-xl">
                    <div className="absolute bg-gradient-to-r from-darkPurple via-mediumPurple to-lightPurple h-1 rounded-xl w-[65%]"></div>
                  </div>
                  <p className="font-bold text-white select-none text-lg text-right">65%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skill
