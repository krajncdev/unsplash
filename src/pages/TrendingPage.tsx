import { useParams } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Photos, PhotosHero } from '../components';

const TrendingPage = () => {
  const { query } = useParams();
  const photosClient = new QueryClient();

  return (
    <>
      <PhotosHero query={query || ''} />
      <QueryClientProvider client={photosClient}>
        <Photos query={query || ''} photo_type='photos' />
      </QueryClientProvider>
    </>
  );
};

export default TrendingPage;
