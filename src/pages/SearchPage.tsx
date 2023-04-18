import { useParams } from 'react-router-dom';
import { Photos } from '../components';

type SearchType = 'photos' | 'collections' | 'users';
interface SearchPageProps {
  type: SearchType;
}

const SearchPage = (props: SearchPageProps) => {
  const { query } = useParams();
  const { type } = props;

  return (
    <div>
      <h1 className='mx-4 mt-8 -mb-4 text-3xl font-bold ml-[5%] lg:ml-[15%]'>
        {query && query[0].toUpperCase() + query.slice(1)}
      </h1>
      <Photos query={query?.toLowerCase() || ''} photo_type={type} />
    </div>
  );
};

export default SearchPage;
