import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { UserResponse } from '../model/userResponse';
import { UserResposneService } from '../service/user-resposne.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: User = new User();
  userDetails: UserResponse = new UserResponse();
  disableSignup: boolean = false;
  confirmPassword: string;
  constructor(private loginService: LoginService, private route: Router) {}

  ngOnInit(): void {}
  passwordMatchCheck() {
    if (this.user.password != this.confirmPassword) {
      this.disableSignup = true;
    } else {
      this.disableSignup = false;
    }
  }
  signUp() {
    this.userDetails.user = this.user;
    this.loginService.setUser(this.userDetails);
    this.route.navigate(['register/profile']);
  }
}
