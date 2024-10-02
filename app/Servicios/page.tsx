"use client";
import TitleSections from "@/components/Sections/TitleSections";
import ServicesCards from "@/components/Cards/ServicesCards";
import Image from "next/image";

export default function Servicios() {
  return (
    <div
      className="relative min-h-screen h-full flex flex-col justify-center items-center pt-20"
      id="Servicios"
    >
      {/* Imagen de fondo usando Next.js Image */}
      <Image
        src="/fondo2.webp"
        alt="Fondo de Servicios"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="-z-10"
        loading="lazy"
      />

      <div className="relative z-10">
        <TitleSections title={"Servicios"} />
        <ServicesCards />
      </div>
    </div>
  );
}
