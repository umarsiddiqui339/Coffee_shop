import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light mb-4">
              Noir Brew<span className="text-accent"></span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              An elevated coffee experience crafted for those who appreciate depth, ritual, and the art of extraction.
            </p>
          </div>

          <div>
            <h4 className="text-accent font-medium mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/our-craft" className="hover:text-accent transition-colors">Our Craft</Link></li>
              <li><Link to="/origins" className="hover:text-accent transition-colors">Origins</Link></li>
              <li><Link to="/menu" className="hover:text-accent transition-colors">Menu</Link></li>
              <li><Link to="/spaces" className="hover:text-accent transition-colors">Spaces</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-medium mb-4">Visit Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                <span>47 Mercer Street, New York, NY 10013</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <span>+1 (212) 555-0247</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <span>hello@noirbrew.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
          <p>&copy; 2025 Noir Brew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;