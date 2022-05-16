import React from "react";
import './Stylesheets/Button.css';
const Button = (props: {name: string, clickHandler: (buttonName: string) => void, orange?: boolean, wide?: boolean}) => {
  const { name, orange, wide, clickHandler } = props;
  const handleClick = () => {
    clickHandler(name);
  }

  const className = [
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : "",
  ];  
  
  return (
    <div className={className.join(' ').trim()}>
    <button name={name}  onClick={handleClick}>
      {name}
    </button>
    </div>
  )
}

export default Button;