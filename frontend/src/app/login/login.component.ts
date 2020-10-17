import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {LoginService} from'../service/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User={
  id:"",
  username: "",
  password : "",
  age: "",
  height: "",
  weight:0,
  fitnessgoals:"",
  targetweight: "",
  token:"",
};
token:string;
tokenRecieved:any;
  constructor(private loginService:LoginService,private route:Router) { }

  ngOnInit(): void {


  }

  login(){
    console.log(this.user,"user");
    this.loginService.login(this.user).subscribe(data=>{
  if(data!=null   && data[0].token!= null && data[0].password == this.user.password){
    console.log(data,data[0].password == "ak");
    this.token=data[0].id;
    localStorage.setItem("token",this.token);
    this.loginService.setUser(data[0]);
this.route.navigate(['user/dashboard',{ tokenId: this.token }]);
  }
  else{
    alert("Invalid username /password");
  }

});
  }

}
