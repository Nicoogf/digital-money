import Link from 'next/link'
import React from 'react'

const NavMobile = () => {
  return (
    <nav className='w-full bg-gray-950 fixed bottom-0 h-14 flex flex-row items-center gap-x-4 justify-around'> 
    <div>
      <Link href="/dashboard"> Inicio </Link>
    </div>

    <div>
    <Link href="/dashboard/transfer"> Transferencias </Link>
    </div>

    <div>
    <Link href="/dashboard/activity"> Movimientos </Link>
    </div>

    <div>
    <Link href="/dashboard/payments"> Pagos </Link>
    </div>

    <div>
    <Link href="/dashboard/profile"> Perfil </Link>
    </div>
    
    </nav>
  )
}

export default NavMobile