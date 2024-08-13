import React from 'react'
import LandingCard from './ui/LandingCard'
import Image from 'next/image'
import LinkToArticles from './LinkToArticles'
import ServiceCard from './ui/ServiceCard'
import { services } from '@lib/data'

const LandingContent = () => {
    return (
        <section>
            <div className='flex flex-col text-center m-12 p-4'>
                <div className='flex items-center justify-center'>
                    <Image
                        src="/logo.png"
                        width={60}
                        height={60}
                        alt="Alpha Corp logo"
                        className='animate-spin-flip'
                    />
                    <h1 className='font-extrabold p-5 uppercase text-4xl'>Alpha Corp</h1>
                </div>
                <p className='text-3xl font-light w-[60%] self-center'>Alpha Corp élabore des solutions informatiques (web, SAAS, logistiques, etc) sur mesure, pour permettre à ses bénéficières de dévélopper leur activités et d'atteindre leur objectifs.</p>
            </div>
            <section className='bg-gradient-to-br from-sky-50 via-indigo-100 to-fuchsia-300 p-5'>
                <div className='mx-[3%] py-5'>
                    <h1 className='text-3xl font-extrabold text-center py-5'>Nos services <span className='text-fuchsia-500'>informatiques exclusifs</span> </h1>
                    <div className='grid grid-cols-3 gap-7 p-5'>
                        {services.map((items) => {
                            return (
                                <ServiceCard key={items.title} title={items.title} desc={items.desc} image={items.image} />
                            )
                        })}
                    </div>
                </div>

            </section>

            <div className='mx-[3%]'>
                <LandingCard />
            </div>


        </section>

    )
}

export default LandingContent
