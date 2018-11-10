import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  goals = ['My first goal', 'My 2nd goal'];
  constructor(private aroute : ActivatedRoute, private router : Router) { }

  ngOnInit() {
  }

  sendMeBack(){
    this.router.navigate[''];
  }
}
