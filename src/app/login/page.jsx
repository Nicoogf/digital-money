import Link from 'next/link'
import React from 'react'

const LoguinPage = () => {
  return (
    <main className="bg-gray-900 h-screen flex flex-col justify-center items-center">
      <form className='bg-gray-950 w-[95%] max-w-[550px] flex flex-col items-center justify-center gap-y-2 py-10 rounded-md'>        
        <input placeholder='Ingresar Email' className='p-1 text-black rounded-md' type='email'/> 
        <input placeholder='Ingresar Contraseñña' className='p-1 text-black rounded-md' type="password" />
        <button className='bg-lime-500 text-lime-950 p-2 rounded-md'> Ingresar </button>
        <p className='text-sm'>
          ¿Olvidaste tu contraseña?
          <Link href="/"> Ingresa aca </Link>
        </p>
        <p className='text-sm'>
         ¿ No tienes una cuenta ? 
          <Link href="/register"> Registrate </Link>
        </p>
      </form>
    </main>
  )
}

export default LoguinPage