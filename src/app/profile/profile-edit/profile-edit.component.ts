import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ProfileService} from "../service/profile.service";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  profileForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    this.profileForm = this.fb.group({
      photo: [null],
      phoneNumber: ['', Validators.required]

    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const formData = new FormData();
      if (this.selectedFile) {
        formData.append('profilePicture', this.selectedFile);
      }
      formData.append('phoneNumber', this.profileForm.get('phoneNumber')?.value);
      let userId = String(localStorage.getItem('userId'));
      this.profileService.updateProfile(userId, formData).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );
    }
  }
}
