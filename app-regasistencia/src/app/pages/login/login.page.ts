import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navController: NavController,
    public rutita: ActivatedRoute) {
    this.rutita.queryParams.subscribe(params => {

      console.log(params.nuevaPass);
      this.passRegistrada = params.nuevaPass;

    })
  }

  usuarioRegistrado: string = "Tanjirou";
  passRegistrada: string = "asd";
  usuarioIngresado: string;
  contrasena: string;

  ngOnInit() {
  }

  validarCredenciales() {
    if (this.usuarioIngresado == this.usuarioRegistrado && this.contrasena == this.passRegistrada) {
      alert("Ingresando...");
      this.ingresoCorrecto();
    } else {
      alert("Credenciales Incorrectas...")
    }
  }

  ingresoCorrecto() {
    this.navController.navigateRoot('home',
      {
        queryParams: {
          'usuario': this.usuarioIngresado
        }
      });
  }

  recuperarContrasena() {
    this.navController.navigateRoot('recover',
      {
        queryParams: {
          'usuario': this.usuarioRegistrado
        }
      }
    );
  }

}
