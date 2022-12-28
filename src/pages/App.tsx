import React from "react";
import Navbar from "../components/navbar/navabr";
import Main from "../components/main/mainComp";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Main />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
