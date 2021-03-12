import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-tasks',
  templateUrl: './manage-tasks.component.html',
  styleUrls: ['./manage-tasks.component.css']
})
export class ManageTasksComponent implements OnInit {
    tasks=[
      { sno:1,
        Project_ID:"PROJ_0001",
        Project_NAME:"EMS",
        Moduleid:"MOd-001",
        ModuleName:"Module1",
        SubModuleID:"Sub-Mod-001",
        SubModuleName:"SubModule1",
        TaskId:"Task-001",
        CreatedDate:"2021-02-13 03:25:45 pm",
        FreezingTime:"2021-02-13 03:25:45 pm"
},
{ sno:2,
  Project_ID:"PROJ_0002",
  Project_NAME:"pickelball",
  Moduleid:"MOd-002",
  ModuleName:"Module2",
  SubModuleID:"Sub-Mod-002",
  SubModuleName:"SubModule2",
  TaskId:"Task-002",
  CreatedDate:"2021-02-13 03:25:45 pm",
  FreezingTime:"2021-02-13 03:25:45 pm"
}
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
