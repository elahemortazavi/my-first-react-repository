import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import flowerA from "../images/flowerA.jpg";
import flowerB from "../images/flowerB.jpg";
import flowerC from "../images/flowerC.jpg";
import flowerD from "../images/flowerD.jpg";


class Cards extends Component {
    render() {
        return (
          <div className = {styles.container}>
            <Card image={flowerA} name="flowerA" cost="20 $" />
            <Card image={flowerB} name="flowerB" cost="25 $" />
            <Card image={flowerC} name="flowerC" cost="40 $" />
            <Card image={flowerD} name="flowerD" cost="30 $" />
          </div>
        );
    }
}

export default Cards;