import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../../public/logo-off.png"

const LoguinPage = () => {
  return (
    <main className="h-[100vh] flex flex-col justify-center items-center absolute w-full z-50">
      <nav className='fixed top-0 bg-lime-500 w-full h-12 flex items-center z-50'> 
        <Image src={logo} alt='logo' width={50} height={50} className='ml-4'/>
      </nav>
      <form className='bg-gray-950 w-[95%] max-w-[550px] flex flex-col items-center justify-center gap-y-2 py-10 rounded-xl'>

        <h3 className='text-2xl font-semibold border-b-4 border-lime-500/50 pb-2'> Hola ¡Ingresa tu E-mail! </h3> 

        <input placeholder='Ingresar Email' className='mt-2 px-2 py-3 text-white font-semibold rounded-md bg-gray-700 placeholder:text-sm w-[230px]  outline-lime-500' type='email'/> 

        <input placeholder='Ingresar Contraseñña' className='px-2 py-3 text-white font-semibold rounded-md bg-gray-700 placeholder:text-sm w-[230px] mb-2' type="password" />

        <button className='bg-lime-500 text-lime-950 p-2 rounded-md w-[230px] '> 
          Ingresar 
          </button>

        <p className='text-sm mt-4 -mb-2'>
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