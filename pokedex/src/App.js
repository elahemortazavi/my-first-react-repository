import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "./index.css";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Search from "./Components/Search";

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Banner />
          <Cards />
          <Search />

        </div>
    );
  }
}

export default App;