import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const ServiceCard = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) => {
  return (
    <div className='p-3 rounded-2xl flex flex-col md:flex-row gap-5 shadow-lg'>
      <div className='w-full md:w-1/3 flex justify-center items-center'>
        <Image
          src={image}
          alt={image}
          height={120}
          width={120}
          className='w-full h-auto object-cover rounded-xl'
        />
      </div>

      <div className='w-full md:w-2/3 flex flex-col justify-between'>
        <h2 className='text-lg md:text-xl font-bold'>{title}</h2>
        <p className='text-sm md:text-base mb-3'>{desc}</p>
        <Link href={"/"}>
          <button className="text-sm md:text-lg md:p-1 rounded-full font-semibold underline flex items-center gap-2 text-blue-600 hover:text-blue-800">
            <FaArrowCircleRight />
            Lire la suite
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
