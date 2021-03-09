import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Servicios/api/api.service';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI} from '../../modelos/Response.interface';
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

  ngOnInit(): void {
  }
 
  Onlogin(form: LoginI){
    this.appi.loginByEmail(form).subscribe(data =>{
      let dataResponse:ResponseI = data;
      if (dataResponse.status == "ok"){
        localStorage.setItem("token", dataResponse.result.token);
        this.router.navigate([ 'dashboard']);
      }
    })
  }   

}
