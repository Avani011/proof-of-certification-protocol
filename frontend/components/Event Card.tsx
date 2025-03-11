import React from 'react'
import Image from 'next/image'

const EventCard = () => {
  return (
    <div className='cc p-4 flex flex-col gap-4'>
            <div className='flex justify-end'>
                <Image src='/option.svg' alt='options' height={20} width={20} />
            </div>

            <Image 
            src='/cc.svg'
            alt="certificate-image"
            height={200}
            width={280}
            />
    
            <h2 className="cc-head">Hack IT Sapiens</h2>
    
            <div className="flex flex-row justify-between">
                <div className="cc-tag-div flex items-center justify-center">
                    <h2 className="cc-tag">600</h2>
                </div>
    
                <div className="cc-tag-div flex items-center justify-center">
                    <h2 className="cc-tag">15-04-23</h2>
                </div>    
            </div>
        </div>
  )
}

export default EventCard
