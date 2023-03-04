import React, { Component } from "react";
import styles from "./Card.module.css";
import up from "../images/up.png";
import down from "../images/down.png";


class Card extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        };

            this.downHandler = () => {
              if (this.state.counter >= 1) {
                this.setState((prevState) => ({
                  counter: prevState.counter - 1,
                }));
              }
            };

            this.upHandler = () => {
              this.setState((prevState) => ({counter: prevState.counter + 1}))
            }


    }
    render() {
        // destructuring the props
        const {image, name, cost} = this.props;
        const {counter} = this.state;

        return (
          <div className={styles.container}>
            <img src={image} alt="flower" />
            <h3>{name}</h3>
            <p>{cost}</p>

            <div className={styles.counter}>
              <img className={this.state.counter ? "" : styles.deactive} src={down} alt="down-arrow" onClick={this.downHandler} />
              <span>{counter}</span>
              <img src={up} alt="up-arrow" onClick={this.upHandler} />
            </div>
          </div>
        );
    }
}

export default Card;