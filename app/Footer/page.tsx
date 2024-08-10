import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

import Logo from "../../public/logosds.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primario backdrop-filter backdrop-blur-md bg-opacity-50 text-white py-16 relative overflow-hidden xl:mx-24 xl:mb-2 rounded-2xl  ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* Logo y Descripción */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={150}
            className="my-10"
          />
          <p className="text-gray-300 lg:max-w-sm mx-3">
            SkyWard Digital Solutions es tu socio confiable para llevar tu
            negocio al siguiente nivel. Contáctanos para más información.
          </p>
        </div>

        {/* Navegación */}
        <nav className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold mb-6">Navegación</h3>
          <ul className="space-y-4">
            <li>
              <a href="/#" className="hover:text-gray-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="/#Servicios" className="hover:text-gray-300">
                Servicios
              </a>
            </li>
            <li>
              <a href="/#Proyectos" className="hover:text-gray-300">
                Proyectos
              </a>
            </li>
            <li>
              <a href="/#Testimonios" className="hover:text-gray-300">
                Testimonios
              </a>
            </li>
            <li>
              <a href="/#Faq" className="hover:text-gray-300">
                Preguntas frecuentes
              </a>
            </li>
            <li>
              <a href="/#Contacto" className="hover:text-gray-300">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Información de Contacto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold mb-6">¡Seguinos para más!</h3>
          <div className="flex space-x-8">
            <a
              href="https://wa.me/+5491133495502?text=Hola%20,%20quiero%20más%20información" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-8 w-8 hover:text-gray-300 transition" />
            </a>
            <a
              href="https://instagram.com/skywarddigitalsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="h-8 w-8 hover:text-gray-300 transition" />
            </a>
            <a
              href="https://facebook.com/skywarddigitalsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="h-8 w-8 hover:text-gray-300 transition" />
            </a>
            <a
              href="https://tiktok.com/skywarddigitalsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTiktok className="h-8 w-8 hover:text-gray-300 transition" />
            </a>
            
          </div>
        </div>
      </div>

      {/* Separador */}
      <hr className="my-12 border-gray-600 relative z-10" />

      {/* Derechos de Autor */}
      <div className="text-center relative z-10">
        <p className="text-sm text-gray-400">
          &copy; 2024 SkyWard Digital Solutions. Todos los derechos reservados.
        </p>
      </div>

      {/* Texto Cortado */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <span className="text-[20vw] text-center lg:text-[15vw] font-extrabold text-gray-500 opacity-5 block leading-none -mb-10 lg:-mb-24">
          SKYWARD
        </span>
      </div>
    </footer>
  );
}
