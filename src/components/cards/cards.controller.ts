import { ICardController } from './types';
import CardsModel from './cards.model';
import CardView from './cards.view';

export default class CardsController implements ICardController {
  private model;

  private view;

  constructor() {
    this.model = new CardsModel();
    this.view = new CardView();
  }

  async getCards(query?: string) {
    const data = (await this.model.getCards(query)) || null;
    this.view.renderCards(data);
  }

  getSearchValue = (query?: string): void => {
    this.getCards(query);
  };
}
