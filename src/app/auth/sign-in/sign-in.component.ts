import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      realName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      // Procesar el formulario de registro
      this.router.navigate(['/auth/login']);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}