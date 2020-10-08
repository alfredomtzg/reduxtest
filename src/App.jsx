import React from 'react';
import {Provider} from 'react-redux'
import { Pokemons } from './components/Pokemons';
import generateStore from './redux/store'


export function App() {
  const store = generateStore()
  return (
    <Provider store={store} >
      <Pokemons/>
    </Provider>
  );
}


