import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cuestionario } from '../models/Cuestionario';

@Injectable({
  providedIn: 'root'
})
export class RespuestaQuizzService {

  cuestionario!: Cuestionario;
  nombreParticipante = '';

  constructor(private _firestore: AngularFirestore) { }

  searchByCode(code: string): Observable<any> {
    return this._firestore.collection('cuestionarios', ref => ref.where('codigo', '==', code)).get();
  }
}
