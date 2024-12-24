import React from 'react'
import Img1 from './assets/5th-1.webp'
import Img2 from './assets/5th-2.webp'
import Img3 from './assets/5th-3.avif'
import Img4 from './assets/5th-4.avif'


const Fifth = () => {
  return (
    <div className='container mx-auto w-screen flex flex-col p-4  gap-8 shadow-lg rounded-md '>
        <div className="fifth1 flex flex-col gap-4 ">
        <img src={Img1} alt="img" />
        <h1 className='font-semibold text-2xl '>Xbox Series X</h1>
        <p>The fastest most Shop Shop Xbox Series X</p>
        <button className='w-fit p-2 bg-blue-700 text-white'>Shop Xbox Series X</button>
        </div>
        <div className="fifth2 flex flex-col gap-4">
        <img src={Img2} alt="img" />
        <h1 className='font-semibold text-2xl '>Xbox Series S</h1>
        <p>Next-gen performance in the smallest Xbox ever.</p>
        <button className='w-fit p-2 bg-blue-700 text-white'>Join Now</button>
        </div>
        <div className="fifth3 flex flex-col gap-4">
        <img src={Img3} alt="img" />
        <h1 className='font-semibold text-2xl '>Game Pass</h1>
        <p>Play new games on day one. Plus, enjoy hundreds of high-quality games with friends on console and PC.</p>
        <button className='w-fit p-2 bg-blue-700 text-white'>Join Now</button>
        </div>
        <div className="fifth4 flex flex-col gap-4">
        <img src={Img4} alt="img" />
        <h1 className='font-semibold text-2xl '>Maximise the everyday with Microsoft 365</h1>
        <p>Get online protection, secure cloud storage and innovative apps designed to fit your needs-all in one plan.</p>
        <button className='w-fit p-2 bg-blue-700 text-white'>For one person</button>
        <p className='text-blue-700 font-semibold'>For up to six people ›</p>
        </div>
    </div>
  )
}

export default Fifth