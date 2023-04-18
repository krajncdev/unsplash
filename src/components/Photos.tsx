import { CollectionType, PhotosProps, UserType } from '../config/types';
import { useQuery } from '@tanstack/react-query';
import { fetchPhotos } from '../config/functions';
import { PhotoType } from '../config/types';
import { Photo, Collection, User } from './';

const Photos = (props: PhotosProps) => {
  const { photo_type, query } = props;

  const { data } = useQuery(
    ['photos', photo_type, query || 'editorial'],
    () => fetchPhotos(query || 'editorial', photo_type),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  return (
    <div className='w-full mt-12 mb-0 mx-auto columns-1 md:columns-2 md:w-[95%] xl:w-[70%] lg:columns-3 gap-5 space-y-5'>
      {data &&
        photo_type === 'photos' &&
        data.results.map((el: PhotoType) => <Photo key={el.id} el={el} />)}
      {data &&
        photo_type === 'collections' &&
        data.results.map((el: CollectionType) => <Collection data={el} />)}
      {data &&
        photo_type === 'users' &&
        data.results.map((el: UserType) => <User data={el} />)}
    </div>
  );
};

export default Photos;
