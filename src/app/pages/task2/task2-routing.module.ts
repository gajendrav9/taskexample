import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Task2Page } from './task2.page';

const routes: Routes = [
  {
    path: '',
    component: Task2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Task2PageRoutingModule {}
