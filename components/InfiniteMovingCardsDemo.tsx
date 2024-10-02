"use client";
import React from "react";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[37rem] rounded-md flex flex-col antialiased bg-transparante items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Estamos muy satisfechos con el trabajo realizado por ustedes. Nos ayudaron a transformar nuestra idea en un sitio web profesional y atractivo que ha mejorado significativamente nuestra presencia online. Recomendamos su servicio sin dudarlo",
      name: "Christian",
      title: "Ascensores",
  },
  {
    quote:
      "Realmente superó las expectativas con el diseño del sitio web. Desde el inicio, se mostraron comprometidos con entender las necesidades específicas y adaptaron cada detalle para reflejar la identidad de la marca. Un equipo altamente recomendable",
      name: "Andrea",
      title: "Aires de Pausa",
  },
  {
    quote: "Gracias a ustedes, nuestro sitio web ahora no solo se ve increíble, sino que también está optimizado para mejorar nuestro posicionamiento en buscadores. Su enfoque meticuloso en el diseño y el SEO ha sido fundamental para nuestro éxito online",
    name: "Maximiliano",
    title: "Ferretería",
  },

];
