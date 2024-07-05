

import NavMobile from '@/components/NavMobile'
import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const DashBoard = ({children}) => {
  return (
    <main className="bg-gray-900 h-screen flex flex-col items-center relative ">
      <nav className='w-full h-12 bg-gray-950 flex flex-row items-center justify-between fixed top-0'>
        <h3 className='ml-4'> DH </h3>
        <div className='flex flex-row  gap-x-4 items-center mr-4'>
          <h6> NF </h6>
          <p> Nicolas Falabella </p>
          <IoMdArrowDropdown className='text-white'/>
        </div>
      </nav>


      <nav>

      </nav>     

      <section className='w-full mt-[60px]'>
        {children}
      </section>

     <aside>
            
     </aside>

     <NavMobile />

    </main>
  )
}

export default DashBoard