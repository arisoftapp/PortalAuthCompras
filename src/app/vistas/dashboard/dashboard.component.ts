import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {ApiService} from '../../Servicios/api/api.service';
import {Router} from '@angular/router';
import { ListaempresasI } from 'src/app/modelos/Listaempresas.interface';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ApiService]
})
export class DashboardComponent implements OnInit {

  
  infoempresas:ListaempresasI[] = [];

  constructor(private api:ApiService, private router:Router) { }
  

  ngOnInit(): void {

    this.api.getAllempresas().subscribe((data: any) =>{
    this.infoempresas = data
    console.log(data)
    return data;
  })}

  

}
