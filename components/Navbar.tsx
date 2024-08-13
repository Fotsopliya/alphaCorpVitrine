"use client"

import { navbarLinks } from '@lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = ({ }) => {
    const pathname = usePathname();
    return (
        <section className='px-[5%] py-4 shadow-md justify-center mb-10 z-30 top-0 left-0 right-0 bg-slate-50'>
            <nav className='flex justify-between'>
                <Link href="/" className='flex gap-2 items-center'>
                    <Image
                        src="/logo.png"
                        width={45}
                        height={45}
                        alt="Alpha Corp logo"
                    // className="rounded-full size-[24px] max-xl:size-14"
                    />
                    <p className='font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-l from-blue-700 to-fuchsia-400'>Alpha Corp</p>
                </Link>


                <div className='flex gap-5 items-center'>
                    {navbarLinks.map((item) => {
                        const isActive = pathname === item.route
                          return (
                            item.label === 'Contact' ? (
                                <Link href={item.route}>
                                    <button
                                        key={item.label}
                                        className='text-lg hover:underline p-2 bg-blue-700 text-white rounded'
                                    >
                                        {item.label}
                                    </button>
                                </Link>

                            ) : (
                                <Link href={item.route} key={item.label} className="{$isActive ? 'text-blue-500 font-bold' : 'text-black'}">
                                    <p className='text-lg'>
                                        <span className='hover:underline'>
                                            {item.label}
                                        </span>
                                    </p>
                                </Link>
                            )
                        );
                    })}
                </div>


            </nav>
        </section>
    )
}

export default Navbar
