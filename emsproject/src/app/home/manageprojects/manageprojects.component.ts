import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageprojects',
  templateUrl: './manageprojects.component.html',
  styleUrls: ['./manageprojects.component.css']
})
export class ManageprojectsComponent implements OnInit {
       projects=[
         {sno:1,Project_ID:"PROJ--001",Project_NAME:"ems",CreatedBy:"Admin",
         CreatedDate:"2021-02-12 12:30:20 pm",ModifiedDate:"2021-02-12 12:30:20 pm"},
         {sno:2,Project_ID:"PROJ--002",Project_NAME:"fireball",CreatedBy:"Admin",
         CreatedDate:"2021-02-12 12:30:20 pm",ModifiedDate:"2021-02-12 12:30:20 pm"}
       ]
  constructor() { }

  ngOnInit(): void {
  }

}
