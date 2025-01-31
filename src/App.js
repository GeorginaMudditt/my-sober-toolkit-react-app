import React from "react";
import "./App.css";
import Header from "./Header";
import Resources from "./Resources";
import Counter from "./Counter";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Introduction</h1>
      <Resources />
      <Counter />
      <About />
      <Footer />
    </div>
  );
}

export default App;
