import Link from 'next/link'
import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";

const CardsPage = () => {
  return (
    <section>

    <section className='bg-gray-950 py-6'>
      <h6> Agrega tu tarjeta de debito o credito </h6>
      <Link href="/dashboard/cards/add-card" className='w-full bg-slate-700 flex flex-row items-center gap-x-4'> 
      <IoAddCircleOutline />
      <span> Nueva tarjeta </span>
      </Link>
    </section>

    <section>
      <h6> Tus Tarjetas</h6>
      <section>
        <article className='flex flex-row justify-between bg-gray-700 py-2'>
          <div className='flex flex-row items-center gap-x-2'>
          <CiCreditCard1 />
          <p> Terminada 2628</p>
          </div>
          <Link href="/" className='flex flex-row items-center gap-x-2'>
            Eliminar 
            <AiTwotoneDelete />
          </Link>
        </article>
        <article className='flex flex-row justify-between bg-gray-700 py-2'>
          <div className='flex flex-row items-center gap-x-2'>
          <CiCreditCard1 />
          <p> Terminada 2628</p>
          </div>
          <Link href="/" className='flex flex-row items-center gap-x-2'>
            Eliminar 
            <AiTwotoneDelete />
          </Link>
        </article>
        <article className='flex flex-row justify-between bg-gray-700 py-2'>
          <div className='flex flex-row items-center gap-x-2'>
          <CiCreditCard1 />
          <p> Terminada 2628</p>
          </div>
          <Link href="/" className='flex flex-row items-center gap-x-2'>
            Eliminar 
            <AiTwotoneDelete />
          </Link>
        </article>
        <article className='flex flex-row justify-between bg-gray-700 py-2'>
          <div className='flex flex-row items-center gap-x-2'>
          <CiCreditCard1 />
          <p> Terminada 2628</p>
          </div>
          <Link href="/" className='flex flex-row items-center gap-x-2'>
            Eliminar 
            <AiTwotoneDelete />
          </Link>
        </article>
        <article className='flex flex-row justify-between bg-gray-700 py-2'>
          <div className='flex flex-row items-center gap-x-2'>
          <CiCreditCard1 />
          <p> Terminada 2628</p>
          </div>
          <Link href="/" className='flex flex-row items-center gap-x-2'>
            Eliminar 
            <AiTwotoneDelete />
          </Link>
        </article>
      </section>

    </section>
    </section>
  )
}

export default CardsPage