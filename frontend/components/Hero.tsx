import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex flex-row justify-center gp-5'>
      <div className='w-1/2'>
        <Image 
            src='/hero.svg'
            alt='Hero svg'
            height={500}
            width={500}
        />
      </div>
      <div className='flex flex-col w-[500px] justify-evenly gap-1'>
        <h1 className='head'>Proof of Certification<br />Protocol</h1>
        
        <p className='content-main '>The Proof of Certification Protocol is a decentralized platform for issuing, verifying, and managing digital certificates as NFTs on the EDU-Chain blockchain. It allows issuers to create events, issue multiple types of certificates, and upload custom PFPs for authenticity.</p>
        
        <div className='flex flex-row gap-8'> 
            <button className='solid-grn-btn'>
                Subscribe
            </button>

            <button className='solid-grn-btn'>
                Get Demo
            </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
