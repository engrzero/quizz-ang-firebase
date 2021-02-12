import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { ContadorInicialComponent } from './contador-inicial/contador-inicial.component';
import { IngresarNombreComponent } from './ingresar-nombre/ingresar-nombre.component';
import { RealizarQuizzComponent } from './realizar-quizz/realizar-quizz.component';

const routes: Routes = [
  { path: '', component: IngresarNombreComponent },
  { path: 'iniciarContador', component: ContadorInicialComponent },
  { path: 'realizarQuizz', component: RealizarQuizzComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugarRoutingModule { }