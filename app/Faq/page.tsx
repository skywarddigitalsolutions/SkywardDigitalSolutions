"use client";
import React from "react";

import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = () => {
  const faqItems = [
    {
      title: "¿Cuánto sale crear mi página web?",
      content:
        "Tenemos distintos precios dependiendo el diseño y los tipos servicios que quieras.Tenemos atención personalizada donde te vamos a contar más sobre los servicios y vamos a asesorarte para elegir el plan que se amolde a vos",
    },
    {
      title: "¿Ofrecen mantenimiento?",
      content: "Si, podes agregar el servicio de mantenimiento a tu plan.",
    },
    {
      title: "¿Qué información necesitarán para comenzar el proyecto?",
      content:
        "Para empezar a trabajar vamos a realizar una reunión virtual donde vamos a hacerte preguntas sobre tu marca. También ofrecemos copywriting para que no tengas que pensar los textos",
    },
    {
      title: "¿Cómo puedo realizar pagos y cuál es su política de pagos?",
      content:
        "En la reunión virtual se habla sobre el pago, recibimos el 50% cuando se entrega el diseño y el restante cuando se entrega el sitio web terminado",
    },
    {
      title: "¿Incluye dominio personalizado?",
      content: "No, el valor del dominio es a parte. Podemos ayudarte a que compres el dominio",
    },
    {
      title: "¿Realizan el diseño de la página o únicamente el código?",
      content: "Ofrecemos diseño web y el desarrollo del código",
    },
    {
      title: "¿Cuanto va a tardar mi página?",
      content:
        "El tiempo varia dependiendo el plan y los servicios que elijas, por lo general son de 15 a 30 días",
    },
    {
      title: "¿Qué pasa si no me gusta como queda?",
      content:
        "Inicialmente te presentamos el diseño del sitio para que lo confirmes, luego empezamos con el código y te vamos mostrando los avances. También tenes cambios disponibles dependiendo de tu plan ",
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
      content: "Lo que vos quieras mostrarle a la gente. Nosotros te asesoramos para mejorar tu sitio web",
    },
    {
      title: "¿Cuantas secciones puede tener mi sitio web?",
      content:
        "La cantidad que vos quieras.",
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
