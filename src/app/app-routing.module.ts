import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './vistas/login/login.component';
import {DashboardComponent}from './vistas/dashboard/dashboard.component';
import {NuevoComponent} from './vistas/nuevo/nuevo.component';
import {EditarComponent} from './vistas/editar/editar.component';

const routes: Routes = [
  {path: '', redirectTo:'loging', pathMatch:'full'},
  { path: 'loging', component:LoginComponent },
  {path: 'dashboard', component:LoginComponent},
  {path: 'nuevo', component:LoginComponent},
  {path: 'editar', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents= [LoginComponent,DashboardComponent,NuevoComponent,EditarComponent]
