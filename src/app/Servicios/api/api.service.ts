import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from  '../../modelos/response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {  Observable } from 'rxjs';
import { ListaempresasI } from 'src/app/modelos/Listaempresas.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://wsar.homelinux.com:3050/login";
  constructor(private http:HttpClient) { }

  login(form:LoginI):Observable<ResponseI>{
    let direccion = this.url;
    
    return this.http.post<ResponseI>(direccion, form, );

  }
  
  url2: string = "http://wsar.homelinux.com:3050/getEmpresas/";

   getAllempresas():Observable<ListaempresasI[]>{

    let direccion = this.url2 + localStorage.getItem("idempresas"); 
    return this.http.get<ListaempresasI[]>(direccion, {headers:{"access-token":"" + localStorage.getItem("token")}});
  }

  
  
}
