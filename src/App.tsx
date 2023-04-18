import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, TrendingPage, NotFound, PhotoPage, SearchPage } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const provider = new QueryClient();

  return (
    <QueryClientProvider client={provider}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/t/:query' element={<TrendingPage />} />
          <Route
            path='/s/photos/:query'
            element={<SearchPage type='photos' />}
          />
          <Route
            path='/s/collections/:query'
            element={<SearchPage type='collections' />}
          />
          <Route path='/s/users/:query' element={<SearchPage type='users' />} />
          <Route path='/s/*' element={<NotFound />} />
          <Route path='/photos/:photoid' element={<PhotoPage />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/404' element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
