import Link from 'next/link'
import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { CiCreditCard1 } from 'react-icons/ci'

const SelectCard = () => {
  return (
    <section>
      <section className='bg-gray-700 flex flex-col gap-y-4'>
        <h6> Seleccionar Tarjeta </h6>
        <article className='flex flex-row justify-between bg-gray-800 py-2 border-b-2 border-gray-400'>
          <div className='flex flex-row items-center gap-x-2'>
            <CiCreditCard1 />
            <p> Terminada 2628</p>
          </div>
          <input type='checkbox' />
        </article>

        <article className='flex flex-row justify-between bg-gray-800 py-2 border-b-2 border-gray-400'>
          <div className='flex flex-row items-center gap-x-2'>
            <CiCreditCard1 />
            <p> Terminada 2628</p>
          </div>
          <input type='checkbox' />
        </article>

        <article className='flex flex-row justify-between bg-gray-800 py-2 border-b-2 border-gray-400'>
          <div className='flex flex-row items-center gap-x-2'>
            <CiCreditCard1 />
            <p> Terminada 2628</p>
          </div>
          <input type='checkbox' />
        </article>

        <article className='flex flex-row justify-between bg-gray-800 py-2 border-b-2 border-gray-400'>
          <div className='flex flex-row items-center gap-x-2'>
            <CiCreditCard1 />
            <p> Terminada 2628</p>
          </div>
          <input type='checkbox' />
        </article>
      </section>

      <div className='flex flex-row justify-between'>
      <Link href="/dashboard/cards/add-card"> Agregar Tarjeta Nueva </Link>
      <Link className='bg-lime-500 text-lime-900 p-2 rounded-md flex ' href="/dashboard/transfer/select-card/amount"> Continuar </Link>
      </div>
     
    </section>
  )
}

export default SelectCard