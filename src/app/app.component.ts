import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { SidebarService } from "./layout/sidebar/sidebar.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-assessment';
  constructor(
    private router: Router,
    public sidebarService: SidebarService
  ) {
    
  }
}
