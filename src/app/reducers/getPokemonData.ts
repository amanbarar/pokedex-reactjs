// grab all Pokemon data from API

import { createAsyncThunk } from "@reduxjs/toolkit";
import { genericPokemonType } from "../../utils/Types";

export const getPokemonData = createAsyncThunk("pokemon/randomPokemon", async (pokemons:genericPokemonType[]) => {
  try {
    console.log({pokemons}, "from reducer");
  } catch (err) {

  }
})