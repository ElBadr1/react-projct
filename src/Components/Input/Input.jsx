import React from "react";

export default function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      className={"form-control w-25 m-5 " + props.style}
    />
  );
}
