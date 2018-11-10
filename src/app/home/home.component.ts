import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount : number = 4;
  goals = [];
  goalText : string = "My first life goal";
  btnText : string = "Add an Item"; 

  constructor() {
    this.itemCount = this.goals.length;
   }

  ngOnInit() {
  }
  
  addNewItem() {
    
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

  removeItem(i : number) {
    this.goals.splice(i, 1);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }
}
