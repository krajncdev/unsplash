import { UserType } from '../config/types';

interface UserProps {
  data: UserType;
}

const User = (props: UserProps) => {
  const { data } = props;
  console.log('photos length: ', data.photos.length);

  return (
    <div className='break-inside-avoid border-bordergray border p-4 rounded-md cursor-pointer hover:border-black transition ease-in duration-100'>
      <div className='flex gap-3 items-center mb-4'>
        <img
          src={data.profile_image.medium}
          alt={`${data.username}-profile-image`}
          className='rounded-full'
        />
        <div>
          <h2 className='text-xl font-bold'>{data.name}</h2>
          <p className='text-darkgray text-sm'>{data.username}</p>
        </div>
      </div>

      <div className='flex gap-2'>
        {data.photos.map((photo) => (
          <div className='w-full h-full'>
            <img
              src={photo.urls.regular}
              alt={String(photo.id)}
              className='w-full h-full object-cover aspect-[4/3]'
            />
          </div>
        ))}
        {data.photos.length === 1 && (
          <>
            <div className='animate-pulse bg-bordergray w-full h-full aspect-[4/3]'></div>
            <div className='animate-pulse bg-bordergray w-full h-full aspect-[4/3]'></div>
          </>
        )}
        {data.photos.length === 2 && (
          <div className='animate-pulse bg-bordergray w-full h-full aspect-[4/3]'></div>
        )}
      </div>

      <button
        className={`${
          data.photos.length !== 0 && 'mt-4'
        } w-full text-darkgray border border-bordergray rounded-md py-1 text-sm hover:border-black hover:text-black transition ease-in duration-100`}
      >
        View profile
      </button>
    </div>
  );
};

export default User;
