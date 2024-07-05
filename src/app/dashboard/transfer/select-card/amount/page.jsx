import Link from 'next/link'
import React from 'react'

const AmountPage = () => {
  return (
    <section>
    <section className='bg-gray-700 flex flex-col gap-y-4 p-4'>
      <h6> ¿Cuanto queres ingresar a la cuenta ? </h6>
      <form className='flex flex-col '>  
         <input type="number" className='w-[60%]'/>
         <Link href="/dashboard/transfer/select-card/amount/check" className='block w-[350px] ml-auto bg-lime-500 p-2 rounded-md'> Continuar </Link>   
      </form>
    
    </section>   
   
  </section>
  )
}

export default AmountPage