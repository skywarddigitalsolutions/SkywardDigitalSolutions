import TitleSections from "@/components/Sections/TitleSections";
import ContactoInfo from "@/components/Contact/ContactoInfo";
import Footer from "../Footer/page";
import Image from 'next/image';

export default function Contacto() {
  return (
    <div className="relative xl:pb-10 pt-20" id="Contacto">
      <Image
        src="/fondo5.webp"
        alt="Fondo contacto"
        quality={100}
        className="absolute inset-0 w-full h-full object-cover -z-10"
        height={100}
        width={100}
        loading="lazy"
      />

      <TitleSections title={"Contacto"} />
      <ContactoInfo />
      <Footer />
    </div>
  );
}
