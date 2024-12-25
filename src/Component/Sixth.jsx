import React from 'react'
import Img from '../assets/6th.jpg'

const Sixth = () => {
  return (
    <div className='container mx-auto w-screen flex flex-col items-start justify-center lg:flex-row-reverse'>
        <img className='w-screen rounded-md h-screen' src={Img} alt="img" />
        <div className="sixth rounded-md bg-white flex flex-col gap-4 items-start justify-center p-4 lg:h-screen">
            <h1 className='font-bold text-2xl'>Bring the world closer with Bing Wallpaper</h1>
            <p>Download the free app and enjoy breathtaking views with a new background each day.</p>
            <button className='text-white bg-blue-700 p-2 font-semibold'>Get Bing Wallpaper</button>
        </div>

    </div>
  )
}

export default Sixth