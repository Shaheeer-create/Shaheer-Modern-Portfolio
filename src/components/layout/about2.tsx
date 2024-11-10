'use client'
import Image from "next/image";
import React from "react";
// import hero1 from "../../../public/assests/image/hero1.jpg";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import {Gravitas_One} from 'next/font/google';
import {Playfair_Display} from 'next/font/google';
import {Audiowide} from 'next/font/google';
import MyPic from "../../../public/Assets/Mypic.jpg";



const font= Gravitas_One({
    subsets: ['latin'],
    weight: "400"
})
const font2= Playfair_Display ({subsets: ['latin']})
const font3= Audiowide({
    subsets: ['latin'],
    weight: "400"
})


const About2 = () => {
  return (
    <section className="text-gray-400  bg-gradient-to-b from-darkPurple via-mediumPurple to-lightPurple    body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-white ${font.className}`}>
About Me
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Im A Web Developer",
                  "Im A UI/UX Designers",
                  "Im A MS Office Expert",
                  "Im A Power BI Expert",
                  "Im A Data Analysis",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="h-[0.1rem] w-[100px] "> </div>

          <p className={`mb-8 leading-relaxed text-white ${font2.className}`}>
            My name is <strong>Shaheer Naeem</strong>, and I am a front-end developer
            concentrating on building fast, modern, user-centric websites. I
            possess skills in languages like HTML, CSS, JavaScript, and
            TypeScript, and further incorporate and deepen the knowledge with
            frameworks react.js, next.js as well as back end technologies such
            as Python, SQL. I have good knowledge of Web designing principles
            and always have a creative insight while Designing responsive
            interfaces with several platforms in hand. I adhere to the
            principles of writing clean code, pursuing the task detailed and aim
            to achieve dynamic web applications without any glitches for the
            end-user. Thank you for reading and I welcome your comments for we
            can share more ways on how you can stay up-to-date with modern
            designs. I am also active on quite a number of social networks
            mostly professionally and try to implement new things. With due
            regard to the foregoing, I am a young specialist who is able to
            conjure only the most basic principles and with the proper design of
            the crowd will fully expand their abilities. Lets combine our ideas
            with technology and design to realize them.
          </p>
          <div className="flex justify-center">
  <Link href="#Contact">
    <button
      className={`inline-flex text-white bg-lightPurple border-0 py-2 px-6 focus:outline-none hover:bg-purple-950 rounded text-lg transform transition-transform duration-300 hover:scale-105 ${font3.className}`}
    >
      Contact
    </button>
  </Link>
</div>

        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 transform transition duration-300 ease-in-out hover:scale-110 hover:translate-x-1 hover:-translate-y-0.5">
  <Image
    className="object-cover object-center rounded-full border-4 border-lightPurple mx-auto w-[26rem] h-[26rem]"
    alt="hero"
    height={600}
    width={700}
    src={MyPic}
  />
</div>

      </div>
    </section>
  );
};

export default About2;