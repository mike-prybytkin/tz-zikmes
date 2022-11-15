import { ICardView, FetchDataType } from './types';
import Selector from '../../constants/constants';
import { IFetchCard } from '../../share/types';

export default class CardView implements ICardView {
  renderCards(data: FetchDataType) {
    const mainWrapper = document.querySelector(Selector.mainWrapper) as HTMLElement;
    if (data) {
      mainWrapper.innerHTML = this.cardsTemplate(data);
    } else {
      mainWrapper.innerHTML = this.messageTemplate('Cards not found...');
    }
  }

  private cardsTemplate(cards: IFetchCard[]) {
    return cards
      .map((card) => {
        const template = `
        <div class="fetch-card">
          <img class="fetch-card__picture" src=${card.image} alt=${card.name} />
          <h4 class="fetch-card__name">${card.name}</h4>
        </div>
      `;
        return template;
      })
      .join('');
  }

  private messageTemplate(message: string) {
    return `
    <div class="message-template">${message}</div>
    `;
  }
}
