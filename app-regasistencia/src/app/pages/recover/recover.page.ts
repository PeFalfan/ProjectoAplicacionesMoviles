import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {

  //usuario Original
  usuarioOriginal: string;

  //Credenciales nuevas
  usuarioConf: string;
  pass: string = "";
  passConf: string = "";

  constructor(public navController: NavController,
    public rutaUsuario: ActivatedRoute) {
    this.rutaUsuario.queryParams.subscribe(params => {
      this.usuarioOriginal = params.usuario;
    })
  }

  ngOnInit() {
  }

  cambiarContrasena() {
    if (this.usuarioOriginal === this.usuarioConf) {

      if (this.pass === "") {
        alert("La contraseña no puede ser vacía");
      } else {

        if (this.pass === this.passConf) {

          alert("Contraseña Actualizada...");
          this.actualizarContraseña();

        } else {
          alert("Contraseñas diferentes, favor validar.")
        }
      }

    } else {
      alert("Usuario no válido.")
    }
  }

  actualizarContraseña() {
    this.navController.navigateRoot('login',
      {
        queryParams: {
          'nuevaPass': this.pass
        }
      });

  }

}
