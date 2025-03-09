"use client"
import CertificateCard from '@/components/CertificateCard'
import ClaimCertificate from '@/components/ClaimCertificate';
import Nav2 from '@/components/Nav2'
import { toggleProfile } from '@/redux/slices/profileSlice';
import { RootState } from '@/redux/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
    const dispatch = useDispatch()
    const showClaim = useSelector((state: RootState) => state.profile.showProfile)

  return (
    <div className='bg flex flex-row gap-14'>
        <div className='w-[15%]'>
            <Nav2 />
        </div>
       
        <div className='flex flex-col gap-14 py-8 px-8'>
            <h1 className='head'>User Dashboard</h1>
            <div className='flex flex-row gap-6'>
                <CertificateCard />
                <div className='cc p-4 flex flex-col items-center gap-4'>
                    
                    <button onClick={() => dispatch(toggleProfile())} className='plus-btn'>
                        +
                    </button>

                    {showClaim && (
                        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
                            <div className="bg-black p-8 rounded-lg shadow-lg w-[80%] h-[80%]">
                                <ClaimCertificate />
                            </div>
                        </div>
                    )}
                
                    <h2 className="cc-head">----- Claim Certificates -----</h2>
                
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default User
