import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
export interface Userdata {
  name: string;
  position: string;
  country: string;
  project: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Userdata:any = [];
  dataSource = new MatTableDataSource(this.Userdata);
  displayedColumns: string[] = [ 'name','position', 'country', 'project'];
  
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("/assets/Users_data.json").subscribe(data =>{
      debugger;
      this.Userdata = data;
      console.log("siva"+ JSON.stringify(this.Userdata));
    })
  }
  applyFilter(event: Event) {
    //console.log("sivaramadata"+this.Userdata);
    const filterValue = (event.target as HTMLInputElement).value;
    this.Userdata.filter = filterValue.trim().toLowerCase();
  }

}
