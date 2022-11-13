import { IFetchCard } from '../share/types';

interface IApi {
  fetchData(query?: string): Promise<IFetchData | null>;
}

interface IFetchData {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: IFetchCard[];
}

export { IApi, IFetchData };
