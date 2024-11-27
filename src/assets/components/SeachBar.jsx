import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context/KocktailContext";

export const SeachBar = () => {
  const { setSearchCocktail } = useGlobalContext();
  const inputValue = useRef("");
  useEffect(() => {
    inputValue.current.focus();
  }, []);
  const changeValue = () => {
    setSearchCocktail(inputValue.current.value);
  };
  return (
    <form>
      <label htmlFor="">Search</label>
      <input type="text" ref={inputValue} onChange={changeValue} />
    </form>
  );
};
