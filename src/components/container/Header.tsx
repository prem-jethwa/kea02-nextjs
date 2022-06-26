import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
const logo = 'icons/logo.png';

const menuItems = [
  {
    name: 'Menu One',
    link: '/',
  },
  {
    name: 'Menu Two',
    link: '/',
  },
  {
    name: 'Menu Three',
    link: '/',
  },
  {
    name: 'Menu Four',
    link: '/',
  },
];

const Header = (props: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const headerRef = useRef(null);
  useOutsideClick(headerRef, () => setShowMenu(false));

  return (
    <>
      <header
        ref={headerRef}
        className="flex flex-row md:flex p-6 justify-between text-primary-font items-center md:px-4 w-full mt-4 md:mt-0 m-auto pt-2 max-w-7xl"
      >
        <div className="flex md:justify-start justify-between md:flex md:items-end w-full md:py-4 md:pb-10 relative">
          {/* <img
            src={logo}
            width="100"
            height={50}
            alt="Daily Dev Tips Logo"
            className=" md:mr-20 h-10 pb-2"
          /> */}
          <h2 className=" text-4xl mr-5 ">Kea 02</h2>

          <span
            className="hover:bg-slate-100 bg-slate-50 p-2 md:hidden select-none cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
          </span>
          <nav
            className={`md:flex absolute right-0 top-10 md:top-0 px-4 md:p-0 bg-slate-50 z-50 md:relative 
                        flex-wrap md:bg-transparent items-center select-none justify-around  ${
                          showMenu ? '' : 'hidden'
                        }`}
          >
            {menuItems.map((menu, idx) => {
              return (
                <div
                  key={menu.name + idx}
                  className="hover:underline rounded m-4 md:m-0 md:mx-4"
                >
                  <Link href={menu.link}>{menu.name}</Link>
                </div>
              );
            })}
            <div className="bg-slate-100 p-2 md:hidden text-center m-4 md:m-0 md:mx-4">
              Profile
            </div>
          </nav>
        </div>
        <div className="hidden md:flex md:self-center self-start p-2 order-3 bg-slate-100 md:order-1">
          Profile
        </div>
      </header>
    </>
  );
};

export default Header;
