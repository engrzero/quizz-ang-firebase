import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCuestionariosComponent } from './list-cuestionarios/list-cuestionarios.component';

const routes: Routes = [
  { path: '', component: ListCuestionariosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
