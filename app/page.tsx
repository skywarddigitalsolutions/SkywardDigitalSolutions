"use client"
import NavBarContainer from "@/components/Navbar/NavBarContainer"
import Hero from "./Hero/page";
import Testimonios from "./Testimonios/page";
import Contacto from "./Contacto/page";
import Footer from "./Footer/page"
import Servicios from "./Servicios/page";
import Proyectos from "./Proyectos/page";
import Faq from "./Faq/page";
import {Contact} from "../components/ui/contact-btn"
import { useEffect, useState } from "react";
import Loader from "@/components/ui/loader";
import "./globals.css"
export default function Home() {
	
	  const [loaded, setLoaded] = useState(false);
	
	  useEffect(() => {
		// Simular un tiempo de carga, aquí puedes realizar cualquier lógica necesaria para cargar tus componentes.
		setTimeout(() => {
		  setLoaded(true); // Marcar como cargado después de 2 segundos (simulando tiempo de carga)
		}, 700);
	  }, []);
	
	return (
	<>	{!loaded && <Loader />} {/* Muestra el Loader si no se han cargado los componentes */}
	{loaded && (
	  <div className="">
		<NavBarContainer />
		<Hero />
		<Servicios />
		<Proyectos />
		<Testimonios />
		<Contacto />
		
		<Contact />
		</div>
      )}
	</>
	);
}
