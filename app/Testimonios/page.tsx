import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import TitleSections from "@/components/Sections/TitleSections";
import Faq from "../Faq/page";
export default function Testimonios() {
  return (
    <div className="min-h-screen mb-48 mt-20"style={{ backgroundImage: `url('fondo2.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} id="Testimonios">
      <TitleSections title={"Testimonios"}/>
      <InfiniteMovingCardsDemo />
      <Faq />
    </div>
  );
}
