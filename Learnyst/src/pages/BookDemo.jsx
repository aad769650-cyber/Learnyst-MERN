
import React from 'react'
import { NavLink } from 'react-router'

const BookDemo = () => {
  return (
  <div className='py-8'>
  
<div className='flex justify-center items-center flex-col text-gray-300 gap-4  p-4 bg-linear-to-r from-[#131d38]  to-[#131d38] via-black
' >
       <div className='text-2xl md:text-4xl  font-semibold mb-2 '>
Ready to signup and join the waitlist?
</div>

<div>

Get instant access to our state of the art project and join the waitlist.
</div>

<div className='p-2 border hover:text-gray-900 hover:bg-white transition-all duration-300 text-white font-semibold rounded-md cursor-pointer'>
   <NavLink to={"register"}> Book Demo</NavLink>
</div>
</div>


</div>
  )
}

export default BookDemo