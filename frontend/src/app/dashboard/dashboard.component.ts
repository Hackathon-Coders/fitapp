import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  overlayOn(name) {
    document.getElementById("overlay-"+name).style.display = "block";
  }

  overlayOff() {
    document.getElementById("overlay-weight").style.display = "none";
    document.getElementById("overlay-exercise").style.display = "none";
    document.getElementById("overlay-calories").style.display = "none";
    document.getElementById("overlay-running").style.display = "none";
  }

}
