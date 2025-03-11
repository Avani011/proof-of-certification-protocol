import React from 'react'
import Nav3 from '@/components/Nav3'
import Image from 'next/image'

const Event = () => {
  return (
    <div className='bg flex flex-row gap-14'>
        <div className='w-[15%]'>
            <Nav3 />
        </div>

        <div className='flex flex-col gap-14'>
            <h1 className='head'>Create Event</h1>

            <div className='flex flex-row gap-28'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <p className='content-main '>Event Name: </p>

                        <div className='input-div flex justify-center items-center'>
                            <input className='w-64' type='text' name='name' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <p className='content-main '>Event Description: </p>

                        <div className='input-div flex justify-center items-center'>
                            <input className='w-64' type='text' name='description' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <p className='content-main '>Event Date: </p>

                        <div className='input-div flex justify-center items-center'>
                            <input className='w-64' type='text' name='date' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <p className='content-main'>Upload Custom PFP :</p>

                        <button className='solid-grn-btn'>
                            Upload
                        </button>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='content-main'>Preview:</p>
                    <Image 
                        src='/cc.svg'
                        alt='certificate image'
                        height={200}
                        width={280}
                    />
                </div>
            </div>

            <button className='ce-btn '>Create Event</button>

        </div>
    </div>
  )
}

export default Event
