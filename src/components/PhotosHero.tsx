import { PhotosHeroProps } from '../config/types';
import { navElements } from '../config/constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Search from './Search';

const PhotosHero = (props: PhotosHeroProps) => {
  const element = navElements.find((navEl) => navEl.q === props.query);

  return (
    <div className='relative h-64 sm:flex-col sm:h-[24rem] md:h-[30rem] lg:h-[34rem] xl:h-[38rem] flex items-center md:justify-center'>
      <div className='bg-cover bg-center h-full brightness-50 absolute inset-0'>
        <LazyLoadImage
          src={element?.img}
          className='w-full h-full object-cover'
          alt={element?.name}
        />
      </div>
      <div
        className={`relative flex-grow flex items-center sm:ml-4 md:ml-0 ${
          element?.name !== 'Editorial' ? ' max-w-[82rem]' : 'max-w-[54rem]'
        }`}
      >
        <div className='sm:w-[90vw] md:w-[80vw] ml-4'>
          <h1 className='text-2xl font-bold text-white mb-2 md:mb-4 lg:mb-6 md:text-3xl lg:text-5xl'>
            {element?.name === 'Editorial' ? 'Unsplash' : element?.name}
          </h1>
          <div
            className={` ${
              element?.name !== 'Editorial' ? 'hidden sm:block' : 'block'
            }`}
          >
            <div className='text-sm text-white md:text-base lg:text-lg sm:w-full md:w-[75%] lg:w-[46%]'>
              <p
                dangerouslySetInnerHTML={{ __html: element?.description || '' }}
              />
            </div>
          </div>
          {element?.name === 'Editorial' && (
            <Search custom_styling='rounded-md bg-white md:full mt-10 hidden md:flex px-4 py-3.5' />
          )}
          {element?.name !== 'Editorial' && (
            <button className='px-2.5 py-2 bg-backgroundgray flex gap-1 rounded-md mt-3 sm:mt-8'>
              Submit to <p className='font-bold'>3D Renders</p>
            </button>
          )}
        </div>
      </div>

      <div className='justify-start items-center hidden md:flex text-xs text-darkgray z-10 w-full px-4 relative -top-4 '>
        <div className='w-1/3'>
          <span className='text-white text-sm'>Photo </span>
          by
          <span className='text-white text-sm'> {element?.img_author}</span>
        </div>
        <div className='w-1/3 flex justify-center gap-1 items-end'>
          <p>Read more about the</p>
          <span className='text-white text-sm'>Unsplash License</span>
        </div>
      </div>
    </div>
  );
};

export default PhotosHero;
