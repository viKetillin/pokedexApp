import { DadosService } from './../../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from './../../models/IPokemon.model';

@Component({
  selector: 'app-detalhe-pokemon',
  templateUrl: './detalhe-pokemon.page.html',
  styleUrls: ['./detalhe-pokemon.page.scss'],
})
export class DetalhePokemonPage implements OnInit {
  pokemon: IPokemon;

  constructor(private dadosService: DadosService, private router: Router) {}

  ngOnInit() {
    this.pokemon = this.dadosService.getDados('pokemon');

    //Se não tiver um pokemon armazenado no serviço de dados volta para home
    if (!this.pokemon) {
      this.router.navigateByUrl('/home');
    }
  }
}
