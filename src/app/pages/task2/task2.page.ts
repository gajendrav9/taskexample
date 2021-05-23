import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.page.html',
  styleUrls: ['./task2.page.scss'],
})
export class Task2Page implements OnInit {
  itemlist:any[]=[];

  constructor(public storageService:StorageService,) {
    this.getitemlist();
   }

  ngOnInit() {
  }


  getitemlist()
  {
    this.storageService.getitemlist().then(result => {
      if (result != null) {
      console.log('Result: '+ JSON.stringify(result));
      this.itemlist=result;
      
      }else{
        
      }
      }).catch(e => {
      console.log('error: '+ e);
      // Handle errors here
      });
  }

}
