
import Contact from '@components/Contact'
import LinkToArticles from '@components/LinkToArticles'
import React from 'react'

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
