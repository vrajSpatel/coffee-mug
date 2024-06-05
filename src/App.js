import { Navbar } from "react-bootstrap";
import Footer from "./Component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
