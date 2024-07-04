import Link from 'next/link'
import React from 'react'

const LoguinPage = () => {
  return (
    <main className="bg-gray-900 h-screen flex flex-col justify-center items-center">
      <form className='bg-gray-950 w-[95%] max-w-[550px] flex flex-col items-center justify-center gap-y-2 py-10 rounded-md'>        
        <div className='flex flex-col gap-y-2'>
        <input placeholder='Ingresar Nombre' className='p-1 text-black rounded-md' type='text'/> 
        <input placeholder='Ingresar Apellido' className='p-1 text-black rounded-md' type='text'/>
        <input placeholder='Ingresar Dni' className='p-1 text-black rounded-md' type='number'/>  
        <input placeholder='Ingresar Email' className='p-1 text-black rounded-md' type='email'/> 
        </div>

        <div className='flex flex-col gap-y-2'>
        <input placeholder='Ingresar Contraseña' className='p-1 text-black rounded-md' type="password" />
        <input placeholder='Confirmar Contraseña' className='p-1 text-black rounded-md' type="password" />
        <input placeholder='Ingresar Telefono' className='p-1 text-black rounded-md' type="number" />
        <button className='bg-lime-500 text-lime-950 p-2 rounded-md'> Ingresar </button>
        </div>     
     
        <p className='text-sm'>
          ¿ Ya tienes una cuenta ?
          <Link href="/login"> Iniciar Secion </Link>
        </p>
      </form>
    </main>
  )
}

export default LoguinPage