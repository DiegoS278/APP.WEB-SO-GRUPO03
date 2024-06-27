import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../profile/service/profile.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements  OnInit{
  baseUrl = 'http://localhost:9000/';
  profile: any = null;
  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    let id = String(localStorage.getItem('userId'));
    this.profileService.getProfileById(id).subscribe(
      response => {
        this.profile = response;
        this.profile.profilePicture = this.profile.profilePicture;
        console.log(this.profile)
      },
      error => {
        console.error(error);
      }
    );
  }

}
