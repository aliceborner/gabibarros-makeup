import React from "react";
import CardItem from "./CardItem";
import "../components/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these epic makeups!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src="/images/img-1.jpg"
              text="Test"
              label="black"
              path="/contact"
            ></CardItem>
            <CardItem
              src="/images/img-2.jpg"
              text="Test"
              label="self"
              path="/contact"
            ></CardItem>
            <CardItem
              src="/images/img-3.jpg"
              text="Test"
              label="blue"
              path="/contact"
            ></CardItem>
            <CardItem
              src="/images/img-4.jpg"
              text="Test"
              label="skin"
              path="/contact"
            ></CardItem>
            <CardItem
              src="/images/img-5.jpg"
              text="Test"
              label="pink"
              path="/contact"
            ></CardItem>
            <CardItem
              src="/images/img-6.jpg"
              text="Test"
              label="gold"
              path="/contact"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
