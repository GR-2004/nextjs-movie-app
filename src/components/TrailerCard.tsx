import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiThumbsUp } from "react-icons/fi";

const TrailerCard = ({ result }: any) => {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={result.videoLink}>
        <Image 
          src={result.image}  // Directly use the absolute URL from result.image
          alt={result.title} 
          width={500} 
          height={300} 
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-200'
        />
        <div className="p-2">
            <p>{result.trailerLength}</p>
            <h2 className='text-lg font-bold truncate'>{result.title}</h2>
            <p className='flex items-center'>
                {result.releaseDate}
            </p>
        </div>
      </Link>
    </div>
  )
}

export default TrailerCard;
