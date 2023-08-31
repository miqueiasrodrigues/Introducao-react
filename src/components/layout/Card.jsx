import React from "react";
import "./Card.css";

export default (props) => {

  return (
    <React.Fragment>
      <div className="card">
        <div
          className="card-title"
          style={{
            backgroundColor: props.color != null ? props.color : "rgb(51, 32, 158)",
          }}
        >
          {props.children != null && props.children.props.title != null
            ? props.children.props.title
            : props.title != null
            ? props.title
            : ""}
        </div>
        <div className="card-content">
          {props.children != null
            ? React.cloneElement(props.children, { ...props })
            : props.content != null
            ? props.content
            : ""}
        </div>
      </div>
    </React.Fragment>
  );
};
