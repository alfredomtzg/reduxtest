import React from 'react';
import {Provider} from 'react-redux'
import { Pokemons } from './components/Pokemons';


export function App() {
  return (
    <Provider >
      <Pokemons/>
    </Provider>
  );
}


