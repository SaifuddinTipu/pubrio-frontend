import { Component, OnInit } from "@angular/core";
import { SidebarService } from "./sidebar.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menus:any = [];
  companyList: string[] = ['United States', 'America', 'North America', 'EMEA', 'Europe', 'India'];
  constructor(
    public sidebarservice: SidebarService,
    public router: Router
  ) {
    this.menus = sidebarservice.getMenuList();
  }

  ngOnInit(): void {
  }

}
