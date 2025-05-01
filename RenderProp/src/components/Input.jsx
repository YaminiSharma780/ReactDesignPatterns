import { useState } from "react";

export default function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {/* {props.render(value)} */} 
      {props.children(value)}
    </>
  );
}
