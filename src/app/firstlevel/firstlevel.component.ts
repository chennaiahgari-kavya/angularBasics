import { Component } from '@angular/core';

@Component({
  selector: 'app-firstlevel',
  templateUrl: './firstlevel.component.html',
  styleUrls: ['./firstlevel.component.css']
})
export class FirstlevelComponent {

  divcolor='green';
  divfontsize='30px'
  divText = 'This is a second level component';
  changeColor() {
    this.divcolor = 'red';
    this.divText = 'Mouse is over me!';
  }

  resetColor() {
    this.divcolor = 'green';
    this.divText = 'This is a styled div';
  }

  otherColor() {
    this.divcolor = 'blue';
    this.divText = 'You clicked me!';
  }
  bgColor='yellow';
  fontSize='50px';
  //isError = true;
isError = false;
divColor = 'lightgreen';
}
