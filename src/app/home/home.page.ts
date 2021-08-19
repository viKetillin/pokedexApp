import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaPokemon = [
  {
    numero: '001',
    nome: 'Bulbasaur',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    tipos : [
    'Grass ', 'Poison'
    ]
  },
  {
    numero: '004',
    nome : 'Charmander',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    tipos: ['Fire']
  },
  {
    numero: '143',
    nome: 'Snorlax',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
    tipos: ['Normal']
  },
  {
    numero: '119',
    nome: 'Seaking',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/119.png',
    tipos: ['Water']
  },
  {
    numero: '330',
    nome: 'Flygon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/330.png',
    tipos: ['Ground', 'Dragon']
  },
  {
    numero: '122',
    nome: 'Mr. Mime',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png',
    tipos: ['Psychic', 'Fairy']
  },
  {
    numero: '123',
    nome: 'Scyther',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/123.png',
    tipos: ['Bug', 'Flying']
  },
  {
    numero: '708',
    nome: 'Phantump',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/708.png',
    tipos: ['Ghost', 'Grass']
  },
  {
    numero: '813',
    nome: 'Scorbunny',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/813.png',
    tipos: ['Fire']
  },
  {
    numero: '849',
    nome: 'Toxtricity',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/849.png',
    tipos: ['Electric', 'Poison']
  }
];

listaPokemonFiltrada = [];

  constructor(private dadosService: DadosService, private router: Router) {
    this.retornarPokemon();
  }
  retornarPokemon(): void{
    this.listaPokemonFiltrada = this.listaPokemon;

  }
  buscarPokemon(evento): void{
    this.retornarPokemon();
    const busca: string = evento.target.value;

    if(busca && busca.trim() !== ''){
      this.listaPokemonFiltrada = this.listaPokemon.filter(pokemon => pokemon.nome.toLocaleLowerCase().includes(busca.toLowerCase()));
    }
  }

  abrirPokemon(pokemon: any): void{
    //Salva o pokemon clicando no serviço de dados temporário
    this.dadosService.setDados('pokemon', pokemon);

    //Navega até a página para exibir os dados
    this.router.navigateByUrl('/detalhes-pokemon');
  }
}
