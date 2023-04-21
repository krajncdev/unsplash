import { useRef } from 'react';
import search from '../assets/search.svg';
import { SearchParams } from '../config/types';
import { useNavigate } from 'react-router-dom';
import { state } from '../store';
import screenshot from '../assets/screenshot.svg';

const Search = (props: SearchParams) => {
  const { custom_styling } = props;
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    console.log(value);
    state.searchQuery = value || '';
    state.searchActive = 'Photos';
    navigate(`/s/photos/${value}`);
  };

  return (
    <div
      className={`${custom_styling} flex w-full items-center gap-2 focus-within:bg-white focus-within:border-bordergray transition ease-in duration-200`}
    >
      <img src={search} alt='search-icon' className='h-5' />
      <form className='flex items-center w-full' onSubmit={handleFormSubmit}>
        <input
          type='text'
          className='bg-transparent outline-none py-0.5 text-black w-full text-sm md:text-base touch-manipulation'
          placeholder='Search images'
          ref={inputRef}
        />
      </form>
      <img
        src={screenshot}
        alt='screenshot-icon'
        className='h-5 pr-3 hidden md:block'
      />
    </div>
  );
};

export default Search;
