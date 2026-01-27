import { ChartSpline, CircleQuestionMark, CreditCard, DollarSign, Gauge, GraduationCap, Heart, SquareMousePointer } from 'lucide-react';
import React, { useState } from 'react'

const WhyChoose = () => {


    const [enter,setEnter]=useState(null)
    console.log(enter);
    
const WhyChoose = [
  {
    id: 1,
    main: "Built for Educators",
    sub: "Learnyst is beautifully crafted for educators and creators, offering best-in-class tools and effortless workflows to make content creation easy.",
    icon:<GraduationCap />
  },
  {
    id: 2,
    main: "Custom Domains",
    sub: "Learnyst lets you connect your own domain and host courses on a fully branded website you control."
,
    icon:<SquareMousePointer />
  },
  {
    id: 3,
    main: "Purchase Power Parity",
    sub: "Learnyst’s smart purchase power parity feature helps creators maximize profits while selling courses across global markets.",
        icon:<DollarSign />

  },
  {
    id: 4,
    main: "SEO Optimization",
    sub: "Learnyst provides built-in, top-tier SEO support to help your courses rank higher on Google, Bing, and other search engines.",
        icon:<Gauge />

  },
  {
    id: 5,
    main: "Advanced Analytics",
    sub: "Track course performance, student engagement, and revenue metrics with Learnyst’s powerful analytics dashboard.",
      icon:<ChartSpline />
},
  {
    id: 6,
    main: "Multiple Payment Gateways",
    sub: "Learnyst supports over 5 payment gateways and more than 30 currencies, enabling seamless global transactions.",
     icon:<CreditCard />
 },
  {
    id: 7,
    main: "Reliable Customer Support",
    sub: "Learnyst’s support team is available almost 100% of the time, helping you launch and deliver content without friction.",
      icon:<CircleQuestionMark />
},
  {
    id: 8,
    main: "And Much More",
    sub: "Learnyst offers many more features designed to help you grow, scale, and succeed as a course creator.",
      icon:<Heart />
}
];


  return (
  <>
  <div className='bg-[#131D35] p-2' >

<div className='text-center text-2xl md:text-4xl font-semibold text-white p-8'>
Packed with thousands of features
</div>

      <div className=' grid grid-cols-1 md:grid-cols-4  text-white px-4 border-t border-b border-dashed'>
        

        
   {
    WhyChoose.map((curr,idx)=>{
        return (
            <>
            
             <div className='border border-gray-800 flex justify-center items-start flex-col relative p-6 gap-4' key={idx}
             
             
             onMouseEnter={()=>setEnter(curr.id)}
             onMouseLeave={()=>setEnter(null)}
             
             >
<div>{curr.icon}</div>
  <div className={`absolute left-0  w-1 h-5  rounded-r-2xl ${enter==curr.id?"bg-red-400":"bg-slate-600"} transition-all duration-150`}></div>   
            <div  className={`font-semibold text-xl ${enter==curr.id?"ml-2":""} transition-all duration-150 text-nowrap`}>{curr.main}</div>
            <div>{curr.sub}</div>

        </div>
            </>
        )
    })
   }

       


        
        </div>
  </div>
  </>
  )
}

export default WhyChoose