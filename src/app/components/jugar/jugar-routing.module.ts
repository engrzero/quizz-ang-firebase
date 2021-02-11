import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarNombreComponent } from './ingresar-nombre/ingresar-nombre.component';

const routes: Routes = [
  { path: '', component: IngresarNombreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugarRoutingModule { }
