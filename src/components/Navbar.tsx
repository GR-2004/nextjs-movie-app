'use client'

import React from 'react'
import NavbarItem from './NavbarItem'
import Link from 'next/link'
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
      <NavbarItem title="Trending" param="most-popular-movies"/>
      <NavbarItem title="Top Rated" param="top-250-movies"/>
      <Link className={`hover:text-amber-600 font-semibold ${
          !genre
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
         href={"/movie-trailer"}>Trailer</Link>
    </div>
  )
}


export default Navbar 
