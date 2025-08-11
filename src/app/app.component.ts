import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Basics';
  userName = 'Kavya';
   isButtonDisabled = false;
  inputValue = 'Angular Rocks!';
  isError = true;
  logoUrl="Downloads/angularlogo.png";
  logoAlt = 'Angular Logo';
   message="hell angular!!!!";
   showMessage() {
   
    this.message = 'Button clicked!';
   }
   typedText = '';
   onInputChange(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  this.typedText = inputElement.value;
}
 count = 0;
   onMouseOver() {
    this.message = 'Mouse is over the box!';
  }

  onMouseOut() {
    this.message = 'Mouse left the box!';
  }
  username: string = '';
  selectedCity: string = '';
  isChecked: boolean = false;
  onNameChange(newValue: string) {
    console.log('Name changed to:', newValue);
     if (newValue.length > 5) {
      alert('Name is getting long!');
    }
  }
}

// export class profilecomponent{
// title = 'Angular Basics';
//   userName = 'Kavya';
// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class ProfileComponent {
//   title = 'Angular Basics';
//   userName = 'Kavya';
// }
