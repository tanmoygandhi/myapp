import { Component } from '@angular/core';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  name : string = "Tanmoy";
  textValue : string = "Tanmoy Gandhi";
  inputValue : string = "Tanmoy Gandhi";
}
