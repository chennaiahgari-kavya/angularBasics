import { Component } from '@angular/core';

@Component({
  selector: 'app-seconlevel',
  templateUrl: './seconlevel.component.html',
  styleUrls: ['./seconlevel.component.css']
})
export class SeconlevelComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  message: string = '';
    onSubmit() {
    console.log('Form Submitted:');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Message:', this.message);
    alert('Registration successful!');
  }
  isactive=true;
  customereligibiliyt=true;
  answer="";
  eventclick(element:any){
    console.log(element.innerText);
  if(element.innerText=="hey!!how are you ding"){
   // console.log("yeah iam good");
  this.answer = "Yeah, I am good";
  }
  else{
    //console.log("no answer");
    this.answer = "No answer";
  }
  }
  isLoggedIn=false;
  fruitdefaultvalue=1;
  //fruits = ['Apple', 'Banana', 'Mango'];
fruits = ['Apple', 'Banana', 'Mango'];
selectedFruit = ''; // No selection at first


}
