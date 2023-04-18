import { proxy } from 'valtio';

interface State {
  active: string;
  searchActive: string;
  hamburgerActive: boolean;
  hamburgerActiveElement: string;
  searchQuery: string;
}

export const state: State = proxy({
  active: 'editorial',
  searchActive: 'Photos',
  hamburgerActive: false,
  hamburgerActiveElement: '',
  searchQuery: '',
});
