import AppView from './app.view';
import { IAppController } from './types';
import CardsController from '../cards/cards.controller';

export default class AppController implements IAppController {
  private view;

  private cards;

  constructor() {
    this.view = new AppView();
    this.cards = new CardsController();
    this.view.listnerSearchButton(this.cards.getSearchValue);
    this.view.listnerBackHomeButton(this.cards.getSearchValue);
  }

  initApp(): void {
    this.cards.init();
  }
}
