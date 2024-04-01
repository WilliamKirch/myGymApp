/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4 uppercase'>
            <p>it's time to get</p>
            <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>swole<span className='text-blue-400'>normous</span></h1>
        </div>
            <p className='text-sm: md:text-base font-light'>I hereby acknowledge that I may become<span className='text-blue-400 font-medium'> unbelievable swolenormous</span> and accept all risks of becoming the local<span className='text-blue-400 font-medium'> mass monstrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
            <Button func={() => {
                window.location.href='#generate'
            }} text = {'Accept & Begin'}></Button>
    </div>
  )
}
