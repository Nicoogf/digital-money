import Link from 'next/link'
import React from 'react'
import { FaRegCopy } from "react-icons/fa6";

const ProfilePage = () => {
  return (
    <div>
    <div className='border border-gray-500 rounded-md mx-auto py-4'>
     <h3>Tus datos</h3>

     <div> 
      
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-x-4 ml-4 '>
        <h6>
          Email
        </h6>
        <h6>
          nicolas@gmail.com
        </h6>
        </div>
       
        <Link href="/" className='mr-4'> Editar </Link>
      </div>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-x-4 ml-4 '>
        <h6>
          Email
        </h6>
        <h6>
          nicolas@gmail.com
        </h6>
        </div>
       
        <Link href="/" className='mr-4'> Editar </Link>
      </div>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-x-4 ml-4 '>
        <h6>
          Email
        </h6>
        <h6>
          nicolas@gmail.com
        </h6>
        </div>
       
        <Link href="/" className='mr-4'> Editar </Link>
      </div>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-x-4 ml-4 '>
        <h6>
          Email
        </h6>
        <h6>
          nicolas@gmail.com
        </h6>
        </div>
       
        <Link href="/" className='mr-4'> Editar </Link>
      </div>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-x-4 ml-4 '>
        <h6>
          Email
        </h6>
        <h6>
          nicolas@gmail.com
        </h6>
        </div>
       
        <Link href="/" className='mr-4'> Editar </Link>
      </div>

   
      
     </div>
    </div>

    <div className='mt-2 flex flex-row gap-x-2 justify-center'>
      <Link href="/dashboard/cards" className='bg-lime-500 text-lime-900 font-semibold p-1 rounded-md'>Gestionar Medios de pago</Link>
    
    </div>

    <div className='mt-10 bg-gray-800 p-4 flex flex-col gap-y-4'>
      <h6> Copia tu cvu o alias pra ingresar o transferir dinero desde otra cuenta </h6>

      <div className='flex flex-row items-center justify-between'>

        <div>
          <p> CVU </p>
          <p> 00000000000000000000 </p>
        </div>

        <FaRegCopy />

       
      </div>
     

      <div className='flex flex-row items-center justify-between'>

        <div>
          <p> Alias </p>
          <p> aliasinexistente123 </p>
        </div>

        <FaRegCopy />

       
      </div>
    </div>
  </div>
  )
}

export default ProfilePage