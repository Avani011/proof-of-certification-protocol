import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className='flex flex-row justify-between'>
      <Image 
        src='/logo.svg'
        alt='Logo'
        width={360}
        height={88}
      />
      
      <Link href='/signup'>
        <button className='btn' >
          SignUp / SignIn   </button>
      </Link>
    </div>
  )
}

export default Nav
