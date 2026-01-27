import React from 'react'

const FeatureCards = () => {


    const features = [
  {
    mainHead: "Diverse Content & Format Support",
    subHead: "Upload SCORM, TinCan, videos, PDFs — or deliver learning in the format that best fits your content and audience.",
    imgSrc: "/feature1.avif" // example image path
  },
  {
    mainHead: "Branded Experiences, Your Way",
    subHead: "Design your own portal just how you want. Customise every touchpoint to reflect your brand — no code required.",
    imgSrc: "/feature2.avif" 
  },
  {
    mainHead: "Host Live Sessions Without External Tools",
    subHead: "Host live sessions and cohorts directly inside your academy with built-in scheduling, reminders, and attendance tracking.",
       imgSrc: "/feature3.avif" 
  },
  {
    mainHead: "Certifications & Skill Validation",
    subHead: "Automate completion-based certificates to ensure regulatory compliance and track progress with ease into the real industry.",
        imgSrc: "/feature4.avif" 
  },
  {
    mainHead: "Go Live Quick with Onboarding Support",
    subHead: "Our team assists with platform setup, data migration, and tailored onboarding so you can go live faster and happier.",
        imgSrc: "/feature5.avif" 
  },
  {
    mainHead: "Gamify Learning to Drive Participation",
    subHead: "Boost engagement through badges, challenges, and achievement tracking that make learning rewarding and addictive.",
        imgSrc: "/feature6.avif" 
  }
];




  return (
<>







<ul className=' grid grid-cols-1 md:grid-cols-2  text-white p-8 md:gap-20'>
    {features.map((curr,idx)=>{
        return(
            
    <div key={idx}>





<div >




<div className=' p-8 rounded-2xl cursor-pointer hover:rotate-3 transition-all duration-300 bg-linear-to-b from-slate-950 to-[#131D38] flex flex-col justify-center  gap-4'>
    

    <div className='text-3xl font-semibold'>
    {curr.mainHead}
    </div>

<div className='text-xl'>
   {curr.subHead}
</div>


    <img src={curr.imgSrc} alt="Features image" className='  bg-cover' />
    
    </div> 














    </div> 



</div>
        )
    })}
</ul>


</>

    // </div>
  )
}

export default FeatureCards