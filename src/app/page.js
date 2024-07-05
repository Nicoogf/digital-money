

import Link from "next/link";
import Logo from "../../public/logoverde.png"
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full absolute z-50 h-[100vh] flex flex-col items-center justify-center">
      <section className="bg-black/30 p-6 rounded-md flex flex-col items-center w-[90%] max-w-[720px] ">
        <Image src={Logo} height={50} width={50} alt={"Logo de la aplicacion"} className="w-[80%]  animate-pulse"/>
        <p className="border-t border-lime-500 pt-2"> De ahora en adelante, haces mas con tu dinero </p>
        <p> Tu nueva billetera virtual </p>
        <div className="mt-6 flex flex-row gap-x-4">
          <Link href="/login" className="bg-lime-500 text-lime-950 px-3 py-2 rounded-md font-semibold text-sm w-[100px] text-center"> Ingresar </Link>
          <Link href="/register" className="bg-lime-500 text-lime-950 px-3 py-2 rounded-md font-semibold text-sm  w-[100px] text-center"> Registrarte </Link>
        </div>
      </section>    
    </main>
  );
}
