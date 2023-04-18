import { Photos, PhotosHero } from '../components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Home = () => {
  const photosClient = new QueryClient();
  const photosHeroClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={photosHeroClient}>
        <PhotosHero query='editorial' />
      </QueryClientProvider>
      <QueryClientProvider client={photosClient}>
        <Photos query='editorial' photo_type='photos' />
      </QueryClientProvider>
    </>
  );
};

export default Home;
