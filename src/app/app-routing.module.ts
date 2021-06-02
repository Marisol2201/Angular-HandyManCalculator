import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Report/listar/listar.component';
import { AddComponent } from './Report/add/add.component';
// import { EditComponent } from './Report/edit/edit.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'add', component: AddComponent},
  // {path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
