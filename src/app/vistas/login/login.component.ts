import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Servicios/api/api.service';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI} from '../../modelos/response.interface';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl ('',Validators.required),
    password : new FormControl ('',Validators.required)
  })

  constructor(private appi:ApiService, private router:Router) { }

  errorStatus:boolean = false;
  errorMsj:any = "Usuario o contraseña incorrectos";

  ngOnInit(): void {
  }

  checkLocalStorage(){
    if(localStorage.getItem("token")){
      this.router.navigate(['dashboard']);
    }
  }
 
  Onlogin(form: LoginI){
    this.appi.login(form).subscribe(data =>{
      let dataResponse:ResponseI = data;

      if (dataResponse.success== "true"){
        localStorage.setItem("token", dataResponse.result.token);
        localStorage.setusuario("usuario", dataResponse.result.usuario2);
        localStorage.setidempresas("idempresas", dataResponse.result.idempresas);
        this.router.navigate([ 'dashboard']);
      }else{
        this.errorStatus = true;
        this.errorMsj = dataResponse.result.eror_msg;
      }
    })
  }   

}
