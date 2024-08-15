"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import TypewriterComponent from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

function LandingHero() {
    const { t } = useTranslation('common');
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const typewriterStrings = t('TypewriterStrings', { returnObjects: true }) as string[];

    return (
        <div className='px-4 md:px-[7%] flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full md:w-1/2 p-4 md:p-7 text-2xl md:text-4xl'>
                <h1 className='font-extrabold p-2 uppercase text-3xl md:text-5xl'>Alpha Corp</h1>
                <p className='font-light mt-4 text-lg md:text-xl'>{t('Analyse et conception de votre')}</p>
                {hasMounted && (
                    <div className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        <TypewriterComponent
                            options={{
                                strings: typewriterStrings,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                )}
                <Link href={"/"}>
                    <button className="text-sm md:text-lg p-2 md:p-4 text-white rounded-full font-semibold bg-blue-600 hover:bg-blue-800">
                        {t('En savoir plus')}
                    </button>
                </Link>
            </div>
            <div className='w-full md:w-1/2 mt-8 md:mt-0 flex justify-center'>
                <Image
                    src="/bg1.jpg"
                    width={600}
                    height={1500}
                    alt="Alpha Corp logo"
                    className="rounded-[2rem] max-w-full h-auto"
                />
            </div>
        </div>
    );
}

export default LandingHero;
