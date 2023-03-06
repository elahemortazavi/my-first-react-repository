import React from "react";
import styles from "./Banner.module.css";
import banner from "../images/banner.jpg";
import tulip from "../images/tulipbook.jpg"

const Banner = () => {
    return (
        <div className = {styles.container}>
            <img src = {tulip} alt = "banner"/>
            <div className = {styles.textContainer}>
                <h1>Botostart</h1>
                <p>
                    we are learning <span>React.js</span>
                </p>
            </div>

        </div>
    );
};

export default Banner;