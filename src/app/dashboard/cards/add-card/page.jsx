import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section> 
      <section>
        <div className='w-[400px]  h-[200px] mx-auto bg-blue-500 rounded-md flex flex-col justify-end items-center relative '>
        
        <div className='flex flex-row gap-x-3 justify-center bg-blue-700 py-10'> 
        <p> 2628 </p>
        <p> 2628 </p>
        <p> 2628 </p>
        <p> 2628 </p>
        </div>
        
        <div className='flex flex-row justify-between bg-blue-400 py-4 gap-x-24'>
        <h6> Nombre del titular </h6>
        <h6> Fecha de Vencimiento </h6>
        </div>
        
        <div className='absolute top-1 right-1'>
          <p> Codigo de seguridad </p>
        </div>
        
       
        </div>

        <section className='mt-10 w-[90%] mx-auto max-w-[720px] bg-slate-600 flex flex-col gap-1'>
           <form>          
            <div className='flex flex-col gap-1 mb-1'>
              <input placeholder='Ingresar numero de la tarjeta' className='p-1 rounded-md'/>
              <input placeholder='Fecha de vencimiento' className='p-1 rounded-md'/>
            </div>

            <div className='flex flex-col gap-1'>
            <input placeholder='Ingresar Nombre y Apellido' className='p-1 rounded-md'/>
            <input placeholder='Ingresar Codigo' className='p-1 rounded-md'/>
            </div>
            <Link href="/dashboard/cards" className='bg-lime-500 text-lime-900 p-2 rounded-md mt-5 block w-[150px] ml-auto'> Continuar </Link>
            </form>
        </section>
      </section>
    </section>
  )
}

export default page