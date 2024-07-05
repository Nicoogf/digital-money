import React from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

const TransactionsPage = () => {
  return (
    <section>
      <div className='flex flex-row w-[95%] mx-auto'>
        <input className='w-[70%]'/>
        <button className='bg-lime-500 text-lime-900 w-[30%]'> Filtrar </button> 
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
     
        </section>
        
      </div>
    </section>
  )
}

export default TransactionsPage