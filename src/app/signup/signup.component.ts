import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  myForm: any;
  const = new Date("2015-03-25");
  constructor() { }

  ngOnInit(): void {
    
  } 
  ResetForm(){
    this.myForm.reset();
  }

}
