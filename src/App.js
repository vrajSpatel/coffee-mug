import { Navbar } from "react-bootstrap";

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
