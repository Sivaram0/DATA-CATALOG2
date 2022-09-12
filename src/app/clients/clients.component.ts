import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  title: string;
  description: string;
  buttonText: string;
  img: string;
  country:string;
}
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
 
  cards = [
    {
      title: 'one',
      description: 'canada subscriptuoyn',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      country: 'usa'
    },
    {
      title: 'two',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      country: 'canada'
    },
    {
      title: 'three',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      country: 'brazil'
    },
    {
      title: 'four',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      country: 'landon'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }
  applyFilter(){

  }
}
