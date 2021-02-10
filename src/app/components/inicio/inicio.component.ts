import { Component, OnInit } from '@angular/core';
import { RespuestaQuizzService } from 'src/app/services/respuesta-quizz.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  error = false;
  pin = '';
  errorText = '';
  loading = false;

  constructor(private respuestaQuizz: RespuestaQuizzService) { }

  ngOnInit(): void {
  }

  ingresar() {

    // Validar si el usuario no ingreso ningun caracter
    if(this.pin == '') {

     this.errorMensaje('Por favor ingrese PIN')
      return;
    }
    this.loading = true;
    this.respuestaQuizz.searchByCode(this.pin).subscribe(data => {
      console.log(data);
      this.loading = false
      if(data.empty) {
        this.errorMensaje('PIN invalido')
      }
    }, error => {
      console.log(error);
      this.loading = false;
    })
  }

  errorMensaje(text: string) {
    this.errorText = text;
    this.error = true;
    this.pin = ''

    // Mostramos el error por 4 segundos
    setTimeout(() => {
      this.error = false;
    }, 4000);
  }

}
