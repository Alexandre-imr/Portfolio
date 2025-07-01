import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Pagina feita com ajuda de IA, pois eu não sabia fazer a configuração

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("E-MAIL ENVIADO", response.status, response.text);
          alert("Mensagem enviada com sucesso!");

          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.error("ERRO: ", err);
          alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        }
      );
  };

  return (
    <section id="contato" className="bg-gray-800 text-white py-20 px-10">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Tem alguma pergunta ou quer trabalhar junto? Me mande uma mensagem!
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              type="text"
              id="name"
              placeholder="Qual o seu nome?"
              className="bg-gray-700 border-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              placeholder="seu.email@exemplo.com"
              className="bg-gray-700 border-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Sua Mensagem</Label>
            <Textarea
              id="message"
              placeholder="Digite sua mensagem aqui."
              className="bg-gray-700 border-gray-600"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
