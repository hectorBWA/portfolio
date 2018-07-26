import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showProjectOne: boolean;
  showProjectTwo: boolean;
  showProjectThree: boolean;
   constructor() {
        this.showProjectOne = true;
        this.showProjectTwo = false;
        this.showProjectThree = false;
    }
    ShowOneButton() {
      this.showProjectOne = true;
      this.showProjectTwo = false;
      this.showProjectThree = false;
    }
    ShowTwoButton() {
      this.showProjectOne = false;
      this.showProjectTwo = true;
      this.showProjectThree = false;
  }
  ShowThreeButton() {
    this.showProjectOne = false;
    this.showProjectTwo = false;
    this.showProjectThree = true;
}
}
