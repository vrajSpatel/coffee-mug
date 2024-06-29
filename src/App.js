import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ChooseGoals from "./Pages/ChooseGoals";
import SignIn from "./Pages/SignIn.jsx";
import SigninwithPhone from "./Pages/SigninwithPhone.jsx";
import Forgotpass from "./Component/Forgotpass.jsx";
import Jobs from "./Pages/Jobs.js";
import RecommendedJobs from "./Pages/RecommendedJobs.js";
import Messanger from "./Context/Messanger.js";
import PostaJob from "./Pages/PostaJob.js";
import Mentor from "./Pages/Mentor.jsx";
import DownloadApp from "./Pages/DownloadApp.jsx";

function App() {
  return (
    <>
      <Messanger>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/choose-goals" element={<ChooseGoals page={1} />} />
            <Route
              path="/choose-industries"
              element={<ChooseGoals page={2} />}
            />
            <Route path="/choose-roles" element={<ChooseGoals page={3} />} />
            <Route path="/process-profile" element={<ChooseGoals page={4} />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/post-a-job" element={<PostaJob />} />
            <Route path="/recommended-jobs/*" element={<RecommendedJobs />} />
            <Route path="/signin" Component={SignIn} />
            <Route path="/signin_phone" Component={SigninwithPhone} />
            <Route path="/forgotpassword" Component={Forgotpass} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </Messanger>
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
