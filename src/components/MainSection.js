import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="main-container">
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          Test 2
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
