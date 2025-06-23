import React, { createContext, useState } from "react";
import { food_items } from "../Food";

export const DataContext = createContext();

function UserContext({ children }) {
  const [cate, setCate] = useState(food_items);
  const [input, setInput] = useState("");
  let[showCart,setShowCart]=useState(false)
  // console.log(input);

  let Data={
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart
  }

  return (
    <div>
      <DataContext.Provider value={Data}>
        {children}
      </DataContext.Provider>
    </div>
  );
}

export default UserContext;
