import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-[#181C1F] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Alyssa Lavorata</h3>
            <p className="mb-4">
              Tech-savvy Digital Writer: Making Innovation Relatable.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-white hover:text-[#61DAFB] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-[#61DAFB] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" className="text-white hover:text-[#61DAFB] transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#61DAFB] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#61DAFB] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#61DAFB] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#61DAFB] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#61DAFB] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:alyssalavorata883@gmail.com" className="hover:text-[#61DAFB] transition-colors">
                  alyssalavorata883@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+12179852140" className="hover:text-[#61DAFB] transition-colors">
                  (217) 985-2140
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>450 Warrenville Naperville Il 60532</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Alyssa Lavorata. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;