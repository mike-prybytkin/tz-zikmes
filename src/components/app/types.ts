interface IAppController {
  initApp(): void;
}

interface IAppView {
  listnerSearchButton(handler: SearchHandler): void;
}

type SearchHandler = (query: string) => void;

export { IAppController, IAppView, SearchHandler };
