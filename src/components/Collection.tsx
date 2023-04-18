import { CollectionType } from '../config/types';

interface CollectionProps {
  data: CollectionType;
}

const Collection = (props: CollectionProps) => {
  const { data } = props;

  return (
    <div className='flex flex-col items-center break-inside-avoid'>
      <div className='flex w-[95%] h-60 gap-1 mb-4 cursor-pointer hover:saturate-150 transition ease-in duration-200'>
        <div className=' h-full w-4/6 '>
          <img
            src={data.cover_photo.urls.regular}
            alt={data.cover_photo.alt_description}
            className='h-full object-cover w-full rounded-l-md'
          />
        </div>
        <div className='h-full w-2/6 flex flex-col gap-1'>
          {data.preview_photos.map((photo, i) => {
            if (i == 1 || i == 2) {
              return (
                <img
                  key={i}
                  src={photo.urls.regular}
                  alt={String(photo.id)}
                  className={`h-1/2 object-cover w-full ${
                    i === 1 ? 'rounded-tr-md' : 'rounded-br-md'
                  }`}
                />
              );
            }
          })}
        </div>
      </div>

      <div className='w-[95%]'>
        <h1 className='font-bold font-xl'>{data.title}</h1>
        <p className=' text-darkgray'>
          {data.total_photos} photos · Curated by{' '}
          <a className='hover:underline hover:text-black transition ease-in duration-100 cursor-pointer'>
            {data.user.username}
          </a>
        </p>
        <div className='flex gap-2'>
          {data.tags.slice(0, 3).map((tag, i) => (
            <button
              key={i}
              className='text-darkgray bg-backgroundgray px-1.5 py-1 text-sm mt-3 mb-10 hover:bg-bordergray hover:text-black transition ease-in duration-100 rounded-sm'
            >
              {tag.title[0].toUpperCase() + tag.title.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
