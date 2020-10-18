import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserResponse } from '../model/userResponse';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = {
    id: '',
    username: '',
    password: '',
    age: '',
    height: '',
    weight: '',
    fitnessgoals: '',
    targetweight: '',
  };
  data: any;
  userDetails: UserResponse;
  constructor(private route: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.data = this.loginService.checkUser();
    if (this.data != '401') {
      this.userDetails = this.data;
    } else {
      alert('please Login Again');
      this.route.navigate(['']);
    }
    this.user = this.userDetails.user;
  }

  submit() {
    console.log(this.user, 'user');
    this.loginService.registerUser(this.user).subscribe((data) => {
      if (data != null && data[0].id != null) {
        this.loginService.setUser(data);
        this.route.navigate(['']);
      } else {
        alert('error saving data');
      }
    });
  }
}
