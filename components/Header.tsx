import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center py-8 md:py-4 md:justify-between items-center">
      <Image src="/img/logo.svg" alt="Logo" width={150} height={33}/>

      <nav className="hidden md:block space-x-8">
        <Link href="/nextjs">
          <a className="tracking-wide hover:text-gray-400">Next.js</a>
        </Link>
        <Link href="/tailwind">
          <a className="tracking-wide hover:text-gray-400">Tailwind</a>
        </Link>
        <Link href="/framermotion">
          <a className="tracking-wide hover:text-gray-400">Framermotion</a>
        </Link>

      </nav>
    </header>
  );
}

export default Header;