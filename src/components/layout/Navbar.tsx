'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/src/data/navigation';
import { personalInfo } from '@/src/data/personal';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg py-3' : 'py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold gradient-text">
          AP
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Links + Resume */}
        <div className="hidden md:flex gap-4 items-center">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400"
          >
            <BsGithub size={20} />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400"
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-effect mt-2 py-4 px-4 animate-slideDown">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-4 border-t border-gray-700">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400"
              >
                <BsGithub size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400"
              >
                <BsLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
