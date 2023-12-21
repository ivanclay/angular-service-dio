export type PokemonData = {
  name:string
  id:number
  types: {
    slot: number,
    type: {
      name: string
      url: string
    }
  }[],
  sprites: {
    front_default: string
  }
}
