import Link from 'next/link';
import React from 'react'
import { BiSolidEdit } from "react-icons/bi";
import { LuRefreshCcw } from "react-icons/lu";
const CheckDataPage = () => {
    return (
        <section>
            <section className='flex flex-col bg-slate-700'>
                <h6> Revisa que esta todo bien </h6>
                <div className='flex flex-row items-center'>
                    <div>
                        <h6> Vas a transferir</h6>
                        <h6> $300 </h6>
                    </div>
                    <Link href="/dashboard/transfer/select-card/amount">
                        <BiSolidEdit />
                    </Link>


                </div>
                <div className='flex flex-col'>
                    <h6> Para </h6>
                    <h6> Cuenta Propia </h6>
                    <h6> Targeta Visa Debito </h6>
                    <h6> **** **** **** 2628 </h6>
                </div>
                <Link href="/" className='bg-lime-500 flex w-[350px] ml-auto justify-center p-3 rounded-lg'> Continuar </Link>

            </section>

            <section className='border-2  border-slate-500 w-[90%] rounded-md mx-auto py-10'> 
             <h6 className='text-center'>
                 Apretar continuar para ejecutar accion 
            </h6>
            <LuRefreshCcw className='block mx-auto'/>
            </section>

            <div className='flex flex-row gap-x-4 justify-end'>
                <Link href="/dashboard" className='bg-lime-500 text-lime-900 p-2 rounded-md'> Ir a Inicio </Link>
                <Link href="/dashboard/activity" className='bg-lime-500 text-lime-900 p-2 rounded-md'> Ver Movimietos </Link>
            </div>
        </section>
    )
}

export default CheckDataPage