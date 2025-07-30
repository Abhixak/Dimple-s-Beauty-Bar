import React from 'react';
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white !px-6 !py-8 !mt-12">
      <div className="max-w-6xl !mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and tagline */}
        <div>
          <h2 className="text-2xl font-bold !mb-2">Dimple's Beauty Bar</h2>
          <p className="text-sm">Empowering beauty with every service we provide.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold !mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-pink-400">Home</a></li>
            <li><a href="/" className="hover:text-pink-400">About</a></li>
            <li><a href="/services" className="hover:text-pink-400">Services</a></li>
            <li><a href="/" className="hover:text-pink-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="flex items-center gap-2 text-sm mb-1"><FaPhoneAlt /> +44-7516033509</p>
          <p className="flex items-center gap-2 text-sm mb-1"><FaPhoneAlt /> +44-01895692086</p>
          <p className="flex items-center gap-2 text-sm"><FaEnvelope /> info.dimplesbeautybar@gmail.com</p>
          <div className="flex gap-4 !mt-3">
            <a href="https://www.instagram.com/dimplesbeautybar?igsh=NWo1MmsxajF6cnpy" target='_blank' className="hover:text-pink-400"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/16vViyqpcv/" target='_blank' className="hover:text-blue-400"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      <div className="!mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Dimple's Beauty Bar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
