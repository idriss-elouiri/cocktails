import React, { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const KocktailContext = ({ children }) => {
  const [searchCocktail, setSearchCocktail] = useState("a");
  const [KocktailList, setKocktailList] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchCocktail}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setKocktailList(newCocktails);
      } else {
        setKocktailList([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchCocktail]);
  return (
    <AppContext.Provider value={{ setSearchCocktail, KocktailList, loading }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
