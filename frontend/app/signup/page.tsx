"use client"; 
import Image from 'next/image';
import Profile from '@/components/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProfile } from '@/redux/slices/profileSlice';
import { RootState } from '@/redux/store';

const SignUp = () => {

  const dispatch = useDispatch();
  const showProfile = useSelector((state: RootState) => state.profile.showProfile);

  return (
    <div className='bg flex flex-col gap-12 justify-center items-center'>
      <h1 className='head'>Sign Up</h1>

      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-4'>

          <p className='content-main '>Enter your Mail ID : </p>

          <div className='input-div flex justify-center items-center'>
            <input className='w-64' type='text' name='email id' />
          </div>

          </div>

          <div className='flex flex-col gap-8'>

          <div className='flex flex-col gap-4'>
            <p className='content-main '>Enter your Password : </p>

            <div className='input-div flex justify-center items-center'>
              <input className='w-64' type='text' name='password' />
            </div>
          </div>

          <div className='flex justify-center items-center signup-container'>
            <button
            onClick={() => dispatch(toggleProfile())}
            className='solid-btn'>
              Sign Up
            </button>

            {showProfile && (
              <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
                <div className="bg-black p-8 rounded-lg shadow-lg w-[80%] h-[80%]">
                  <Profile />
                </div>
              </div>
            )}
          </div>

          </div>
      </div>

      <div className='flex flex-row gap-3 items-center'>
        <div className='line'></div>
        <p className='or'>OR</p>
        <div className='line'></div>
      </div>

      <div className='flex flex-row gap-8'>
        <Image 
            src='/Google.svg'
            alt='google icon'
            height={35}
            width={35}
        />

        <Image 
            src='/metamask.svg'
            alt='google icon'
            height={35}
            width={35}
        />
      </div>

    </div>
  )
}

export default SignUp
