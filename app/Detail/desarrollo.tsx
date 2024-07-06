import React from 'react';
import TitleSections from "@/components/Sections/TitleSections";
import { IoIosArrowForward, IoMdAdd } from "react-icons/io";
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { IoReloadOutline } from 'react-icons/io5';
import { AiFillInteraction } from "react-icons/ai";
import { VscSymbolStructure } from "react-icons/vsc";
import { GrHostMaintenance } from "react-icons/gr";

interface ProjectProps {
  title: string;
  description: string;
  projectUrl: string;
  beneficio1: any;
  beneficio2: any;
  beneficio3: any;
  icon1: React.ReactElement;
  icon2: React.ReactElement;
  icon3: React.ReactElement;
}

const Project: React.FC<ProjectProps> = ({ title, description, projectUrl, beneficio1, beneficio2, beneficio3, icon1, icon2, icon3 }) => {
  return (
    <div className="flex flex-col md:flex-row  gap-4  mb-48 rounded-2xl p-12 " style={{
      backgroundImage: `url('fondodetail.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* Título y descripción */}
      <div className="md:w-1/2 p-4 flex flex-col justify-evenly">
            <div className=''>
                <h2 className='text-5xl pb-10 lg:pb-5'> {title} </h2>
                <p className='text-xl '> {description} </p>
            </div>
            <div className=''> 
                <h5 className="text-xl py-5">Beneficios:</h5>
                <div className='flex flex-col lg:flex-row py-5 gap-5 text-center'>
                    <div className="flex flex-col  items-center text-sm lg:text-md  gap-2 ">
                    {icon1} {beneficio1}
                    </div>
                    <div className="flex flex-col  items-center text-sm lg:text-md  gap-2 ">
                    {icon2} {beneficio2}
                    </div> 
                    <div className="flex flex-col  items-center text-sm lg:text-md  gap-2 ">
                    {icon3} {beneficio3}
                    </div> 
                </div>
            </div>

        
      </div>

      {/* Mockup del proyecto */}
      <div className="relative mx-auto border-primario dark:border-primario bg-primario border-[14px] rounded-[2.5rem] w-[300px] h-[600px] shadow-xl">
        <div className="w-[128px] h-[18px] bg-primario top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[40px] w-[4px] bg-primario absolute -left-[14px] top-[100px] rounded-l-lg"></div>
        <div className="h-[40px] w-[4px] bg-primario absolute -left-[14px] top-[150px] rounded-l-lg"></div>
        <div className="h-[60px] w-[4px] bg-primario absolute -right-[14px] top-[110px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-primario">
          <iframe src={projectUrl} className="w-full h-full border-none" title="Project Preview" />
        </div>
      </div>
    </div>
  );
};

const projects = [
  { id: 1, title: 'SPA',
    description: 'Es un tipo de sitio web que carga una sola página inicialmente y luego actualiza el contenido de forma dinámica según la interacción del usuario, sin necesidad de cargar páginas adicionales desde el servidor.',
    url: 'https://example1.com',
    beneficio1:'Experiencia más rápida y fluida al eliminar tiempo de carga entre páginas',
    beneficio2:'Mejora la interactividad al permitir transiciones suaves y dinámicas dentro del sitio web',
    beneficio3:'Eficiencia en el rendimiento al reducir la carga en el servidor al cargar recursos de manera selectiva',
    icon1:<BsFillLightningChargeFill className='h-8 w-8'  />,
    icon2:<AiFillInteraction className='h-8 w-8'/>,
    icon3:<IoReloadOutline className='h-8 w-8'/>
    },
    
  { id: 2, title: '5 Secciones', 
    description: 'Es un sitio web organizado en secciones distintas como la página de inicio, servicios ofrecidos, información sobre la empresa, testimonios de clientes y formas de contacto.', 
    url: 'https://example2.com',
    beneficio1:'Facilita la navegación para los visitantes al presentar la información de manera estructurada y accesible.',
    beneficio2:'Menor complejidad en el mantenimiento y actualización de contenido, optimizando la gestión del sitio.',
    beneficio3:'Puede expandirse fácilmente con más secciones según las necesidades futuras del negocio sin comprometer la usabilidad.',
    icon1:<VscSymbolStructure className='h-8 w-8'  />,
    icon2:<GrHostMaintenance className='h-8 w-8'/>,
    icon3:<IoMdAdd  className='h-8 w-8'/>},
    
    { id: 3, title: 'Sin limites', 
      description: 'Es un sitio web que permite la adición de nuevas secciones de contenido de forma ilimitada, adaptándose completamente a las necesidades y crecimiento del negocio.', 
      url: 'https://example2.com',
      beneficio1:'Permite expandir y evolucionar el sitio web con el negocio, sin restricciones en la cantidad de información o servicios a mostrar.',
      beneficio2:'Posibilita la creación de experiencias web únicas y personalizadas, adaptadas a las estrategias de marketing y comunicación específicas.',
      beneficio3:'Proporciona una base sólida para la expansión futura del contenido y funcionalidades, asegurando que el sitio web pueda crecer junto con el negocio.',
      icon1:<VscSymbolStructure className='h-8 w-8'  />,
      icon2:<GrHostMaintenance className='h-8 w-8'/>,
      icon3:<IoMdAdd  className='h-8 w-8'/>},
    
    
  // Añade más proyectos según sea necesario
];

export default function Desarrollo() {
  return (
    <div className="min-h-screen pt-12 bg-gray-100" style={{
      backgroundImage: `url('fondo.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <TitleSections title={"Desarrollo Web Personalizado"} />
      <div id="contenido" className="container mx-auto p-4">
        {projects.map((project:any) => (
          <Project key={project.id} title={project.title} description={project.description} projectUrl={project.url} beneficio1={project.beneficio1} beneficio2={project.beneficio2} beneficio3={project.beneficio3} icon1={project.icon1} icon2={project.icon2} icon3={project.icon3} />
        ))}
      </div>
    </div>
  );
}
