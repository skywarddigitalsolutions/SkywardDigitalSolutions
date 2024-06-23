import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Manos from "../../public/manos.png";
import "./ContactoInfo.css";
const ContactoInfo = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row justify-center items-center h-auto pb-10 container mx-auto">
      <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left md:w-1/2">
        <h3 className="text-4xl lg:text-6xl">
          Queres dar el salto en{" "}
          <span className="font-extrabold">tu marca</span>
        </h3>
        <p className="text-xl lg:text-2xl mt-5">
          Estamos dispuestos a ayudarte a lograrlo.
        </p>
        <button className="my-10 px-4 py-4 rounded-xl bg-transparent border border-1 border-secundario font-bold text-white tracking-widest hover:bg-[white] hover:text-secundario transition-colors duration-200">
          Estoy dispuesto
        </button>
        <div className="flex flex-row gap-10 mt-12">
          <div className="tooltip-container">
            <div className="tooltip">
              <div className="profile">
                <div className="user">
                  <div className="img">
                    {" "}
                    <img src="/logosds.png" />{" "}
                  </div>
                  <div className="details">
                    <div className="name">User</div>
                    <div className="username">@username</div>
                  </div>
                </div>
                <div className="about">800+ Followers</div>
              </div>
            </div>
            <div className="text">
              <a className="icon" href="#">
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
              </a>
            </div>
          </div>

          <div className="tooltip-container">
            <div className="tooltip">
              <div className="profile">
                <div className="user">
                  <div className="img">
                    {" "}
                    <img src="/logosds.png" />{" "}
                  </div>
                  <div className="details">
                    <div className="name">User</div>
                    <div className="username">@username</div>
                  </div>
                </div>
                <div className="about">800+ Followers</div>
              </div>
            </div>
            <div className="text">
              <a className="icon" href="#">
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
              </a>
            </div>
          </div>

          <div className="tooltip-container">
            <div className="tooltip">
              <div className="profile">
                <div className="user">
                  <div className="img">
                    {" "}
                    <img src="/logosds.png" />{" "}
                  </div>
                  <div className="details">
                    <div className="name">User</div>
                    <div className="username">@username</div>
                  </div>
                </div>
                <div className="about">800+ Followers</div>
              </div>
            </div>
            <div className="text">
              <a className="icon" href="#">
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
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <Image src={Manos} alt="img contacto" className="h-auto w-full" />
      </div>
      <div className="hidden md:block">
        <Image src="/coding.svg" alt="coding" width={500} height={300} />
      </div>
    </div>
  );
};

export default ContactoInfo;
