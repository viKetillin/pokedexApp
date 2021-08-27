import { IPokemon } from './../models/IPokemon.model';
import { PokemonService } from './../services/pokemon.service';
import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaPokemon: IPokemon[] = [];

  listaPokemonFiltrada: IPokemon[] = [];

  constructor(
    private dadosService: DadosService,
    private router: Router,
    private pokemonService: PokemonService
  ) {
    this.buscarPokemonAPI();
  }

  retornarPokemon(): void {
    this.listaPokemonFiltrada = this.listaPokemon;
  }
  buscarPokemon(evento): void {
    this.retornarPokemon();
    const busca: string = evento.target.value;

    if (busca && busca.trim() !== '') {
      this.listaPokemonFiltrada = this.listaPokemon.filter((pokemon) =>
        pokemon.name.toLocaleLowerCase().includes(busca.toLowerCase())
      );
    }
  }

  abrirPokemon(pokemon: any): void {
    //Salva o pokemon clicando no serviço de dados temporário
    this.dadosService.setDados('pokemon', pokemon);

    //Navega até a página para exibir os dados
    this.router.navigateByUrl('/detalhes-pokemon');
  }

  buscarPokemonAPI(): void {
    this.pokemonService.buscarPokemons().subscribe((dadosRetorno) => {
      console.log(dadosRetorno);
      for (const item of dadosRetorno.results) {
        this.pokemonService
          .buscarUmPokemon(item.url)
          .subscribe((dadosPokemon) => {
            this.listaPokemon.push(dadosPokemon);
          });
      }
      this.retornarPokemon();
    });
  }
}
