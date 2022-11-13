import AppView from './app.view';
import { IAppController } from './types';

export default class AppController implements IAppController {
  private view;

  constructor() {
    this.view = new AppView();
    this.view.listnerSearchButton();
  }

  initApp(): void {
    console.log('init app');
  }
}
