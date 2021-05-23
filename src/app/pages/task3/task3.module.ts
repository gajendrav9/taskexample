import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Task3PageRoutingModule } from './task3-routing.module';

import { Task3Page } from './task3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Task3PageRoutingModule
  ],
  declarations: [Task3Page]
})
export class Task3PageModule {}
