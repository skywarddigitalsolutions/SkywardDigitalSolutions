"use client";
import NavBarContainer from "@/components/Navbar/NavBarContainer";
import Hero from "./Hero/page";
import Testimonios from "./Testimonios/page";
import Contacto from "./Contacto/page";
import Servicios from "./Servicios/page";
import Proyectos from "./Proyectos/page";
import { Contact } from "../components/ui/contact-btn";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/loader";
import "./globals.css";
export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 700);
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
