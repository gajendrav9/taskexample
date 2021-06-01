import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Task4Page } from './task4.page';

const routes: Routes = [
  {
    path: '',
    component: Task4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Task4PageRoutingModule {}
