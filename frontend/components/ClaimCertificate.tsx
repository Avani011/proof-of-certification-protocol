import React from 'react'
import Link from 'next/link'
import { toggleProfile } from '@/redux/slices/profileSlice'
import { useDispatch } from 'react-redux'

const ClaimCertificate = () => {
    const dispatch = useDispatch()

  return (
    <div>
      <div className='flex flex-col popup'>
            <div className='items-end'>
                <button className="text-white" onClick={() => dispatch(toggleProfile()) }>
                ✖
                </button>
            </div>

            <div className='flex flex-col gap-16 justify-center items-center'>
                <h1 className='head'>Claim Certififcate</h1>

                <div className='flex flex-col gap-6 items-center'>
                    <h2 className='content-main'>Enter your Claim Code</h2>
                    <div className='input-div flex justify-center items-center'>
                        <input className='input w-64' type='text' name='CODE'></input>
                    </div>
                </div>

                <Link href="/claim-certificate">
                    <button className='solid-btn'>
                        CLAIM
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ClaimCertificate
