import { IFetchCard } from '../../share/types';

interface ICardView {
  renderCards(data: IFetchCard[]): void;
}

interface ICardController {
  init(): void;
  getSearchValue(query?: string): void;
}

interface ICardModel {
  getCards(query: string): Promise<IFetchCard[] | undefined>;
}

export { ICardController, ICardView, ICardModel };
