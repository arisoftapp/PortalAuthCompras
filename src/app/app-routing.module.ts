import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { DashboardComponent }from './vistas/dashboard/dashboard.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { DetallesComponent} from './vistas/detalles/detalles.component';
import { PreviosComponent} from './vistas/previos/previos.component'



const routes: Routes = [
  {path: '', redirectTo:'loging', pathMatch:'full'},
  {path: 'login', component:LoginComponent },
  {path: 'dashboard', component:DashboardComponent},
  {path: 'editar', component:EditarComponent},
  {path: 'detalles', component:DetallesComponent},
  {path: 'previos', component:PreviosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents= [LoginComponent,DashboardComponent,EditarComponent,DetallesComponent,PreviosComponent]
