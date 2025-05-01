import { useContext } from "react";
import { WrapperContext } from "../contexts/WrapperProvider";

export default function List({ children }) {
  const { open } = useContext(WrapperContext);
  return open && <ul className="wrapper-list">{children}</ul>;
}
