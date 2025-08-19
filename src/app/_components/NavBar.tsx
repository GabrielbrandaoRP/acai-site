import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo_sem_circulo from "@/assets/logo_sem_circulo.svg"

const NavBar = () => {
  return (
    <>
      <header className="flex justify-between items-center px-5 py-4 bg-[#9400D3] h-24">
        <div className=''>
        <Link href="/"><Image src={logo_sem_circulo} alt='Batidinha de açaí' quality={100} width={230} height={100}/></Link>

        </div>
        <nav>
          <ul className=" flex gap-10 list-style-type:none text-white font-medium text-xl">
            <li><Link href="/">Quem somos</Link></li>
            <li><Link href="/cardapio">Produtos</Link></li>
            <li><Link href="/">Contato</Link></li>
          </ul>
        </nav>
        </header>
    </>
  )
}

export default NavBar