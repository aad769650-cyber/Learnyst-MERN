import React from 'react'
import { motion } from "framer-motion";
import Slider from '../functions/Slider';
import { ArrowRight } from 'lucide-react';

const SliderSection = () => {
  const SideSection = [
  {
    id: 1,
    title: "Communicate Smarter with In-App Messaging",
    description:
      "Announce updates, send nudges, and trigger reminders through built-in newsfeeds, alerts, and email."
  },
  {
    id: 2,
    title: "Train Anywhere with Mobile-First Access"
  },
  {
    id: 3,
    title: "Build a Learning Culture with Communities"
  },
  {
    id: 4,
    title: "Validate Knowledge with Built-in Assessments"
  },
  {
    id: 5,
    title: "Prove Training ROI with Actionable Analytics"
  },
  {
    id: 6,
    title: "Deliver the Right Content with Learning Paths"
  }
];

  return (
    <div className='shadow p-4 bg-[#131D38]'>
         <div>
  <div className='text-center text-2xl md:text-4xl font-semibold text-white p-8'>
Keep Training Relevant, Engaging & Always On
</div>
<div className='grid grid-cols-1 md:grid-cols-2 text-white '>


<div className='shrink-0 flex flex-col gap-4 justify-center items-center p-4 '>


{
  SideSection.map((curr)=>{
    return(
      <>
    
      <div key={curr.id} className={`border flex flex-col justify-center p-4 md:w-100 border-slate-500 cursor-pointer hover:border-emerald-200  ${curr.id==1?"border-2":"border"}`}>


        <div className='text-xl'>{curr.title}</div>
<div>{
curr.id==1&& <p>{curr.description}</p>}


</div>
      </div>
      
      </>
    )
  })
}

</div>



    <div className="flex justify-center items-center p-4">







    
    <motion.img src="/Main.jpg" alt="HeroImage" 
    initial={{width:"340px"}}
    whileInView={{width:"600px"} }
transition={
  {
    duration:1,
    ease:"linear"
  }
}    
    
    className="rounded "
    
    />
  </div>
</div>
    

<Slider></Slider>
 </div>
    </div>
  )
}

export default SliderSection