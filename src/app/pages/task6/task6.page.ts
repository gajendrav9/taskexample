import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.page.html',
  styleUrls: ['./task6.page.scss'],
})
export class Task6Page implements OnInit {

  itemlist:any[]=[];
  public searchTerm: string = "";
  filterBy:any='invoicno';
  searchAllListArray:any[]=[];
  constructor(public storageService:StorageService,) {
    this.getitemlist();
   }

  ngOnInit() {
  }

  

  getitemlist()
  {
    this.storageService.getinvoicelist().then(result => {
      if (result != null) {
      console.log('Result: '+ JSON.stringify(result));
      this.itemlist=result;
      this.initializeItems();
      }else{
        
      }
      }).catch(e => {
      console.log('error: '+ e);
      // Handle errors here
      });
  }
  initializeItems() {
    this.searchAllListArray=this.itemlist;
   // console.log(this.searchnurseryAllListArray);
 //  this.searchnurseryAllListArray=
  }
  filterItems(ev:any) {
    console.log( ev.detail.value);
    this.initializeItems();
    let val : string 	= ev.detail.value;

  //   if (val.trim() !== ''){//
  //       this.searchnurseryAllListArray= this.searchnurseryAllListArray.filter(item => {
  //         return item.Plant_CommanEngName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
  //       });

  //       if(this.searchnurseryAllListArray.length>0){
  //         this.noRecorditem=false;
  //       }else {
  //         this.noRecorditem=true;
  //       } 
  //   }
  //   else{
  //     this.noRecorditem=false;
  //   }
  // }
    if(this.filterBy=='invoicno')
    {
      this.searchAllListArray= this.searchAllListArray.filter(item => {
        return item.invoiceno.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }

    if(this.filterBy=='itemcode')
    {
      this.searchAllListArray= this.searchAllListArray.filter(item => {
        return item.invoiceno.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }

    if(this.filterBy=='date')
    {
      this.searchAllListArray= this.searchAllListArray.filter(item => {
        return item.invoiceno.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
    // return this.itemlist.filter(item => {
    //   return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    // });
  }

}
