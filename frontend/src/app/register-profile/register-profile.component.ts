import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserResponse } from '../model/userResponse';

@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.css']
})
export class RegisterProfileComponent implements OnInit {
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
  userDetails:UserResponse;
  data:any;
  constructor(private loginService: LoginService, private route: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.data = this.loginService.checkUser();
    if (this.data != "401") {
      this.userDetails = this.data;
    }
    else {
      alert("Please Login Again");
      this.route.navigate(['']);
    }
    
this.user.id=this.userDetails.user.id;
  }

  save() {
    this.loginService.userProfile(this.user).subscribe(data => {
      if (data != null) {
        this.userDetails=data;
        this.loginService.setUser(this.userDetails);
        this.route.navigate(['user/dashboard']);
      }
      else {
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

// @Component({
//   selector: 'snack-bar-component-example-snack',
//   template: '<h1>error while processing!Try again</h1>',
//   styles: [`
//     .example-pizza-party {
//       color: hotpink;
//     }
//   `],
// })
// export class PizzaPartyComponent {}
