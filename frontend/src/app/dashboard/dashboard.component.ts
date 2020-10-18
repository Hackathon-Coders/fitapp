import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';
import { Tracker } from '../model/tracker';
import { LoginService } from '../service/login.service';
import { CaloriesService } from '../service/calories.service';
import { WeightService } from '../service/weight.service';
import { RunningService } from '../service/running.service';
import { ExerciseService } from '../service/exercise.service';
import { Router } from '@angular/router';
import { UserResponse } from '../model/userResponse';
import { Running } from '../model/running';
import { Weight } from '../model/weight';
import { Calories } from '../model/calories';
import { Exercise } from '../model/exercise';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  user: User;
  userDetails: UserResponse;
  tracker: Tracker;
  userWeight: Weight;
  userCalories: Calories;
  userExercise: Exercise;
  userWalking: Running;
  total:number;
  newWeight: Weight;
  newFoodCalories: Calories;
  newExercise: Exercise;
  newWalking: Running;

  constructor(private loginService: LoginService, private route: Router,private exerciseService:ExerciseService,
  private runningService:RunningService,private weightService:WeightService,private caloriesService:CaloriesService) { }

  ngOnInit(): void {
    this.data = this.loginService.checkUser();
    if (this.data != "401") {
      this.userDetails = this.data;
      
      this.user = this.userDetails.user;
      this.fetchDailyUserData();
    }
    else {
      alert("Please Login Again");
      this.route.navigate(['']);
    }
  }
  // to set card with user daily data
  fetchDailyUserData() {
    if (this.userDetails.user.id == this.user.id) {
      this.userWalking.hours = this.userDetails.runlist.length > 0 ? this.sumofWalking() : "0";
      this.userExercise.hours = this.userDetails.excerciselist.length > 0 ? this.sumofExercsise() : "0";
      this.userCalories.calories = this.userDetails.calorielist.length > 0 ? this.sumofCalories() : "0";
      this.userWeight.weight = this.userDetails.weightlist.length > 0 ? this.sumofWeight() : "0";
    }
  }
//to set sum of walking hours;
  sumofWalking() {
    if (this.userDetails.runlist.length > 0) {
      
      for (var i = 0; i < this.userDetails.runlist.length; i++) {
        this.total = Number(this.userDetails.runlist[i].hours);
      }
    }

    return this.total.toString();;
  }
//to set sum of calorie intake per day;

  sumofCalories() {
    if (this.userDetails.runlist.length > 0) {
      for (var i = 0; i < this.userDetails.calorielist.length; i++) {
        this.total = Number(this.userDetails.calorielist[i].calories);
      }
    }

    return this.total.toString();;
  }
  //to set sum of exercise hours;

  sumofExercsise() {
    if (this.userDetails.runlist.length > 0) {
      for (var i = 0; i < this.userDetails.excerciselist.length; i++) {
        this.total = Number(this.userDetails.excerciselist[i].hours);
      }
    }

    return this.total.toString();;
  }
  //to set weight;

  sumofWeight() {
    if (this.userDetails.runlist.length > 0) {

      this.total = Number(this.userDetails.weightlist[this.userDetails.weightlist.length - 1].weight);
    }
    return this.total.toString();;
  }
  getStratergyDataperDay() {

    //to fetch calorie  to be taken and burnt  per day  
  }
  walking() {
    this.newWalking.userid=this.userDetails.user.id;
    this.runningService.saveWalk(this.newWalking).subscribe(data=>{
      if(data!=null){
        this.userDetails.runlist.push(data);
        this.sumofWalking();
        this.loginService.setUser(this.userDetails);

      }
    });
    document.getElementById("overlay-running").style.display = "none";

  }
  exercise() {
    this.newExercise.userid=this.userDetails.user.id;

    this.exerciseService.saveExercise(this.newExercise).subscribe(data=>{
      if(data!=null){
        this.userDetails.excerciselist.push(data);
        this.sumofExercsise();
        this.loginService.setUser(this.userDetails);

      }
    });  
      document.getElementById("overlay-exercise").style.display = "none";

  }

  calories() {

    this.newFoodCalories.userid=this.userDetails.user.id;

    this.caloriesService.saveCalories(this.newFoodCalories).subscribe(data=>{
      if(data!=null){
        this.userDetails.calorielist.push(data);
        this.sumofCalories();
        this.loginService.setUser(this.userDetails);

      }
    });     
     document.getElementById("overlay-calories").style.display = "none";

  }

  weight() {
    this.newWeight.userid=this.userDetails.user.id;

    this.weightService.saveWeight(this.newWeight).subscribe(data=>{
      if(data!=null){
        this.userDetails.weightlist.push(data);
        this.sumofWeight();
        this.loginService.setUser(this.userDetails);

      }
    });      
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
