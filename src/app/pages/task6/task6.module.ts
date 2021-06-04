import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Task6PageRoutingModule } from './task6-routing.module';

import { Task6Page } from './task6.page';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,NgxBarcodeModule,
    IonicModule,
    Task6PageRoutingModule
  ],
  declarations: [Task6Page]
})
export class Task6PageModule {}
