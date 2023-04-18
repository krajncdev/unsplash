import { Link } from 'react-router-dom';

import { NavbarElements, Search, HamburgerMenu, HamburgerMenuBig } from './';
import { state } from '../store';

import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';
import notification from '../assets/notification.svg';

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center gap-4 justify-center p-2'>
        <Link
          to='/'
          className=' flex-shrink-0'
          onClick={() => {
            state.active = 'editorial';
          }}
        >
          <img src={logo} alt='unsplash-logo' className='h-7 md:h-8' />
        </Link>
        <Search custom_styling='bg-backgroundgray rounded-3xl border border-transparent hover:border-bordergray px-2 py-1.5' />

        <ul className='lg:gap-6 text-sm text-darkgray hidden lg:flex lg:mx-4'>
          <li className='hover:text-black duration-100 ease-in transition'>
            <a href=''>Advertise</a>
          </li>
          <li className='hover:text-black duration-100 ease-in transition'>
            <a href=''>Blog</a>
          </li>
          <li className='hover:text-black duration-100 ease-in transition'>
            <a href=''>Unsplash+</a>
          </li>
        </ul>

        <button className='hidden md:block rounded-md bg-backgroundgray text-darkgray px-2 py-1.5 whitespace-nowrap text-sm'>
          Submit a photo
        </button>

        <button className='flex-shrink-0 hidden md:block'>
          <img
            src={notification}
            alt='notification-bell-logo'
            className='h-6 aspect-square '
          />
        </button>

        <button
          className='flex-shrink-0'
          onClick={() => {
            state.hamburgerActive = !state.hamburgerActive;
          }}
        >
          <img
            src={hamburger}
            alt='hamburger-logo'
            className='h-7 aspect-square'
          />
        </button>
      </div>

      <NavbarElements />
      <HamburgerMenu />
      <HamburgerMenuBig />
    </div>
  );
};

export default Navbar;
