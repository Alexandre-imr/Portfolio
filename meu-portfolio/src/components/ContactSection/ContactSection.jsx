import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contato" className="bg-gray-800 text-white py-20 px-10">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Tem alguma pergunta ou quer trabalhar junto? Me mande uma mensagem!
        </p>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              type="text"
              id="name"
              placeholder="Qual o seu nome?"
              className="bg-gray-700 border-gray-600"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              placeholder="seu.email@exemplo.com"
              className="bg-gray-700 border-gray-600"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Sua Mensagem</Label>
            <Textarea
              id="message"
              placeholder="Digite sua mensagem aqui."
              className="bg-gray-700 border-gray-600"
            />
          </div>

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 w-full"
          >
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
