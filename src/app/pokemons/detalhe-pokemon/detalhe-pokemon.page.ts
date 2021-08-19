import { DadosService } from './../../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface IPokemon{
  nome: string;
    numero: number;
    descricao: string;
    versoes: number;
    altura: number;
    peso: number;
    categoria: string;
    habilidades: string;
    genero: number;
    tipo: string[];
    fraquezas: string[];
    status: string[];
    foto: string;
    evolucoes:  string[];
}
@Component({
  selector: 'app-detalhe-pokemon',
  templateUrl: './detalhe-pokemon.page.html',
  styleUrls: ['./detalhe-pokemon.page.scss'],
})
export class DetalhePokemonPage implements OnInit {

  pokemon: IPokemon;

  constructor(private dadosService: DadosService, private router: Router) { }

  ngOnInit() {
    this.pokemon = this.dadosService.getDados('pokemon');

    //Se não tiver um pokemon armazenado no serviço de dados volta para home
    if(!this.pokemon){
      this.router.navigateByUrl('/home');
    }
  }

}
