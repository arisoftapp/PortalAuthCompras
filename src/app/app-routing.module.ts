import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { DashboardComponent }from './vistas/dashboard/dashboard.component';
import { DetallesComponent} from './vistas/detalles/detalles.component';
import { NosotrosComponent } from './vistas/nosotros/nosotros.component';
import { ContactosComponent } from './vistas/contactos/contactos.component';
import { ServiciosComponent } from "./vistas/servicios/servicios.component";




const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent },
  {path: 'dashboard', component:DashboardComponent},
  {path: 'detalles', component:DetallesComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'contactos', component:ContactosComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents= [LoginComponent,DashboardComponent,DetallesComponent,NosotrosComponent,ServiciosComponent,ContactosComponent]
