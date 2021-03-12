import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-sprints',
  templateUrl: './manage-sprints.component.html',
  styleUrls: ['./manage-sprints.component.css']
})
export class ManageSprintsComponent implements OnInit {
  sprints=[
    {sno:1,
      Project_ID:"PROJ_0001",
      Project_NAME:"EMS",
      SprintId:"SPR-01",
      SprintName:"Sprint1",
    StartingDate:"2021-02-13 03:25:45 pm",
    EndingDate:"2021-02-13 03:25:45 pm",
    SprintMaster:"Adi"
},
{sno:2,
  Project_ID:"PROJ_0002",
  Project_NAME:"EMS",
  SprintId:"SPR-02",
  SprintName:"Sprint2",
    StartingDate:"2021-02-13 03:25:45 pm",
    EndingDate:"2021-02-13 03:25:45 pm",
    SprintMaster:"Adi"
}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
