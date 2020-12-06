import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./MainSection.css";
import InstagramEmbed from "react-instagram-embed";

function MainSection() {
  return (
    <div className="main-container">
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
        >
          CONTATO
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
          onClick={console.log("hey")}
        >
          SOBRE MIM
        </Button>

        <InstagramEmbed
          url="https://www.instagram.com/gabrielabmakeup/"
          clientAccessToken="123|456"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    </div>
  );
}

export default MainSection;
