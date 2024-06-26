import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "./lib/constants";
import HomePage from "./pages/home";
import { useContext } from "react";
import { AppContext } from "./lib/context/app.context";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
const App = () => {
  const { appState } = useContext(AppContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.SIGN_IN} element={<LoginPage />} />
        <Route path={APP_ROUTES.SIGN_UP} element={<RegisterPage />} />
        <Route
          path={APP_ROUTES.HOME}
          element={appState.isUserLoggedIn ? <HomePage /> : <LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
