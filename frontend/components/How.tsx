import React from 'react'

const How = () => {
  return (
    <div className='flex how flex-col items-center justify-center gap-24 py-0'>
      <h1 className='head'>How It Works</h1>

      <div className='flex flex-row gap-28'>
        <div className='flex flex-row gap-28'>
            <div className='flex flex-col gap-4 justify-center items-center f-div px-7'>
                <h3 className='content-main'>User</h3>
                <p className='fp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, optio. Asperiores commodi tempore minus accusamus iste ratione delectus recusandae blanditiis nostrum beatae nemo, perferendis magni corrupti deleniti libero, quibusdam molestiae!</p>
            </div>

            <div className='flex flex-col gap-4 justify-center items-center f-div px-7'>
                <h3 className='content-main'>Issuer</h3>
                <p className='fp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, optio. Asperiores commodi tempore minus accusamus iste ratione delectus recusandae blanditiis nostrum beatae nemo, perferendis magni corrupti deleniti libero, quibusdam molestiae!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default How
