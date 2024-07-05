import React from 'react'
import { FaRegCopy } from 'react-icons/fa6'

const DepocitPage = () => {
  return (
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
  )
}

export default DepocitPage