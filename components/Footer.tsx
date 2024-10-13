"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import LanguageSwitcher from './ui/LanguageSwitcher';
import toast, { Toaster } from 'react-hot-toast';


const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setEmail('');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Error subscribing to newsletter');
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 justify-between">
          {/* Logo and Social Media Section */}
          <div className="w-full md:w-1/3 p-4">
            <div className='flex items-center mb-6'>
              <Image
                src="/logo.png"
                width={60}
                height={60}
                alt="Alpha Corp logo"
              />
              <p className='font-extrabold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-fuchsia-400 ml-3'>Alpha Corp</p>
            </div> 
            <h3 className='pt-5 md:pt-10 text-lg md:text-xl text-gray-700'>Nous suivre</h3>
            <ul className="flex mt-4 text-lg">
              <li className="mr-6">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <FaFacebook />
                </Link>
              </li>
              <li className="mr-6">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <FaXTwitter />
                </Link>
              </li>
              <li className="mr-6">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <FaInstagram />
                </Link>
              </li>
              <li className="mr-6">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="w-full md:w-1/3 p-4">
            <h5 className="uppercase text-gray-600 mb-4 font-bold text-lg">Liens utiles</h5>
            <ul>
              <li className="mb-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  À propos d'Alpha Corp
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Contactez-nous
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Actualités
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-1/3 p-4">
            <h5 className="uppercase text-gray-600 mb-4 font-bold text-lg">Newsletter</h5>
            <p className="text-gray-600 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir les dernières
              actualités.
            </p>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-400"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                disabled={loading}
              >
                {loading ? 'S\'inscrire...' : 'S\'inscrire'}
              </button>
            </form>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="mt-10">
          <LanguageSwitcher />
        </div>
        <Toaster />
        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Alpha Corp. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
