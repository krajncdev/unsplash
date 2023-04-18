import React from 'react';

import { useSnapshot } from 'valtio';
import { motion } from 'framer-motion';

import ArrowDownIcon from '../assets/arrow-down.svg';
import HamburgerInnerElement from './HamburgerInnerElement';
import { hamburgerMenuElements } from '../config/constants';
import { state } from '../store';

const HamburgerMenu = () => {
  const snap = useSnapshot(state);

  return (
    <>
      {snap.hamburgerActive && (
        <motion.div
          className='absolute z-20 top-14 right-2 w-72 bg-white pt-8  border border-bordergray lg:hidden'
          animate={{ x: 0, y: 0, scale: 1 }}
          initial={{ x: 75, y: -80, scale: 0.3 }}
        >
          <div className='w-4 h-4 rotate-45 bg-white absolute right-3 -top-2 border-t border-l border-bordergray'></div>

          {hamburgerMenuElements.map((el, i) => (
            <React.Fragment key={el.id}>
              <div
                className={`w-full px-6 ${
                  i !== hamburgerMenuElements.length - 1 && 'mb-6'
                }`}
              >
                <button
                  className='flex gap-4 items-center w-full'
                  onClick={() => {
                    state.hamburgerActiveElement !== el.name
                      ? (state.hamburgerActiveElement = el.name)
                      : (state.hamburgerActiveElement = '');
                  }}
                >
                  <img src={el.icon} alt={`${el.name}-icon`} className='w-6' />
                  <p className='font-bold'>{el.name}</p>
                  <div className='ml-auto'>
                    <img
                      src={ArrowDownIcon}
                      alt='arrow-down-icon'
                      className={`w-4 transition ease-in duration-100 ${
                        snap.hamburgerActiveElement === el.name && ' rotate-180'
                      }`}
                    />
                  </div>
                </button>
              </div>

              {snap.hamburgerActiveElement === el.name && (
                <div
                  className={`w-[50%] mx-auto my-0 flex flex-col gap-3 ${
                    el.id === 5 && 'mt-6'
                  } mb-8`}
                >
                  {el.elements.map((el) => (
                    <HamburgerInnerElement data={el} />
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}

          <div className='border-t flex justify-center items-center border-darkgray mt-6 h-16'>
            <button className=' cursor-not-allowed text-sm text-darkgray w-4/5 bg-backgroundgray py-2 rounded-sm'>
              Submit a photo
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default HamburgerMenu;
