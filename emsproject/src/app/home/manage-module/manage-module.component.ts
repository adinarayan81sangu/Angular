import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-module',
  templateUrl: './manage-module.component.html',
  styleUrls: ['./manage-module.component.css']
})
export class ManageModuleComponent implements OnInit {
  modules=[
    {sno:1,Project_ID:"PROJ_001",Project_NAME:"EMS",ModuleID:"Mod-01",ModuleName:"Module1",
      CreadtedBy:"Admin",CreadtedDate:"2021-02-13 03:25:45 pm",ModifiedDate:"2021-02-13 03:25:45 pm"
},
{sno:2,Project_ID:"PROJ_002",Project_NAME:"abc",ModuleID:"Mod-02",ModuleName:"Module2",
      CreadtedBy:"Admin",CreadtedDate:"2021-02-13 03:25:45 pm",ModifiedDate:"2021-02-13 03:25:45 pm"
}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
