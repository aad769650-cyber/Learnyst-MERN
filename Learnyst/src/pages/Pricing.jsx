import { Check } from 'lucide-react'
import React from 'react'

const Pricing = () => {
    const Benefits = [
  { icon: <Check size={16}  color='#000'/>, name: "Custom Payment Gateways" },
  { icon: <Check size={16}  color='#000'/>, name: "Youtube Integration" },
  { icon: <Check size={16}  color='#000'/>, name: "SSL Support" },
  { icon: <Check size={16}  color='#000'/>, name: "SEO" },
  { icon: <Check size={16}  color='#000'/>, name: "1:1 Meeting" },
];

  return (
<>


<div className='p-4 text-white text-center '>
    <div className='text-2xl md:text-4xl  font-semibold mb-2 '>
    Pricing
</div>

<div>
    Get started with our platform for free and explore all the core features without any cost
</div>
</div>



<div className='text-white p-6'>
    <div className='border rounded-xl p-6'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>




    <div className='flex flex-col gap-6'>

<div className='text-xl font-semibold'>
    Free
</div>




<div>
    Get all goodies for free, no credit card required.
</div>


<div className='flex justify-center items-center gap-2'>
    Include
     <div className='h-px w-full bg-gray-300 mt-2'></div>
</div>



<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
    {
    Benefits.map((curr,idx)=>{
        return(
            <>
            
            <div key={idx} className='flex gap-3 items-center'>
                <div className='bg-gray-200 shrink-0 rounded-full p-0.5'>
                    {curr.icon}
                </div>
                <div>{curr.name}</div>
            </div>
            </>
        )
    })
    }
</div>
    </div>















  <div className=' border rounded-xl flex justify-center items-center p-2'>
      <div className='flex flex-col gap-4'>


<div className='text-center font-bold text-2xl md:text-4xl'>
    0$ <span className='text-xl text-gray-400'>/mon</span>
</div>


<div className='font-semibold  text-center p-2 rounded bg-gray-200 text-gray-800 hover:bg-white cursor-pointer transition-all duration-200'>
Get Started
</div>

<div className='text-sm'>
    Get started with our free plan, no credit card required.
</div>
    </div>

  </div>


</div>
    </div>
</div>
</>
  )
}

export default Pricing