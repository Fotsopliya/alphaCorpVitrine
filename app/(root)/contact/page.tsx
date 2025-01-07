import dynamic from 'next/dynamic';
import LinkToArticles from '@components/LinkToArticles'
import React from 'react'

const Contact = dynamic(() => import('@components/Contact'));

const ContactPage = () => {
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

export default ContactPage
