import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { RegisterProfileComponent } from './register-profile/register-profile.component'
import { ProfileComponent } from './profile/profile.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: SignupComponent
  },
  {
    path:'register/profile',
    component: RegisterProfileComponent
  }, 
  {
    path:'user/profile',
    component: ProfileComponent
  },
  {
    path:'user/dashboard',
    component: DashboardComponent
  },
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
