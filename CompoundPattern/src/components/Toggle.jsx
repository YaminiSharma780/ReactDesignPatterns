import { useContext } from "react";
import { WrapperContext } from "../contexts/WrapperProvider";
import Icon from "./Icon";

export default function Toggle() {
  const { open, toggle } = useContext(WrapperContext);
  return (
    <div className="wrapper-btn" onClick={() => toggle(!open)}>
      <Icon />
    </div>
  );
}
