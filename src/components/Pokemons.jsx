import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonAction } from "../redux/pokeDuck";

export const Pokemons = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>list of pokemons</h1>
      <button onClick={()=> dispatch(getPokemonAction())} >Get Pokemons</button>
    </>
    )
};
