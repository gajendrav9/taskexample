import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Task5PageRoutingModule } from './task5-routing.module';

import { Task5Page } from './task5.page';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Task5PageRoutingModule,NgxBarcodeModule
  ],
  declarations: [Task5Page]
})
export class Task5PageModule {}
