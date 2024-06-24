"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = () => {
  const faqItems = [
    {
      title: "¿Cuánto sale crear mi página web?",
      content:
        "tenemos atención personalizada donde te ofrecemos distintos planes para la creación de tu página",
    },
    {
      title: "¿Ofrecen mantenimiento?",
      content: "Si, podes agregar el mantenimiento a tu plan",
    },
    {
      title: "¿Qué información necesitarán para comenzar el proyecto?",
      content:
        "Para empezar a trabajar vamos a realizar una reunión virtual donde vamos a preguntarte sobre tu marca. Los textos podes armarlos vos o sino lo hacemos nosotros",
    },
    {
      title: "¿Cómo puedo realizar pagos y cuál es su política de pagos?",
      content:
        "En la reunión virtual te contamos sobre el pago, es el 50% cuando te entregamos el diseño y el restante cuando está terminada",
    },
    {
      title: "¿Incluye dominio personalizado?",
      content: "No, el valor del dominio es a parte",
    },
    {
      title: "¿Realizan el diseño de la página o únicamente el código?",
      content: "Si, ofrecemos diseño web",
    },
    {
      title: "¿Cuanto tarda mi página?",
      content:
        "El tiempo varia dependiendo el plan que elijas, por lo general son 15 días",
    },
    {
      title: "¿Qué pasa si no me gusta como queda?",
      content:
        "Tenemos varias reuniones donde, inicialmente, te mostramos el resultado de la página antes de empezar, y vamos mostrando los avances. Igualmente incluye 5 cambios.",
    },
    {
      title: "¿Como se manejan los cambios y revisiones durante el proceso?",
      content:
        "Te mostramos los avances en los tiempos acordados, dependiendo el plan tenes distinta cantidad de cambios disponibles",
    },
    {
      title: "¿Cómo puedo hacer para agendar una reunión?",
      content:
        "Escribinos por cualquiera de nuestras redes para asesorarte y agendar una reunión",
    },
    {
      title: "¿Qué contenido debo incluir?",
      content: "Nosotros te asesoramos para mejorar tu sitio web",
    },
    {
      title: "¿Cuantas secciones puede tener mi sitio web?",
      content:
        "Dependiendo el plan que elijas, tenemos disponible las secciones que quieras",
    },
    {
      title: "¿Ofrecen el servicio de SEO?",
      content: "Si, te ayudamos con el SEO de tu página",
    },
  ];

  return (
    <>
      <h1 className="text-zinc-200 mb-24 text-4xl lg:text-7xl font-extrabold text-center">
        {" "}
        Preguntas Frecuentes{" "}
      </h1>
      <div className="mx-auto w-full lg:w-1/2">
        <Accordion variant="light" className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={`Accordion ${index + 1}`}
              title={<span className="text-gray-400">{item.title}</span>}
            >
              <span className="text-white">{item.content}</span>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Faq;
