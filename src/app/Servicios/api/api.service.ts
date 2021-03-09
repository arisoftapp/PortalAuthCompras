import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from  '../../modelos/Response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ObjectUnsubscribedError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://wsar.homelinux.com:3050/login";
  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url;
    return this.http.post<ResponseI>(direccion, form);

  }
}
