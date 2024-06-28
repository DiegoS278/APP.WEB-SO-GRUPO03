import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../profile/service/profile.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CreateTransactionComponent} from "./create-transaction/create-transaction.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements  OnInit{
  profile: any = null;
  constructor(private profileService: ProfileService, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    let id = String(localStorage.getItem('userId'));
    this.profileService.getProfileById(id).subscribe(
      response => {
        this.profile = response;
        console.log(this.profile)
      },
      error => {
        console.error(error);
      }
    );
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/']);
  }
  openDialog(): void {
    this.dialog.open(CreateTransactionComponent);
  }
}
