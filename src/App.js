import Footer from "./Component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Navbar from "./Component/Navbar.jsx";
import ChooseGoals from "./Pages/ChooseGoals";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/choose-goals" Component={ChooseGoals} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
