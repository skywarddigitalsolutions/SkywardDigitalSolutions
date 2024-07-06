"use client";
import TitleSections from "@/components/Sections/TitleSections";
import ServicesCards from "@/components/Cards/ServicesCards";

export default function Servicios() {
  return (
    <div
      className="min-h-screen h-full flex flex-col justify-center items-center pt-20"
      style={{
        backgroundImage: `url('fondo2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="Servicios"
    >
      <TitleSections title={"Servicios"} />
      <ServicesCards />
    </div>
  );
}
