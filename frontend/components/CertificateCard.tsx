import Image from "next/image"
import Link from "next/link"

const CertificateCard = () => {
  return (
    <div className='cc p-4 flex flex-col gap-4'>
        <Image 
        src='/cc.svg'
        alt="certificate-image"
        height={200}
        width={280}
        />

        <h2 className="cc-head">Hack IT Sapiens</h2>

        <div className="flex flex-row justify-between">
            <div className="cc-tag-div flex items-center justify-center">
                <h2 className="cc-tag">Winner</h2>
            </div>

            <div className="cc-tag-div flex items-center justify-center">
                <h2 className="cc-tag">15-04-23</h2>
            </div>    
        </div>
    </div>
  )
}

export default CertificateCard
