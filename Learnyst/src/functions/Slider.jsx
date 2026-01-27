import React, { useRef } from 'react'
import { motion } from "framer-motion";
import { div } from "motion/react-client";
 const Slider = () => {
     const containerRef = useRef(null);

  return (
   <div className='flex justify-center items-center'>
     <div
      style={{
        // width:"100%",
        
        overflow: "hidden",
    
        padding: "20px 0"
      }}
      className='w-80 lg:w-230  rounded'
    >
      <motion.div
        ref={containerRef}
        style={{
          display: "flex",
          width: "max-content"
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity
        }}
       
      >
       
        <SliderItems />

    
        <SliderItems />
      </motion.div>
    </div>
   </div>
  )
}

export default Slider











const SliderItems=()=> {

const logos=[
    {
        src:"/logo1.avif"
    },
    {
        src:"/logo2.avif"
    },
    {
        src:"/logo3.avif"
    },
    {
        src:"/logo4.avif"
    },
    {
        src:"/logo5.avif"
    },
 
]


  return (
    <div style={{ display: "flex", gap: "40px", paddingRight: "40px" }}>
      {logos.map((item, i) => (
        <div
          key={i}
          style={{
           
            height: 80,
         
          
          }}

          className='border rounded-lg  border-white lg:w-50 w-50  shrink-0 flex justify-center items-center'
        >
      <img src={item.src} alt="Logos" />
        </div>
      ))}
    </div>
  );
}
