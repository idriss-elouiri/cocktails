import React from "react";
import { useGlobalContext } from "../../context/KocktailContext";
import { Loading } from "./Loading";
import { KocktailItems } from "./KocktailItems";

export const KocktailList = () => {
  const { KocktailList, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (KocktailList.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section>
      <h2>Cocktails</h2>
      <div className="container">
        {KocktailList.map((item) => {
          return <KocktailItems {...item} />;
        })}
      </div>
    </section>
  );
};
