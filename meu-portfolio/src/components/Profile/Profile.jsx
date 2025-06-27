import React from "react";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { TbBrandLinkedin } from "react-icons/tb";
import { LuNewspaper } from "react-icons/lu";
import ParticleBackground from "@/components/ParticleBackground/ParticleBackground.jsx";
const Profile = () => {
  return (
    <section id="home" className="text-white min-h-screen flex items-center">
      <ParticleBackground />

      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight z-10">
              Olá, eu sou Alexandre, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 z-10">
                Desenvolvedor FullStack
              </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-gray-500 border-gray-700 hover:bg-gray-800 hover:text-white"
              >
                <a
                  href="/Alexandre_Currículo.pdf"
                  download="Alexandre_Currículo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuNewspaper className="mr-2 h-4 w-4" />
                  CV
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-sky-700 border-gray-700 hover:bg-gray-800 hover:text-white"
              >
                <a
                  href="https://www.linkedin.com/in/alexandre-in%C3%A1cio-b96b63229/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandLinkedin className="mr-2 h-4 w-4" />
                  Linkedin
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-lime-700 border-gray-700 hover:bg-gray-800 hover:text-white"
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=5531997436773&text=Ol%C3%A1%2C+tudo+bem+%3F+Vim+atrav%C3%A9s+do+Portfólio.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineWhatsApp className="mr-2 h-4 w-4" />
                  Whatsapp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-slate-950 border-gray-700 hover:bg-gray-800 hover:text-white"
              >
                <a
                  href="https://github.com/Alexandre-imr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          <div>
            <img src="/formal4.png" alt="Foto de Alexandre" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
