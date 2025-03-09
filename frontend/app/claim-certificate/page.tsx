import React from 'react'
import Nav2 from '@/components/Nav2'

const Claim = () => {
  return (
    <div className=' bg flex flex-row gap-10'>
        <div className='w-[15%]'>
            <Nav2 />
        </div>

        <div className='flex flex-col gap-10 py-8 px-8'>
            <h1 className='head'>Claim Certificate</h1>

            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                    <div className='plus-btn'></div> {/* // Add Certificate Image here */}

                    <div className='flex flex-col gap-2'>
                        <h2 className='content-main'>Event Name: Hack IT Sapiens</h2>
                        <h2 className='content-main'>Certificate Type: Organiser</h2>
                        <h2 className='content-main'>Issued By: Kartikey Garg</h2>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='content-main'>Verify Your Name:</h2>
                        <div className='input-div flex justify-cenetr items-center'>
                            <input className='input w-64' type='text' name='name'></input>
                        </div>
                    </div>
                </div>

                <button className='solid-btn'> Connect Wallet & Claim</button>
            </div>

        </div>
    </div>
  )
}

export default Claim
