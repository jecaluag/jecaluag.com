import React from 'react'

const Noise = (): JSX.Element => {
  return (
    <div 
      className='fixed w-full h-screen bg-auto bg-repeat mix-blend-overlay opacity-40'
      style={{
        backgroundImage: `url('/images/noise.png')`,
      }}
    />
  )
}

export default Noise