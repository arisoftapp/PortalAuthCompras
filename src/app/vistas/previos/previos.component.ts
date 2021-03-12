import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Servicios/api/api.service';

@Component({
  selector: 'app-previos',
  templateUrl: './previos.component.html',
  styleUrls: ['./previos.component.css']
})
export class PreviosComponent implements OnInit {

  
  
  constructor(private  appi:ApiService, private router:Router) { }

  ngOnInit() {
  }
  checkLocalStorage(){
    if(checkLocalStorage.getItem("token")){
      this.router.navigate(['detalles']);
    }
}
Onprevios(form: previosI){
  this.appi.previosI(form).subscribe(data =>{
    let dataResponse:ResponseI = data;
    console.log(dataResponse.mensaje);
    if (dataResponse.success == true){
      localStorage.setItem("token",dataResponse.token);
      localStorage.setItem("usuario",dataResponse.usuario);
      localStorage.setItem("previo",dataResponse.previo)
      this.router.navigate([ 'detalles']);
    }else{
      console.log(dataResponse);
      this.errorsuccess = true;
      this.errorMsj = dataResponse.mensaje;
     
    }
  })
}   

}
}
