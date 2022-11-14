import { IAppView, SearchHandler, BackHomeHandler } from './types';
import Selector from '../../constants/constants';
import showToastMessage from '../UI/toast-message/toast-message';

export default class AppView implements IAppView {
  listnerSearchButton(handler: SearchHandler): void {
    const searchButton = document.querySelector(Selector.searchButton);
    const searchInput = document.querySelector(Selector.searchInput) as HTMLInputElement;
    searchButton?.addEventListener('click', () => {
      const { value } = searchInput;
      if (this.validationInput(value)) {
        handler(value);
      } else {
        showToastMessage('Input letters', 'red');
        searchInput.focus();
      }
    });
  }

  private validationInput(value: string) {
    if (value.trim()) return true;
    return false;
  }

  listnerBackHomeButton(handler: BackHomeHandler): void {
    const backHomeButton = document.querySelector(Selector.backHomeButton) as HTMLButtonElement;
    backHomeButton.addEventListener('click', () => {
      handler();
    });
  }
}
