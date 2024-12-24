import React from 'react'

const Hero_card = () => {
  return (
    <div className='container mx-auto flex flex-col bg-white p-4 items-start gap-4 shadow-md'>
          <h1 className='bg-yellow-400 p-2 px-4 font-semibold text-md'>New</h1>
          <h1 className='text-black font-semibold text-2xl'>Meet Surface Pro</h1>
          <p>This laptop's unrivalled flexibility and AI features like Live Captions and Cocreator, enable you to do more than you ever imagined.</p>
          <button className='bg-blue-600 text-white font-semibold p-2'>Learn more</button>
    </div>
  )
  // Because I have never done this before
}

export default Hero_card