import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-pokemon',
  templateUrl: './detalhe-pokemon.page.html',
  styleUrls: ['./detalhe-pokemon.page.scss'],
})
export class DetalhePokemonPage implements OnInit {

  pokemon = {
    nome: 'Bulbasaur',
    numero: '001',
    descricao: 'Há uma semente de planta em suas costas desde o dia em que o Pokémon nasceu. A semente cresce lentamente.',
    versoes: 2,
    altura: 0.7,
    peso: 6.9,
    categoria: 'Semente',
    habilidades: 'Overgrow',
    genero: 2,
    tipo: ['Grass', 'Poison'],
    fraquezas: ['Fire', 'Psychic', 'Flying', 'Ice'],
    status: {hp: 3, attack: 3, defense: 3, specialAttack: 4, specialDefense: 4, speed: 3},
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    evolucoes: [
      {
        fotoEvolucao: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        nomeEvolucao: 'Bulbasaur',
        numeroEvolucao: '001',
        tipoEvolucao: ['Grass', 'Poison']
      },{
        fotoEvolucao: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
        nomeEvolucao: 'Ivysaur',
        numeroEvolucao: '002',
        tipoEvolucao: ['Grass', 'Poison']
      },{
        fotoEvolucao: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        nomeEvolucao: 'Venusaur',
        numeroEvolucao: '003',
        tipoEvolucao: ['Grass', 'Poison']
      }
      ]
  };

  constructor() { }

  ngOnInit() {
  }

}




