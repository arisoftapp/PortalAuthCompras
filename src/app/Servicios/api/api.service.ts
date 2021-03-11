import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from  '../../modelos/response.interface';
<<<<<<< Updated upstream
import {ListaempresasI} from '../../modelos/Listaempresas.interface';
=======
>>>>>>> Stashed changes
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ObjectUnsubscribedError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://wsar.homelinux.com:3050/login";
  constructor(private http:HttpClient) { }

  login(form:LoginI):Observable<ResponseI>{
    let direccion = this.url;
    
    return this.http.post<ResponseI>(direccion, form);

  }
  
  url2: string = "http://wsar.homelinux.com:3050/getEmpresas/";

  getAllempresas(page:number):Observable<ListaempresasI[]>{
   // let direccion = this.url2 + localStorage.getusuario("usuario");
   /*let direccion = this.url2 + "2" ; 
   const heade= new HttpHeaders({'access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjE1NDA3NTY3fQ.viIFgNmAhkqy9JEAX3gDmR-GeRhvn12DdKgGEXq3ujc'}) 
   console.log(this.http.get((direccion),heade)) 
    return this.http.get<ListaempresasI[]>(direccion);*/

    let direccion = this.url2 + localStorage.getusuario("usuario") +   new HttpHeaders({ 'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjE1NDA3NTY3fQ.viIFgNmAhkqy9JEAX3gDmR-GeRhvn12DdKgGEXq3ujc' });
    console.log(this.http.get((direccion)))  
    return this.http.get<ListaempresasI[]>(direccion);
  }
  
  
}
