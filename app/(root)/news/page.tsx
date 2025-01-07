
import React from 'react'
import BlogCard from "@components/ui/BlogCard";

const NewsPage = () => {
    return (
        <div className='mx-[5%]'>
            <h1 className='text-4xl font-bold p-10 text-gray-600'>Newsroom</h1>
            <h2 className='text-2xl font-bold p-10 text-gray-600'>À LA UNE</h2>
            <div>
                <BlogCard/>
            </div>
        </div>
    )
}

export default NewsPage
