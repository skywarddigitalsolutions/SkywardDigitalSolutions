import TitleSections from "@/components/Sections/TitleSections";
import Testimonial from "@/components/Testimonials/Testimonial";
import Faq from "../Faq/page";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
export default function Testimonios() {
  return (
    <div className="min-h-screen mb-48 mt-20"style={{ backgroundImage: `url('fondo2.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} id="Testimonios">
      <TitleSections title={"Testimonios"}/>
      {/* //TODO: Hacer mejor esto */}
      <InfiniteMovingCardsDemo />
      <Faq />
      

    </div>
  );
}

{/*
  <div className="flex flex-col sm:flex-row ">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
*/}