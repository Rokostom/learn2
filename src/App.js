import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Generals/Navbar/Navbar";
import StartscreenPage from "./components/Pages/Startscreen/StartscreenPage";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<StartscreenPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
