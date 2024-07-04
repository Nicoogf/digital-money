

import NavMobile from '@/components/NavMobile'
import React from 'react'

const DashBoard = ({children}) => {
  return (
    <main className="bg-gray-900 h-screen flex flex-col justify-center items-center relative">
      <NavMobile />

      <section>
        {children}
      </section>

     <aside>
            
      </aside>

    </main>
  )
}

export default DashBoard