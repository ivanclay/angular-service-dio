import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemeonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pokemon: PokemonData = {
    id: 0,
    name: '',
    sprites: {
      front_default: ''
    },
    types:[]
  };

  constructor(
    private pokeApiService: PokemonService
  ){}

  ngOnInit():void{
    this.getPokemon('pikachu');
  }

  getPokemon(searchName: string){
    this.pokeApiService
    .getPokemon(searchName)
    .subscribe((response) => {
      this.pokemon = {
        id: response.id,
        name: response.name,
        sprites: response.sprites,
        types: response.types
      };
    });
  }

}
