// pokemon data
import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../../utils/Types";
import { getInitialPokemonData } from "../reducers/getInitialPokemonData";

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
};

export const PokemonSlice = createSlice({
  name:"app",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload
    });
  },
});

export const {} = PokemonSlice.actions;