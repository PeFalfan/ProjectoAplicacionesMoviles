import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuarioIngresado: string;

  constructor(public ruta : ActivatedRoute) { 
    this.ruta.queryParams.subscribe(params => {
      this.usuarioIngresado = params.usuario;
    })
   }

  ngOnInit() {
  }

}
