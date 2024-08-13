
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className='flex justify-start'>
              <Image
              src="/logo.png"
              width={60}
              height={60}
              alt="Alpha Corp logo"
              />
              <p className='font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-fuchsia-400'>Alpha Corp</p>
            </div> 
            <h3 className='pt-10'>Nous suivre</h3>
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
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <h5 className="uppercase text-gray-600 mb-4 font-bold">Liens utiles</h5>
            <ul>
              <li className="mb-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  À propos
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <h5 className="uppercase text-gray-600 mb-4 font-bold">Newsletter</h5>
            <p className="text-gray-600 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir les dernières
              actualités.
            </p>
            <input
              type="email"
              placeholder="Adresse e-mail"
              className="w-full p-2 mb-4 border border-gray-400"
            />
            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
