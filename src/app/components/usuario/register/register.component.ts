import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.registerForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      passowrd: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['']
    })
  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm);
  }

}
