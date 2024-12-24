import React from 'react'
import Img1 from '../assets/7th-1.avif'
import Img2 from '../assets/7th-2.webp'
import Img3 from '../assets/7th-3.webp'

const Seventh = () => {
  return (
    <div className='container mx-auto p-4 flex flex-col gap-2
    '>
        <h1>Follow Microsoft</h1>
        <div className="seventh flex flex-row gap-4 justify-start items-center">
            <img className='w-8' src={Img1} alt="" />
            <img className='w-8' src={Img2} alt="" />
            <img className='w-8' src={Img3} alt="" />
        </div>
        <div className="btn flex items-center justify-end">
        <button className='p-2 bg-gray-300 text-black font-semibold'>⬆️ Back to top</button>
        </div>
    </div>
  )
}

export default Seventh