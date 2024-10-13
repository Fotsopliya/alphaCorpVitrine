"use client";

import { navbarLinks } from '@lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className='px-4 md:px-[5%] py-4 shadow-md justify-center mb-10 z-30 top-0 left-0 right-0 bg-slate-50'>
      <nav className='flex justify-between items-center'>
        <Link href="/" className='flex gap-2 items-center'>
          <Image
            src="/logo.png"
            width={45}
            height={45}
            alt="Alpha Corp logo"
          />
          <p className='font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-l from-blue-700 to-fuchsia-400'>
            Alpha Corp
          </p>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-2xl focus:outline-none'
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Links for Desktop */}
        <div className='hidden md:flex gap-5 items-center'>
          {navbarLinks.map((item) => {
            const isActive = pathname === item.route;
            const translatedLabel = t(`${item.label}`);

            return item.label === 'Contactez-nous' ? (
              <Link key={item.label} href={item.route}>
                <button className='text-lg hover:underline p-2 bg-blue-700 text-white rounded'>
                  {translatedLabel}
                </button>
              </Link>
            ) : (
              <Link
                key={item.label}
                href={item.route}
                className={isActive ? 'text-blue-500 font-bold' : 'text-black'}
              >
                <p className='text-lg'>
                  <span className='hover:underline'>{translatedLabel}</span>
                </p>
              </Link>
            );
          })}
        </div>

        {/* Links for Mobile */}
        {isMobileMenuOpen && (
          <div className='absolute top-16 left-0 w-full bg-slate-50 shadow-md md:hidden flex flex-col items-center gap-5 py-5'>
            {navbarLinks.map((item) => {
              const isActive = pathname === item.route;
              const translatedLabel = t(`${item.label}`);

              return item.label === 'Contact' ? (
                <Link key={item.label} href={item.route} onClick={toggleMobileMenu}>
                  <button className='text-lg hover:underline p-2 bg-blue-700 text-white rounded w-full text-center'>
                    {translatedLabel}
                  </button>
                </Link>
              ) : (
                <Link
                  key={item.label}
                  href={item.route}
                  className={isActive ? 'text-blue-500 font-bold' : 'text-black'}
                  onClick={toggleMobileMenu}
                >
                  <p className='text-lg'>
                    <span className='hover:underline'>{translatedLabel}</span>
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
