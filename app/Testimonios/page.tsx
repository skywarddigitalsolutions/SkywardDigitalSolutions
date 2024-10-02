import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import TitleSections from "@/components/Sections/TitleSections";
import Faq from "../Faq/page";
import Image from "next/image";
export default function Testimonios() {
  return (
    <div className="relative min-h-screen mb-5 pt-20" id="Testimonios">
  {/* Imagen de fondo usando Next.js Image */}
  <Image
    src="/fondo2.webp"
    alt="Fondo de Testimonios"
    fill
    style={{ objectFit: "cover", objectPosition: "center" }}
    className="-z-10"
  />

  <div className="relative z-10"> {/* Contenido sobre la imagen */}
    <TitleSections title={"Testimonios"} />
    <h4 className="text-lg xl:text-xl text-center text-gray-500">
      Conocé lo que opinaron nuestros clientes
    </h4>
    <InfiniteMovingCardsDemo />
    <Faq />
  </div>
</div>
  );
}
