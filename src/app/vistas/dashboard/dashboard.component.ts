import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../Servicios/api/api.service';
import {Router} from '@angular/router';

import {ListaempresasI} from '../../modelos/Listaempresas.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  empresas: ListaempresasI[] = [];

  constructor(private api:ApiService, private router:Router) { }

  

  ngOnInit(): void {
    this.api.getAllempresas().subscribe(data =>{
      this.empresas = data;
      console.log(data)
    })

    
  }

  informacionEmpresas(FOLIO: any){
    this.router.navigate(['ventana', FOLIO]);
  }

}
