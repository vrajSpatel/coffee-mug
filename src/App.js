// import Footer from "./Component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
// import Navbar from "./Component/Navbar.jsx";
import SignIn from "./Pages/SignIn.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/signin" Component={SignIn} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
