import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav2 = () => {
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
        <Link href="/user">
          <h2 className="nav-link">My Certificates</h2>
        </Link>
        <Link href="/claim-certificate">
          <h2 className="nav-link">Claim Certificate</h2>
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
  );
};

export default Nav2;
