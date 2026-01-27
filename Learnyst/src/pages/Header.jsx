import { Check, LogIn, LogOut, Menu, X } from 'lucide-react';
import { div, li } from 'motion/react-client'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router';
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { toast } from 'sonner';
import axios from 'axios';
const Header = () => {


  const logOut=async()=>{
    const resp=await axios.get("/user/logout")


    toast.info("Logout Successfully")
    console.log(resp);
    
  }

const [isOpen,setIsOpen]=useState(true)
 useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);


    const Links = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Services", path: "/services" },
  { id: 3, name: "Register", path: "/register" },
  { id: 4, name: "Admin", path: "/admin" },
];


const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: <Facebook color="#1877F2" />, // Facebook Blue
  },


  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin color="#0A66C2" />, // LinkedIn Blue
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: <Github color="#109717" />, // GitHub Black
  },
];


  return (
<motion.div
initial={{translateY:"-100%"}}

animate={{translateY:0}}

transition={{
  duration:.5,ease:"linear"
}}
>

<div className='shadow'>



<div className='bg-gray-100 p-3 '>
   <div className='flex items-center gap-6 md:mx-10 mx-5  '>
    <div className=''>
         <img src="/logo.png" alt="Logo of Learnyst" className='w-7 h-7 shrink-0'/>

    </div>
     <div className='font-semibold'>Learn. Think. Grow</div>
   </div>




</div>


    


<div className=' flex justify-center  items-center p-2 relative'>


  <div className=' w-290 flex justify-center md:justify-between items-center'>
      <div className=' flex justify-between md:justify-center items-center gap-4 w-[85%] md:w-fit'>
         <img src="/MainLogo.svg" alt="Logo text" className='w-30'/>


<ul className='lg:flex justify-center items-center gap-4 hidden '>


   
    {
Links.map((curr)=>{
    return(
        <li key={curr.id} className='hover:text-emerald-300  cursor-pointer text-lg transition-all '>
           <NavLink to={curr.path}     className={({ isActive }) =>
          `font-medium transition-colors
           ${isActive
             ? "text-[#006006]"
             : "text-blue-500 hover:text-[#006006]"}`
        }>{curr.name}</NavLink>
        </li>
    )
})
    }
</ul>


<div className='md:hidden block cursor-pointer ' onClick={()=>setIsOpen(!isOpen)}>
<Menu />











</div>

    </div>


    <div className='hidden md:flex justify-center items-center  gap-4'>
         <button className=" sm:flex p-2 rounded-xl hover:bg-red-50 text-red-600 transition-colors"
              onClick={
()=>{
  
  logOut()
                    
}}>
                <LogOut className="w-5 h-5" />
              </button>
  <NavLink
    to="/login"
    className="flex items-center gap-2 rounded-lg border border-violet-500 px-4 py-2 font-semibold text-violet-600
               hover:bg-violet-500 hover:text-white transition-all duration-300"
  >
    Login
    <LogIn size={16} />
  </NavLink>

  {/* Get Started button */}
  <NavLink
    to="/register"
    className="whitespace-nowrap rounded-lg bg-green-600 px-5 py-2 text-lg font-semibold text-white
               hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
  >
    Get Started
  </NavLink>   </div>
  </div>
</div>








{/* //Sidebar */}



<div>
  <div 
  className={`  z-10 w-70 h-screen shadow bg-slate-100   ${isOpen?"translate-x-full fixed top-0 right-0":"fixed top-0 right-0 translate-x-0"} transition-all duration-300`}
   >

<div className='md:hidden  cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
<div className='flex  justify-end items-end  p-4'>
  <X />
</div>







<div className='bg-white p-4 '>
  <ul className=' flex flex-col justify-evenly  items-start gap-4  h-80'>


   
    {
Links.map((curr)=>{
    return(
        <li key={curr.id} className=' cursor-pointer text-lg transition-all '>
           <NavLink to={curr.path}     className={({ isActive }) =>
          `font-medium transition-colors
           ${isActive
             ? "text-[#006006] "
             : "text-blue-500 hover:text-blue-500"}`
        }>{curr.name}</NavLink>
        </li>
    )
})
    }
</ul>
</div>


<div className='flex justify-center items-center gap-6 p-4'>
  {
    socialLinks.map((curr,idx)=>{
      return (
        <>
        <div className='border border-black p-2 text-2xl flex flex-col gap-4 rounded transition-all duration-200 cursor-pointer'>
          {curr.icon}
        </div>
        </>
      )
    })
  }
</div>



</div>

 <div className='flex flex-col md:hidden justify-center items-center  gap-4'>
         <button className=" sm:flex p-2 rounded-xl hover:bg-red-50 text-red-600 transition-colors"
              onClick={
()=>{
  
  logOut()
                    
}}>
                <LogOut className="w-5 h-5" />
              </button>
<div className='font-semibold hover:bg-violet-500 hover:text-white border p-1 transition-all duration-200 rounded   cursor-pointer'><NavLink to={"/login"} className="flex jsutify-center items-center gap-2">Login <LogIn size={16} className="mt-1"/></NavLink></div>
<div className='whitespace-nowrap bg-[#399f4b] rounded-lg p-2 cursor-pointer text-white hover:bg-green-700 transition-all duration-300 text-xl '><NavLink to={"/register"}>Get Started</NavLink></div>
    </div>
</div>
</div>

</div>

</motion.div>
  )
}

export default Header