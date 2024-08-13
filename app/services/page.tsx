"use client"
import LinkToArticles from '@components/LinkToArticles'
import ServiceCard from '@components/ui/ServiceCard'
import { services } from '@lib/data'
import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const ServicePage = () => {
  return (
    <>
      <div className='text-center mx-[5%]'>
        <h1 className='font-extrabold text-3xl p-2 uppercase'>Alpha Corp</h1>
        <p className='font-light text-4xl mt-4'>Découvrez nos services
        </p>
        <div className="mb-4 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "pour le développement d'application web.",
                "pour le développement d'application mobile.",
                "pour le développement d'application hybride.",
                "pour la conception de logicielle bureautique, SAAS et plus encore.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className='grid grid-cols-3 gap-7 p-5'>
          {services.map((items) => {
            return (
              <ServiceCard key={items.title} title={items.title} desc={items.desc} image={items.image} />
            )
          })}
        </div>

      </div>
      <div className='h-[1px] bg-black mx-[3%] my-20'></div>
      <LinkToArticles />
    </>
  )
}

export default ServicePage
