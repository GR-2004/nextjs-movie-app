import React from 'react'
import Card from './Card'

const Result = ({result}:any) => {
  if(!result || !result.movies){
    return (
      <div className='flex justify-center'>
        <h1>Something went wrong. Please try again later.</h1>
      </div>
    )
  }
  console.log(result.movies[0])
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl mx-auto py-4'>
      {
        result && result.movies && result.movies.map((res:any, index:number) => (
          <Card key={index} result={res} />
        ))
      }
    </div>
  )
}

export default Result
