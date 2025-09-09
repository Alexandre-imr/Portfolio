import React from "react";
// Reutilizando os ícones que já importamos em outros componentes
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 px-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2025 Alexandre Inácio.</p>
          <p className="text-sm text-gray-500"></p>
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/Alexandre-imr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandre-in%C3%A1cio-b96b63229/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5531997436773&text=Ol%C3%A1!%20Vi%20seu%20curr%C3%ADculo%20e%20gostaria%20de%20entrar%20em%20contato."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="WhatsApp"
          >
            <AiOutlineWhatsApp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
