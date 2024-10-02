"use client";
import { useEffect, useState } from "react";

import NavBarContainer from "@/components/Navbar/NavBarContainer";
import { Contact } from "../components/ui/contact-btn";
import Testimonios from "./Testimonios/page";
import Loader from "@/components/ui/loader";
import Proyectos from "./Proyectos/page";
import Servicios from "./Servicios/page";
import Contacto from "./Contacto/page";
import Hero from "./Hero/page";
import "./globals.css";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 200);
  
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {" "}
      {!loaded && <Loader />}
      {loaded && (
        <div>
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
