

import Link from "next/link";
import DMH from "../../public/DMH.svg"
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full absolute z-50 h-[100vh] flex flex-col items-center justify-center">
      <section className="bg-black/30 px-6 py-12 rounded-md flex flex-col items-center w-[90%] max-w-[678px] ">
        <Image src={DMH} height={50} width={50} alt={"Logo de la aplicacion"} className="w-[70%] animate-pulse mb-4"/>
        <p className="border-t-4 border-lime-500 pt-2 text-center text-sm"> De ahora en adelante, haces mas con tu dinero </p>
        <p className="text-center text-sm"> Tu nueva billetera virtual </p>
        <div className="mt-6 flex flex-row gap-x-4">
          <Link href="/login" className="bg-lime-500 text-lime-950 px-3 py-2 rounded-md font-semibold text-sm w-[100px] text-center"> Ingresar </Link>
          <Link href="/register" className="bg-lime-500 text-lime-950 px-3 py-2 rounded-md font-semibold text-sm  w-[100px] text-center"> Registrarte </Link>
        </div>
      </section>    
      <footer className="absolute z-50 w-full bg-gray-800 text-lime-500 bottom-0 h-12 flex items-center "> 
          <h6 className="ml-4 text-sm">Digital Money App 2024</h6>
        </footer>
    </main>
  );
}
