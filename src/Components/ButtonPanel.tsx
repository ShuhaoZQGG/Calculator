import React from "react";
import './Stylesheets/ButtonPanel.css';
import Button from "./Button";
const ButtonPanel = (props: {clickHandler: (buttonName: string) => void}) => {
  const { clickHandler } = props;

  const handleClick = (buttonName: string) => {
    clickHandler(buttonName);
  }
  return (
    <div className="button_panel">
      <Button name='AC' clickHandler={handleClick} />
    </div>
  )
}

export default ButtonPanel;