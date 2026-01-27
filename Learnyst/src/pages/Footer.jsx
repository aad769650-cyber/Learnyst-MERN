import React from 'react'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { footer } from 'motion/react-client';

const Footer = () => {
const footerLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Signup",
    href: "/signup",
  },

  {
    label: "Register",
    href: "/register",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];


const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: <Facebook color="#1877F2" />, // Facebook Blue
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter color="#1DA1F2" />, // Twitter Blue
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram color="#E4405F" />, // Instagram Pink/Red
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


const footerContactInfo =  [
    {
      label: "Address",
      value: "123 Business Street, New York, NY 10001",
    },
    {
      label: "Phone",
      value: "+1 (234) 567-8900",
    },
    {
      label: "Email",
      value: "support@yourcompany.com",
    },
    {
      label: "Hours",
      value: "Mon – Fri: 9:00 AM – 6:00 PM",
    },
  ]



  return (
    <div className=' text-white'>


<div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-800'>
  <div className=' '>
  {
    footerLinks.map((curr,idx)=>{
      return (
        <>
        <div className='hover:text-blue-600 text-xl flex flex-col gap-4 rounded transition-all duration-200 cursor-pointer'>
          {curr.label}
        </div>
        </>
      )
    })
  }
</div>





<div className='flex justify-center items-center gap-6'>
  {
    socialLinks.map((curr,idx)=>{
      return (
        <>
        <div className='hover:bg-white p-2 text-2xl flex flex-col gap-4 rounded transition-all duration-200 cursor-pointer'>
          {curr.icon}
        </div>
        </>
      )
    })
  }
</div>


<div className=''>
  {
    footerContactInfo.map((curr,idx)=>{
      return (
        <>
        <div>
         <span className='font-semibold text-lg'> {curr.label}</span>:{curr.value}
        </div>
        </>
      )
    })
  }
</div>


</div>







<div className='bg-slate-800 px-6 py-2 flex justify-between items-center' >
  <div>
      <img src="/MainLogo.svg" alt="Logo text" className='w-30'/>

  </div>

  <div className=''>
    Made WithLove By <span className='text-violet-600'>Mahar</span>
  </div>
</div>


<hr />

<div className='bg-slate-800 flex justify-center items-center p-2 md:text-xl text-slate-300'>Copyright © 2025 Buildyst Technologies Pvt. Ltd.</div>

    </div>
  )
}

export default Footer