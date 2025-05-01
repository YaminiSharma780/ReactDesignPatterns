import { createContext, useState } from "react";
import Toggle from "../components/Toggle";
import List from "../components/List";
import Item from "../components/Item";

export const WrapperContext = createContext();

export default function WrapperProvider(props) {
  const [open, toggle] = useState(false);

  return (
    <div className="wrapper">
      <WrapperContext.Provider value={{ open, toggle }}>
        {props.children}
      </WrapperContext.Provider>
    </div>
  );
}
WrapperProvider.Toggle = Toggle;
WrapperProvider.List = List;
WrapperProvider.Item = Item;
