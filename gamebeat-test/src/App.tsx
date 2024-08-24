import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {
  CircularProgress,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./redux/appSlice";
import MainLayout from "@components/MainLayout/MainLayout";
import { Suspense, lazy } from "react";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

const CharachterListPage = lazy(() => import("@pages/CharachterListPage"));
const CharacterInformationPage = lazy(
  () => import("@pages/CharacterInformationPage")
);
const Error404Page = lazy(() => import("@pages/Error404"));

function App() {
  const currentTheme = useAppSelector((state) => state.app.theme);

  const darkTheme = createTheme({
    palette: {
      mode: currentTheme,
    },
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <MainLayout>
            <Suspense fallback={<CircularProgress />}>
              <Routes>
                <Route path="/" element={<CharachterListPage />} />
                <Route
                  path="/character/:characterId"
                  element={<CharacterInformationPage />}
                />
                <Route path="*" element={<Error404Page />} />
              </Routes>
            </Suspense>
          </MainLayout>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
