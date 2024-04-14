import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiThumbsUp} from "react-icons/fi"



const Card = ({result}:any) => {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={''}>
        <Image src={`${result.image}`} alt={`${result.title}`} width={500} height={300} className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-200'></Image>
        <div className="p-2">
            <p>{result.timeline}</p>
            <h2 className='text-lg font-bold truncate'>{result.title}</h2>
            <p className='flex items-center'>
                {result.year}
                <FiThumbsUp  className='h-5 ml-3 mr-3'/>
                {result.rating}
            </p>
        </div>
      </Link>
    </div>
  )
}

export default Card
{/* {
  title: 'Godzilla x Kong: The New Empire',
  year: '2024',
  timeline: '1h 55m',
  rating: '6.5 (31K)',
  image: 'https://m.media-amazon.com/images/M/MV5BY2QwOGE2NGQtMWQwNi00M2IzLThlNWItYWMzNGQ5YWNiZDA4XkEyXkFqcGdeQXVyNTE1NjY5Mg@@.300_.jpg' */}
{/* } */}
