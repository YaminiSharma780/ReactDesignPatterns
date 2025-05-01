import React from "react";
import WrapperMenu from "./WrapperMenu";

export default function Image({ source }) {
  return (
    <div className="image-item">
      <img src={source} alt="squirrel" />
      <WrapperMenu />
    </div>
  );
}
