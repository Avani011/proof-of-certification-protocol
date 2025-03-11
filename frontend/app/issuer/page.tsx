"use client"
import Nav3 from '@/components/Nav3'
import EventCard from '@/components/Event Card'
import Link from 'next/link'

const Issuer = () => {

  return (
    <div className='bg flex flex-row gap-14'>
        <div className='w-[15%]'>
            <Nav3 />
        </div>
       
        <div className='flex flex-col gap-14 py-8 px-8'>
            <h1 className='head'>Issuer Dashboard</h1>
            <div className='flex flex-row gap-6'>

                <EventCard />
                
                <div className='cc p-4 flex flex-col items-center gap-4'>
                    
                    <Link href='/create-event'>
                        <button className='plus-btn'>
                            +
                        </button>
                    </Link>
                
                    <h2 className="cc-head">----- Create Event -----</h2>
                
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Issuer
