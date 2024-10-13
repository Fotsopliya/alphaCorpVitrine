import React from 'react'
import {blogPosts, boardMembers} from "@lib/data";
import Image from "@node_modules/next/image";
import Link from "next/link";

const BlogCard = () => {
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {blogPosts.map((items) => {
                return (
                    <Link key={items.id} href="javascript:void(0)">
                        <div className='flex flex-col items-start p-4'>
                            <Image
                                src={items.imageUrl}
                                width={300}
                                height={300}
                                alt={items.alt}
                                className="rounded-[2rem] max-h-[360px] object-cover w-full"
                            />
                            <p className='font-bold text-xl p-2 text-fuchsia-500 text-start'>{items.title}</p>
                            <p className='font-normal px-2 text-start'>{items.content}</p>
                            <p className='font-normal p-2'>{items.date}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default BlogCard