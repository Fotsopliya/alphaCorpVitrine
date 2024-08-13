"use client"

import Image from 'next/image'
import React from 'react'
import { boardMembers } from '@lib/data'
import { useSectionInView } from '@lib/hooks';

const BoardCard = () => {

    const { ref } = useSectionInView("Notre équipe dirigeante");

    return (
        <section id="Notre équipe dirigeante" ref={ref} className='mx-[5%]'>
            <h1 className='text-4xl font-bold p-10'>Dirigeant{"(e)"}s</h1>
            <div className='grid grid-cols-3 gap-2'>
                {boardMembers.map((items) => {
                    return (
                        <div className='flex justify-center p-4'>
                            <div>
                                <Image
                                    src={items.image}
                                    width={300}
                                    height={150}
                                    alt={items.alt}
                                    className="rounded-[2rem] max-h-[480px]"
                                ></Image>
                                <p className='font-normal text-lg p-2 text-fuchsia-500'>{items.name}</p>
                                <p className='font-bold px-2'>{items.role}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>

    )
}

export default BoardCard
