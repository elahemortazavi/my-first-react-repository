import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "./index.css";
import Banner from "./Components/Banner";

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Banner />

        </div>
    );
  }
}

export default App;