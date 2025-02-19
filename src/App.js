import React from "react";
import "./App.css";
import Header from "./Header";
import Introduction from "./Introduction";
import Resources from "./Resources";
import Counter from "./Counter";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Counter />
      <Resources />

      <About />
      <Footer />
    </div>
  );
}

export default App;
