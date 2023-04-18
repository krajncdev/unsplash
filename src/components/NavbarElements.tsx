import React, { useRef, useState, useEffect } from 'react';
import { navElements } from '../config/constants';
import { Link, useLocation } from 'react-router-dom';
import { state } from '../store';
import { useSnapshot } from 'valtio/react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import SearchElements from './SearchElements';

const NavbarElements = () => {
  const snap = useSnapshot(state);
  const [showLeftButton, setShowLeftButton] = useState<boolean>(false);
  const [showRightButton, setShowRightButton] = useState<boolean>(true);
  const { pathname } = useLocation();

  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const ul = ulRef.current;
      if (ul) {
        setShowLeftButton(ul.scrollLeft > 0);
        setShowRightButton(ul.scrollLeft + ul.clientWidth < ul.scrollWidth);
      }
    };

    const ul = ulRef.current;
    if (ul) {
      setShowLeftButton(ul.scrollLeft > 0);
      setShowRightButton(ul.scrollLeft + ul.clientWidth < ul.scrollWidth);
      ul.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (ul) {
        ul.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleLeftButtonClick = () => {
    const ul = ulRef.current;
    if (ul) {
      ul.scrollTo({
        left: ul.scrollLeft - ul.clientWidth + 200,
        behavior: 'smooth',
      });
    }
  };

  const handleRightButtonClick = () => {
    const ul = ulRef.current;
    if (ul) {
      ul.scrollTo({
        left: ul.scrollLeft + ul.clientWidth - 200,
        behavior: 'smooth',
      });
    }
  };

  if (/^\/s\/(.+)/.test(pathname)) {
    // Render different navbar for /s/:query page
    return <SearchElements />;
  }

  return (
    <div className='mx-4 flex items-center'>
      {showLeftButton && (
        <div className='flex absolute left-0 z-10'>
          <button
            className='text-3xl bg-white px-2 text-darkgray'
            onClick={handleLeftButtonClick}
          >
            <img src={arrowLeft} alt='arrow-left' className='h-4' />
          </button>
          <div className='from-white to-transparent bg-gradient-to-tr from-30% w-20 h-10'></div>
        </div>
      )}
      <ul
        ref={ulRef}
        className='flex w-full overflow-hidden items-center gap-5 transform ease-in'
      >
        {navElements.map((el) => {
          return (
            <React.Fragment key={el.id}>
              <li
                className={`w-fit text-sm  whitespace-nowrap border-b-2 py-5 ${
                  snap.active === el.q
                    ? 'border-black text-black'
                    : 'border-transparent text-darkgray'
                }`}
              >
                <Link
                  to={`/t/${el.q}`}
                  onClick={() => {
                    state.active = el.q;
                  }}
                >
                  {el.name}
                </Link>
              </li>

              {el.name === 'Editorial' && (
                <li key='divider' className='h-8 bg-bordergray'>
                  <div className='w-[1px]'></div>{' '}
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
      {showRightButton && (
        <div className='flex absolute right-0  z-10'>
          <div className='from-white to-transparent bg-gradient-to-tl from-30% w-20 h-10'></div>
          <button
            className='text-3xl bg-white px-2 text-darkgray'
            onClick={handleRightButtonClick}
          >
            <img src={arrowRight} alt='arrow-right' className='h-4' />
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarElements;
