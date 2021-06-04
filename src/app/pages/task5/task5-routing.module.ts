import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Task5Page } from './task5.page';

const routes: Routes = [
  {
    path: '',
    component: Task5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Task5PageRoutingModule {}
