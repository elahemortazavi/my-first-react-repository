import React from "react";
import styles from "./Banner.module.css";
import banner from "../images/banner.jpg";
import blossom from "../images/blossom.jpg";

const Banner = () => {
    return (
        <div className = {styles.container}>
            <img src = {blossom} alt = "banner"/>
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