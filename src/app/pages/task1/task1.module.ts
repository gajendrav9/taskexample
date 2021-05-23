import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Task1PageRoutingModule } from './task1-routing.module';

import { Task1Page } from './task1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    Task1PageRoutingModule
  ],
  declarations: [Task1Page]
})
export class Task1PageModule {}
