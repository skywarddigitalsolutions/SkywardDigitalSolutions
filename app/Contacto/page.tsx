import TitleSections from "@/components/Sections/TitleSections";
import ContactoInfo from "@/components/Contact/ContactoInfo";
import Footer from "../Footer/page";

export default function Contacto() {
  return (
    <div
      className="xl:pb-10 pt-20"
      style={{
        backgroundImage: `url('fondo5.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="Contacto"
    >
      <TitleSections title={"Contacto"} />
      <ContactoInfo />
      <Footer />
    </div>
  );
}
