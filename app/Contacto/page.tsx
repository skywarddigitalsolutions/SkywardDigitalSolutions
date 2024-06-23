import ContactoInfo from "@/components/Contact/ContactoInfo";
import TitleSections from "@/components/Sections/TitleSections";
import Footer from "../Footer/page";

export default function Contacto() {
    return(
        <div className="mt-20 xl:pb-10" style={{ backgroundImage: `url('fondo5.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} id="Contacto">
            <TitleSections title={"Contacto"}/>
            <ContactoInfo />
            <Footer />
        </div>
    );
}

