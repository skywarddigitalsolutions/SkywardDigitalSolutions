import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import FotoCerebro from "../../public/manocerebro.webp";
import FondoImage from "../../public/fondo.webp";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const words = `Llevá tu marca al siguiente nivel`;

  return (
    <div
      className="min-h-screen relative bg-black grid justify-center items-center mt-20 lg:mt-0 grid-cols-1 lg:grid-cols-2 mb-auto"
      id="Inicio"
    >
      {/* Contenedor para la imagen de fondo */}
      <Image
        src={FondoImage}
        alt="Fondo"
        quality={100}
        priority
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 grid justify-center sm:mt-20 lg:mt-10 sm:mx-10">
        <h1 className="text-white text-center lg:text-left mt-10 text-5xl lg:text-8xl font-extrabold mb-1">
          {" "}
          Skyward{" "}
        </h1>
        <h2 className="text-secundario text-center lg:text-left text-5xl lg:text-8xl font-extrabold mb-5">
          {" "}
          Digital Solutions
        </h2>
        <TextGenerateEffect
          words={words}
          className="text-center text-white lg:text-left text-xl lg:text-1xl font-bold"
        />
        <div
          id="button"
          className="text-center text-xs xl:text-xl lg:text-left flex justify-center xl:justify-start gap-5"
        >
          <Link
            href="https://wa.me/+5491133495502?text=Hola%20,%20quiero%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-10 px-4 lg:px-12 py-4 rounded-xl bg-secundario/50 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[white] hover:text-secundario transition-colors duration-200">
              Contactános
            </button>
          </Link>
          <Link href="#Proyectos">
            <button className="mt-10 px-4 lg:px-12 py-4 rounded-xl bg-white font-bold text-secundario tracking-widest uppercase transform hover:scale-105 hover:bg-[white] hover:text-secundario transition-colors duration-200">
              Ver Proyectos
            </button>
          </Link>
        </div>
      </div>

      <div className="relative z-10 lg:mt-0 flex justify-center items-center">
        <Image
          src={FotoCerebro}
          alt="imagen cerebro"
          className="animate-float"
          width={20}
          height={20}
          priority
          layout="responsive"
        />
      </div>
    </div>
  );
}
