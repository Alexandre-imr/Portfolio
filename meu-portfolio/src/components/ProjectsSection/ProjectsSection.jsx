import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = () => {
  return (
    <section id="projetos" className="bg-gray-900 text-white py-20 px-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Meus Projetos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700 flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">projects</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas porro tempora consectetur accusantium illo vel
                doloremque magni. Illo molestias libero doloremque nostrum
                veritatis, aut repellat! Fugiat ea molestias ut alias!
              </p>
            </CardContent>
            <CardFooter className="flex justify-end gap-4">
              <FaGithub size={24} />

              <FaExternalLinkAlt size={24} />
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
