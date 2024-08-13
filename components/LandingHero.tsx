"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const LandingHero = () => {
    return (
        <div className='px-[7%] grid-cols-2 flex justify-between items-center'>
            <div className='w-1/2 p-7 text-4xl'>
                <h1 className='font-extrabold p-2 uppercase'>Alpha Corp</h1>
                <p className='font-light mt-4'>Analyse et conception de votre
                </p>
                <div className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "solution logicielle selon vos besoins spécifiques.",
                                "solution web selon vos besoins spécifiques.",
                                "solution mobile selon vos besoins spécifiques.",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <Link href={"/"}>
                    <button className="md:text-lg p-1 md:p-4 text-white rounded-full font-semibold bg-blue-600 hover:bg-blue-800">
                        En savoir plus
                    </button>
                </Link>
            </div>
            <Image
                src="/bg1.jpg"
                width={600}
                height={1500}
                alt="Alpha Corp logo"
                className="rounded-[2rem]"
            ></Image>
        </div>

        // {/* <CarouselComponent images={images} texts={texts} /> */}

    )
}

export default LandingHero
