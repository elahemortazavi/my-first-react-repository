import React, { Component } from "react";
import styles from "./Logo.module.css";
import a from "../images/a.jpg";
import b from "../images/b.jpg";
import c from "../images/c.jpg";
class Logo extends Component {
    render() {
        return (
            <div className = {styles.container}>
              <h3>Who support us:</h3>
              <div>
                <img src = {a} alt = "alogo" />
                <img src = {b} alt = "blogo" /> 
                <img src = {c} alt = "clogo" />
              </div>
                
            </div>
        );
    }
}

export default Logo;