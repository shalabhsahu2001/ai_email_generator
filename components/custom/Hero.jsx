import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 xl:px-56 flex flex-col items-center mt-24'>
      <h2 className='font-extrabold text-5xl text-center'>
        AI-Powered 
        <span className='text-primary'>
          Email Templates
        </span>
      </h2>
      <p className='text-center mt-4'>Longing to impress clients with AI Powered emails but do not have time to build them on your own
        ? Use AI Powered email templates that already have AI Generated images and copy -- save time on email
        Production with us.
      </p>
      <div className='flex gap-5 mt-6'>
        <Button variant="outline">Try Demo</Button>
        <Button>Get Started</Button>
      </div>
      <Image src={'/landing.png'} alt='landing' 
      width={1000} height={800}
      className='mt-1 rounded-xl'/>
    </div>
  )
}

export default Hero