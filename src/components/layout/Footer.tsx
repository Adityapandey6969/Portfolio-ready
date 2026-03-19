'use client';

import Link from 'next/link';
import { personalInfo } from '@/src/data/personal';
import { BsGithub, BsLinkedin, BsEnvelope } from 'react-icons/bs';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">Aditya Pandey</h3>
            <p className="text-gray-400 text-sm">
              Data Scientist & Full-Stack Developer crafting data-driven solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-cyan-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <BsGithub size={24} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <BsLinkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <BsEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            Copyright {currentYear} Aditya Pandey. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed and built with care using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
