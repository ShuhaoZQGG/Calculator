import React from "react";
const Button = (props: {name: string, clickHandler: (buttonName: string) => void}) => {
  const { name, clickHandler } = props;
  const handleClick = () => {
    clickHandler(name);
  }
  return (
    <button className={name} onClick={handleClick}>
      {name}
    </button>
  )
}

export default Button;