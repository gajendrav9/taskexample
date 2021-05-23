import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Task3Page } from './task3.page';

const routes: Routes = [
  {
    path: '',
    component: Task3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Task3PageRoutingModule {}
