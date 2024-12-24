import React from 'react'
import img1 from '../assets/4th-1.svg'
import img2 from '../assets/4th-2.svg'
import img3 from '../assets/4th-3.svg'
import img4 from '../assets/4th-4.svg'

const Forth = () => {
  return (
    <div className='container mx-auto w-screen flex flex-row flex-wrap items-center justify-center gap-8 '>
        <div className="img-1 flex flex-col items-center justify-center gap-4">
          <img className='w-10 text-sm' src={img1} alt="img" />
          <p className='text-blue-700 font-semibold underline '>Choose your Microsoft 365</p>
        </div>
        <br />
        <div className="img-2 flex flex-col items-center justify-center gap-4">
          <img className='w-10 text-sm' src={img2} alt="img" />
          <p className='text-blue-700 font-semibold underline '>Shop Xbox</p>
        </div>
        <div className="img-3 flex flex-col items-center justify-center gap-4">
          <img className='w-10 text-sm' src={img3} alt="img" />
          <p className='text-blue-700 font-semibold underline '>Get Windows 11</p>
        </div>
        <div className="img-4 flex flex-col items-center justify-center gap-4">
          <img className='w-10 text-sm' src={img4} alt="img" />
          <p className='text-blue-700 font-semibold underline'>Explore Surface devices</p>
        </div>
    </div>
  )
}

export default Forth