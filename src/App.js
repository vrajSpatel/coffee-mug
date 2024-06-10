// import Footer from "./Component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
// import Navbar from "./Component/Navbar.jsx";
import ChooseGoals from "./Pages/ChooseGoals";
import SignIn from "./Pages/SignIn.jsx";
import SigninwithPhone from "./Pages/SigninwithPhone.jsx";
import Forgotpass from "./Component/Forgotpass.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/choose-goals" Component={ChooseGoals} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/signin_phone" Component={SigninwithPhone} />
          <Route path="/forgotpassword" Component={Forgotpass} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
