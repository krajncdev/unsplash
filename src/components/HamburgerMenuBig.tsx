import { Fragment } from 'react';

import { motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import { hamburgerMenuElements } from '../config/constants';
import { state } from '../store';
import { HamburgerInnerElement } from './';
import TwitterIcon from '../assets/twitter.svg';
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import DownIcon from '../assets/down.svg';

const HamburgerMenuBig = () => {
  const snap = useSnapshot(state);
  return (
    <>
      {snap.hamburgerActive && (
        <motion.div
          className='absolute z-20 top-14 right-2 w-fit bg-white pt-8   flex-col border border-bordergray hidden lg:flex'
          animate={{ x: 0, y: 0, scale: 1 }}
          initial={{ x: 75, y: -80, scale: 0.3 }}
        >
          <div className='w-4 h-4 rotate-45 bg-white absolute right-3 -top-2 border-t border-l border-bordergray'></div>

          <div className=' flex gap-12 mb-10 px-10'>
            {hamburgerMenuElements.map((el) => (
              <Fragment key={el.id}>
                {el.id < 4 && (
                  <div>
                    <div className='flex gap-4 items-center mb-4'>
                      <img src={el.icon} alt={el.name} className='h-6' />
                      <div className='text-sm font-bold'>{el.name}</div>
                    </div>
                    <div className='flex flex-col gap-2'>
                      {el.elements.map((inel) => (
                        <HamburgerInnerElement
                          data={inel}
                          key={inel.id}
                          customStyling='ml-10 '
                        />
                      ))}
                      {el.name === 'Company' && (
                        <div className='flex gap-3 ml-10 pt-1.5'>
                          <img
                            src={TwitterIcon}
                            alt='twitter-icon'
                            className='h-4'
                          />
                          <img
                            src={FacebookIcon}
                            alt='facebook-icon'
                            className='h-4'
                          />
                          <img
                            src={InstagramIcon}
                            alt='instagram-icon'
                            className='h-4'
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          <div className='h-px w-full bg-bordergray'></div>

          <div className='px-10 py-4 flex'>
            <ul className='flex gap-4'>
              {hamburgerMenuElements[3].elements.map((el) => (
                <HamburgerInnerElement data={el} key={el.id} />
              ))}
            </ul>
            <button className='ml-auto flex gap-1 items-center'>
              <img
                src={hamburgerMenuElements[4].icon}
                alt='language-icon'
                className='h-5'
              />
              <div className=' text-darkgray text-sm'>English</div>
              <img src={DownIcon} alt='down-icon' className='h-3' />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default HamburgerMenuBig;
