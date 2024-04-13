import React from 'react'


const Result = ({result}:any) => {
  return (
    <div>
      {
        result && result.movies && result.movies.map((res:any, index:number) => (
          <div key={index}>
            <h2>{res.title}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Result
