import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserResponse } from '../model/userResponse';

@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.css'],
})
export class RegisterProfileComponent implements OnInit {
  user = new User();

  userDetails: UserResponse;
  data: any;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (
      this.loginService.getUser() != null &&
      (this.loginService.getUser().user.id == null ||
        this.loginService.getUser().user.id == undefined)
    ) {
      this.userDetails = this.loginService.getUser();
      this.user = this.userDetails.user;
    }
  }

  save() {
    console.log(this.user.targetweight, 'this.user', this.user);
    this.loginService.registerUser(this.user).subscribe((data) => {
      if (data != null) {
        this.userDetails = data;
        this.loginService.setUser(this.userDetails);
        this.route.navigate(['user/dashboard']);
      } else {
        this.openSnackBar();
      }
    });
  }
  durationInSeconds = 5;

  openSnackBar() {
    // this.snackBar.openFromComponent(PizzaPartyComponent, {
    //   duration: this.durationInSeconds * 1000,
    // });
  }
}
