import React from "react";

import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import "./ContactoInfo.css";
const ContactoInfo = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row justify-center items-center h-auto pb-10 container mx-auto">
      <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left md:w-1/2">
        <h3 className="text-4xl lg:text-6xl">
          ¿Queres dar el salto en{" "}
          <span className="font-extrabold text-secundario">tu marca</span>?
        </h3>
        <p className="text-xl lg:text-2xl mt-5">
          Estamos dispuestos a ayudarte a lograrlo.
        </p>
        <Link
          href="https://wa.me/+5491133495502?text=Hola%20,%20quiero%20más%20información"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="my-10 px-4 py-4 rounded-xl bg-transparent border border-secundario font-bold text-white tracking-widest hover:bg-[white] hover:text-secundario transition-colors duration-200">
            Quiero contactarme
          </button>
        </Link>

        <div className="flex flex-row gap-10 mt-12 max-w-screen">
          <Link
            href="https://www.instagram.com/skywarddigitalsolutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tooltip-container">
              <div className="tooltip hidden lg:block">
                <div className="profile">
                  <div className="user">
                    <div className="img">
                      {" "}
                      <Image
                        src="/logosds.webp"
                        alt="Logo sds"
                        title="Logo SDS"
                        width={100}
                        height={100}
                      />{" "}
                    </div>
                    <div className="details">
                      <div className="name">SDS</div>
                      <div className="username">@skywarddigitalsolutions</div>
                    </div>
                  </div>
                  <div className="about">500+ Seguidores</div>
                </div>
              </div>
              <div className="text">
                <Link
                  className="icon"
                  href="https://www.instagram.com/skywarddigitalsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="instagramSVG">
                      <FaInstagram />
                    </span>
                  </div>
                  <div className="text">Instagram</div>
                </Link>
              </div>
            </div>
          </Link>

          <Link
            href="https://www.facebook.com/skywarddigitalsolutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tooltip-container">
              <div className="tooltip hidden lg:block">
                <div className="profile">
                  <div className="user">
                    <div className="img">
                      {" "}
                      <Image
                        src="/logosds.webp"
                        alt="Logo sds"
                        title="Logo SDS"
                        width={100}
                        height={100}
                      />{" "}
                    </div>
                    <div className="details">
                      <div className="name">SDS</div>
                      <div className="username">@skywarddigitalsolutions</div>
                    </div>
                  </div>
                  <div className="about">800+ Followers</div>
                </div>
              </div>
              <div className="text">
                <Link
                  className="icon"
                  href="https://www.facebook.com/skywarddigitalsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="instagramSVG">
                      <FaFacebook />
                    </span>
                  </div>
                  <div className="text">Facebook</div>
                </Link>
              </div>
            </div>
          </Link>

          <Link
            href="https://www.tiktok.com/skywarddigitalsolutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tooltip-container">
              <div className="tooltip hidden lg:block">
                <div className="profile">
                  <div className="user">
                    <div className="img">
                      {" "}
                      <Image
                        src="/logosds.webp"
                        alt="Logo sds"
                        title="Logo SDS"
                        width={100}
                        height={100}
                      />{" "}
                    </div>
                    <div className="details">
                      <div className="name">SDS</div>
                      <div className="username">@skywarddigitalsolutions</div>
                    </div>
                  </div>
                  <div className="about">800+ Followers</div>
                </div>
              </div>
              <div className="text">
                <Link
                  className="icon"
                  href="https://www.tiktok.com/skywarddigitalsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="instagramSVG">
                      <FaTiktok />
                    </span>
                  </div>
                  <div className="text">TikTok</div>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mx-5">
        <Image
          src="/coding.svg"
          alt="coding"
          className="pt-12"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default ContactoInfo;
