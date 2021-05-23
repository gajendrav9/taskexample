import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Task2PageRoutingModule } from './task2-routing.module';

import { Task2Page } from './task2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Task2PageRoutingModule
  ],
  declarations: [Task2Page]
})
export class Task2PageModule {}
