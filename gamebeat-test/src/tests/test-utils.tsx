import { AppStore, RootState, setupStore } from "@redux/store";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  const Wrapper = ({ children }: PropsWithChildren<{}>) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return {
    Wrapper,
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
