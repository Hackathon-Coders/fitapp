import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserResponse } from '../model/userResponse';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { UserResposneService } from '../service/user-resposne.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
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

  userDetails: UserResponse;
  token: String;
  tokenRecieved: any;
  constructor(private loginService: LoginService, private route: Router) {}

  ngOnInit(): void {}

  login() {
    console.log(this.user, 'user');
    this.loginService.login(this.user).subscribe((data) => {
      if (data != null && data.user.password == this.user.password) {
        console.log(data, data.user.password == 'ak');
        this.userDetails = data;
        localStorage.setItem('token', data.user.id.toString());
        this.loginService.setUser(this.userDetails);
        this.route.navigate(['user/dashboard', { tokenId: this.token }]);
      } else {
        alert('Invalid username /password');
      }
    });
  }
}
