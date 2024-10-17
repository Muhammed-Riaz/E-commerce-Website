"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-10 bg-[rgba(0,0,0,0.8)]">
      <section className="sm:max-w-[1540px] shadow-[0_0px_12px_-5px_#6a6a6a] m-auto transition-all duration-500 ease-[cubic-bezier(.25,.8,.25,1)]">
        <div className="lg:max-w-full m-auto [padding-left:calc(var(--DTGutter_Width)/2)] [padding-right:calc(var(--DTGutter_Width)/2)] [width:var(--DTContainer)]">

          <nav className="flex items-center lg:justify-between justify-start p-4 text-white">
            <div className="flex-shrink-0 lg:mr-24">
              <Image src="/log.png" width={130} height={40} alt="logo" />
            </div>

            <ul className="hidden sm:flex sm:gap-10 font-bold text-xs">
              {['/', '/Shop', '/Product', '/About', '/Contact'].map((path, index) => (
                <li key={index} className="hover:scale-125 duration-200 hover:text-[#DDD5b7] hover:underline">
                  <Link href={path}>{path === '/' ? 'HOME' : path.replace('/', '').toUpperCase()}</Link>
                </li>
              ))}
            </ul>

            <div className="sm:flex  flex flex-col justify-center items-center space-x-2 ">
              <svg width="20" height="20" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-label="Cart">
                <path d="M49.3,19c0-1.4-0.5-2.7-1.4-3.7c-1-1-2.3-1.6-3.7-1.6h-2.9c-0.2-3.9-2.4-7.3-5.8-9.2c-3.4-1.9-7.5-1.9-10.9,0c-3.4,1.9-5.6,5.3-5.8,9.2h-3c-1.4,0-2.7,0.6-3.6,1.6c-1,1-1.5,2.3-1.5,3.7L9,49.4c-0.1,1.6,0.5,3.1,1.6,4.3c1.1,1.2,2.6,1.8,4.2,1.8h30.4c1.6,0,3.1-0.7,4.2-1.8c1.1-1.2,1.7-2.7,1.6-4.3L49.3,19z M22.6,13.6c0-2.7,1.4-5.1,3.7-6.4c2.3-1.3,5.1-1.3,7.4,0c2.3,1.3,3.7,3.8,3.7,6.4H22.6z" fill="#6a6a6a" />
              </svg>
              <span className='text-xs text-left'>CART</span>

            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none" aria-expanded={isMenuOpen} aria-label="Toggle Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white transition-all duration-300`}>
            <ul className="flex  flex-col  justify-center px-5">
              {['/', '/Shop', '/Product', '/About', '/Contact'].map((path, index) => (
                <li key={index} className="py-2 hover:text-[#DDD5b7] hover:underline">
                  <Link href={path}>{path === '/' ? 'HOME' : path.replace('/', '').toUpperCase()}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
