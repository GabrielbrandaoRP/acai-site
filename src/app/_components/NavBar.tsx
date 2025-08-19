import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <>
    <header className="flex justify-between items-center px-5 py-2 bg-[#9400D3] h-24">
        <Link href="/"><h1 className="font-bold text-2xl">Logo</h1></Link>
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