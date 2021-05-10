interface DefaultStateI {
  loading: boolean;
  pokemon?: PokemonType;
}

type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
};

type PokemonAbility = {
  ability: { name: string; url: string };
};

type PokemonSprites = { front_default: string };

type PokemonStat = {
  base_stat: number;
  stat: { name: string };
};

interface PokemonLoading {
  type: typeof POKEMON_LOADING;
}

interface PokemonFail {
  type: typeof POKEMON_FAIL;
}

interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS;
  payload: PokemonType;
}

type PokemonDispatchTypes = PokemonSuccess | PokemonLoading | PokemonFail;
