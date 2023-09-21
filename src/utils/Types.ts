export interface AppTypeInitialState {}

export interface PokemonTypeInitialState {
  allPokemon: undefined | genericPokemonType[];
}

export interface genericPokemonType {
  name: string;
  url: string;
}