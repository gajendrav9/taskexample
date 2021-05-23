import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Task1Page } from './task1.page';

const routes: Routes = [
  {
    path: '',
    component: Task1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Task1PageRoutingModule {}
