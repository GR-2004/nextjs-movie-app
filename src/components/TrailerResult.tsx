import React from 'react'
import Card from './Card'
import TrailerCard from './TrailerCard'

const TrailerResult = ({result}:any) => {
  if(!result || !result.trailers){
    return (
      <div className='flex justify-center'>
        <h1>Something went wrong. Please try again later.</h1>
      </div>
    )
  }
  console.log(result.trailers[0])
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl mx-auto py-4'>
      {
        result && result.trailers && result.trailers.map((res:any, index:number) => (
          <TrailerCard key={index} result={res} />
        ))
      }
    </div>
  )
}

export default TrailerResult
