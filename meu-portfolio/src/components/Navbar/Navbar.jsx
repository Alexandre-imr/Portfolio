import React from "react";

const Navbar = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm text-white sticky top-0 z-50">
      <nav className="container mx-auto px-10 py-4">
        <div className="flex justify-center items-center">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
