import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LandingCard = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5 m-5 md:m-10 items-center text-white bg-slate-800 rounded-[2rem]'>
      <div className='flex flex-col gap-2 w-full md:w-1/2 p-5'>
        <h1 className='text-xl md:text-2xl font-extrabold'>Nous prenons du plaisir à vous servir</h1>
        <p className='text-base md:text-lg font-medium'>
          Nous sommes proches et à l'écoute de nos clients. Vos besoins notre combat quotidien que vous soyez une institution ou un individualiste, <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-fuchsia-400'>ALPHA CORP</span> est à votre porte.
        </p>
        <Link href={"/"}>
          <button className="text-base md:text-lg my-3 p-2 md:p-3 text-black rounded-full font-semibold bg-slate-100 hover:bg-slate-300">
            En savoir plus
          </button>
        </Link>
      </div>
      <div className='flex w-full md:w-1/2'>
        <Image
          src="/im1.jpg"
          width={600}
          height={1000}
          alt="Alpha Corp"
          className="rounded-b-[2rem] md:rounded-r-[2rem] md:rounded-bl-none w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default LandingCard;
