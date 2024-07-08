import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { MdOutlineDesignServices, MdOutlineWeb, MdOutlineWebStories } from "react-icons/md";
import { FaBusinessTime, FaEye, FaSearchengin } from "react-icons/fa";
import { PiMouseScrollLight } from "react-icons/pi";
import { TbSeo } from "react-icons/tb";
import { GiClick } from "react-icons/gi";
import { CiTextAlignCenter } from "react-icons/ci";
import { BiConversation } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { SiContentstack } from "react-icons/si";
import { GrDocumentPerformance } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import { VscSymbolStructure } from "react-icons/vsc";


type Service = {
  id: number;
  title: string;
  content: React.ReactNode;
  button: string;
};

const modalservices: Service[] = [
  {
    id: 1,
    title: "Desarrollo web personalizable",
    content: "",
    button: "Ver opciones",
  },
  {
    id: 2,
    title: "Diseño web personalizable",
    content: (
      <>
        <h4 className="text-white text-xs lg:text-md">
          Ofrecemos un servicio integral donde diseñamos tu sitio web desde cero, teniendo en cuenta tus necesidades y objetivos específicos. Te proporcionamos opciones personalizadas y creativas para asegurar que tu sitio web refleje tu marca de manera única.
        </h4>
        <h5 className="text-white text-xs lg:text-md">Beneficios:</h5>
        <div className="flex flex-col gap-5 text-xs lg:text-md">
          <div className="flex gap-5 justify-start items-start">
            <MdOutlineDesignServices className="h-12 w-12 text-white" />
            <p> <span className="text-white">Personalización total:</span> Creamos un diseño web que se adapta perfectamente a tu marca, transmitiendo tu identidad visual de manera coherente y profesional.</p>
          </div>
          <div className="flex gap-5 justify-start items-start">
            <FaEye className="h-12 w-12 text-white" />
            <p> <span className="text-white"> Experiencia visual impactante: </span> Utilizamos principios de diseño modernos y técnicas visuales avanzadas para captar la atención de tus visitantes desde el primer momento. </p>
          </div>
          <div className="flex gap-5 justify-start items-start">
            <MdOutlineWebStories className="h-12 w-12 text-white" />
            <p> <span className="text-white">Flexibilidad creativa: </span> Te presentamos diferentes opciones de diseño para que elijas la que mejor se alinee con tus expectativas y metas comerciales.</p>
          </div>
          <div className="flex gap-5 justify-start items-start">
            <PiMouseScrollLight  className="h-12 w-12 text-white" />
            <p> <span className="text-white">Mejora de la usabilidad:</span> Diseñamos con el usuario final en mente, asegurando una navegación intuitiva y una experiencia de usuario óptima en todas las plataformas. </p>
          </div>
  
        </div>
      </>
    ),
    button: "Ver más",
  },
  {
    id: 3,
    title: "Copywriting",
    content: (
      <>
        <h4 className="text-white text-xs lg:text-md">
          Ofrecemos la opción de redactar los textos de tu sitio web con el objetivo de mejorar el SEO y captar la atención de tus visitantes. Creamos contenido persuasivo y optimizado que comunica claramente tus mensajes clave y atrae a tu público objetivo.
        </h4>
        <h5 className="text-white text-xs lg:text-md">Beneficios:</h5>
        <div className="flex flex-col gap-5 text-xs lg:text-md">
          <div className="flex gap-5 justify-start items-start">
            <TbSeo className="h-12 w-12 text-white" />
            <p> <span className="text-white">Optimización SEO: </span> Escribimos textos que ayudan a mejorar el posicionamiento de tu sitio web en los motores de búsqueda, utilizando palabras clave relevantes y estructuras que cumplen con las mejores prácticas SEO.
            </p>
          </div>
          <div className="flex gap-5 justify-start items-start">
            <GiClick className="h-12 w-12 text-white" />
            <p> <span className="text-white">Llamada a la acción efectiva:</span> Desarrollamos contenido que motiva a los usuarios a realizar acciones específicas, como comprar un producto, suscribirse a un boletín o contactar con tu empresa.
            </p>
          </div>
          <div className="flex gap-5 justify-start items-start">
            <CiTextAlignCenter className="h-12 w-12 text-white" />
            <p> <span className="text-white">Claridad y coherencia: </span>  Redactamos textos claros y concisos que comunican tus mensajes de manera efectiva, manteniendo la coherencia con la identidad y voz de tu marca.
            </p>
          </div>
          <div className="flex gap-5 justify-start items-start">
            <BiConversation  className="h-12 w-12 text-white" />
            <p> <span className="text-white">Aumento de conversiones: </span> Nuestros textos están diseñados para mejorar la conversión de visitantes en clientes potenciales, maximizando así el retorno de tu inversión en marketing digital.
            </p>
          </div>
  
        </div>
      
      </>
    ),
    button: "Ver más",
  },
  {
    id: 4,
    title: "Mantenimiento",
    content: (
      <>
        <h4 className="text-white text-xs lg:text-md">
          Ofrecemos un servicio integral para mantener tu sitio web actualizado, seguro y funcionando sin problemas. Esto incluye la gestión regular de contenido, actualizaciones de software, copias de seguridad periódicas y soporte técnico continuo para asegurarte de que tu sitio web esté siempre en óptimas condiciones.
        </h4>
        <h5 className="text-white text-xs lg:text-md">Beneficios:</h5>
        <div className="flex flex-col gap-5 text-xs lg:text-md">
          <div className="flex gap-5 justify-start items-start text-xs">
            <GrUpdate className="h-12 w-12 text-white" />
            <p> <span className="text-white"> Actualizaciones y Parches de Seguridad: </span> Mantenemos tu sitio web al día con las últimas actualizaciones de software y parches de seguridad para protegerlo contra amenazas cibernéticas.
            </p>
          </div>
          <div className="flex gap-5 justify-start items-start">
            <SiContentstack  className="h-12 w-12 text-white" />
            <p><span className="text-white">Gestión de Contenido: </span> Actualizamos regularmente el contenido de tu sitio web según tus necesidades, asegurando que la información sea siempre relevante y actualizada.
            </p>
          </div>
          <div className="flex gap-5 justify-start items-start">
            <GrDocumentPerformance className="h-12 w-12 text-white" />
            <p><span className="text-white">Optimización de Rendimiento: </span> Monitoreamos el rendimiento de tu sitio web y realizamos ajustes necesarios para garantizar tiempos de carga rápidos y una experiencia fluida para los usuarios.
            </p>
          </div>
          <div className="flex gap-5 justify-start items-start">
            <IoIosAddCircleOutline  className="h-12 w-12 text-white"/>
            <p><span className="text-white">Costo Adicional: </span> Este servicio tiene un costo adicional, pero proporciona tranquilidad al delegar la gestión técnica y operativa de tu sitio web a profesionales expertos.
            </p>
          </div>
          <p className="text-white"> El mantenimiento mensual es crucial para asegurar que tu sitio web funcione de manera óptima y esté protegido contra posibles vulnerabilidades, permitiéndote concentrarte en hacer crecer tu negocio sin preocupaciones tecnológicas.</p>
        </div>
      </>
    ),
    button: "Ver más",
  },
  {
    id: 5,
    title: "SEO",
    content: (
      <>
        <h4 className="text-xs text-white lg:text-md">
          Nuestro servicio de SEO está diseñado para mejorar la visibilidad de tu sitio web en los motores de búsqueda como Google. Implementamos estrategias avanzadas que optimizan tu contenido para palabras clave relevantes, mejoran la estructura del sitio y aumentan la autoridad de tu dominio, todo con el objetivo de atraer más tráfico orgánico y potenciales clientes.
        </h4>
        <h5 className="text-xs text-white lg:text-md ">Beneficios:</h5>
        <div className="flex flex-col gap-5 text-xs lg:text-md">
          <div className="flex gap-5 justify-start items-start text-xs">
            <VscSymbolStructure  className="h-12 w-12 text-white" />
            <p> <span className="text-white">Optimización On-Page:</span> Mejoramos la estructura de tu sitio web, optimizamos meta etiquetas, URLs y contenido para que estén alineados con las mejores prácticas de SEO. </p>
          </div>
          <div className="flex gap-5 justify-start items-start">
            <TbSeo  className="h-12 w-12 text-white" />
            <p><span className="text-white">Creación de Contenido SEO:</span> Desarrollamos contenido relevante y optimizado que atraiga a tu audiencia objetivo y mejore tu posicionamiento en los resultados de búsqueda.
            </p>
          </div>
          <div className="flex gap-5 justify-start items-start">
            <FaSearchengin className="h-12 w-12 text-white" />
            <p><span className="text-white"> Link Building: </span> Implementamos estrategias de construcción de enlaces para aumentar la autoridad de tu sitio web y mejorar su clasificación en los motores de búsqueda.

            </p>
          </div>
          <div className="flex gap-5 justify-start items-start">
            <IoAnalytics  className="h-12 w-12 text-white" />
            <p> <span className="text-white">Análisis y Reportes:</span> Realizamos análisis periódicos de rendimiento SEO y proporcionamos informes detallados para que puedas ver el impacto de nuestras estrategias y los resultados obtenidos. </p>
          </div>

          <p className="text-white"> Nuestro servicio de SEO te ayuda a destacarte en un mercado competitivo, aumentar la visibilidad de tu marca y captar clientes potenciales de manera efectiva a través de estrategias.
          </p>

        </div>
       
      </>
    ),
    button: "Ver más",
  },
];

type ButtonCardsProps = {
  serviceId: number;
};

export default function ButtonCards({ serviceId }: ButtonCardsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpen = (service: Service) => {
    setSelectedService(service);
    onOpen();
  };

  const service = modalservices.find((service) => service.id === serviceId);

  const handleClose = () => {
    setSelectedService(null);
    onClose();
  };

  return (
    <>
      {service && (
        <Button
          key={service.id}
          onClick={() => {
            if (service.id === 1) {
              window.location.href = "/Detail";
            } else {
              handleOpen(service);
            }
          }}
          size="sm"
          className="bg-secundario/50"
        >
          {service.button}
        </Button>
      )}
      {selectedService && (
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          backdrop="opaque"
          radius="lg"
          size="xl"
          classNames={{
            body: "py-6",
            backdrop: "bg-black/50 backdrop-opacity-40",
            base: "border-black bg-black text-gray-500",
            header: "border-b-[1px] border-gray-500",
            footer: "border-t-[1px] border-gray-500",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
        >
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1 text-white">
              {selectedService.title}
            </ModalHeader>
            <ModalBody>
              {selectedService.content}
            </ModalBody>
            <ModalFooter>
              {serviceId !== 1 && (
                <Button variant="light" onClick={handleClose}>
                  Cerrar
                </Button>
              )}
              <Button
                className="text-white bg-secundario"
                onClick={() => {
                  // Action on 'Contactarse'
                }}
              >
                Contactarse
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}