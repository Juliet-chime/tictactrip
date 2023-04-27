import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loader = (props:any) => {
  return (
    <div className='loader_wrapper'>
        <RotatingLines
         visible={true}
         strokeColor="#8de8fe"
         strokeWidth="5"
         animationDuration="0.75"
         width="80"
         {...props}
          />
    </div>
  )
}

export default Loader