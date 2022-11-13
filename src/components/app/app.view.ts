import { IAppView } from './types';
import Selector from '../../constants/constants';

export default class AppView implements IAppView {
  listnerSearchButton(): void {
    const searchButton = document.querySelector(Selector.searchButton);
    searchButton?.addEventListener('click', () => {
      console.log('click');
    });
  }
}
