import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import TitleSections from "@/components/Sections/TitleSections";
import Faq from "../Faq/page";
export default function Testimonios() {
  return (
    <div className="min-h-screen mb-48 mt-20"style={{ backgroundImage: `url('fondo2.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} id="Testimonios">
      <TitleSections title={"Testimonios"}/>
      <h4 className="text-lg xl:text-xl text-center text-gray-500">Conocé lo que opinaron nuestros clientes</h4>
      <InfiniteMovingCardsDemo />
      <Faq />
    </div>
  );
}
