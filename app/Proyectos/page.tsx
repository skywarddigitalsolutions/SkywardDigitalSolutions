import TitleSections from "@/components/Sections/TitleSections";
import BentoDemo from "@/components/BentoDemo";
import Image from "next/image";
export default function Proyectos() {
  return (
    <div className="relative min-h-screen h-full bg-black pt-20" id="Proyectos">
      {/* Imagen de fondo usando Next.js Image */}
      <Image
        src="/fondo3.webp"
        alt="Fondo de Proyectos"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="-z-10"
      />

      <div className="xs:mt-5 lg:mt-10 relative">
        <TitleSections title={"Proyectos"} />
        <div className="flex justify-center items-center mx-5 mt-12 gap-12">
          <BentoDemo />
        </div>
      </div>
    </div>
  );
}
