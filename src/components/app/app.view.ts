import { IAppView, SearchHandler } from './types';
import Selector from '../../constants/constants';

export default class AppView implements IAppView {
  listnerSearchButton(handler: SearchHandler): void {
    const searchButton = document.querySelector(Selector.searchButton);
    const searchInput = document.querySelector(Selector.searchInput) as HTMLInputElement;
    searchButton?.addEventListener('click', () => {
      const { value } = searchInput;
      handler(value);
    });
  }
}
