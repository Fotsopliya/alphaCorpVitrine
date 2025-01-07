
import Image from 'next/image'
import React from 'react'
import { boardMembers } from '@lib/data'

const BoardCard = () => {

    return (

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {boardMembers.map((items) => {
                    return (
                        <div key={items.name} className='flex flex-col items-center p-4'>
                            <Image
                                src={items.image}
                                width={300}
                                height={300}
                                alt={items.alt}
                                className="rounded-[2rem] max-h-[360px] object-cover w-full"
                            />
                            <p className='font-normal text-lg p-2 text-fuchsia-500 text-center'>{items.name}</p>
                            <p className='font-bold px-2 text-center'>{items.role}</p>
                        </div>
                    )
                })}
            </div>

    )
}

export default BoardCard
 