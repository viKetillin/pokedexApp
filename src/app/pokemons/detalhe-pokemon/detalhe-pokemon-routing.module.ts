import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhePokemonPage } from './detalhe-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhePokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhePokemonPageRoutingModule {}
