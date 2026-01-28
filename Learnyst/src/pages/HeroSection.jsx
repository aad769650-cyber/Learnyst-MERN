import React from 'react'

import { motion } from "framer-motion";
import { div } from "motion/react-client";
import TypeWritter from '../functions/TypeWritter';
import {NavLink} from "react-router"
const HeroSection = () => {

     
  return (
    <section    className='bg-linear-to-r from-[#131D31] via-black to-indigo-900" inset-0 bg-cover bg-center ' >
    <div className='flex justify-center items-center  flex-col gap-4 h-[90vh] text-white'>


<div>
    <TypeWritter></TypeWritter>
</div>


        <motion.div 
        
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={
            {
                 ease: "linear",
          duration: 1,
            }
        }
        
        className='font-semibold text-white p-8 '>
            A single, powerful LMS built to educate, engage and enable every audience in your business ecosystem.
        </motion.div>

        <div className='flex gap-4'>
            <button className='bg-blue-600 text-white p-2 rounded-md cursor-pointer hover:bg-blue-700 transition-all duration-300 text-xl'><NavLink to={"/register"}>Talk to us</NavLink></button>



            <button className='border border-gray-500   p-2 rounded-md  border-t-indigo-600 border-y-cyan-500 hover:bg-red-900 hover transition-all duration-300   cursor-pointer text-xl'> <NavLink to={"/register"}>Book Demo</NavLink></button>
        </div>


        <div>
            Trusted by the best companies in the world.
        </div>

  







     
    </div>
    </section>
  )
}

export default HeroSection