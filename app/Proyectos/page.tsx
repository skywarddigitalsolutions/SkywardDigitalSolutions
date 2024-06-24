import TitleSections from "@/components/Sections/TitleSections";
import BentoDemo from "@/components/BentoDemo";
export default function Proyectos() {
  return (
    <>
      <div
        className="min-h-screen h-full bg-black pt-[10] mt-20"
        style={{
          backgroundImage: `url('fondo3.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="Proyectos"
      >
        <div className="xs:mt-5 lg:mt-10">
          <TitleSections title={"Proyectos"} />
          <div className="flex justify-center items-center mx-5 mt-12 gap-12">
            <BentoDemo />
          </div>
        </div>
      </div>
    </>
  );
}
