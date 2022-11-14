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

  init() {
    this.getCards();
  }

  private async getCards(query?: string) {
    this.view.renderCards([]);
    const data = await this.model.getCards(query);
    if (data) {
      this.view.renderCards(data);
    }
  }

  getSearchValue = (query?: string) => {
    this.getCards(query);
  };
}
