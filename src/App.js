import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ChooseGoals from "./Pages/ChooseGoals";
import SignIn from "./Pages/SignIn.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/choose-goals" element={<ChooseGoals page={1} />} />
          <Route
            path="/choose-industries"
            element={<ChooseGoals page={2} />}
          />
          <Route
            path="/choose-roles"
            element={<ChooseGoals page={3} />}
          />
          <Route path="/signin" Component={SignIn} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
