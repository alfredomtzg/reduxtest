import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonAction } from "../../redux/pokeDuck";
import {Button } from './style'
export const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(store => store.pokemones.array)
  console.log(pokemons)

  return (
    <>
      <h1>list of pokemons</h1>
      <Button onClick={()=> dispatch(getPokemonAction())} >Get Pokemons</Button>
      <ul>
        {
          pokemons.map(item => (
            <li key={item.name}>
              {item.name}
            </li>
          ))
        }
      </ul>
    </>
    )
};
