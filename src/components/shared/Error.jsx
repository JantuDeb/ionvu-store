import React from 'react'

const Error = ({error}) => {
  return (
    <div className='card flex center p-4 radius-md'>
        <p className='text-red'>{error}</p>
    </div>
  )
}

export default Error