import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageroles',
  templateUrl: './manageroles.component.html',
  styleUrls: ['./manageroles.component.css']
})
export class ManagerolesComponent implements OnInit {

roles=[
  {sno:1,Role_id:"Role-001",Rolename:"Project Manager",
  RoleCreatedBy:"Admin",RoleCreatedDate:"2021-02-13 03:25:20 pm"},
  {sno:2,Role_id:"Role-002",Rolename:"Project Member",
  RoleCreatedBy:"Admin",RoleCreatedDate:"2021-02-13 03:25:20 pm"}
]


  constructor() { }

  ngOnInit(): void {
  }

}
