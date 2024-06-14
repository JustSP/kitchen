import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "./lib/constants";
import HomePage from "./pages/home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
