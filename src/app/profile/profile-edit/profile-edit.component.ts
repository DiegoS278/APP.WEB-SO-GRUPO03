import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  profileForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      photo: [null],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required]

    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const formData = new FormData();
      formData.append('name', this.profileForm.get('name')?.value);
      if (this.selectedFile) {
        formData.append('photo', this.selectedFile);
      }
      formData.append('password', this.profileForm.get('password')?.value);
      formData.append('email', this.profileForm.get('email')?.value);

      // Aquí puedes manejar el envío de los datos, por ejemplo, a un servicio
      console.log('Perfil actualizado', formData);
    }
  }
}