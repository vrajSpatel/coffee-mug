import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ChooseGoals from "./Pages/ChooseGoals";
import SignIn from "./Pages/SignIn.jsx";
import SigninwithPhone from "./Pages/SigninwithPhone.jsx";
import Forgotpass from "./Component/Forgotpass.jsx";
import Mentor from "./Pages/Mentor.jsx";
import DownloadApp from "./Pages/DownloadApp.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
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
          <Route
            path="/signin"
            Component={SignIn} />
          <Route
            path="/signin_phone"
            Component={SigninwithPhone} />
          <Route
            path="/forgotpassword"
            Component={Forgotpass} />
          <Route
            path="/mentors"
            Component={Mentor} />
          <Route
            path="/downloadapp"
            Component={DownloadApp} />
          

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
