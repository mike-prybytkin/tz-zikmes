import { ICardModel } from './types';
import Api from '../../api/api';

export default class CardsModel implements ICardModel {
  private api;

  constructor() {
    this.api = new Api();
  }

  async getCards(query?: string) {
    const data = await this.api.fetchData(query);
    return data?.results || null;
  }
}
