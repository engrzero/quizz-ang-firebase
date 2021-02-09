import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.css']
})
export class ListCuestionariosComponent implements OnInit, OnDestroy {

suscriptionUser:Subscription = new Subscription();

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
   this.suscriptionUser = this.afAuth.user.subscribe(user => {
      console.log(user);
      if(user && user.emailVerified) {
        // cargar los cuestionarios
      } else {
        this.router.navigate(['/']);
      }
    })
  }

  ngOnDestroy(): void {
    this.suscriptionUser.unsubscribe();
  }

}
