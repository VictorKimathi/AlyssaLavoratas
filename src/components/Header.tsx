import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinks = [{
    title: 'Home',
    path: '/'
  }, {
    title: 'About',
    path: '/about'
  }, {
    title: 'Portfolio',
    path: '/portfolio'
  }, {
    title: 'Services',
    path: '/services'
  }, {
    title: 'Testimonials',
    path: '/testimonials'
  }, {
    title: 'Contact',
    path: '/contact'
  }, {
    title: 'Resume',
    path: '/resume'
  }];
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F1112] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold tracking-wider">
          ALYSSA LAVORATA
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-white hover:text-[#61DAFB] transition-colors ${location.pathname === link.path ? 'border-b-2 border-[#61DAFB]' : ''}`}>
              {link.title}
            </Link>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-[#181C1F] absolute top-full left-0 w-full">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-white hover:text-[#61DAFB] transition-colors py-2 ${location.pathname === link.path ? 'border-l-4 border-[#61DAFB] pl-2' : ''}`} onClick={() => setIsMenuOpen(false)}>
                {link.title}
              </Link>)}
          </nav>
        </div>}
    </header>;
};
export default Header;