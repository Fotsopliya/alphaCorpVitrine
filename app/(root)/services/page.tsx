"use client"

import LinkToArticles from '@components/LinkToArticles'
import ServiceCard from '@components/ui/ServiceCard'
import { services } from '@lib/data'
import { appWithTranslation } from 'next-i18next'
import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import { useTranslation } from 'react-i18next';

const ServicePage = () => {
  const { t } = useTranslation('common'); 
  return (
    <>
      <div className='text-center mx-[5%]'>
        <h1 className='font-extrabold text-2xl md:text-3xl p-2 uppercase'>Alpha Corp</h1>
        <p className='font-light text-xl md:text-2xl lg:text-4xl mt-4'>{t('Découvrez nos services')}</p>
        
        <div className="mb-4 text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                t("pour le développement d'applications web."),
                t("pour le développement d'application mobile."),
                t("pour le développement d'application hybride."),
                t("pour la conception de logiciel bureautique, SAAS et plus encore."),
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
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
