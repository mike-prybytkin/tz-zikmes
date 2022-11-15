import { IFetchCard } from '../../share/types';

interface ICardView {
  renderCards(data: FetchDataType): void;
}

interface ICardController {
  getCards(): void;
  getSearchValue(query?: string): void;
}

interface ICardModel {
  getCards(query: string): Promise<FetchDataType>;
}

type FetchDataType = IFetchCard[] | null;

export { ICardController, ICardView, ICardModel, FetchDataType };
