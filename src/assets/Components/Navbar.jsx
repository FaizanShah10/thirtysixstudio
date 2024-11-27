import React from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

gsap.registerPlugin(ScrollToPlugin);


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (event, href) => {
    event.preventDefault(); // Prevent default anchor link behavior
    gsap.to(window, {
      duration: 1, // Duration of the scroll animation
      scrollTo: { y: href, offsetY: 70 }, // Scroll to the target with an offset
      ease: 'power2.out', // Easing for a smoother experience
    });
  };

  const navItems = [
    { name: "What we do", href: "#whatwedo"},
    { name: "Who we are", href: "#whoWeAre" },
    { name: "How we give back", href: "#whoWeAre" },
    { name: "Talk to us", href: "#whoWeAre" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div id="navbar" className="bg-[#FFFAFA] fixed top-0 w-full z-10 mb-20 shadow-md">
      <nav className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
        
        <div>
          <h2 className="text-black font-semibold text-lg">Thirtysixstudios</h2>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`effect-underline block py-2 px-3 text-black`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-[#FFFAFA] shadow-lg md:hidden`}
        >
          <ul className="flex flex-col items-start space-y-2 p-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <h1>
                  <a
                    href={item.href}
                    className={`effect-underline block py-2 px-3 text-black text-2xl text-center ${
                      item.isActive ? "font-bold" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </a>
                </h1>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
