import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuarioIngresado: string;
  pass: string;

  constructor(public ruta : ActivatedRoute, public navController: NavController) { 
    this.ruta.queryParams.subscribe(params => {
      this.usuarioIngresado = params.usuario;
      this.pass = params.pass;
    })
   }

  ngOnInit() {
  }

  volver(){
    this.navController.navigateRoot('login',
    {
      queryParams: {
        'nuevaPass': this.pass
      }
    })

  }

}
