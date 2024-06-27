import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.signInForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const user = {
        name: this.signInForm.value.name + ' ' + this.signInForm.value.lastName,
        email: this.signInForm.value.email,
        password: this.signInForm.value.password,
        phoneNumber: this.signInForm.value.phoneNumber,
        address: this.signInForm.value.address,
        profilePicture: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
        security: {
          mfaEnabled: true,
          mfaMethod: "sms"
        }
      };

      this.authService.createAccount(user).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/auth/login']);
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
