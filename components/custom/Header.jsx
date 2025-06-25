import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import SignInButton from './SignInButton'

function Header() {
  return (
    <div className='flex justify-between items-center p-4 shadow-md'>
        <Image src={'/logo.svg'} alt='logo'
        width={180}
        height={140}
        />
        <div>
            <SignInButton />
        </div>
    </div>
  )
}

export default Header