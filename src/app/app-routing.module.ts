import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/sign-in', component: SignInComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: 'homepage', loadChildren: () => import('./homepage/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }