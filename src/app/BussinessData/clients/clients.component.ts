import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
export interface users {
  title: string;
  country: string;
  buttonText:string;
  img:string;
}
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
 cards:any = []
 dataSource = new MatTableDataSource(this.cards);
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/Clients_Data.json").subscribe(data =>{
      this.cards = data;
    })
  }
  applyFilter(event: Event) {
    //console.log("filterdata" ,this.cards);
    const filterValue = (event.target as HTMLInputElement).value;
    this.cards.filter = filterValue.trim().toLowerCase();
  }
}
