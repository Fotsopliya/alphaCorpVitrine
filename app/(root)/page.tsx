import dynamic from 'next/dynamic';
// import LandingContent from '@components/LandingContent'
// import LandingHero from '@components/LandingHero'
import LinkToArticles from '@components/LinkToArticles'
import React from 'react'

const LandingContent = dynamic(() => import('@components/LandingContent'));
const LandingHero = dynamic(() => import('@components/LandingHero'));

function Home() {
  return (
    <section className=' my-20'>
      <LandingHero />
      <LandingContent />
      <div className='h-[1px] bg-black mx-[3%] my-20'></div>

      <LinkToArticles />
    </section>
  )
}

export default Home;
