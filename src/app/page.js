import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-900 h-screen flex flex-col justify-center items-center">
      <h1> Digital Money</h1>
      <div className="mt-10 flex flex-row gap-x-4">
        <Link href="/login" className="bg-lime-500 text-lime-950 p-3 rounded-md font-semibold"> Ingresar </Link>
        <Link href="/register" className="bg-lime-500 text-lime-950 p-3 rounded-md font-semibold"> Registrarte </Link>
      </div>
    </main>
  );
}
