import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhePokemonPageRoutingModule } from './detalhe-pokemon-routing.module';

import { DetalhePokemonPage } from './detalhe-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhePokemonPageRoutingModule
  ],
  declarations: [DetalhePokemonPage]
})
export class DetalhePokemonPageModule {}
