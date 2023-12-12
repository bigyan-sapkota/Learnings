import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
          </div>
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
