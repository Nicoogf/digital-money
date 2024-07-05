"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import axios , {AxiosError} from "axios"

const LoguinPage = () => {

  const [ errors, setErrors ] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    console.log(email)

    try {
      const res = await axios.post("/api/auth/register",{
        name: formData.get("name"),
        lastName: formData.get("lastname"),
        dni: formData.get("dni"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword")
      })
      console.log(res)
    } catch (error) {
      console.log(error)
      if(error instanceof AxiosError){
        setErrors(error.response?.data.message)
      }
    }

  }
  return (

    <main className="h-screen flex flex-col justify-center items-center absolute w-full z-50">
      
      { errors ?  (
        <div className='bg-red-700 w-full absolute top-0 text-center py-2 '>
            {errors}
        </div>
      ) : ""}
     
      <form  onSubmit={handleSubmit}
      className='bg-gray-900/50 w-[95%] max-w-[550px] flex flex-col items-center justify-center gap-y-2 py-10 rounded-md'> 

        <div className='flex flex-col gap-y-2'>

          <input name = "name" 
                 placeholder='Ingresar Nombre' 
                 className='p-1 text-black rounded-md' 
                 type='text'/> 

          <input name = "lastname" 
          placeholder='Ingresar Apellido' 
          className='p-1 text-black rounded-md' 
          type='text'/>

          <input name = "dni" 
          placeholder='Ingresar Dni' 
          className='p-1 text-black rounded-md' 
          type='number'/>  

          <input name = "email" 
          placeholder='Ingresar Email' 
          className='p-1 text-black rounded-md' 
          type='email'/>

        </div>

        <div className='flex flex-col gap-y-2'>

          <input name="password" 
          placeholder='Ingresar Contraseña'
           className='p-1 text-black rounded-md' 
           type="password" />

          <input name="confirmPassword" 
          placeholder='Confirmar Contraseña' 
          className='p-1 text-black rounded-md' 
          type="password" />

          <input name="phone" 
          placeholder='Ingresar Telefono' 
          className='p-1 text-black rounded-md' 
          type="number" />

          <button type='submit'
          className='bg-lime-500 text-lime-950 p-2 rounded-md'
          > 
          Ingresar 
          </button>

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