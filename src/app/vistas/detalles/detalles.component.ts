import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Servicios/api/api.service';
import { Router} from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-previos',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  previos = new FormGroup({

  })
  constructor(private appi:ApiService, private router:Router ) { }

  ngOnInit() {

  }
    

}
