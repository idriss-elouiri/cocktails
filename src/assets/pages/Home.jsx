import React from "react";
import { KocktailList } from "../components/KocktailList";
import { SeachBar } from "../components/SeachBar";

export const Home = () => {
  return (
    <section className="section-home">
      <SeachBar />
      <KocktailList />
    </section>
  );
};
