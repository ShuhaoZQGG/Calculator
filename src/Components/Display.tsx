import React from "react";
import './Stylesheets/Display.css';
const Display = (props: {value: string}) => {
  const { value } = props;
  return (
    <div className="display">
      <div className="display_value">{value}</div>
    </div>
  )
}

export default Display;