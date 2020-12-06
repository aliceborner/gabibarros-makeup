import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Belezas por mim</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-1.jpg"
              text="Peles negras e seus detalhes"
              label="black"
              path="/contact"
            ></CardItem>
            <CardItem
              src="/images/img-2.jpg"
              text="Criatividade à flor da pele"
              label="creative"
              path="/contact"
            ></CardItem>
            <CardItem
              src="/images/img-3.jpg"
              text="Pedrinhas porque sim!"
              label="blue"
              path="/contact"
            ></CardItem>
            <CardItem
              src="/images/img-4.jpg"
              text="Diferente é ser você e ser você é ser único"
              label="skin"
              path="/contact"
            ></CardItem>
            <CardItem
              src="/images/img-5.jpg"
              text="Rosinha porque é minha paixão"
              label="pink"
              path="/contact"
            ></CardItem>
            <CardItem
              src="/images/img-6.jpg"
              text="La vie en rosé, em Fracês pra fingir que sou chique"
              label="rosé"
              path="/contact"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
