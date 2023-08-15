import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicosCrudComponent } from './tecnicos-crud/tecnicos-crud.component';
import { TecnicosComponent } from './tecnicos.component';

const routes: Routes = [
  {
    path: 'list',
    component: TecnicosComponent
  },
  {
    path: 'crud',
    component: TecnicosCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicosRoutingModule { }
