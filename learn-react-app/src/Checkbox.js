import React from "react";

export const CheckBox = props => {
  return (
    <>
      <input
        key={props.id}
        onChange={props.handleCheck}
        type="checkbox"
        checked={props.isChecked}
        value={props.color}
      />{" "}
      {props.color}
      <br />
    </>
  );
};
