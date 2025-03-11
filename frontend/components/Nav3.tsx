import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Nav3 = () => {
  return (
    <nav className="nav-2 py-14 px-6 h-screen flex flex-col items-center gap-14">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={200} height={100} />
      </Link>

      {/* Navigation Links */}
      <div className="flex flex-col w-full">
        <Link href="/">
          <h2 className="nav-link">Connect Wallet</h2>
        </Link>
        <Link href="/issuer">
          <h2 className="nav-link">My Events</h2>
        </Link>
        <Link href="/claim-certificate">
          <h2 className="nav-link">Issue Certificate</h2>
        </Link>
      </div>

      {/* Pushes Logout to the Bottom */}
      <div className="flex-grow"></div>

      {/* Logout */}
      <div className="link w-full">
        <Link href="/" className="flex flex-row justify-center">
          <h2 className="nav-link">Logout</h2>
        </Link>
      </div>
    </nav>
  )
}

export default Nav3
