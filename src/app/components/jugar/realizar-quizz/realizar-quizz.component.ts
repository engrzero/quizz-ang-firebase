import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuestionario } from 'src/app/models/Cuestionario';
import { RespuestaQuizzService } from 'src/app/services/respuesta-quizz.service';

@Component({
  selector: 'app-realizar-quizz',
  templateUrl: './realizar-quizz.component.html',
  styleUrls: ['./realizar-quizz.component.css']
})
export class RealizarQuizzComponent implements OnInit {
  cuestionario!: Cuestionario;
  nombreParticipante = '';
  indexPregunta = 0;
  segundos = 0;
  setInterval: any;

  // Respuesta usuario
  opcionSeleccionada: any;
  indexSeleccionado: any;
  cantidadCorrectas = 0;
  cantidadIncorrectas = 0;
  puntosTotales = 0;
  listRespuestaUsuario: any[] = [];

  constructor(private _respuestaQuizzService: RespuestaQuizzService,
              private router: Router) { }

  ngOnInit(): void {
    this.cuestionario = this._respuestaQuizzService.cuestionario;
    this.nombreParticipante = this._respuestaQuizzService.nombreParticipante;
    this.validateRefresh();
    this.iniciarContador();
  }

  validateRefresh() {
    if(this.cuestionario === undefined) {
      this.router.navigate(['/']);
    }
  }

  obtenerSegundos(): number {
    return this.segundos;
  }

  obtenerTitulo(): string {
    return this.cuestionario.listPreguntas[this.indexPregunta].titulo;
  }

  iniciarContador() {
    this.segundos = this.cuestionario.listPreguntas[this.indexPregunta].segundos;

   this.setInterval = setInterval(() => {

      if(this.segundos === 0) {
        this.agregarRespuesta();
      }

      this.segundos = this.segundos - 1;
    }, 1000)
  }

  respuestaSeleccionada(respuesta: any, index: number) {
    this.opcionSeleccionada = respuesta;
    this.indexSeleccionado = index;
  }

  addClassOption(respuesta: any): string {
    if(respuesta === this.opcionSeleccionada) {
      return 'classSeleccionada'
    } else {
      return ''
    }
  }

  siguiente() {
    clearInterval(this.setInterval)
    this.agregarRespuesta();
    this.iniciarContador()
  }

  agregarRespuesta() {

    // Creamos objeto respuesta y lo agregamos al array
    const respuestaUsuario: any = {
      titulo: this.cuestionario.listPreguntas[this.indexPregunta].titulo,
      puntosObtenidos: '',
      segundos: '',
      indexRespuestaSeleccionada: '',
      listRepuestas: this.cuestionario.listPreguntas[this.indexPregunta].listRespuestas,
    }
    this.listRespuestaUsuario.push(respuestaUsuario);


    this.opcionSeleccionada = undefined;
    this.indexSeleccionado = undefined;


    // Validamos si es la ultima pregunta
    if(this.cuestionario.listPreguntas.length - 1 === this.indexPregunta) {
      // guardamos las respuestas en firebase
      // redireccionamos al proximo componente
      this.router.navigate(['/jugar/respuestaUsuario']);

    } else {
      this.indexPregunta++;
      this.segundos = this.cuestionario.listPreguntas[this.indexPregunta].segundos;
    }
  }

}
