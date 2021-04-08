import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Servicios/api/api.service';
import { Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-previos',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
          
     detallesForm = new FormGroup({
      folio : new FormControl ('',Validators.required),
      empresa : new FormControl ('',Validators.required),
      fecha : new FormControl ( '', Validators.required)
     })

  constructor(private appi:ApiService, private router:Router ) { }

  ngOnInit() {

  }
    

}

