import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion";
const TypeWritter = () => {
     const Type=["React js",2000,"Node js",2000,"Next js",2000,"Express js",2000,"Mongodb",2000,"My SQL",3000]
  
  return (
   <div className="font-semibold  flex flex-col justify-center items-center  pl-7">

    

 <motion.div
 
 initial={{translateY:"100%",opacity:0}}
 animate={{translateY:0,opacity:1}}
 transition={{duration:.5,ease:"linear"}}
 
 className='text-white text-2xl md:text-4xl md:text-[42px] font-bold text-center'>
    Learn to create Fast, Responsive Websites using 
</motion.div>


<div className='flex justify-center items-center p-4 text-4xl md:text-5xl bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 
                     bg-clip-text text-transparent font-bold'>
     <TypeAnimation
  sequence={Type}

  speed={-5}
 repeat={Infinity}
  cursor={true}

       style={{
    //  color:"#FF6B6B",
     marginLeft:"5px",
     fontSize:"800"
      }}
      wrapper="span"
  ></TypeAnimation>
</div>

  <br />


</div>
  )
}

export default TypeWritter