import React, { useRef } from "react"; // 1. Importamos o useRef
import Autoplay from "embla-carousel-autoplay"; // 2. Importamos o plugin

// Importando os ícones que já tínhamos
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

// Importando os componentes do Carrossel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SkillsSection = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={60} /> },
    { name: "CSS3", icon: <FaCss3Alt size={60} /> },
    { name: "JavaScript", icon: <FaJsSquare size={60} /> },
    { name: "React", icon: <FaReact size={60} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={60} /> },
    { name: "Vite", icon: <SiVite size={60} /> },
    { name: "Node.js", icon: <FaNodeJs size={60} /> },
    { name: "Git", icon: <FaGitAlt size={60} /> },
  ];

  const plugin = useRef(Autoplay({ delay: 2000 }));

  return (
    <section id="habilidades" className="bg-gray-800 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Minhas Habilidades
        </h2>

        <div className="flex justify-center">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-300"
          >
            <CarouselContent>
              {skills.map((skill, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div className="p-1">
                    <div className="bg-gray-700 h-40 p-6 rounded-lg flex flex-col items-center justify-center">
                      <div className="text-blue-400 mb-3">{skill.icon}</div>
                      <p className="text-white font-semibold">{skill.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
