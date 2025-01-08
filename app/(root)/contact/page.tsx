import dynamic from 'next/dynamic';
// import LinkToArticles from '@components/LinkToArticles'
import React from 'react'

const Contact = dynamic(() => import('@components/Contact'), { ssr: true, });
const LinkToArticles = dynamic(() => import('@components/LinkToArticles'), { ssr: true });


const Page = () => {
    return (
        <section className='my-20'>
            <div className='px-[7%]'>
                <Contact />
            </div>
            <div className='h-[1px] bg-black mx-[3%] my-20'></div>
            <LinkToArticles />
        </section>
    )
}

export default Page
