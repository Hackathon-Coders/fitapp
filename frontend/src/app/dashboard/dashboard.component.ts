import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';
import { Tracker } from '../model/tracker';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  user: User;
  tracker: Tracker;
  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
    this.data = this.loginService.checkUser();
    if (this.data != "401") {
      this.user = this.data;
      this.tracker = {
        user: this.user,
        date: new Date(),
        weight: this.user.weight,
        foodCalories: "0",
        exercise: "0",
        walking: "0"
      };
    }
    else {
      alert("Please Login Again");
      this.route.navigate(['']);
    }
  }
  getStratergyDataperDay() {

    //to fetch calorie  to be taken and burnt  per day  
  }
  walking() {
    this.tracker.walking = this.tracker.walking;
    document.getElementById("overlay-running").style.display = "none";

  }
  exercise() {
    this.tracker.exercise = this.tracker.exercise;
    document.getElementById("overlay-exercise").style.display = "none";

  }

  calories() {

    this.tracker.foodCalories = this.tracker.foodCalories;
    document.getElementById("overlay-calories").style.display = "none";

  }

  weight() {
    this.tracker.weight = this.tracker.weight;
    document.getElementById("overlay-weight").style.display = "none";

  }
  overlayOn(name) {
    document.getElementById("overlay-" + name).style.display = "block";
  }

  overlayOff() {
    document.getElementById("overlay-weight").style.display = "none";
    document.getElementById("overlay-exercise").style.display = "none";
    document.getElementById("overlay-calories").style.display = "none";
    document.getElementById("overlay-running").style.display = "none";
  }

}
