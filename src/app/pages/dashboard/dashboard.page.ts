import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  index?: number;
  path:string;
  
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  appPagesDashboard: PageInterface[];
  constructor(private router: Router) {
    this.appPagesDashboard= [
       { title:  "Task 1",path:'/task1' ,component: '', icon:'./assets/icon/list.svg' },
       { title: "Task 2",path:'/task2', component:'', icon:'assets/icon/list.svg' },
       { title:"Task 3",path:'/task3', component: '', icon:'assets/icon/list.svg' },

     ];
   }

  ngOnInit() {
  }

  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
      //console.log("page",page.index);
    }
    this.router.navigate([page.path]);
    console.log(page);
    
  }

}
