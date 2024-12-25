"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowCircleRight } from 'react-icons/fa';

const LinkToArticles = () => {
    const { t } = useTranslation('common');

    return (
        <div className='flex flex-col md:flex-row mx-5 md:mx-[15%] justify-between items-center gap-5'>
            <div className='w-full md:w-1/2'>
                <h1 className='text-2xl md:text-4xl p-5'>{t("Retrouvez plus d'actualités d'Alpha Corp")}</h1>
                <Link href="/news" className='hover:text-slate-500 text-base md:text-lg p-5 flex items-center gap-3'>
                    <FaArrowCircleRight />
                    {t("Afficher toutes les actualités")}
                </Link>
            </div>
            <div className='flex justify-center items-center w-full max-md:hidden md:w-1/2 mt-5 md:mt-0'>
                <div className='flex flex-col items-center'>
                    <Image
                        src="/logo.png"
                        width={60}
                        height={60}
                        alt="Alpha Corp logo"
                    />
                    <p className='font-extrabold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-fuchsia-400'>
                        Alpha Corp
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LinkToArticles;
