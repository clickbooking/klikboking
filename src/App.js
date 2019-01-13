import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="layer" />

        <Header />
        <Content />
        <Footer />
        <div id="toTop" />
      </div>
    );
  }
}

export default App;
