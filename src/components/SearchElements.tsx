import { useSnapshot } from 'valtio';
import settings from '../assets/settings.svg';
import { searchNavElements } from '../config/constants';
import { searchNavElement } from '../config/types';
import { state } from '../store';
import { Link } from 'react-router-dom';

const SearchElements = () => {
  const snap = useSnapshot(state);

  const handleButtonSubmit = (name: string) => {
    state.searchActive = name;
  };

  return (
    <>
      <div className='w-full h-6 bg-backgroundSearchGray'></div>
      <div className='flex justify-between px-4 shadow-bottom'>
        <div className='flex gap-6'>
          {searchNavElements.map((el: searchNavElement) => (
            <Link
              to={`/s/${el.name.toLowerCase()}/${snap.searchQuery}`}
              className={`py-4 text-sm flex items-center hover:text-black gap-2 ${
                snap.searchActive === el.name
                  ? 'text-black shadow-bottomActive'
                  : 'text-darkgray'
              }`}
              key={el.id}
              onClick={() => {
                handleButtonSubmit(el.name);
              }}
            >
              <img
                src={el.photo}
                alt={el.photo}
                className='hidden md:block h-5'
              />
              <p>{el.name}</p>
            </Link>
          ))}
        </div>
        <button>
          <img src={settings} alt='settings-icon' className='h-3.5' />
        </button>
      </div>
    </>
  );
};

export default SearchElements;
