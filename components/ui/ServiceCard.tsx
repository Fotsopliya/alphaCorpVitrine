import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'

const ServiceCard = ({
    title,
    desc,
    image,
}: {
    title: string
    desc: string
    image: string
}) => {
    return (
        <div className='p-3 rounded-2xl flex gap-5 shadow-lg'>
            <div className='w-1/2 flex justify-center'>
                <Image
                    src={image}
                    alt={image}
                    height={60}
                    width={60}
                    className='w-full'
                />
            </div>

            <div className='w-1/2'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <p>{desc}</p>
                <Link href={"/"}>
                    <button className="md:text-lg md:p-1 rounded-full font-semibold underline flex items-center gap-2 text-blue-600 hover:text-blue-800">
                        <FaArrowCircleRight />
                        Lire la suite
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ServiceCard
