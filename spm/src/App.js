import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalSyle } from "./globalStyles";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <GlobalSyle/>
      <Hero/>
    </Router>
  );
}

export default App;
