import { Component, OnInit } from '@angular/core';
//import { FormControl, Validators,FormGroup} from '@angular/forms';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// };
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
  selector: 'app-userspage',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.css']
})
export class UserspageComponent implements OnInit {

users= [
  {sno:1,EMP_ID:"EMP_001",Username:"Adinarayana",FirstName:"Sangu",MiddleName:"Adi",LastName:"Narayana",
  CreatedBy:"Admin",CreatedDate:"2021-02-12 9:30" },
  {sno:2,EMP_ID:"EMP_002",Username:"sravani",FirstName:"pemmasani",MiddleName:"sar",LastName:"vani",
  CreatedBy:"Admin",CreatedDate:"2021-02-12 9:30" },
];





  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;



  // name = new FormControl('', [Validators.required]);

  // getErrorMessage() {
  //   if (this.name.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //  else{
  //    return
  //  }
    
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
