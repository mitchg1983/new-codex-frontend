/* eslint-disable default-param-last */
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomThemeProvider from "./components/CustomThemeProvider";
import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import SignInPage from "./components/pages/SignInPage";
import AllUsersPage from "./components/pages/AllUsers";
import MyCharactersPage from "./components/pages/MyCharactersPage";
import CreateNewCharacterPage from "./components/pages/CreateNewCharacterPage";
import WordCloudPage from "./components/pages/WordCloudPage";
import store from "./reduxStore";

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <CustomThemeProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user-login-page" element={<SignInPage />} />
            <Route path="/register-page" element={<RegisterPage />} />
            <Route path="/all-users-page" element={<AllUsersPage />} />
            <Route path="/my-characters-page" element={<MyCharactersPage />} />
            <Route
              path="/create-new-character-page"
              element={<CreateNewCharacterPage />}
            />
            <Route
              path="/word-cloud-page"
              element={<WordCloudPage />}
            />
          </Routes>
        </CustomThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
