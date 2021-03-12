import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-submodule',
  templateUrl: './manage-submodule.component.html',
  styleUrls: ['./manage-submodule.component.css']
})
export class ManageSubmoduleComponent implements OnInit {
  submodule=[
{sno:1,Project_ID:"PROJ_0001",Project_NAME:"EMS",ModuleId:"Mod-01",ModuleName:"Module1",SubModuleId:"SUb-Mod-001",
  SubModuleName:"submodule1",CreadtedBy:"Admin",CreadtedDate:"2021-02-13 03:25:45 pm",ModifiedDate:"2021-02-13 03:25:45 pm"},
  {sno:2,Project_ID:"PROJ_0002",Project_NAME:"pickelball",ModuleId:"Mod-02",ModuleName:"Module2",SubModuleId:"SUb-Mod-002",
  SubModuleName:"submodule1",CreadtedBy:"Admin",CreadtedDate:"2021-02-13 03:28:45 pm",ModifiedDate:"2021-02-13 03:28:45 pm"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
