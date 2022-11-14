interface IAppController {
  initApp(): void;
}

interface IAppView {
  listnerSearchButton(handler: SearchHandler): void;
  listnerBackHomeButton(handler: BackHomeHandler): void;
}

type SearchHandler = (query: string) => void;
type BackHomeHandler = () => void;

export { IAppController, IAppView, SearchHandler, BackHomeHandler };
