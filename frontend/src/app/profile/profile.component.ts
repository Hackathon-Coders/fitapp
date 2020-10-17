import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {
    id: "",
    username: "",
    password: "",
    age: "",
    height: "",
    weight: 0,
    fitnessgoals: "",
    targetweight: "",
    token: "",
  };
  data: any;
  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.data = this.loginService.checkUser();
    if (this.data != "401") {
      this.user = this.data;
    }
    else {
      alert("please Login Again");
      this.route.navigate(['']);
    }
  }

  submit() {
    console.log(this.user, "user");
    this.loginService.userProfile(this.user).subscribe(data => {
      if (data != null && data[0].id != null) {
        this.route.navigate([""]);
      }
      else {
        alert("error saving data");
      }
    })

  }
}
