import { Settings } from 'lucide-react'
import { div } from 'motion/react-client'
import React from 'react'
import FeatureCards from './FeatureCards'

const Features = () => {
  return (
   <div className='bg-[#131D38]'>






<div className='flex flex-col justify-center items-center gap-4 text-white p-8'>

    <div className='bg-linear-to-l from-emerald-300 to-indigo-400 p-2 font-semibold rounded-2xl flex gap-1 justify-center items-center'>
    <Settings size={20}/>Feature
</div>



<div className='text-3xl md:text-4xl font-bold'>
   Master skills at your own pace with expert guidance.
</div>


<div className='border-l-4 border-b-cyan-600 p-2 rounded'>
    Upload courses, videos, quizzes, and assignments with ease. Manage content, schedules, and learner progress—all from a single dashboard.
</div>
</div>







<FeatureCards></FeatureCards>






   </div>
  )
}

export default Features