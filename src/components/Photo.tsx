import { PhotoType } from '../config/types';
import plus from '../assets/plus.svg';
import heart from '../assets/heart.svg';
import { downloadImage } from '../config/functions';

interface PhotoProps {
  el: PhotoType;
}

const Photo = (props: PhotoProps) => {
  const { el } = props;
  if (el.user.last_name?.includes(' ')) {
    el.user.last_name = el.user.last_name.split(' ')[0];
  }

  return (
    <div key={el.id} className='mb-12 md:mb-0 md:relative group '>
      <div className='flex gap-2 items-center p-2.5 md:absolute md:bottom-0 md:left-0 group-hover:md:flex md:hidden md:z-10'>
        <img
          src={el.user.profile_image.small}
          alt={el.user.first_name}
          className='rounded-full border border-bordergray'
        />
        <p className='md:text-white'>
          {el.user.first_name} {el.user.last_name}
        </p>
      </div>
      <img
        src={el.urls.regular}
        alt={el.alt_description}
        className='brightness-100 group-hover:md:brightness-50'
      />
      <div className='flex my-2 justify-between px-4 items-center md:hidden group-hover:md:block md:absolute md:inset-0'>
        <div className='flex gap-4 md:gap-1 md:absolute md:top-2 md:right-2'>
          <button className='py-2 px-2.5 border border-bordergray rounded-md md:border-none md:bg-white'>
            <img src={heart} alt='heart-icon' className='h-4' />
          </button>
          <button className='py-2 px-2.5 border border-bordergray rounded-md md:border-none md:bg-white'>
            <img src={plus} alt='plus-icon' className='h-4' />
          </button>
        </div>
        <div className='mt-2 md:mt-0 md:absolute md:bottom-0 md:right-2'>
          <button
            className='py-2 px-2.5 border border-bordergray rounded-md text-sm text-darkgray  md:border-none md:bg-white'
            onClick={() => {
              downloadImage(el.urls.full, `${el.id}.jpg`);
            }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photo;
