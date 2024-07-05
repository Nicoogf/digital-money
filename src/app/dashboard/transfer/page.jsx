import Link from 'next/link';
import React from 'react'
import { IoIosSend } from "react-icons/io";

const Transferencias = () => {
  return (
    <section className='flex flex-col gap-y-2'>
      <section className='bg-gray-950 flex flex-col gap-y-2'>
        <Link href="/dashboard/transfer/deposit" className='flex flex-row gap-x-4 p-4'>
          <IoIosSend />
          <h6> Transferencia Bancaria </h6>
        </Link>

      </section>

      <section className='bg-gray-950'>
      <Link href="/dashboard/transfer/select-card" className='flex flex-row gap-x-4 p-4'>
          <IoIosSend />
          <h6> Selecionar Tarjeta </h6>
        </Link>

      </section>

    </section>
  )
}

export default Transferencias