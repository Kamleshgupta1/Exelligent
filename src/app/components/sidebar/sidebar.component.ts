import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/basic', title: 'Basics',  icon:'users_circle-08', class: '' },
    { path: '/icons', title: 'Standard',  icon:'education_atom', class: '' },
    { path: '/typography', title: 'Subject',  icon:'location_map-big', class: '' },
    { path: '/entranceexam', title: 'Entrance Exam Preparation',  icon:'location_map-big', class: '' },
    { path: '/art', title: 'Art',  icon:'design-2_ruler-pencil', class: '' },
    { path: '/gk', title: 'General Knowledge',  icon:'education_hat', class: '' },
    { path: '/language', title: 'Languages',  icon:'users_circle-08', class: '' },
    { path: '/table-list', title: 'IT & Software',  icon:'design-2_html5', class: '' },
    { path: '/self', title: 'Personal Development',  icon:'education_glasses', class: '' },
    { path: '/notifications', title: 'Story',  icon:'files_paper', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/aboutus', title: 'About Us',  icon:'users_circle-08', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
