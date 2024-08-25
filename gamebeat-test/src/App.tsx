import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@components/MainLayout";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { setupStore } from "@redux/store";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

const CharachterListPage = lazy(() => import("@pages/CharachterListPage"));
const CharacterInformationPage = lazy(
  () => import("@pages/CharacterInformationPage")
);
const Error404Page = lazy(() => import("@pages/Error404"));
const HomePage = lazy(() => import("@pages/HomePage"));

function App() {
  return (
    <Provider store={setupStore()}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <MainLayout>
            <Suspense>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/characters" element={<CharachterListPage />} />
                <Route
                  path="/character/:characterId"
                  element={<CharacterInformationPage />}
                />
                <Route path="*" element={<Error404Page />} />
              </Routes>
            </Suspense>
          </MainLayout>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
