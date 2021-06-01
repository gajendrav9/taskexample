import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Task4PageRoutingModule } from './task4-routing.module';

import { Task4Page } from './task4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Task4PageRoutingModule
  ],
  declarations: [Task4Page]
})
export class Task4PageModule {}
