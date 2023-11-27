import React from 'react';
import './SystemButton.css'

const SystemButton = (props:any) => {
  return (
    <button className="systemButton">
      {props.buttonImage ? (
        <img src={props.buttonImage} title={props.buttonText} />
      ) : (
        <span>{props.buttonText}</span>
      )}
      </button>
  );
};

export default SystemButton;