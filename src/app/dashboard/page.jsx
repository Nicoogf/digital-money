import Link from 'next/link'
import React from 'react'
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Layout = () => {
  return (

    <div>
      <div className='border border-gray-500 rounded-md mx-auto py-4'>
        <p> Dinero Disponible </p>
        <p> $200 </p>
        <p> Ver tarjetas</p>
        <p> Ver CBU </p>
      </div>

      <div className='mt-2 flex flex-row gap-x-2 justify-center'>
        <Link href="/" className='bg-lime-500 text-lime-900 font-semibold p-1 rounded-md'>Cargar Dinero</Link>
        <Link href="/" className='bg-lime-500 text-lime-900 font-semibold p-1 rounded-md'>Pagar Servicio</Link>
      </div>

      <div className='mt-10'>
        <h4 className='border-b-2 border-gray-500'> Tu actividad </h4>
        <section className='flex flex-col gap-y-4'>

          <article className='flex flex-row items-center justify-between '>
            <div className='flex flex-row ml-6 items-center gap-x-2'>
            <RiMoneyDollarCircleLine />
            <h6> Transferiste a Juan Gomez</h6>
            </div>
            
             <div className='mr-6'>
              <p> $ 1200</p>
              <p> Sabado  06 / 07 / 2024 </p>
             </div>
          </article>

          <article className='flex flex-row items-center justify-between '>
            <div className='flex flex-row ml-6 items-center gap-x-2'>
            <RiMoneyDollarCircleLine />
            <h6> Transferiste a Juan Gomez</h6>
            </div>
            
             <div className='mr-6'>
              <p> $ 1200</p>
              <p> Sabado  06 / 07 / 2024 </p>
             </div>
          </article>

          <article className='flex flex-row items-center justify-between '>
            <div className='flex flex-row ml-6 items-center gap-x-2'>
            <RiMoneyDollarCircleLine />
            <h6> Transferiste a Juan Gomez</h6>
            </div>
            
             <div className='mr-6'>
              <p> $ 1200</p>
              <p> Sabado  06 / 07 / 2024 </p>
             </div>
          </article>

          <article className='flex flex-row items-center justify-between '>
            <div className='flex flex-row ml-6 items-center gap-x-2'>
            <RiMoneyDollarCircleLine />
            <h6> Transferiste a Juan Gomez</h6>
            </div>
            
             <div className='mr-6'>
              <p> $ 1200</p>
              <p> Sabado  06 / 07 / 2024 </p>
             </div>
          </article>

          <article className='flex flex-row items-center justify-between '>
            <div className='flex flex-row ml-6 items-center gap-x-2'>
            <RiMoneyDollarCircleLine />
            <h6> Transferiste a Juan Gomez</h6>
            </div>
            
             <div className='mr-6'>
              <p> $ 1200</p>
              <p> Sabado  06 / 07 / 2024 </p>
             </div>
          </article>
          
          <Link href="/" className='mt-6 ml-6'>
          Ver Actividad completa
          </Link>
        </section>
      </div>
    </div>

  )
}

export default Layout
