"use client";
import React from "react";

import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = () => {
  const faqItems = [
    {
      title: "¿Cuánto sale crear mi página web?",
      content:
        "El precio varía dependiendo del diseño y los tipos servicios que quieras. Brindamos atención personalizada donde vamos a contarte más sobre los servicios y asesorarte para elegir el plan que se amolde a vos",
    },
    {
      title: "¿Ofrecen mantenimiento?",
      content: "Si, podes agregar el servicio de mantenimiento a tu sitio web.",
    },
    {
      title: "¿Qué información necesitarán para comenzar el proyecto?",
      content:
        "Para empezar a trabajar vamos a realizar una reunión virtual donde vamos a hacerte preguntas sobre tu marca.",
    },
    {
      title: "¿Cómo se realiza el pago?",
      content:
        "En la reunión virtual discutiremos el pago. Se abona el 50% al entregar el diseño y el 50% restante al finalizar el sitio web.",
    },
    {
      title: "¿Incluye dominio personalizado?",
      content: "No, el valor del dominio es a parte. Te asesoramos con la compra de tu dominio",
    },
    {
      title: "¿Incluye hosting?",
      content: "No, el valor del hosting es a parte. Te asesoramos con la compra de tu hosting",
    },
    {
      title: "¿Realizan el diseño de maquetación antes de desarrollar el sitio?",
      content: "Sí, proporcionamos mockups personalizados antes de comenzar con el desarrollo del sitio. Esto asegura que el diseño cumpla con sus expectativas y necesidades.",
    },
    {
      title: "¿Cuanto va a tardar mi página?",
      content:
        "El tiempo varia dependiendo el sitio y los servicios que elijas, por lo general son de 20 a 30 días",
    },
    {
      title: "¿Qué pasa si no me gusta como queda?",
      content:
        "Inicialmente te presentamos el diseño del sitio para que lo confirmes, luego empezamos con el desarrollo y se coordinan reuniones para mostrar avances",
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
      title: "¿Cuantas secciones puede tener mi sitio web?",
      content:
        "La cantidad que desees",
    },
    {
      title: "¿Ofrecen el servicio de SEO?",
      content: "Si, ofrecemos el servicio de SEO para tu sitio web",
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
