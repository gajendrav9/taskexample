import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Task6Page } from './task6.page';

const routes: Routes = [
  {
    path: '',
    component: Task6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Task6PageRoutingModule {}
