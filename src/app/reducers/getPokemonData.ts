// grab all Pokemon data from API

import { createAsyncThunk } from "@reduxjs/toolkit";
import { generatedPokemonType, genericPokemonType } from "../../utils/Types";
import axios from "axios";

export const getPokemonData = createAsyncThunk("pokemon/randomPokemon", async (pokemons:genericPokemonType[]) => {
  try {
    const pokemonsData: generatedPokemonType[] = [];
    for await (const pokemon of pokemons) {
      const {data} = await axios.get(pokemon.url);
      console.log({data});
    }
  } catch (err) {

  }
})