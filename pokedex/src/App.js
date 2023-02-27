import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "./index.css";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Search from "./Components/Search";
import Logo from "./Components/Logo";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Banner />
          <Cards />
          <Search />
          <Logo />
          <Footer />

        </div>
    );
  }
}

export default App;