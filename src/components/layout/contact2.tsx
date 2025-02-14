import React from 'react'
import { Yatra_One } from 'next/font/google';
import {Audiowide} from 'next/font/google';



const font= Yatra_One({
    subsets: ['latin'],
    weight: "400"
  });

  const font2= Audiowide({
    subsets: ['latin'],
    weight: "400"
})


const Contact2 = () => {
  return (
    <div>
<section className="text-gray-400 bg-gray-900 body-font relative">
  <div className="absolute inset-0 bg-transparent">
    <iframe
      title="map"
      width="100%"
      height="100%"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      scrolling="no"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d870.4881172701408!2d67.03285996730715!3d24.911894543759548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f188947e6ad%3A0x5cca6c8331a7f799!2zRmFtaWx5IHF1YXRlcnMuINmB24zZhdmE24wg2qnZiNin2LHZudix2LI!5e1!3m2!1sen!2s!4v1728302071756!5m2!1sen!2s"
      style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
    />
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-gradient-to-b from-darkPurple via-mediumPurple to-lightPurple shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 className={`text-white text-2xl mb-1 font-medium title-font ${font2.className}`}>
        Contact Us
      </h2>
      <p className={`leading-relaxed mb-5 ${font.className}`}>
For Any Kind Of Query Contact Us:
      </p>
      <form action="https://formspree.io/f/mqakbkyp"
  method="POST">
      <div className="relative mb-4">
        
        <label htmlFor="email" className={`leading-7 text-sm text-gray-400 ${font.className}`}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className={`leading-7 text-sm text-gray-400 ${font.className} `}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        required/>
      </div>
     

      <button className={`text-white bg-lightPurple border-0 py-2 px-6 focus:outline-none hover:bg-darkPurple rounded text-lg transform transition-transform duration-300 hover:scale-105 ${font2.className} `}>
        Submit
      </button>
      </form>
     
    </div>
  </div>
</section>


    </div>
  )
}

export default Contact2