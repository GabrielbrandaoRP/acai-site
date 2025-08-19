import React from 'react'
import Image from "next/image"
import BatidinhaDuo from '../../assets/BatidinhaDuo.png'
const Promocoes = () => {
  return (
    <>
      <div className='flex items-center justify-between px-27 py-20
       bg-zinc-900 text-white h-[50vh] w-full rounded-b-3xl'>
        <div>
          <h1 className='text-4xl'>Promoção da semana leve 3 pague 2</h1>
        </div>
        <div>
          <Image
            src={BatidinhaDuo}
            alt="Promoção Batidinha Duo"
            quality={100}
            className="h-[250px] w-[200px] rounded-br-2xl rounded-tl-2xl"
          />
        </div>

      </div>
    </>
  )
}

export default Promocoes