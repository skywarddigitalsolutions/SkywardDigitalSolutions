"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function AccordionFAQ() {
  const faqItems = [
    {
      title: "Pregunta 1",
      content: "Contenido de la pregunta 1",
    },
    {
      title: "Pregunta 2",
      content: "Contenido de la pregunta 2",
    },
    {
      title: "Pregunta 3",
      content: "Contenido de la pregunta 3",
    },
  ];
  return (
    <>
    <h1 className="text-zinc-200 mb-24 text-4xl lg:text-7xl font-extrabold mt-12 text-center mt-24"> Preguntas Frecuentes</h1>
    <h1 className="text-zinc-200 mb-24 text-4xl lg:text-7xl font-extrabold mt-12 text-center mt-24"> Preguntas Frecuentes</h1>
      <div className="w-full lg:w-1/2">
        <Accordion variant="light" className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={`Accordion ${index + 1}`}
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
  