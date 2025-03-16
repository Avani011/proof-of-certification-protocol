import Nav3 from '@/components/Nav3'
import React from 'react'

const Issue = () => {
  return (
    <div className='flex flex-row bg gap-14'>
      <div> <Nav3 /> </div>

      <div className='flex flex-col gap-14'>
        <h1 className='head'>Issue Certificate</h1>

        <div className='flex flex-col gap-8'>

          <div className='flex flex-col gap-3'>
            <h3 className='content-main'>Event Name:</h3>
            <div className='input-div flex justify-center items-center'>
              <input type='name' name='event-name'></input>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='content-main'>Certificate Type :</h3>

            <div className='flex flex-row gap-10'>
              <label className="custom-checkbox">
                <input type="checkbox"></input>
                <span className="box"></span>
                Organiser
              </label>

              <label className="custom-checkbox">
                <input type="checkbox"></input>
                <span className="box"></span>
                Participant
              </label>

              <label className="custom-checkbox">
                <input type="checkbox"></input>
                <span className="box"></span>
                Winner
              </label>

              <label className="custom-checkbox">
                <input type="checkbox"></input>
                <span className="box"></span>
                Other
              </label>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='content-main'>Issuance Method : </h3>

            <div className='flex flex-row gap-10'>
              <label className="custom-checkbox">
                <input type="checkbox"></input>
                <span className="box"></span>
                Direct Issuance
              </label>

              <label className="custom-checkbox">
                <input type="checkbox"></input>
                <span className="box"></span>
                Generate Claim Code
              </label>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-col '>
              <p className='content-main'>Add Participants List :</p>
              <p className='ci-p'>(Must contain Participant Name and Wallet Address)</p>
            </div>

            <button className='solid-grn-btn'>
              Upload
            </button>
          </div>

          {/* <div className='flex flex-col gap-6'>

          </div> */}
        </div>

        <button className='ce-btn'>
          Issue Certificate
        </button>
      </div>
    </div>
  )
}

export default Issue