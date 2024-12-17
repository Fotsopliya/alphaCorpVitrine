"use client"

import React, { useState, useEffect } from 'react'
import BlogCard from "@components/ui/BlogCard";
import Loader from '@components/Loader';

const NewsPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simuler le chargement des données
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }
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
