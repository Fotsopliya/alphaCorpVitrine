import React from 'react';
import LandingCard from './ui/LandingCard';
import Image from 'next/image';
import ServiceCard from './ui/ServiceCard';
import { services } from '@lib/data';

const LandingContent = () => {
    return (
        <section>
            <div className='flex flex-col text-center m-4 md:m-12 p-4'>
                <div className='flex flex-col items-center justify-center'>
                    <Image
                        src="/logo.png"
                        width={60}
                        height={60}
                        alt="Alpha Corp logo"
                        className='animate-spin-flip'
                    />
                    <h1 className='font-extrabold p-5 uppercase text-2xl md:text-4xl'>Alpha Corp</h1>
                </div>
                <p className='text-base md:text-2xl lg:text-3xl font-light w-full md:w-[80%] lg:w-[60%] self-center'>
                    Alpha Corp élabore des solutions informatiques (web, SAAS, logistiques, etc) sur mesure, pour permettre à ses bénéficiaires de développer leur activité et d'atteindre leurs objectifs.
                </p>
            </div>

            <section className='bg-gradient-to-br from-sky-50 via-indigo-100 to-fuchsia-300 p-5'>
                <div className='mx-[3%] py-5'>
                    <h1 className='text-2xl md:text-3xl font-extrabold text-center py-5'>
                        Nos services <span className='text-fuchsia-500'>informatiques exclusifs</span>
                    </h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 p-3 md:p-5'>
                        {services.map((item) => (
                            <ServiceCard key={item.title} title={item.title} desc={item.desc} image={item.image} />
                        ))}
                    </div>
                </div>
            </section>

            <div className='mx-[3%] my-6'>
                <LandingCard />
            </div>
        </section>
    );
};

export default LandingContent;
