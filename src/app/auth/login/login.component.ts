import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.authService.login(user).subscribe(
        response=>{
          console.log(response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.userId);
          this.router.navigate(['/homepage']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
