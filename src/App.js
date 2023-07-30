import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header";

import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
          <Toaster />
        </main>
      </Router>
    </div>
  );
}

export default App;
