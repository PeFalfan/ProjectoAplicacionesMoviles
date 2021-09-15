import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarioRegistrado: string = "Tanjirou";
  passRegistrada: string = "asd";
  usuarioIngresado: string;
  contrasena: string;
  actualizando: boolean = false;
  passIncorrecta: boolean = false;

  constructor(public navController: NavController,
    public rutita: ActivatedRoute) {
    this.rutita.queryParams.subscribe(params => {

      if (params.nuevaPass === undefined) {
        // ¯\_(ツ)_/¯ - (งツ)ว - ʕ •́؈•̀ ₎ - (⊃｡•́‿•̀｡)⊃ - ƪ(ړײ)‎ƪ​​
      } else {
        this.passRegistrada = params.nuevaPass;
      }
    })
  }

  ngOnInit() {
  }

  validarCredenciales() {
    if (this.usuarioIngresado == this.usuarioRegistrado && this.contrasena == this.passRegistrada) {
      this.passIncorrecta = false;
      alert("Ingresando...");
      this.ingresoCorrecto();
    } else {
      this.passIncorrecta = true;
    }
  }

  ingresoCorrecto() {
    this.navController.navigateRoot('home',
      {
        queryParams: {
          'usuario': this.usuarioIngresado,
          'pass': this.passRegistrada
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
