import paths from '@/constants/routePath';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="text-white w-full absolute z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className='font-bold text-3xl' href={paths.home}>BTM SPACE</Link>
        <div className='space-x-4 text-xl'>
        <Link href={paths.performance}>Performance</Link>
        <Link href={paths.reliability}>Reliability</Link>
        <Link href={paths.scale}>Scale</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
