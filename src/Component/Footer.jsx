import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100 text-gray-600 px-4 py-8 flex flex-col gap-4'>
        <ul className='flex flex-col gap-3'>
            <h1 className='font-semibold'>What's New</h1>
            <li className='text-xs'>Surface Pro</li>
            <li className='text-xs'>Surface Laptop</li>
            <li className='text-xs'>Microsoft Copilot</li>
            <li className='text-xs'>Microsoft 365</li>
            <li className='text-xs'>Explore Microsoft Products</li>
            <li className='text-xs'>Windows 11 apps</li>
        </ul>
        <div className="copyright flex flex-row items-center justify-center">
        <p className='text-xs'>@Microsoft2024</p>
        </div>
    </div>
  )
}

export default Footer