import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import flowerA from "../images/flowerA.jpg";
import flowerB from "../images/flowerB.jpg";
import flowerC from "../images/flowerC.jpg";
import flowerD from "../images/flowerD.jpg";
import { v4 } from "uuid";


class Cards extends Component {
 constructor(){
  super();
  this.state = {
    flowerData: [
      { id: 1, image: flowerA, name: "flowerA", cost: "20 $" },
      { id: 2, image: flowerB, name: "flowerB", cost: "25 $" },
      { id: 3, image: flowerC, name: "flowerC", cost: "40 $" },
      { id: 4, image: flowerD, name: "flowerD", cost: "30 $" },
    ],
  };
 }

    render() {
        return (
          <div className = {styles.container}>
            {/* <Card image={flowerA} name="flowerA" cost="20 $" />
            <Card image={flowerB} name="flowerB" cost="25 $" />
            <Card image={flowerC} name="flowerC" cost="40 $" />
            <Card image={flowerD} name="flowerD" cost="30 $" /> */}
            {this.state.flowerData.map((flower) => <Card key={v4} image={flower.image} name={flower.name} cost={flower.cost} />)}


          </div>
        );
    }
}

export default Cards;