import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'

const LinkToArticles = () => {
    return (
        <div className='flex mx-[15%] justify-between items-center gap-5'>
            <div className=''>
                <h1 className='text-4xl w-1/2 p-5'>Retrouvez plus d’actualités d'Alpha Corp</h1>
                <Link href="/news" className='hover:text-slate-500 text-lg p-5 flex items-center gap-3'>
                    <FaArrowCircleRight />
                    Afficher toutes les actualités
                </Link>
            </div>
            <div className='flex justify-center w-1/2 '>
                <Image
                    src="/logo.png"
                    width={60}
                    height={60}
                    alt="Alpha Corp logo"
                />
                <p className='font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-fuchsia-400'>Alpha Corp</p>
            </div>
        </div>
    )
}

export default LinkToArticles
