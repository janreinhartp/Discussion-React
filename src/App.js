import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ContactProvider } from "./context/ContactContext";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <ContactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:ID" element={<User />} />
        </Routes>
      </Router>
    </ContactProvider>
  );
}

export default App;
