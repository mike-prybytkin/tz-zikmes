import { IFetchData, IApi } from './types';

export default class Api implements IApi {
  private baseUrl = 'https://rickandmortyapi.com/api/character/';

  async fetchData(query = ''): Promise<IFetchData | null> {
    try {
      const response = await fetch(`${this.baseUrl}?name=${query}`);
      const data: IFetchData = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
