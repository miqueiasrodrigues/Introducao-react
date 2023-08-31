import React from "react";
import "./Button.css";

export default (props) => {
  return (
    <React.Fragment>
      <button
        className="button"
        onClick={(_) => {
          props.callback();
        }}
      >
        {props.text != null ? props.text : "Button"}
      </button>
    </React.Fragment>
  );
};
