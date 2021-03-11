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
    contra : new FormControl ('',Validators.required)
  })

  constructor(private appi:ApiService, private router:Router) { }

  errorsuccess:boolean = false;
  errorMsj:any = " ";

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
      console.log(dataResponse.mensaje);
      if (dataResponse.success == true){
        localStorage.setItem("token",dataResponse.token);
        localStorage.setItem("usuario",dataResponse.usuario);
        localStorage.setItem("idempresas",dataResponse.idempresas);
        this.router.navigate([ 'dashboard']);
      }else{
        console.log(dataResponse);
        this.errorsuccess = true;
        this.errorMsj = dataResponse.mensaje;
       
      }
    })
  }   
    

}
