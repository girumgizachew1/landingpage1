import React from 'react'
import Image from 'next/image'
function navbar() {
  return (
    <div className='flex flex-row justify-between w-full px-20 z-50 fixed py-8'>
        <div className='flex flex-row space-x-12 font-serif font-extralight' style={{ fontFamily: 'cursive ' }}>
    <Image src='/d.png' alt='image' width={80} height={40} objectFit='cover' className='-mt-8' />
    <a href='/' className='hover:text-gray-400 transition-colors duration-300 border-b-2 border-transparent hover:border-gray-400 pb-1'>Home</a>
    <a href='/about' className='hover:text-gray-400 transition-colors duration-300 border-b-2 border-transparent hover:border-gray-400 pb-1'>About</a>
    <a href='/contact' className='hover:text-gray-400 transition-colors duration-300 border-b-2 border-transparent hover:border-gray-400 pb-1'>Contact</a>
    <a href='/products' className='hover:text-gray-400 transition-colors duration-300 border-b-2 border-transparent hover:border-gray-400 pb-1'>Products</a>
</div>
        <div>
        <button className='bg-zinc-100 text-black px-6 py-2 rounded-sm font-serif font-extralight hover:bg-zinc-900 hover:text-white transition-colors duration-300' style={{ fontFamily: 'cursive' }}>Contact us</button>
        </div>

    </div>
  )
}

export default navbar